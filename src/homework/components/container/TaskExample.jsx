import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//
import { BsFillTrashFill } from "react-icons/bs";

const TaskExample = () => {
    const taskSchema = Yup.object().shape({
        taskName: Yup.string().required("Task name is required"),
        taskDescription: Yup.string().required("Task description is required"),
        date: Yup.date().required("Date is required"),
    });

    const [tasks, setTasks] = useState([]);

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            setTasks([...tasks, values]);
            setSubmitting(false);
        }, 400);
    };
    //
    function deleteTask(task) {
        console.log("Delete thiis Task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }
    // bg-slate-900
    return (
        <div className="flex h-screen flex-col content-center items-center justify-center bg-emerald-300 font-mono text-teal-300 selection:bg-teal-500 selection:text-slate-200">
            <div className="mx-2 flex min-w-[20rem] max-w-2xl flex-col content-center items-center justify-center rounded-sm border border-slate-400 bg-slate-800 p-4 shadow-sm shadow-slate-400">
                <Formik
                    initialValues={{
                        taskName: "",
                        taskDescription: "",
                        date: "",
                    }}
                    validationSchema={taskSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col content-center items-center justify-center">
                            <Field
                                className="w-56 rounded-sm border border-slate-400 bg-transparent px-3 py-1 capitalize shadow transition-all focus:shadow-slate-400 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-slate-400"
                                type="text"
                                name="taskName"
                                placeholder="Task name"
                            />
                            <ErrorMessage
                                className="uppercase text-red-400"
                                name="taskName"
                                component="div"
                            />

                            <Field
                                className="mt-2 w-56 rounded-sm border border-slate-400 bg-transparent px-3 py-1 capitalize shadow transition-all focus:shadow-slate-400 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-slate-400"
                                type="text"
                                name="taskDescription"
                                placeholder="Task description"
                            />
                            <ErrorMessage
                                className="uppercase text-red-400"
                                name="taskDescription"
                                component="div"
                            />

                            <Field
                                className="mt-2 w-56 rounded-sm border border-slate-400 bg-transparent px-3 py-1 capitalize shadow transition-all focus:shadow-slate-400 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-slate-400"
                                type="date"
                                name="date"
                                placeholder="date"
                            />
                            <ErrorMessage
                                className="uppercase text-red-400"
                                name="date"
                                component="div"
                            />

                            <button
                                className="mt-2 rounded-sm bg-slate-700 px-3 py-1 text-lime-400 transition-all hover:bg-slate-600 disabled:cursor-no-drop"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Creating..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <ul>
                    {tasks.map((task, index) => (
                        <li className="" key={index}>
                            <hr className="my-2 border-slate-500 shadow-sm shadow-slate-400" />
                            <strong className="text-gray-400">
                                Task Name:
                            </strong>{" "}
                            <span className="text-slate-200">
                                {task.taskName}
                            </span>
                            <br />
                            <strong className="text-gray-400">
                                Task Description:
                            </strong>{" "}
                            <span className="text-slate-200">
                                {task.taskDescription}
                            </span>
                            <br />
                            <strong className="text-gray-400">
                                Date:
                            </strong>{" "}
                            <span className="text-slate-200">{task.date}</span>
                            <br />
                            <BsFillTrashFill
                                className="cursor-pointer text-gray-400 transition-all hover:text-red-400"
                                onClick={() => deleteTask(task)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <span className="mt-1 select-none text-xs font-light italic text-lime-400 line-through opacity-80">
                @Lisantti
            </span>

            <div className="h-20 w-20 bg-emerald-400">{location.pathname}</div>
        </div>
    );
};

export default TaskExample;
