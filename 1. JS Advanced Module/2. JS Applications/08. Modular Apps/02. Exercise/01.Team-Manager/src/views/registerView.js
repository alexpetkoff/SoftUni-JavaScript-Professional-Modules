import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { post } from '../api/api.js';

const template = (error) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${registerUser} id="register-form" class="main-form pad-large">
            ${error ? html`<div class="error">${error.message}</div>` : null}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;
const main = document.querySelector('main');

export function registerView() {
    render(template(), main);
}

async function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, username, password, repass} = Object.fromEntries(formData.entries());

    try {

        if(email === '' || username === '' || password === '') {
            throw new Error('All fields are required!');
        }

        if(username.length < 3 || password.length < 3) {
            throw new Error('Username and pass should be atleast 3 character long!');
        }

        if(password != repass) {
            throw new Error('Passwords dont match!');
        }

        post('/users/register', {email, username, password});
        page.redirect('/')

    } catch(error) {
        render(template(error), main);
    }

}