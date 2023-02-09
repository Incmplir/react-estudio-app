import React, { useState } from "react";
import ContactComponent from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";
import ContactForm from "../pure/forms/ContactForm";

const ContactListComponent = () => {
    const defaultContact1 = new Contact("Christian Lisantti", "0802", false);
    const defaultContact2 = new Contact("Jose Ejecthor", "9110", true);

    const [contacts, setContacts] = useState([
        defaultContact1,
        defaultContact2,
    ]);
    function conectedContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }
    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }
    function addContact(contact) {
        console.log("Add thiis Task:", contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div className="bg-slate-900 h-screen flex flex-col items-center justify-center content-center">
            <>
                <table class="table-fixed border border-slate-500 bg-white shadow-md shadow-black rounded-md">
                    <thead>
                        <ContactForm add={addContact}></ContactForm>
                        <tr>
                            <th class="border border-slate-600 ">Name</th>
                            <th class="border border-slate-600 ">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {contacts.map((contacts, index) => {
                                return (
                                    <ContactComponent
                                        className="odd:bg-white even:bg-slate-50"
                                        key={index}
                                        remove={deleteContact}
                                        conected={conectedContact}
                                        contact={contacts}
                                    ></ContactComponent>
                                );
                            })}
                        </>
                    </tbody>
                </table>
            </>
        </div>
    );
};

export default ContactListComponent;
