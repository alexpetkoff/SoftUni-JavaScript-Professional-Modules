// import page from '../node_modules/page/page.mjs';
import { updateNav } from '../app.js';
import { render, html } from '../node_modules/lit-html/lit-html.js'
import { post } from '../api/api.js';
import page from '../node_modules/page/page.mjs';

const template = html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`;

export async function registerView() {
    const div = document.querySelector('.container');
    render(template, div);
    const form = document.querySelector('form');
    form.addEventListener('submit', registerUser);
}

export async function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let { email, password, rePass } = Object.fromEntries(formData.entries());

    try {

        if(email === '' || password === '' || rePass === '') {
            throw new Error('All fields required!');
        }
        if(rePass != password) {
            throw new Error('Passwords dont match!');
        }

        post('/users/register', {email, password});
        page.redirect('/');

    } catch(error) {
        alert(error.message);
    }
}