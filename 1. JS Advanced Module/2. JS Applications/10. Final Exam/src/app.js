import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { createPage } from '../views/create.js';
import { dashboardPage } from '../views/dashboard.js';
import { deletePage } from '../views/delete.js';
import { detailsPage } from '../views/details.js';
import { editPage } from '../views/edit.js';
import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { logout } from './api.js';
import { getUserData } from './utils.js';

let root = document.querySelector('main');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    ctx.user = getUserData();
    next();
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/');
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
page('/login', loginPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/delete/:id', deletePage);
page('/edit/:id', editPage);

updateUserNav();
page.start();