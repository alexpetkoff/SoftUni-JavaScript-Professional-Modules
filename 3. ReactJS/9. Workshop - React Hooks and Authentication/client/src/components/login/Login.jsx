import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

const LOGIN_FORM_KEYS = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const loginSubmitHandler = useContext(AuthContext);
    
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LOGIN_FORM_KEYS.Email]: '',
        [LOGIN_FORM_KEYS.Password]: ''
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input value={values[LOGIN_FORM_KEYS.Email]} onChange={onChange} type="email" id="email" name={LOGIN_FORM_KEYS.Email} placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-password">Password:</label>
                    <input value={values[LOGIN_FORM_KEYS.Password]} onChange={onChange} type="password" id="login-password" name={LOGIN_FORM_KEYS.Password} />

                    <input type="submit" className="btn submit" value="Login" />

                    <p className="field">
                        <span>If you don't have a profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
