import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const back = useNavigate();
    const future = useNavigate();
    console.log("We are in Route:", location.pathname);

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={() => navigate("/")}>|Home|</button>
                <button onClick={() => back(-1)}>|Back|</button>
                <button onClick={() => future(1)}>|Future|</button>
            </div>
        </div>
    );
};

export default AboutPage;
