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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const response = await registerSubmitHandler({ email, password, username });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <input
            onChange={onChangeHandler}
            type="email"
            name="email"
            placeholder="Your Email..."
          />
          <input
            onChange={onChangeHandler}
            type="password"
            name="password"
            placeholder="Your Password..."
          />
        </div>
        <input className="btn-submit" type="submit" value="Register" />
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
