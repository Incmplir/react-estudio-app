import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className="">
            <div className="">
                <input
                    placeholder="Task Name"
                    ref={nameRef}
                    id="inputName"
                    type="text"
                    required
                    autoFocus
                />
                <input
                    placeholder="Task Description"
                    ref={descriptionRef}
                    id="inputDescription"
                    type="text"
                    required
                />
                <label htmlFor="selectLevel" className="">
                    Priority
                </label>
                <select
                    ref={levelRef}
                    defaultValue={LEVELS.NORMAL}
                    id="selectLevel"
                    name=""
                >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>.URGENT</option>
                    <option value={LEVELS.BLOCKING}>BLOCKING</option>
                </select>
            </div>
            <button type="submit" className="">
                {length > 0 ? 'Add' : 'Create your first task'}
            </button>
        </form>
    );
};

TaskForm.ProtoType = {
    add: PropTypes.func.isRequired,
};
export default TaskForm;
