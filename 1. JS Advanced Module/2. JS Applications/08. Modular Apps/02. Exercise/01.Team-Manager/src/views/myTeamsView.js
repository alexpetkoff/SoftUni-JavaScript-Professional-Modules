import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../api/data.js';
import { get } from '../api/api.js';

const obj = {};
getTeamMembers();

export async function myTeamsView() {
    const user = getUser();
    const main = document.querySelector('main');

    const membership = await isMember();

    const template = html`
<section id="my-teams">
    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

${
    membership ? membership.map((m) => html`
    <article class="layout">
        <img src="${m['team'].logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${m['team'].name}</h2>
            <p>${m['team'].description}</p>
            <span class="details">${obj[m['team']._id] ? obj[m['team']._id] : 0} Members</span>
            <div><a href="/details/${m['team']._id}" class="action">See details</a></div>
        </div>
    </article>`) : 
    html`
        <article class="layout narrow">
            <div class="pad-med">
                <p>You are not a member of any team yet.</p>
                <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own
            team.</p>
            </div>
            <div class="${user._id}"><a href="/create" class="action cta">Create Team</a></div>
        </article>`
}
</section>
`;

render(template, main);

}

export async function isMember() {
    const user = getUser();

    if(user) {
        const id = user._id;
        const teams = await get(`/data/members?where=_ownerId%3D%22${id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);

        if(typeof teams === 'object') return teams;
        return false;
    }
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