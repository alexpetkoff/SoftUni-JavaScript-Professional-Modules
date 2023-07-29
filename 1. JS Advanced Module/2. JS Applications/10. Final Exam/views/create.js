import { html } from '../node_modules/lit-html/lit-html.js';
import { post } from '../src/api.js';

const createTemplate = (onSubmit) => html`
      <section id="create">
        <div class="form">
          <h2>Add Fact</h2>
          <form @submit = ${onSubmit} class="create-form">
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
            />
            <input
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
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          ></textarea>
            <button type="submit">Add Fact</button>
          </form>
        </div>
      </section>
`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onSubmit));

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
        
        await post('/data/facts', {category, imageUrl, description, moreInfo} );
        ctx.page.redirect('/dashboard');
    }


}