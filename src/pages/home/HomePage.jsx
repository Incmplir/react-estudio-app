import { useLocation, useNavigate /* navigateProps */ } from "react-router-dom";

const HomePage = () => {
    
    //
    const test = useLocation();
    console.log(test);
    /* const navigate = useNavigate(); */
    let navigate = useNavigate();
    /* const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: "online=true",
            state: { online: true },
        });
    }; */
    /* const navigateProps => navigateProps() =>  {

    } */
    // const navigateProps = (path) => {
    //     history.pushState({
    //         pathname: path,
    //         search: "?onlinetrue",
    //         state: {
    //             online: true,
    //         },
    //     });
    // };
    // console.log("We are in Route:", location.pathname);

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {/* <button onClick={() => navigateProps("/online-sate")}>
                    |test|
                </button> */}
                <button
                    onClick={() =>
                        navigate(
                            "profile",
                            { state: { online: true } },
                            { search: "?online=true" }
                            
                        )
                    }
                >
                    |Profile|
                </button>
                <button onClick={() => navigate("profile")}>|Profile|</button>
                <button onClick={() => location()}>|Profile|</button>
            </div>
        </div>
    );
};

export default HomePage;
