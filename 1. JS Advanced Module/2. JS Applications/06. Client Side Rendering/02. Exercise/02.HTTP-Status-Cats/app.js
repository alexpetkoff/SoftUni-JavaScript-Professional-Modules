import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const section = document.getElementById('allCats');
render(temp(cats), section);

const li = document.querySelectorAll('li');

Array.from(li).forEach(el => {
    el.addEventListener('click', showDetails);
});

//FUNCTIONS:

function temp(obj) {
    const template = html`
    <ul>
        ${obj.map(cat => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
        `)}
    </ul>
`;
    return template;
}

function showDetails(e) {

    if (e.target.tagName === 'BUTTON') {
        const div = e.target.nextElementSibling;
        if (div.style.display === 'none') {
            div.style.display = 'block';
            e.target.textContent = 'Hide status code';
        } else {
            div.style.display = 'none';
            e.target.textContent = 'Show status code';
        }
    }

}