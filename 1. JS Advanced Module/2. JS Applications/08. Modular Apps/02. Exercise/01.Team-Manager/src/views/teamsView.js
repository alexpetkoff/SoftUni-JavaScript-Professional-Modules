import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../api/data.js';
import { get } from '../api/api.js';

const obj = {};
getTeamMembers();

export async function teamsView() {
    const isLogged = getUser();
    const main = document.querySelector('main');
    const teams = await getTeams();

    const template = html`
    <section id="browse">
                <article class="pad-med">
                    <h1>Team Browser</h1>
                </article>
                
                ${
                    isLogged ?
                        html`<article class="layout narrow">
                            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
                         </article>`:
                         null
                }

                ${
                teams.map((el) => html`
                <article class="layout">
                    <img src="${el.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${el.name}</h2>
                        <p>${el.description}</p>
                        <span class="details">${obj[el._id] ? obj[el._id] : 0} Members</span>
                        <div><a href="/details" class="action">See details</a></div>
                    </div>
                </article>
                `)}
    </section>
    `;

    render(template, main);
}

export async function getTeams() {
    const response = await get('/data/teams');
    return await response;
}

export async function getTeamMembers() {

    const response = await get('/data/members/')
    const members = await response;

    members.forEach(element => {
        if(obj[element.teamId]) {
            obj[element.teamId] += 1;
        } else {
            obj[element.teamId] = 1;
        }
    });

}