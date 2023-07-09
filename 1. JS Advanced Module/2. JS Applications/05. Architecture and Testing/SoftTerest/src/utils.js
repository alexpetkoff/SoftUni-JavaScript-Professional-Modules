import { links, context } from "./app.js";

export function goTo(name) {
    const handler = links[name];
    typeof handler === 'function' ? handler(context) : false;
    updateNav();
}

export function updateNav() {
    const user = localStorage.getItem('user');
    if (user) {
        document.querySelectorAll('.guest')
            .forEach(el => el.style.display = 'none');
        document.querySelectorAll('.user')
            .forEach(el => el.style.display = 'block');
    } else {
        document.querySelectorAll('.guest')
            .forEach(el => el.style.display = 'block');
        document.querySelectorAll('.user')
            .forEach(el => el.style.display = 'none');
    }
}