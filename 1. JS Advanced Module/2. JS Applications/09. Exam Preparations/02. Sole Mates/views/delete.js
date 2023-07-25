import { html, render } from '../node_modules/lit-html/lit-html.js';
import { del } from '../src/api.js';

export async function deleteItem(ctx) {
    const id = ctx.params.id;

    if(window.confirm('Are you sure?')) {
        await del(`/data/shoes/${id}`);
    } else {
        return;
    }

    ctx.page.redirect('/dashboard');

}