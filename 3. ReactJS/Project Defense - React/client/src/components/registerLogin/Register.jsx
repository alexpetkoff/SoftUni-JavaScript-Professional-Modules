import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setErrors({
        username: !username ? "Please enter your name." : "",
        email: !email ? "Please enter your email." : "",
        password: !password ? "Please enter your password." : "",
      });
      return;
    }

    const response = await registerSubmitHandler({ email, password, username });
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
      <form className="loginsignup-container" onSubmit={onSubmitHandler}>
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input
            onChange={onChangeHandler}
            type="text"
            name="username"
            placeholder="Your Name..."
          />
          <div className="error">{errors.username}</div>
          <input
            onChange={onChangeHandler}
            type="email"
            name="email"
            placeholder="Your Email..."
          />
          <div className="error">{errors.email}</div>
          <input
            onChange={onChangeHandler}
            type="password"
            name="password"
            placeholder="Your Password..."
          />
          <div className="error">{errors.password}</div>
        </div>
        <input className="btn-submit" type="submit" value="Register" />
        <div className="error">{errors.server}</div>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
