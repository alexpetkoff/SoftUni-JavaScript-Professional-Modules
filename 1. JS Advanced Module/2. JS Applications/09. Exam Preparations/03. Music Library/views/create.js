import {html} from '../node_modules/lit-html/lit-html.js';
import { post } from '../src/api.js';
import page from '../node_modules/page/page.mjs';

const createTemplate = (onSubmit) => html`
    <section id="create">
      <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onSubmit} class="create-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
          <input type="text" name="album" id="album-album" placeholder="Album" />
          <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
          <input type="text" name="release" id="album-release" placeholder="Release date" />
          <input type="text" name="label" id="album-label" placeholder="Label" />
          <input type="text" name="sales" id="album-sales" placeholder="Sales" />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onSubmit));

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

        await post(`/data/albums`, albumInfo);
        page.redirect(`/dashboard`);
    }
    
}