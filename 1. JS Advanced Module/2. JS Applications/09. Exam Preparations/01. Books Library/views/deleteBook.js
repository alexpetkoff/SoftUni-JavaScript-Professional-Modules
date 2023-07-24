import { html, render } from '../node_modules/lit-html/lit-html.js';
import { del } from '../src/api.js';

export async function deleteBook(ctx) {

    if(window.confirm('Are you sure?')) {
        del('/data/books/' + ctx.params.id);
        ctx.page.redirect('/');
    } else {
        return;
    }

}