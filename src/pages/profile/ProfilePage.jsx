import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

const ProfilePage = ({ user }) => {
    const test = useLocation();
    console.log(test);

    const location = useLocation();
    const navigate = useNavigate();
    const back = useNavigate();
    console.log("We are in Route:", location.pathname);
    // 
    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <button onClick={() => navigate("/")}>|Home|</button>
                <button onClick={() => navigate("/profile/TaskExample")}>
                    |Task|
                </button>
                <button onClick={() => back(-1)}>|Back|</button>
            </div>
        </div>
    );
};

export default ProfilePage;
