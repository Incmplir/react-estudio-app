import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { USERS } from "./models/data";


function App(props) {
    // // ?Constructor FACE
    // const [Characterdata, setCharacterdata] = useState("HOOLA");
    // function actualizarSesion() {
    //     setCharacterdata("DOS");
    // }

    // const avatar = useAsync(() => {
        
    //     return createAvatar(lorelei, {
    //         seed: `${Characterdata}`,
    //         radius: 0,
    //         size: 150,
    //         backgroundColor: ["c0aede"],
    //         // ... other options
    //     }).toDataUri();
    // }, []);
    // // ? Caracteristicas

    // /* function actualizarSesion() {
        
    //     setCharacterdata({
    //         hair: "variant02",
    //     });
    // } */

    return (
        // <div className="bg-purple-400 h-screen flex text-center items-center justify-center center flex-col">
        //     <div className="bg-blue-900 flex text-center items-center justify-center center flex-col mx-2 rounded-2xl p-4 shadow-sm shadow-black">
        //         <div className="text-sky-200 text-4xl font-bold flex flex-row">
        //             <h1 className="underline underline-offset-4">
        //                 ¡Hola! {USERS.PERSONA1.NAME}
        //             </h1>
        //             <span className="no-underline">👋</span>
        //         </div>{" "}
        //             <img
        //                 className="rounded-full my-4 shadow-sm shadow-purple-900"
        //                 src={avatar.value}
        //                 alt="Avatar"
        //             />{" "}
        //     </div>
        //     <div>
        //         <button onClick={actualizarSesion}>hola</button>
        //     </div>
            
        // </div>
        <div>
            <a href="/tenoke-rain.world.downpour.iso" download>hola</a>
            
        </div>
    );
}

export default App;
