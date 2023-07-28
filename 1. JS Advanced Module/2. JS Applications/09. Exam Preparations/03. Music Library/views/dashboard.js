import {html} from '../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../src/data.js';
import { getUserData } from '../src/utils.js';

const dashboardTemplate = (data) => html`
    <section id="dashboard">
      <h2>Albums</h2>
      ${data.length != 0 ? 
        html`<ul class="card-wrapper">
        ${data.map(d => html`
        <li class="card">
          <img src="${d.imageUrl}" alt="travis" />
          <p>
            <strong>Singer/Band: </strong><span class="singer">${d.singer}</span>
          </p>
          <p>
            <strong>Album name: </strong><span class="album">${d.album}</span>
          </p>
          <p><strong>Sales:</strong><span class="sales">${d.sales}</span></p>
          <a class="details-btn" href="/details/${d._id}">Details</a>
        </li>
        `)}
      </ul>` 
      : html`<h2>There are no albums added yet.</h2>`}
    </section>
`;

export async function dashboardPage(ctx) {
    const result = await getAllItems();
    ctx.render(dashboardTemplate(result));
}