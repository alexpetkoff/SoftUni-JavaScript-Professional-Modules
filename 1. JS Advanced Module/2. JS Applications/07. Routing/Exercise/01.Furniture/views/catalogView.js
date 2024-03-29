import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { detailsView } from './detailsView.js';



let template = (data) => { 
    return html
    `
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(item => html
                `
                <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=".${item.img}" />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${item._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
                </div>
                `)}
        </div>
    `
}

const div = document.querySelector('.container');

export async function catalogView() {
    const data = await get('/data/catalog');
    render(template(data), div);
}