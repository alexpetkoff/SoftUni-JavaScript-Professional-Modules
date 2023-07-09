import { post } from '../src/api.js'
import { homeView } from './home.js';
import { context } from '../src/app.js';
import { catalogView } from './catalog.js';

const section = document.getElementById('create');

export function createView(context) {
    context.showView(section);

    const form = section.querySelector('form');
    form.reset();
    form.addEventListener('submit', sendForm);

    async function sendForm(e) {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const { title, description, imageURL } = Object.fromEntries(formData.entries());
        const user = JSON.parse(localStorage.user);
    
        if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
            throw new Error('Length if inputs not valid!');
        }
    
        const data = {
            _ownerId: user.id,
            title,
            description,
            img: imageURL,
        }
        
        const res = await post('data/ideas', data);
        form.reset();
           // context.showView(catalog);
        catalogView(context);
    }

}

