/*
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { useEffect } from "react";

const DidUpdate = () => {
    useEffect(() => {
        console.log(
            "Comportamiento cuando el componente recibe nuevos props o cambio en su estado"
        );
    }, []);
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
};

export default DidUpdate;
