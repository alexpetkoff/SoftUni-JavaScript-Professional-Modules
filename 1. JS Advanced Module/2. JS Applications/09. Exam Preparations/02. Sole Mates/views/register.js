import { html, render } from '../node_modules/lit-html/lit-html.js';
import { register } from '../src/api.js';

const registerTemplate = (onSubmit) => html`
        <section id="register">
            <div class="form">
              <h2>Register</h2>
              <form @submit=${onSubmit} class="login-form">
                <input
                  type="text"
                  name="email"
                  id="register-email"
                  placeholder="email"
                />
                <input
                  type="password"
                  name="password"
                  id="register-password"
                  placeholder="password"
                />
                <input
                  type="password"
                  name="re-password"
                  id="repeat-password"
                  placeholder="repeat password"
                />
                <button type="submit">login</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
              </form>
            </div>
        </section>
`;

export async function userRegister(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('re-password').trim();

        if(email == '' || password == '' || rePass == '') {
            return window.alert('All fields are required!');
        }

        if(rePass != password) {
            return window.alert('Your passwords don\'t match');
        }

        await register(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/dashboard');

    }

}

