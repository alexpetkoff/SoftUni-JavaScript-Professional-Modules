import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { createPage } from '../views/create.js';
import { dashboardView } from '../views/dashboard.js';
import { deleteItem } from '../views/delete.js';
import { detailsView } from '../views/details.js';
import { editItem } from '../views/edit.js';
import { homePage } from '../views/home.js';
import { userLogin } from '../views/login.js';
import { userRegister } from '../views/register.js';
import { search } from '../views/search.js';
import { logout } from './api.js';
import { getUserData } from './utils.js';

let root = document.querySelector('main');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav

    next();
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/dashboard');
});

export function updateUserNav() {
    let userData = getUserData();
    if(userData != null) {
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}

page(decorateContext);
page('/', homePage);
page('/login', userLogin);
page('/register', userRegister);
page('/dashboard', dashboardView);
page('/create', createPage);
page('/details/:id', detailsView);
page('/edit/:id', editItem);
page('/delete/:id', deleteItem);
page('/search', search);

updateUserNav();
page.start();