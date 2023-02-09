/*
 * Ejemplo de Hook useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
    // Valor inicial para un contador
    const valorInicial = 0;
    // Valor inicial para un contador
    const personaInicial = {
        nombre: "chirs",
        email: "christian.lisantti@gmail.com",
    };

    /*
     *Queremos que le VALORINICIAL y PERSONAINICIAL sean
     *parte del estado del componente para así poder gestionar su cambio
     *y que éste se vea reflejado en la vista del componente
     *
     *const [nombreVariable funcionParaCambiar] = useState(valorInicial)
     *
     */

    const [Contador, setContador] = useState(valorInicial);
    const [Persona, setPersona] = useState(personaInicial);

    /*
     *Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(Contador + 1);
    }
    /*
     *Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        // ? funcionParaCambiar(nuevoValor)
        setPersona({
            nombre: "pepe",
            email: "pepe@pepe.com",
        });
    }

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <h2>CONTADOR: {Contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>nombre:{Persona.nombre}</h3>
            <h3>email:{Persona.email}</h3>
            <button onClick={incrementarContador}>uno</button>
            <button onClick={actualizarPersona}>dos</button>
        </div>
    );
};

export default Ejemplo1;
