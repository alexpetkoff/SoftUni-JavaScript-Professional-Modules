import './Login.css';

function Login() {
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder="Your Email..."/>
                    <input type="password" placeholder="Your Password..."/>
                </div>
                <button>Login</button>
                <p className="loginsignup-login">Don't have an account? <span>Register</span></p>
            </div>
        </div>
    );
}

export default Login;