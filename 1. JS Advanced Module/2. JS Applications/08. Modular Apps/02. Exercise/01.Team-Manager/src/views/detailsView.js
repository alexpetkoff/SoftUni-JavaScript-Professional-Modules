import { getUser } from "../api/data.js";
import { get } from '../api/api.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';
const main = document.querySelector('main');

export async function detailsView(ctx) {
    const user = getUser();
    const team = await get(`/data/teams/${ctx.params.id}`);
    let template;
    
    if(user._id === team._ownerId) {
        template = html`
        <section id="team-home">
                <article class="layout">
                    <img src="${team.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>Team Rocket</h2>
                        <p>Gotta catch 'em all!</p>
                        <span class="details">3 Members</span>
                        <div>
                            <a href="#" class="action">Edit team</a>
                            <a href="#" class="action">Join team</a>
                            <a href="#" class="action invert">Leave team</a>
                            Membership pending. <a href="#">Cancel request</a>
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            <li>My Username</li>
                            <li>James<a href="#" class="tm-control action">Remove from team</a></li>
                            <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
                        </ul>
                    </div>
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                        </ul>
                    </div>
                </article>
            </section>
        `
    }

    render(template, main);
}