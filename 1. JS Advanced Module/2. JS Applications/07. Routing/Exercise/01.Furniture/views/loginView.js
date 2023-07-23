import { updateNav } from '../app.js';
import { render, html } from '../node_modules/lit-html/lit-html.js'
import { post } from '../api/api.js';
import page from '../node_modules/page/page.mjs';

const template = html`
                <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
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
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export async function loginView() {
    const div = document.querySelector('.container');
    render(template, div);
    const form = document.querySelector('form');
    form.addEventListener('submit', loginUser);
}

export async function loginUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let { email, password } = Object.fromEntries(formData.entries());

    try {

      if(email === '' || password === '') {
        throw new Error('All fields are required');
      }
      
      const request = await post('/users/login', {email, password});
      const data = await request;
      sessionStorage.userData = JSON.stringify(data);
      page.redirect('/');
      updateNav();
    } catch(error) {
        alert(error.message);
    }
}