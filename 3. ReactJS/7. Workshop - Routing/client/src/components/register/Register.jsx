export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="register-password">Password:</label>
                    <input type="password" id="register-password" name="password" />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
