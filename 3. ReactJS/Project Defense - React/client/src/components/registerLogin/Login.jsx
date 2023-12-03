import './Login.css';
import AuthContext from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const {email, password} = formData;
        const response = await loginSubmitHandler({email, password});
    }

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return(
        <div className='loginsignup'>
            <form onSubmit={onSubmitHandler} className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input onChange={onChangeHandler} name="email" type="email" placeholder="Your Email..."/>
                    <input onChange={onChangeHandler} name="password" type="password" placeholder="Your Password..."/>
                </div>
                <button>Login</button>
                <p className="loginsignup-login">Don't have an account? <Link to="/register"><span>Register</span></Link></p>
            </form>
        </div>
    );
}

export default Login;