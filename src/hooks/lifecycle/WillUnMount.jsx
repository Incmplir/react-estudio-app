/*
 * Ejemplo de uso del hook para componente funcional
 * Cuando el componente ca a desaparecer
 */
import React, { useEffect } from "react";

const WillUnMount = () => {
    useEffect(() => {
        // nada
        return () => {
            console.log(
                "Comportamiento antes de que el componente desaparezca"
            );
        };
    }, []);
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
};

export default WillUnMount;
