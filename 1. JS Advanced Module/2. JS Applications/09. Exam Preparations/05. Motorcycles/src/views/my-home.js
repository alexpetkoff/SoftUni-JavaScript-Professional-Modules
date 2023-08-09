import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => html`
    <h2>Available Motorcycles</h2>

    ${data.length != 0 
        ? html`
            <section id="dashboard">
                ${data.map(item => html`
                <div class="motorcycle">
                    <img src="${item.imageUrl}" alt="example1" />
                    <h3 class="model">${item.model}</h3>
                    <p class="year">Year: ${item.year}</p>
                    <p class="mileage">Mileage: ${item.mileage} km.</p>
                    <p class="contact">Contact Number: ${item.contact}</p>
                    <a class="details-btn" href="/details/${item._id}">More Info</a>
                </div>
                `)}
            </section>
        `
        : html`
            <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
        `
    }
     
`;

export async function showDashboard(ctx) {
    // const userData = getUserData();
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


