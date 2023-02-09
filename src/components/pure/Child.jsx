import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
    const messageRef = useRef("");
    const nameRef = useRef("");

    function presButton() {
        const text = messageRef.current.value;
        alert(`Text in Input: ${text}`);
    }
    function presButtonParams(text) {
        alert(`Text: ${text}`);
    }
    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }
    return (
        <div>
            <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
            <button onClick={() => console.log("Botón 1 pulsado")}>
                Botón 1
            </button>
            <button onClick={presButton}>Botón 2</button>
            <button onClick={() => presButtonParams("Hello")}>Botón 2</button>
            <input
                className="border"
                placeholder="Insert a text"
                onFocus={() => console.log("Input Focused")}
                onChange={(e) => console.log("Input changed", e.target.value)}
                onCopy={() => console.log("Copied text fron Input")}
                type="text"
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="New Name" />
                    <button type="sumit">Update Name</button>
                </form>
            </div>
        </div>
    );
};

export default Child;
