import React from "react";
//* Material UI Component
import { Typography, Link } from "@mui/material";
//
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
const Copyright = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            {"Copyright (C)"}{" "}
            <Link color="inherit" href="https://Incmplir.com">
                Incmplir
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
};

export default Copyright;
