import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get } from '../src/api.js';
import { getUserData } from '../src/utils.js';

const detailsTemplate = (book, isOwner, isLogged) => html`
<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${
                        isOwner 
                        ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                               <a class="button" href="/delete/${book._id}">Delete</a>`
                        : null
                    }

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${
                        isLogged ? html`<a class="button" href="/like">Like</a>` : null
                    }
                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`


export async function detailsPage(ctx) {

    let book = await get('/data/books/' + ctx.params.id)

    let isOwner;
    let isLogged;
    const user = getUserData();

    if( user && user.id == book._ownerId) {
        isOwner = true;
    } else {
        isOwner = false;
    }

    if(user != undefined && user.id != book._ownerId ) {
        isLogged = true;
    } else {
        isLogged = false;
    }
    
    ctx.render(detailsTemplate(book, isOwner, isLogged));
    
}