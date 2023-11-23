import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function Login({loginSubmitHandler}) {

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input value={values['email']} onChange={onChange} type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-password">Password:</label>
                    <input value={values['password']} onChange={onChange} type="password" id="login-password" name="password" />

                    <input type="submit" className="btn submit" value="Login" />

                    <p className="field">
                        <span>If you don't have a profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
