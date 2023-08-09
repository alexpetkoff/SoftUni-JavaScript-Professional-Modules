import * as api from './api/data.js';
window.api = api;

import { logout } from './api/data.js';
import {page, render} from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showDashboard } from './views/my-home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';


const root = document.querySelector('main');

page(decorateContext);
page('/', showHome);
page('/dashboard', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/add', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);


page.start();
updateNav();



function decorateContext(ctx, next) {
    ctx.updateNav = updateNav;
    ctx.renderView = (content) => render(content, root);
    next();
}

function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
        // document.querySelector('.user span').textContent = `Welcome, ${userData.email}`
    }else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}

document.querySelector('#logoutBtn').addEventListener('click', onLogout);

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}