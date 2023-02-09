import React from "react";
import { useRef } from "react";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
    const nameRef = useRef("");
    const numberRef = useRef("");
    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            numberRef.current.value,
            false
        );
        add(newContact);
    }
    return (
        <div>
            <form onSubmit={addContact}>
                <th class="border border-slate-600">
                    <input
                        placeholder="Name"
                        ref={nameRef}
                        id="inputName"
                        required
                        autoFocus
                        type="text"
                    />
                </th>
                <th class="border border-slate-600">
                    <input
                        placeholder="number"
                        ref={numberRef}
                        id="inputNumber"
                        required
                        type="number"
                    />
                </th>
                <th class="border border-slate-600">
                    <button type="submit" className="">
                        Add
                    </button>
                </th>
            </form>
        </div>
    );
};

export default ContactForm;
