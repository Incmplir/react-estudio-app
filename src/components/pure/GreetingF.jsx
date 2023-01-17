import React, { useState } from "react";
import PropTypes from "prop-types";
import { USERS } from "../../models/data";

//? rfcp Esto es como actualmente se trabajaba en React js con tipo funciones

const GreetingF = (props) => {
    const [Age, setAge] = useState(USERS.PERSONA1.AGE);
    const birthday = () => {
        setAge(Age + 1);
    };
    // !
    const [Conect, setConect] = useState(USERS.PERSONA1.CONECTADO);
    const desConectado = () => {
        setConect(Conect === false);
    };

    return (
        <div className="h-screen flex justify-center items-center flex-col bg-black text-white text-2xl ">
            <h1 className="text-6xl mb-2">
                ¡Hola! {USERS.PERSONA1.NAME} de {Age} años.
            </h1>
            <h2 className="text-4xl underline underline-offset-4 mb-1">Datos Contacto</h2>
            <ul className="w-[27rem]">
                <li>Nombre: {USERS.PERSONA1.NAME}</li>
                <li>Apellido: {USERS.PERSONA1.LASTNAME}</li>
                <li>Correo: {USERS.PERSONA1.EMAIL}</li>
                {/* <li>
                    Conectado:
                    {USERS.PERSONA1.CONECTADO
                        ? "🟢 Conectado"
                        : "🔴 Desconectado"}
                </li> */}
                <li>
                    Conectado:{" "}
                    {Conect ? "🟢 Contacto En Línea" : "🔴 Contacto No Disponible"}
                </li>
            </ul>
            <div>
                <button
                    className="bg-violet-500 text-black transition-all uppercase text-lg py-1 px-2 rounded-full border-violet-600 border-solid border-2 hover:border-white hover:bg-violet-400 active:bg-violet-600 focus:border-violet-300 w-44"
                    onClick={birthday}
                >
                    Subir edad
                </button>
                {/* <h3>
                {Conect
                    ? "🟢 Actualmente está conectado, ¡felicidades!"
                    : "🔴 Desconectado"}
            </h3> */}
                <button
                    className={`text-black transition-all uppercase text-lg py-1 px-2 my-3 mx-2 rounded-full border-solid border-2 hover:border-white font-light w-44 ${
                        Conect
                            ? " border-red-600 bg-red-500 hover:bg-red-400 focus:border-red-300"
                            : " border-green-600 bg-green-500 hover:bg-green-400 focus:border-green-300"
                    }`}
                    onClick={desConectado}
                >
                    {Conect ? "Desconectar" : "Conectar"}
                </button>
            </div>
        </div>
    );
};

GreetingF.propTypes = {
    /*     name: PropTypes.string,
    Age: PropTypes.number, */
};

export default GreetingF;
