import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import {post} from '../api/api.js';

export function createTeamView(error) {

    const main = document.querySelector('main');

    const template = html`
    <section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${createTeam} id="create-form" class="main-form pad-large">
            ${error ? html`<div class="error">${error.message}</div>` : null}
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
    </section>
    `;

    render(template, main);
}

async function createTeam(e) {
    e.preventDefault();
    try {

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if(data.name === '' || data.logoUrl === '' || data.description === '') {
            throw 'All fields are required!';
        }

        if(data.name.length < 4) {
            throw 'Name should be atleast 4 characters!';
        }

        if(data.description.length < 10) {
            throw 'Description should be atleast 10 characters!';
        }

        post('/data/teams', data);
        page.redirect('/');

    } catch(error) {
        createTeamView(error);
    }

}