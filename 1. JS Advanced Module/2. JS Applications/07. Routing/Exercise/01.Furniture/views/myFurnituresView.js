import { get } from '../api/api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

export async function myFurnituresView()  {
    const id = JSON.parse(sessionStorage.getItem('userData'))._id;
    const data = await get(`/data/catalog?where=_ownerId%3D%22${id}%22`);
    console.log(data)
    const template = html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(item => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${item.img}" />
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
    `;
    if(data) {
        const div = document.querySelector('.container');
        render(template, div);
    }
    
}



///data/catalog?where=_ownerId%3D%22{userId}%22