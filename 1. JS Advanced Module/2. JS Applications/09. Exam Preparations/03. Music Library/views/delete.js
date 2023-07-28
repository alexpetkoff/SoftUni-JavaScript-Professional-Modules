import { del } from '../src/api.js';
import page from '../node_modules/page/page.mjs';

export async function deletePage(ctx) {
    await del(`/data/albums/${ctx.params.id}`);
    page.redirect('/dashboard');
}