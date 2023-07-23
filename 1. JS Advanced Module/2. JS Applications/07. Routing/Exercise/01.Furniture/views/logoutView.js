import { updateNav } from "../app.js";
import { get } from '../api/api.js'
import page from '../node_modules/page/page.mjs';

export async function logoutView(e)  {
    e.preventDefault();
    get('/users/logout');
    
    sessionStorage.clear();
    updateNav();
    page.redirect('/');
}