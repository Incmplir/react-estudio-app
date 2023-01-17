import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";
//? rfcp

const TaskListComponent = () => {
    const defaultTask = new Task(
        "Example",
        "default description",
        false,
        LEVELS.NORMAL
    );
    //? new

    return (
        <div>
            <h1>Your Task:</h1>
            {/* map */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
