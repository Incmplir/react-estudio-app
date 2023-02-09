import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Await,
    Outlet,
    useOutletContext,
    useLocation,
    NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import NotFoundPage from "./pages/404/NotFoundPage";
import Dashboard from "./pages/dashboard/Dashboard";
//
import { createTheme } from "@mui/material/styles";
import LoginPage from "./pages/auth/LoginPage";

function AppRoutinngFinal() {
    const theme = createTheme({
        palette: {
            primary: {
                light: "#9fffe0",
                main: "#69f0ae",
                dark: "#2bbd7e",
                contrastText: "#000000",
            },
            secondary: {
                light: "#66ffa5",
                main: "#00e575",
                dark: "#00b147",
                contrastText: "#000000",
            },
        },
    });

    //
    // let loggedIn = true;
    const [loggedIn, setloggedIn] = useState(true);
    const login = () => {
        setloggedIn(loggedIn === false);
    };
    return (
        <BrowserRouter>
            <button onClick={login}>hola</button>
            {/* El Router */}
            <Routes>
                {/* Redirecciones a rutas protegidas */}
                <Route
                    path="/"
                    exact
                    element={
                        loggedIn ? (
                            <Navigate from="/" to="/dashboard" replace />
                        ) : (
                            <Navigate from="/" to="/login" replace />
                        )
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                    path="/dashboard"
                    element={
                        loggedIn ? (
                            <Dashboard theme={theme} />
                        ) : (
                            <Navigate from="/" to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={
                        loggedIn ? (
                            <Navigate from="/" to="/" replace />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutinngFinal;
