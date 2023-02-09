import React from "react";
//MATERIAL M U I
import Button from "@mui/material/Button";
import Copyright from "../../components/pure/Copyright";
// import MenuListItems from "../../components/pure/MenuListItems";

const Dashboard = ({theme}) => {
    return (
        <div>
            <Button theme={theme} color="primary" size="large" variant="contained">
                Hello World
            </Button>
            {/* <MenuListItems/> */}
            <Copyright></Copyright>
        </div>
    );
};

export default Dashboard;
