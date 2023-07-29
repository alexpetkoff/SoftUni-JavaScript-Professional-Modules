import { html } from '../node_modules/lit-html/lit-html.js';
import { get } from '../src/api.js';
import { isLiked, likeCount, likeFact } from '../src/data.js';
import { getUserData } from '../src/utils.js';

const detailsTemplate = (data, isOwner, user, getLikes, isItLiked) => html`
      <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${data.imageUrl}" alt="example1" />
          <p id="details-category">${data.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">
                ${data.description}
                </p>
                 <p id ="more-info">
                  ${data.moreInfo}
                      </p>
            </div>

            <h3>Likes:<span id="likes">${getLikes}</span></h3>

            ${user !== null
                ? html`
                    <div id="action-buttons">
                    ${isOwner
                        ? html`
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${data._id}" id="delete-btn">Delete</a>
                        `
                        : null
                    }
                    ${
                        isItLiked === 0 && isOwner === false
                        ? html`<a href="javascript:void(0)" id="like-btn">Like</a>`
                        : null
                    }

                    </div>
                `
                : null
            }
            
          </div>
      </div>
      </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/facts/${id}`);
    const user = getUserData();
    const ownerId = data._ownerId;
    let getLikes = await likeCount(ctx.params.id);
    let isItLiked;
    let isOwner;
    if(user != null) {
        user.id === ownerId ? isOwner = true : isOwner = false;
        isItLiked = await isLiked(ctx.params.id, user.id);
    }
    ctx.render(detailsTemplate(data, isOwner, user, getLikes, isItLiked));
    


    const likeBtn = document.getElementById('like-btn');

    if(likeBtn != null) {
        likeBtn.addEventListener('click', async (e) => {
            await likeFact(ctx.params.id);
            ctx.page.redirect(`/details/${ctx.params.id}`);
        });
    }

}