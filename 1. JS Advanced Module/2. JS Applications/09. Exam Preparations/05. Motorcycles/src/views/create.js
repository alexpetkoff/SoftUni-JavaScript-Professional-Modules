import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
      <h2>Add Motorcycle</h2>
      <div class="form">
        <h2>Add Motorcycle</h2>
        <form @submit=${onSubmit} class="create-form">
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
          />
          <input
            type="text"
            name="imageUrl"
            id="moto-image"
            placeholder="Moto Image"
          />
          <input
          type="number"
          name="year"
          id="year"
          placeholder="Year"
        />
        <input
        type="number"
        name="mileage"
        id="mileage"
        placeholder="mileage"
      />
      <input
        type="text"
        name="contact"
        id="contact"
        placeholder="contact"
      />
        <textarea
          id="about"
          name="about"
          placeholder="about"
          rows="10"
          cols="50"
        ></textarea>
          <button type="submit">Add Motorcycle</button>
        </form>
      </div>
    </section>
`;

export function showCreate(ctx) {
    
    ctx.renderView(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = [...new FormData(event.target).entries()];

        if ([...new FormData(event.target).values()].some(field => field == '')) {
            return alert('All fields are required!');
        }

        const inputData = formData.reduce((a, [k, v]) => {
            Object.assign(a, {[k]: v});
            return a;
        },{});

        await createData(inputData);
        event.target.reset();
        ctx.page.redirect('/dashboard');

    }
}
