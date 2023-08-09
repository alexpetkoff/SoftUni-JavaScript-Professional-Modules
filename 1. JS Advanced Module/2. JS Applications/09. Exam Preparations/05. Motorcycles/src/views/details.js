import { deleteData, getDataById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner) => html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="year">Year: ${item.year}</p>
            <p class="mileage">Mileage: ${item.mileage} km.</p>
            <p class="contact">Contact Number: ${item.contact}</p>
               <p id = "motorcycle-description">
               ${item.about}
                </p>
          </div>
           <!--Edit and Delete are only for creator-->
           ${
            isOwner === true ?
            html`
                <div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a href="#" @click=${onDelete} id="delete-btn">Delete</a>
      </div>
            `
            : null
           }

        </div>
    </div>
  </section>
`;


export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const item = await getDataById(itemId);
    const isOwner = userData && userData.id == item._ownerId;
    ctx.renderView(detailsTemplate(onDelete, item, isOwner));

    async function onDelete() {

        if(window.confirm('Are you sure?')) {
          await deleteData(itemId);
          ctx.page.redirect('/dashboard');
        }

    }
}
