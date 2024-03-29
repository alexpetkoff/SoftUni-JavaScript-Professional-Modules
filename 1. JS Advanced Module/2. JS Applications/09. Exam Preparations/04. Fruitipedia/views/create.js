import { html, render } from '../node_modules/lit-html/lit-html.js';
import { post } from '../src/api.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
      <div class="form">
        <h2>Add Fruit</h2>
        <form @submit=${onSubmit} class="create-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
          />
          <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
          <button type="submit">Add Fruit</button>
        </form>
      </div>
    </section>
`;


export async function createPage(ctx) {

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');
        const nutrition = formData.get('nutrition');

        if(name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return windows.alert('All fields are required!');
        }
        
        await post('/data/fruits', {name, imageUrl, description,nutrition});
        ctx.page.redirect('/fruits');
    }
}
