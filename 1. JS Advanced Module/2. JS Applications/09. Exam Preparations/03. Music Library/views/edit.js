import {html} from '../node_modules/lit-html/lit-html.js';
import { put } from '../src/api.js';
import { getDetails } from '../src/data.js';
import page from '../node_modules/page/page.mjs';

const editTemplate = (data, onSubmit) => html`
    <section id="edit">
      <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${data.singer}" />
          <input value="${data.album}" type="text" name="album" id="album-album" placeholder="Album" />
          <input value="${data.imageUrl}" type="text" name="imageUrl" id="album-img" placeholder="Image url" />
          <input value="${data.release}" type="text" name="release" id="album-release" placeholder="Release date" />
          <input value="${data.label}" type="text" name="label" id="album-label" placeholder="Label" />
          <input value="${data.sales}" type="text" name="sales" id="album-sales" placeholder="Sales" />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
`;

export async function editPage(ctx) {

    const data = await getDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const singer = formData.get('singer');
        const album = formData.get('album');
        const imageUrl = formData.get('imageUrl');
        const release = formData.get('release');
        const label = formData.get('label');
        const sales = formData.get('sales');

        if(singer == '' || album == '' || imageUrl == '' 
        || release == '' || label == '' || sales == '') 
        {
          return window.alert('All fields are required!');
        }

        const albumInfo = {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        }

        await put(`/data/albums/${ctx.params.id}`,albumInfo);
        page.redirect(`/details/${ctx.params.id}`);
    }
    
}