import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs';
import { loginView } from '../views/loginView.js';

export function updateNav() { //update Navigation
    const userNav = document.querySelectorAll('.action.user');
    const guestNav = document.querySelectorAll('.action.guest');
    const isLogged = getUser();
    if (isLogged) {
        Array.from(userNav).map(el => el.style.display = 'inline-block');
        Array.from(guestNav).map(el => el.style.display = 'none');
    } else {
        Array.from(userNav).map(el => el.style.display = 'none');
        Array.from(guestNav).map(el => el.style.display = 'inline-block');
    }
}

export function getUser() { //get User from sessionStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData;
}

export async function loginUser(event) {

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {

        if(data.email == '' || data.password == '') {
            throw new Error('All fields are required!');
        }

        const response = await post('/users/login', data);
        const dataUser = await response;

        localStorage.setItem('userData', JSON.stringify(dataUser));
        updateNav();
        page.redirect('/');
    } catch(error) {
        loginView(error);
    }

}

