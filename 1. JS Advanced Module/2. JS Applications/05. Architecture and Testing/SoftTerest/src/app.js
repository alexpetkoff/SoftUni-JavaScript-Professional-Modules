import { homeView } from '../views/home.js';
import { catalogView } from '../views/catalog.js';
import { createView } from '../views/create.js';
import { logout } from '../views/logout.js';
import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';
import { updateNav, goTo } from './utils.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
document.getElementById('default').remove();

export const links = {
    '/': homeView,
    '/catalog': catalogView,
    '/create': createView,
    '/logout': logout,
    '/login': loginView,
    '/register': registerView,
}

export const context = {
    showView,
}

window.homeView = homeView(context);

function showView(section) {
    main.replaceChildren(section);
}

function onNavigate(e) {
    e.preventDefault();
    const target = e.target;

    if (target.tagName === 'A') {
        const url = new URL(target.href);
        goTo(url.pathname);
    } else if (target.tagName === 'IMG') {
        const url = new URL(target.parentElement.href)
        goTo(url.pathname);
    }
}

updateNav();