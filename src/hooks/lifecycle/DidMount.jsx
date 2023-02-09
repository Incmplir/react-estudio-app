/*
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { useEffect } from "react";

const DidMountHook = () => {
    useEffect(() => {
        console.log(
            "Comportamiento antes de que el componente sea añadido al DOM (renderise) "
        );
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
};

export default DidMountHook;
