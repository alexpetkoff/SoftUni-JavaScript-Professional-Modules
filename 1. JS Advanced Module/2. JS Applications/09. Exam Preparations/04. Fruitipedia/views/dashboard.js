import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAllData } from '../src/data.js';
import { getUserData } from '../src/utils.js';

const dashboardTemplate = (data, user) => html`
<h2>Fruits</h2>
    ${data.length != 0
        ? html`
<section id="dashboard">
        ${data.map(fruit => 
            html`<div class="fruit">
                    <img src="${fruit.imageUrl}" alt="example1" />
                    <h3 class="title">${fruit.name}</h3>
                    <p class="description">${fruit.description}</p>
                <a class="details-btn" href="/details/${fruit._id}">More Info</a>
            </div>`
        )}
        </section>    
        `
        : html`<h2>No fruit info yet.</h2>`
    }
`;

export async function dashboardPage(ctx) {

    const data = await getAllData();
    const user = getUserData();
    ctx.render(dashboardTemplate(data, user));

}