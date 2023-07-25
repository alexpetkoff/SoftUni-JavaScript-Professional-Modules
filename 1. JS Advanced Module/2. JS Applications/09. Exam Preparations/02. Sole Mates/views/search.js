import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get } from '../src/api.js';
import { getUserData } from '../src/utils.js';

const searchTemplate = (onSubmit) => html`
          <section id="search">
            <h2>Search by Brand</h2>
  
            <form @submit=${onSubmit} class="search-wrapper cf">
              <input
                id="#search-input"
                type="text"
                name="search"
                placeholder="Search here..."
                required
              />
              <button type="submit">Search</button>
            </form>
  
            <h3>Results:</h3>
           
          </section>
`;



export async function search(ctx) {

    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(e) {

        e.preventDefault();

        const formData = new FormData(e.target);
        const search = formData.get('search');

        if(search === '') {
           return window.alert('Fill that field, moron!');
        }

        let data = await get(`/data/shoes?where=brand%20LIKE%20%22${encodeURIComponent(search)}%22`);
        const user = getUserData();
        const target = e.target;

        const isLogged = user ? true : false;

        const resultTemplate = (data, user) => html`
            <section id="search">
            <h2>Search by Brand</h2>
  
            <form @submit=${onSubmit} class="search-wrapper cf">
              <input
                id="#search-input"
                type="text"
                name="search"
                placeholder="Search here..."
                required
                value="${search}"
              />
              <button type="submit">Search</button>
            </form>
  
            <h3>Results:</h3>
            ${data.length === 0
                ? html`<div id="search-container"><h2>There are no results found.</h2></div>`
                : html`
            <div id="search-container">
              <ul class="card-wrapper">
                ${data.map(item => html`
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
                  ${user != null
                    ? html`<a class="details-btn" href="/details/${item._id}">Details</a>`
                    : null
                    }
                  </li>
                `)}
                
              </ul>
            </div>
                `
            }

          </section>
        `

        ctx.render(resultTemplate(data, user))

    }
 
}

