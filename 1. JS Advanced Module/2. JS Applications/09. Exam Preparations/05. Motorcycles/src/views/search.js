import { getSearchItem } from '../api/data.js';
import { html } from '../lib.js';

const searchTemplate = (onSubmit) => html`
   <section id="search">

<div class="form">
  <h4>Search</h4>
  <form @submit=${onSubmit} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4 id="result-heading">Results:</h4>
</section>
`;

const foundTemplate = (onSubmit, found) => html`
   <section id="search">

<div class="form">
  <h4>Search</h4>
  <form @submit=${onSubmit} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>

<h4 id="result-heading">Results:</h4>
  <div class="search-result">
  ${
    found.length == 0 
    ? html`<h2 class="no-avaliable">No result.</h2>`
    : html`
        ${found.map(item => html`
        <div class="motorcycle">
  <img src="${item.imageUrl}" alt="example1" />
  <h3 class="model">${item.model}</h3>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
</div>
        
  </div>`)}

    `
}


        </section>
`

export async function showSearch(ctx) {
    ctx.renderView(searchTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchQuery = formData.get('search');

        if(searchQuery === '') {
            return window.alert('Fill the field!');
        }
        const found = await getSearchItem(searchQuery);

        ctx.renderView(foundTemplate(onSubmit, found));

    }
}