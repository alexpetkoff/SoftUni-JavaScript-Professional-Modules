import { post } from '../src/api.js'
import { homeView } from './home.js';
import { context } from '../src/app.js';
import { updateNav } from '../src/utils.js';

const section = document.getElementById('login');

export function loginView(context) {
    context.showView(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();

    try {

        const formData = new FormData(e.target);
        let { email, password } = Object.fromEntries(formData.entries());
    
        if(email == '' || password == '') {
            form.reset();
            throw new Error('Fill everything!')
        }
    
        const res = await post('users/login', { email, password });
        
        if (res) {
            localStorage.setItem('user', JSON.stringify(res));
            form.reset();
            homeView(context);
            updateNav();
        }

    } catch(error) {
        alert(error.message);
    }
 
}