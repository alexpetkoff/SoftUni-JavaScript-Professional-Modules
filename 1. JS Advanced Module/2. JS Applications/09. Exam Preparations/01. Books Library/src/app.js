import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { addBookPage } from '../views/addBook.js';
import { deleteBook } from '../views/deleteBook.js';
import { detailsPage } from '../views/details.js';
import { editBook } from '../views/editBook.js';
import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { myBooks } from '../views/myBooks.js';
import { registerPage } from '../views/register.js';
import { logout } from './api.js';
import { getUserData } from './utils.js';

let root = document.getElementById('site-content');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav

    next();
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/');
});

export function updateUserNav() {
    let userData = getUserData();
    if(userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
        document.querySelector('#user span').style.display = `none`;
    }
}

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/add-book', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editBook);
page('/delete/:id', deleteBook);
page('/my-books', myBooks);

updateUserNav();
page.start();
