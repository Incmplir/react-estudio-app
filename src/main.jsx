import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskListComponent from "./components/container/TaskListComponent";
import Greeting from "./components/pure/Greeting";
import GreetingF from "./components/pure/GreetingF";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    {/* <TaskListComponent/> */}
        <GreetingF/>
        {/* <Greeting name="Chris" /> */}
        {/* <App /> */}
    </React.StrictMode>
);
