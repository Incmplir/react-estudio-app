import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { BsToggleOn, BsToggleOff, BsTrashFill } from "react-icons/bs";
import { LEVELS } from "../../models/levels.enum";
//? rfcp

const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log("Create Task");
        return () => {
            console.log(`Task: ${Task.name} is going to unmount`);
        };
    }, [task]);
    //
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className="px-2 py-1 rounded-md bg-blue-400">
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className="px-2 py-1 rounded-md bg-yellow-400">
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className="mb-0">
                        <span className="px-2 py-1 rounded-md bg-red-400">
                            {task.level}
                        </span>
                    </h6>
                );

            default:
                break;
        }
    }
    function taskCompletedIcon() {
        if (task.completed) {
            return (
                <BsToggleOn
                    onClick={() => complete(task)}
                    className="cursor-pointer text-green-400 text-2xl"
                />
            );
        } else {
            return (
                <BsToggleOff
                    onClick={() => complete(task)}
                    className="cursor-pointer text-gray-400 text-2xl"
                />
            );
        }
    }
    // font-normal
    return (
        <tr className={task.completed ? 'bg-green-400' : 'line-through opacity-50'}>
            <th className="">
                <span className="ms-2">{task.name}</span>
            </th>
            <th className="">
                <span className="align-middle">{task.description}</span>
            </th>
            <th className=" select-none text-white text-sm font-medium">
                {taskLevelBadge()}
            </th>
            <th className="">
                {taskCompletedIcon()}
                <BsTrashFill
                    onClick={() => remove(task)}
                    className="cursor-pointer text-red-400 text-2xl"
                />
            </th>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TaskComponent;
