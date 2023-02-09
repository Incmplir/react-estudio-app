import React, { useState } from "react";
import Rectangle from "../../Rectangle";

const loggedStyle =
    "bg-red-400 bg-red-400 text-white px-2 py-1 font-bold rounded-full";
const logoutStyle =
    "bg-emerald-400 bg-red-400 text-white px-2 py-1 font-bold rounded-full";

const LoginButton = ({ loginAction }) => {
    return (
        <button className={logoutStyle} onClick={loginAction}>
            Login
        </button>
    );
};
const LogoutButton = ({ logoutAction }) => {
    return (
        <button className={loggedStyle} onClick={logoutAction}>
            Logout
        </button>
    );
};

// ? (Expresión true) && expresion => se renderia la empresión
// ? (Expresión false) && expresion => no se renderia la empresión

const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);
    // function updateAccess() {
    //     setAccess(!access);
    // }
    // const updateAccess = () => {
    //     setAccess(!access);
    // };

    const loginAction = () => {
        setAccess(true);
    };

    const logoutAction = () => {
        setAccess(false);
    };

    let optionalButton;
    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>;
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>;
    // }
    if (access) {
        optionalButton = (
            <LogoutButton logoutAction={logoutAction}></LogoutButton>
        );
    } else {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>;
    }
    //  Unread messages
    let adddMessages = () => {
        setNMessages(nMessages + 1);
    };

    return (
        <div>
            HOLA {optionalButton}{" "}
            {/* {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages == 1 && <p>You have {nMessages} new message...</p>} */}
            {access ? (
                <>
                    {nMessages > 0 && (
                        <p>
                            You have {nMessages} new{" "}
                            {nMessages == 1 && "message"}
                            {nMessages > 1 && "messages"}...
                        </p>
                    )}
                    {nMessages == 0 && <p>There are no new messages</p>}
                    <button onClick={adddMessages}>
                        {nMessages === 0
                            ? "Add you first message"
                            : "Add new message"}
                    </button>
                </>
            ) : null}
            <Rectangle></Rectangle>
        </div>
    );
};

export default OptionalRender;
