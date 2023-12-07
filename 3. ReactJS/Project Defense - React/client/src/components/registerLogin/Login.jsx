import "./Login.css";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    let clientErrors = {};
    if (!email.trim()) {
      clientErrors.email = "Please enter your email.";
    }
    if (!password.trim()) {
      clientErrors.password = "Please enter your password.";
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors({ ...clientErrors });
      return;
    }

    setErrors({ email: "", password: "" });

    const response = await loginSubmitHandler({ email, password });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <div className="loginsignup">
      <form onSubmit={onSubmitHandler} className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input
            onChange={onChangeHandler}
            name="email"
            type="email"
            placeholder="Your Email..."
          />
          <div className="error">{errors.email}</div>
          <input
            onChange={onChangeHandler}
            name="password"
            type="password"
            placeholder="Your Password..."
          />
          <div className="error">{errors.password}</div>
        </div>
        <button>Login</button>
        <div className="error">{errors.server}</div>
        <p className="loginsignup-login">
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
