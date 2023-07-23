import { render, html } from '../node_modules/lit-html/lit-html.js'
import { get } from '../api/api.js';
import { onClick } from './deleteView.js'
const template = (item) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=".${item.img}" />
                    </div>
                </div>
        </div>
        <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                <div>
                    ${JSON.parse(sessionStorage.getItem('userData'))._id === item._ownerId ? 
                        html `
                        <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                        <a href="/delete" class="btn btn-red" id="${item._id}">Delete</a>
                        ` : null
                    }
                </div>
        </div>
    </div>
`;

export async function detailsView(context) {
    
    const div = document.querySelector('.container');
    const item = await get(`/data/catalog/${context.params.id}`);
    render(template(item), div);

    document.querySelector('.btn.btn-red').addEventListener('click', onClick);
}