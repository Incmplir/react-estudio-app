/*
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */
// rfc
import React, { useState, useContext } from "react";
/*
 * @returs Componente 1
 *Dispone de un contexto que va a tener un valor
 *que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Conponente1 = () => {
    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            {/* Pintamos el componente 2 */}
            <Conponente2 />
        </div>
    );
};
const Conponente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>la sesión es: {state.sesion}</h2>
        </div>
    );
};

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: "123456",
        sesion: 1,
    };

    // Creamos el estado de este componente
    const [SessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData({
            token: "abcnose",
            sesion: SessionData.sesion + 1,
        });
    }

    return (
        <div>
            <miContexto.Provider value={SessionData}>
                {/* Todo lo que esté aquí dentro puede leer todos los datos de SessionData */}
                {/* TAdemás, si se actualiza los componentes de aquí, tambien lo actualiza */}
                <Conponente1></Conponente1>
                <button onClick={actualizarSesion}>Actulaizar Sesión</button>
            </miContexto.Provider>
        </div>
    );
}
