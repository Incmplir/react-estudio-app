import React from "react";
import { Contact } from "../../models/contact.class";
import { BsTrashFill } from "react-icons/bs";

const ContactComponent = ({ contact, conected, remove }) => {
    function ContactConectedIcon() {
        if (contact.conected) {
            return (
                <span
                    onClick={() => conected(contact)}
                    className="cursor-pointer select-none text-2xl"
                >
                    🟢
                </span>
            );
        } else {
            return (
                <span
                    onClick={() => conected(contact)}
                    className="cursor-pointer select-none text-2xl"
                >
                    🔴
                </span>
            );
        }
    }
    return (
        <tr>
            <td class="border border-slate-700">{contact.name}</td>
            <td class="border border-slate-700">{contact.number}</td>
            <td class="border border-slate-700">{ContactConectedIcon()}</td>
            <td class="border border-slate-700">
                <BsTrashFill
                    onClick={() => remove(contact)}
                    className="cursor-pointer text-red-400 text-2xl"
                />
            </td>
        </tr>
    );
};

export default ContactComponent;
