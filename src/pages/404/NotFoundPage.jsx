import { useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = (/* {hello} */) => {/* 
    const location = useLocation();
    const navigate = useNavigate();
    console.log("We are in Route:", location.pathname); */
    return (
        <div>
            <h1>404 - Page Not Fount | {/* {hello[0].name} */}</h1>{" "}
            <div>
                <button onClick={() => navigate("/")}>|Home|</button>
            </div>
        </div>
    );
};

export default NotFoundPage;
