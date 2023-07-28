import {html} from '../node_modules/lit-html/lit-html.js';
import { getDetails, getTotalLikes, isLiked, likeAlbum } from '../src/data.js';
import { getUserData } from '../src/utils.js';
import page from '../node_modules/page/page.mjs';

const detailsTemplate = (data, user, isOwner, totalLikes, isEligable,likePage) => html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src="${data.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
          <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
          <p>
            <strong>Album name:</strong><span id="details-album">${data.album}</span>
          </p>
          <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
          <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
          <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>
        
        <!--Edit and Delete are only for creator-->
        ${user != null
            ? html`
            <div id="action-buttons">
                ${
                    isOwner 
                        ? html` <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                                <a href="/delete/${data._id}" id="delete-btn">Delete</a>`
                        : null
                }
                ${
                    isEligable == true
                        ? html` <a @click=${likePage} href="javascript:void(0)" id="like-btn">Like</a>`
                        : null
                }

            </div>
            `
            : null
        }
        
      </div>
    </section>
`;

export async function detailsPage(ctx) {

    const user = await getUserData();
    const id = ctx.params.id;
    const data = await getDetails(id);
    const totalLikes = await getTotalLikes(ctx.params.id);
    let hasLiked;
    let isOwner;

    if(user) {
        user.id === data._ownerId ? isOwner = true : isOwner = false;
        hasLiked = await isLiked(ctx.params.id, user.id);

    }

    let isEligable = false;

    if(hasLiked === 0 && isOwner === false) {
        isEligable = true;
    }

    ctx.render(detailsTemplate(data, user, isOwner, totalLikes, isEligable, likePage));



    async function likePage(e) {
        await likeAlbum(id);
        page.redirect(`/details/${id}`);
    }
}

