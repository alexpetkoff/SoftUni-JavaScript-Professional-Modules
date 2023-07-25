import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAllShoes } from '../src/data.js';

const dashboardTemplate = (items) => html`
              <section id="dashboard">
            <h2>Collectibles</h2>

            ${items.length != 0
                ? html`<ul class="card-wrapper">
              ${items.map(item => html`
              <li class="card">
                <img src="${item.imageUrl}" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">${item.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">${item.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                <a class="details-btn" href="/details/${item._id}">Details</a>
              </li>`)}
            </ul>`
                : html`<h2>There are no items added yet.</h2>`
            }
          </section>
`;

export async function dashboardView(ctx) {

    const items = await getAllShoes();
    ctx.render(dashboardTemplate(items));

}