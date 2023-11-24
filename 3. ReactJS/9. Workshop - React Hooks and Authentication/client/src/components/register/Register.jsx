import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from "../../services/userServices";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        ["confirm-password"]: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const {email, password} = formData;
        const response = await userRegister({email, password});
        navigate('/login');
    }

    const onChangeHandler = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }
    

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input onChange={onChangeHandler} type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="register-password">Password:</label>
                    <input onChange={onChangeHandler} type="password" id="register-password" name="password" />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input onChange={onChangeHandler} type="password" id="confirm-password" name="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
