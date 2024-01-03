import "./Login.css";

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" action="post">
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Your email address.." />
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Your password..." />
                    <a href="#" className="submit-btn">
                        Login
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;
