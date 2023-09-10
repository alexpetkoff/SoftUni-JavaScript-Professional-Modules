import page from './node_modules/page/page.mjs';
import {render} from './node_modules/lit-html/lit-html.js';

import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { myFurnituresView } from './views/myFurnituresView.js';
import { registerView } from './views/registerView.js';

updateNav();

document.getElementById('logoutBtn').addEventListener('click', logoutView);

export function updateNav() {
    const userData = sessionStorage.getItem('userData');
    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');

    if (userData) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

page('/', catalogView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/my-furniture', myFurnituresView);
page.start();