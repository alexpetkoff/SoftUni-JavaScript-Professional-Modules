import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input
              type="text"
              name="model"
              id="model"
              value="${item.model}"
              placeholder="Model"
            />
            <input
              type="text"
              name="imageUrl"
              value="${item.imageUrl}"

              id="moto-image"
              placeholder="Moto Image"
            />
            <input
            type="number"
            value="${item.year}"
            name="year"
            id="year"
            placeholder="Year"
          />
          <input
          type="number"
          value="${item.mileage}"

          name="mileage"
          id="mileage"
          placeholder="mileage"
        />
        <input
          type="number"
          value="${item.contact}"

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
          >${item.about}</textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
      </div>
    </section>
`


export async function showEdit(ctx) {
    const itemId = ctx.params.id;
    const item = await getDataById(itemId);
    ctx.renderView(editTemplate(onSubmit, item));

    
    async function onSubmit(event) {
        event.preventDefault();

        const formData = [...new FormData(event.target).entries()];

        if ([...new FormData(event.target).values()].some(field => field == '')) {
            return alert("All fields are required!");
        }

        const item = formData.reduce((a, [k, v]) => {
            Object.assign(a, {[k]: v});
            return a;
        },{});
        await updateData(itemId, item);
        event.target.reset();
        ctx.page.redirect(`/details/${itemId}`);
    }
}

