import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../api/data.js';

export function homeView() {
    const main = document.querySelector('main');
    const template = html`
    <section id="home">
        <article class="hero layout">
            <img src="./assets/team.png" class="left-col pad-med">
            <div class="pad-med tm-hero-col">
                    <h2>Welcome to Team Manager!</h2>
                    <p>Want to organize your peers? Create and manage a team for free.</p>
                    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                    ${!getUser() ? 
                    html`<a href="/register" class="action cta">Sign Up Now</a>`:
                    html`<a href="/teams" class="action cta">Browse Teams</a>`
                    }
            </div>
        </article>
    </section>
    `

    render(template, main);
}