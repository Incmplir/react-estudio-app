import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StatePage = () => {
    const location = useLocation();

    // console.log(location.state.online);
    // console.log(location.search)
    return (
        <div>
            <h1>State: {location.state.online ? 'concected' : 'no conected'}</h1>
        </div>
    );
};

export default StatePage;
