import React, { useState } from "react";

const RegisterForm = () => {
    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: "",
        },
    ];
    const [Data, setData] = useState(initialData);

    return <div></div>;
};

export default RegisterForm;
