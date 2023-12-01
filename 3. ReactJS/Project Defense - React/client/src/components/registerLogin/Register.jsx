import './Register.css';

function Register() {
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Register</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name..."/>
                    <input type="email" placeholder="Your Email..."/>
                    <input type="password" placeholder="Your Password..."/>
                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <button>Register</button>
                <p className="loginsignup-login">Already have an account? <span>Login</span></p>
            </div>
        </div>
    );
}

export default Register;