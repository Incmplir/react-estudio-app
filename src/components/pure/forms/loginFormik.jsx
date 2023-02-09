import { useHref, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email es required"),
    password: Yup.string().required("Password es required"),
});

const LoginFormik = () => {
    const initialCredentials = {
        email: "",
        password: "",
    };
    const navigate = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                //  *** Initial values tht the form will take ***
                initialValues={initialCredentials}
                //  *** up Validation Schemaf ***
                validationSchema={loginSchema}
                //  *** onSubmit Event ***
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // *** We save the data in the localstorage ***
                    await localStorage.setItem("credentials", values);
                    navigate("/");
                    window.location.reload();
                }}
            >
                {/* We obtain props from Formik */}

                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {errors.email && touched.email && (
                            <ErrorMessage name="email" component="div" />
                        )}
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="****"
                            type="password"
                        />
                        {errors.password && touched.password && (
                            <ErrorMessage name="password" component="div" />
                        )}
                        <button type="submit">Login</button>
                        {isSubmitting ? <p>Login your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginFormik;
