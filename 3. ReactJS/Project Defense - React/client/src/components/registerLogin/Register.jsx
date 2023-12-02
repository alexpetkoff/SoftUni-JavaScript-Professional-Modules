import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userRegister } from '../../services/userServices';

function Register() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const {name, email, password} = formData;
        console.log(formData)
        const response = await userRegister({email, password, name});
        navigate(-1);
    }

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        
        setFormData({...formData, [name]: value});
    }

    return(
        <div className='loginsignup'>
            <form className="loginsignup-container" onSubmit={onSubmitHandler}>
                <h1>Register</h1>
                <div className="loginsignup-fields">
                    <input onChange={onChangeHandler} type="text" name="name" placeholder="Your Name..."/>
                    <input onChange={onChangeHandler} type="email" name="email" placeholder="Your Email..."/>
                    <input onChange={onChangeHandler} type="password" name="password" placeholder="Your Password..."/>
                </div>
                {/* <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div> */}
                <input className="btn-submit" type="submit" value="Register" />
                <p className="loginsignup-login">Already have an account? <Link to="/login"><span>Login</span></Link></p>
            </form>
            
        </div>
    );
}

export default Register;