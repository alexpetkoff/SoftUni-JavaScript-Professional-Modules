import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const template = (user) => html`<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: Adam</h2>
    <button class="detailsBtn">Details</button>
    <div class="details" id="3" style="display: none;">
        <p>Phone number: 0866592475</p>
        <p>Email: adam@stamat.com</p>
    </div>
</div>
</div>
`;

const root = document.getElementById('contacts');

render(contacts.map(template), root)

root.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('detailsBtn')) {
        const info = e.target.parentElement.querySelector('.details');
        info.style.display === 'none' ?
            info.style.display = 'block':
            info.style.display = 'none';        
    }

});