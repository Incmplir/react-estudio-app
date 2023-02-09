import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppRoutinngFinal from "./AppRoutinngFinal";
import AppRoutinngOne from "./AppRoutinngOne";
import CharacterCopy from "./CharacterCopy";
import Father from "./components/container/Father";
import TaskListComponent from "./components/container/TaskListComponent";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import Greeting from "./components/pure/Greeting";
import GreetingF from "./components/pure/GreetingF";
import OptionalRender from "./components/pure/OptionalRender";
import ConvertirComponente from "./ConvertirComponente";
import ContactListComponent from "./homework/components/container/ContactListComponent";
import TaskExample from "./homework/components/container/TaskExample";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppRoutinngFinal />
        {/* <AppRoutinngOne /> */}
        {/* <OptionalRender/> */}
        {/* <Father></Father> */}
        {/* <ConvertirComponente /> */}
        {/* <CharacterCopy/> */}
        {/* <CustomizedAccordions /> */}
        {/* <Character /> */}
        {/* <Ejemplo4 nombre="Chris">
            Todo lo que hay aquí, es tratado como props.children 
            <h3>Esto es el contenido del children</h3>
        </Ejemplo4> */}
        {/* <MiComponenteConContexto />  */}
        {/* <Ejemplo2 />
        <Ejemplo1 /> */}
        {/* <TaskListComponent /> */}
        {/* <ContactListComponent/> */}
        {/* <GreetingF/> */}
        {/* <Greeting name="Chris" /> */}
        {/* <App /> */}
        {/* <LoginFormik></LoginFormik> */}
        {/*  */}
        {/* <TaskExample></TaskExample> */}
        {/*  */}
        {/* <RegisterFormik></RegisterFormik> */}
    </React.StrictMode>
);
