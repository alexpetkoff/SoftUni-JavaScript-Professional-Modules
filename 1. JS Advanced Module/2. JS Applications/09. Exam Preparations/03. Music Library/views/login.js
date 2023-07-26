import page from '../node_modules/page/page.mjs';
import {html, render} from '../node_modules/lit-html/lit-html.js';
import { login, post } from '../src/api.js';
import { setUserData } from '../src/utils.js';
import { updateUserNav } from '../src/app.js';

const loginTemplate = (onSubmit) => html`
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input type="password" name="password" id="password" placeholder="password" />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </section>
`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if( email == '' || password == '' ) {
            return window.alert('All fields required!');
        }

        await login(email, password);

        updateUserNav();
        page.redirect('/dashboard');

    }

}