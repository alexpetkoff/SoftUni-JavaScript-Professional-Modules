import "./Register.css";

function Register() {
    return (
        <div className="register">
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                <form className="register-form" action="post">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Full name.." />
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Your email address.." />
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Your password..." />
                    <label htmlFor="">Re-password:</label>
                    <input type="password" placeholder="Your password..." />
                    <a href="#" className="submit-btn">
                        Register
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Register;
