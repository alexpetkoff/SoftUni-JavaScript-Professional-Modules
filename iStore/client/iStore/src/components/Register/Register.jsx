import "./Register.css";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
    });

    return (
        <div className="register">
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit>
                    <label htmlFor="name">
                        Name:
                        <span className="display-error">error - name</span>
                    </label>
                    <input type="text" name="name" placeholder="Full name.." />
                    <label htmlFor="email">
                        Email:
                        <span className="display-error">error - email</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email address.."
                    />
                    <label htmlFor="password">
                        Password:
                        <span className="display-error">error - pass</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password..."
                    />
                    <label htmlFor="re-password">
                        Re-password:
                        <span className="display-error">error - repass</span>
                    </label>
                    <input
                        type="password"
                        name="rePassword"
                        placeholder="Your password..."
                    />
                    <button href="#" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
