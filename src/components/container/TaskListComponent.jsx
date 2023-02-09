import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/TaskForm";
import TaskComponent from "../pure/TaskComponent";
//? rfcp

const TaskListComponent = () => {
    const defaultTask1 = new Task(
        "Example 1",
        "description 1 ",
        false,
        LEVELS.NORMAL
    );
    const defaultTask2 = new Task(
        "Example 2",
        "description 2",
        true,
        LEVELS.URGENT
    );
    const defaultTask3 = new Task(
        "Example 3",
        "description 3",
        true,
        LEVELS.BLOCKING
    );
    //? new
    // Estado del componente
    const [tasks, setTasks] = useState([
        defaultTask1,
        defaultTask2,
        defaultTask3,
    ]);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida del componente

    useEffect(() => {
        console.log("Task State has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("TaskList component is going to unmount");
        };
    }, [tasks]);

    function completeTask(task) {
        console.log("Complete thiis Task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // we update the state of the component with the new task and it will update the
        // Iteration of the tasks in order to show the task update
        setTasks(tempTasks);
    }
    function deleteTask(task) {
        console.log("Delete thiis Task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }
    function addTask(task) {
        console.log("Add thiis Task:", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table className="w-12/12 | mt-8 flex table-auto border-collapse  flex-col content-center items-center justify-center border border-slate-500 bg-white shadow-md shadow-black">
                <thead className=" | flex flex-col items-center ">
                    <tr className="flex h-20 flex-col content-center items-center justify-center">
                        <th className=""> Your Task:</th>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col items-center">
                    {tasks.map((tasks, index) => {
                        return (
                            <tr
                                key={index}
                                className="odd:bg-white even:bg-slate-50"
                            >
                                <td>
                                    <TaskComponent
                                        task={tasks}
                                        complete={completeTask}
                                        remove={deleteTask}
                                    ></TaskComponent>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };
    let tasksTable;
    if (tasks.length > 0) {
        tasksTable = <Table></Table>;
    } else {
        tasksTable = (
            <div>
                <h3 className="text-white">There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        );
    }

    return (
        <div>
            <div className=" flex h-screen flex-col content-center items-center justify-center bg-slate-900">
                <div
                    className=""
                    data-md-perfect-scrollbar="true"
                    style={{ position: "relative", heigth: "400px" }}
                >
                    {loading ? (
                        <button
                            type="button"
                            class="flex flex-row rounded-full bg-indigo-500 px-6 py-4 text-4xl font-bold text-white"
                            disabled
                        >
                            <img
                                class="mr-3 h-5 w-5 animate-spin"
                                viewBox="0 0 48 48"
                                src="/public/vite.svg"
                            />
                            {/*  */}
                            <img src="" alt="" />
                            Loading Task...
                        </button>
                    ) : (
                        tasksTable
                    )}
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
