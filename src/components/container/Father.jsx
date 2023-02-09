import React, { useState } from "react";
import Child from "../pure/Child";

const Father = () => {
    const [name, setName] = useState("Chris");
    function showMessage(text) {
        alert(`Message recived: ${text}`);
    }
    function updateName(newName) {
        setName(newName);
    }
    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
};

export default Father;
