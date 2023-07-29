import { html } from '../node_modules/lit-html/lit-html.js';
import { get, put } from '../src/api.js';
import { getAllData } from '../src/data.js';

const editTemplate = (onSubmit, data) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Fact</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input
            value="${data.category}"
            type="text"
            name="category"
            id="category"
            placeholder="Category"
          />
          <input
            value="${data.imageUrl}"
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
          />
          <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        >${data.description}</textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="10"
          cols="50"
        >${data.moreInfo}</textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {

    const data = await get(`/data/facts/${ctx.params.id}`);
    console.log(data)
    ctx.render(editTemplate(onSubmit, data));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const category = formData.get('category');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const moreInfo = formData.get('additional-info');

        if(category == '' || imageUrl == '' || description == '' || moreInfo == '') {
            return window.alert('All fields are required');
        }
        
        await put(`/data/facts/${ctx.params.id}`, {category, imageUrl, description, moreInfo} );
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }

}