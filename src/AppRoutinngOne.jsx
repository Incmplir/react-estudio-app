import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Await,
    Outlet,
    useOutletContext /* ,
    useLocation */,
    NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import TaskExample from "./homework/components/container/TaskExample";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/StatePage";
//
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
function AppRoutinngOne() {
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
    //
    //
    /* const test = useLocation();
    console.log(test); */
    const logged = localStorage.getItem("credentials");
    // const [logged, setLogged] = useState(true);
    // const login = () => {
    //     setLogged(logged === false);
    // };
    let taskList = [
        {
            id: 1,
            name: "Task",
            description: "My first Task",
        },
        { id: 2, name: "Task 2", description: "My second Task" },
    ];
    const hello = {
        name: "world",
    };
    return (
        <BrowserRouter>
            <div>
                <aside>
                    <Link to="/" state={{ online: true }}>
                        <Button
                            theme={theme}
                            className="bg-emerald-400"
                            color="warning"
                            size="large"
                            variant="contained"
                        >
                            Hello World
                        </Button>
                    </Link>
                    <Link to="/about">| ABOUT |</Link>
                    <Link to="/faqs">| FAQs |</Link>
                    <Link to="/TaskExample/1">| Task 1 |</Link>
                    <Link to="/TaskExample/2">| Task 2 |</Link>
                    <Link to="/StatePage" state={{ online: true }}>
                        | StatePage |
                    </Link>
                    <Link to="/Ruta Inexistente">| Ruta Inexistente |</Link>
                    <Link to="/login">| login ||</Link>
                </aside>
                <main>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/faqs" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/StatePage" element={<StatePage />} />
                        {/*  */}

                        {/* <Route
                            path="/profile"
                            element={<ProfilePage message="Hello World" />}
                        /> */}
                        <Route
                            path="/TaskExample/:id"
                            element={<TaskDetailPage task={taskList} />}
                        />
                        {/* <Route
                            exact
                            path="/TaskExample/:id"
                            render={({ match }) => (
                                <TaskDetailPage
                                    task={taskList[match.params.id - 1]}
                                />
                            )}
                        /> */}
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        {/* <Route
                            exact
                            path="/TaskExample/:id"
                            element={({ match }) => (
                                <TaskDetailPage
                                    task={taskList[match.params.id - 1]}
                                />
                            )}
                        /> */}

                        <Route
                            path="/profile/TaskExample"
                            element={
                                logged ? (
                                    <TaskExample />
                                ) : (
                                    <Navigate to="/" replace />
                                )
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                logged ? (
                                    <ProfilePage />
                                ) : (
                                    <Navigate to="/login" replace />
                                )
                            }
                        />
                        {/* 404 - Page not Found Page */}
                        <Route
                            path="*"
                            element={<NotFoundPage hello={taskList} />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutinngOne;
