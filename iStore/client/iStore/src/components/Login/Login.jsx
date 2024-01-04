import "./Login.css";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const { loginHandler } = useContext(AuthContext);

    const loginOnChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        let clientErrors = {};

        if (!email.trim()) {
            clientErrors.email = "Email cannot be an empty string";
        }
        if (!password.trim()) {
            clientErrors.password = "Password cannot be an empty string";
        }

        if (Object.keys(clientErrors).length > 0) {
            setErrors({ ...clientErrors });
            return;
        }

        setErrors({ email: "", password: "" });
        loginHandler(formData);
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={loginSubmitHandler}>
                    <label htmlFor="email">
                        Email:
                        <span className="display-error">{errors.email}</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email address.."
                        onChange={loginOnChangeHandler}
                    />
                    <label htmlFor="password">
                        Password:
                        <span className="display-error">{errors.password}</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password..."
                        onChange={loginOnChangeHandler}
                    />
                    <button className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
