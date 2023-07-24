import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getUserBooks } from '../src/data.js';
import { getUserData } from '../src/utils.js';
import { bookPreviewTemplate } from './home.js';

const dashboardTemplate = (books) => html`
            <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            ${books 
                ? html `<ul class="my-books-list">
                    ${books.map(bookPreviewTemplate)}
                </ul>`
                : html `<p class="no-books">No books in database!</p>`
            }
`


export async function myBooks(ctx) {
    const user = await getUserData();
    const books = await getUserBooks(user.id);
    
    ctx.render(dashboardTemplate(books));
    
}