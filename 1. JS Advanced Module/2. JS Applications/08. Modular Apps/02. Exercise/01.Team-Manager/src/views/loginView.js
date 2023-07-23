import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser, loginUser, updateNav } from '../api/data.js';

export function loginView(error) {
    const main = document.querySelector('main');

    const template = html`
    <section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${loginUser} id="login-form" class="main-form pad-large">
            ${error ? html`<div class="error">${error.message}</div>` : null}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
    </section>
    `;

    render(template, main);
}