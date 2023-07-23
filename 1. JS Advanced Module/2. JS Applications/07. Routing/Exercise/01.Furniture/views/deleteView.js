import { del } from "../api/api.js";
import page from '../node_modules/page/page.mjs';

export async function deleteView()  {
    
}

export async function onClick(e) {
    e.preventDefault();
    const conf = confirm('Are you sure you want to DELETE this furniture?');

    if(conf) {
        const id = e.target.id;
        del(`/data/catalog/` + id);
        page.redirect('/');
    }

}