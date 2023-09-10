import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { updateNav } from './api/data.js';
import { homeView } from './views/homeView.js';
import { teamsView } from './views/teamsView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { myTeamsView } from './views/myTeamsView.js';
import { createTeamView } from './views/createTeamView.js';
import { detailsView } from './views/detailsView.js';

import { get } from './api/api.js';

updateNav();
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);

page('/', homeView);
page('/teams', teamsView);
page('/login', loginView);
page('/register', registerView);
page('/my-teams', myTeamsView);
page('/create', createTeamView);
page('/details/:id', detailsView);
page.start();

export async function logout(e)  {
    e.preventDefault();
    // get('/users/logout');
    localStorage.clear();
    updateNav();
    page.redirect('/');
}