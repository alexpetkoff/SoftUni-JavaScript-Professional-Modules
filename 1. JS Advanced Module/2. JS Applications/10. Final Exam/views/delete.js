import { del } from "../src/api.js";
import page from '../node_modules/page/page.mjs'

export async function deletePage(ctx) {

    if(window.confirm('Are you sure?')) {
        await del(`/data/facts/${ctx.params.id}`);
        page.redirect('/dashboard');
    }

}