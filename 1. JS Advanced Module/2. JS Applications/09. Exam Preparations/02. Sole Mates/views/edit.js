import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get, put } from '../src/api.js';

const editTemplate = (onSubmit, item) => html`
            <section id="edit">
            <div class="form">
              <h2>Edit item</h2>
              <form @submit=${onSubmit} class="edit-form">
                <input
                  type="text"
                  name="brand"
                  id="shoe-brand"
                  placeholder="Brand"
                  value="${item.brand}"
                />
                <input
                  type="text"
                  name="model"
                  id="shoe-model"
                  placeholder="Model"
                  value="${item.model}"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="shoe-img"
                  placeholder="Image url"
                  value="${item.imageUrl}"
                />
                <input
                  type="text"
                  name="release"
                  id="shoe-release"
                  placeholder="Release date"
                  value="${item.release}"
                />
                <input
                  type="text"
                  name="designer"
                  id="shoe-designer"
                  placeholder="Designer"
                  value="${item.designer}"
                />
                <input
                  type="text"
                  name="value"
                  id="shoe-value"
                  placeholder="Value"
                  value="${item.value}"
                />
  
                <button type="submit">post</button>
              </form>
            </div>
            </section>
`;

export async function editItem(ctx) {

    const id = ctx.params.id;
    const item = await get(`/data/shoes/${id}`);

    ctx.render(editTemplate(onSubmit, item));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const brand = formData.get('brand');
        const model = formData.get('model');
        const imageUrl = formData.get('imageUrl');
        const release = formData.get('release');
        const designer = formData.get('designer');
        const value = formData.get('value');

        if (brand == '' || model == '' || imageUrl == '' ||
            release == '' || designer == '' || value == '') 
        {
            return window.alert('All fields required');
        }

        await put(`/data/shoes/${id}`, {brand, model, imageUrl, release, designer, value});

        ctx.page.redirect(`/details/${id}`);
        
    }

}