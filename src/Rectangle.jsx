import React, { useState } from "react";

const Rectangle = () => {
    const [color, setColor] = useState("black");
    const [intervalId, setIntervalId] = useState(null);

    const handleMouseEnter = () => {
        clearInterval(intervalId);
        setIntervalId(
            setInterval(() => {
                setColor(
                    `rgb(${Math.floor(Math.random() * 256)}, 
          ${Math.floor(Math.random() * 256)}, 
          ${Math.floor(Math.random() * 256)})`
                );
            }, 100)
        );
    };

    const handleMouseLeave = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const handleDoubleClick = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    return (
        <div
            style={{ width: "255px", height: "255px", backgroundColor: color }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
        />
    );
};

export default Rectangle;
