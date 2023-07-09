import {get} from '../src/api.js'
import { context } from '../src/app.js';
import { updateNav } from '../src/utils.js';
import { homeView } from './home.js';

export async function logout() {
    
    const user = localStorage.getItem('user');
    
    if(user != null) {
        get('users/logout');
        localStorage.removeItem('user');
        homeView(context);
        updateNav();
    }

}