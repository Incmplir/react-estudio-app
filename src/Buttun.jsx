import React from "react";

function Buttun(props) {
    return (
        <button
            onClick={() => props.manejarClic(props.children)}
            className={`text-black transition-all uppercase text-lg py-1 px-2 my-2 mx-1 rounded-full border-solid border-2 hover:border-white font-light w-28 border-green-600 bg-green-500 hover:bg-green-400 focus:border-green-300`}
        >
            {props.children}
        </button>
    );
}

export default Buttun;
