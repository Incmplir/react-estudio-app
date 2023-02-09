/*
 *Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */
/* rfc */
import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [Contador1, setContador1] = useState(0);
    const [Contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRed() para asociar una variable
    // con un elemento del DOM del componente 8vista HTML
    const miRef = useRef();

    function incrementar1() {
        setContador1(Contador1 + 1);
    }
    function incrementar2() {
        setContador2(Contador2 + 1);
    }

    /*
     *Trabajando con UseEffect()
     */

    /*
    ? Caso 1: Ejecutar SIEMPRE un snippet del codigo
    *Cada vez que haya un cambio en el estado del componente
    *se ejecuta aquello que esté dentro del useEffect()
    */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log("Mostrando Referencia a elemento del DOM:");
    //     console.log(miRef);
    // });

    /*
    ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     *Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el UseEffect()
     *En caso de que cambie contadoe2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    //     console.log("Mostrando Referencia a elemento del DOM:");
    //     console.log(miRef);
    // }, [Contador1]);

    /* 
    ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 O CONTADOR2
    *Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el UseEffect()
    *Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el UseEffect()
    */
    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2");
        console.log("Mostrando Referencia a elemento del DOM:");
        console.log(miRef);
    }, [Contador1, Contador2]);

    return (
        <div>
            <h1>Ejemplo useState(), useRef(), useEffect()</h1>
            <h2>CONTADOR 1: {Contador1}</h2>
            <h2>CONTADOR 2: {Contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
};

export default Ejemplo2;
