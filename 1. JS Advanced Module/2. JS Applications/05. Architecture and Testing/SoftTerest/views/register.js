import { post } from '../src/api.js';
import { homeView } from './home.js';
import { context } from '../src/app.js';
import { updateNav } from '../src/utils.js';

const section = document.getElementById('register');

export function registerView(context) {
    context.showView(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();

    try {
        const formData = new FormData(e.target);
        let { email, password, repeatPassword } = Object.fromEntries(formData.entries());
        
        if(email.length < 3 || password.length < 3 || repeatPassword != password) {
            throw new Error('Wrong data, please correct the fields!');
        }

        const res = await post('users/register', {email, password});
        localStorage.setItem('user', JSON.stringify(res));
        homeView(context);
        updateNav();
    
    } catch(error) {
        alert(error.message);
    }


}