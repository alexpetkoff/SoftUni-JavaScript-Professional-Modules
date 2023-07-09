import { get, del } from '../src/api.js';

const info = document.getElementById('info');
const section = document.getElementById('dashboard-holder');
[...section.children].forEach(c => c.remove());

export async function catalogView(context) {
    const res = await get('data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');

    if (res.length === 0) {
        const h1 = document.createElement('h1');
        h1.textContent = 'No ideas yet! Be the first one :)';

        section.appendChild(h1);
    } else {

        section.innerHTML = '';
        res.forEach(element => {

            section.innerHTML +=
                `<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
                <div class="card-body">
                    <p class="card-text">${element.title}</p>
                </div>
                <img class="card-image" src="${element.img}" alt="Card image cap">
                <a id="${element._id}" class="btn" href="">Details</a>
            </div>`;

        });

        const detailsBtn = section.querySelectorAll('.btn');
        detailsBtn.forEach(btn => btn.addEventListener('click', displayIdeas));
    }

    context.showView(section);

    async function displayIdeas(e) {
        e.preventDefault();
        let user = null;
        if(localStorage.user) {
            user = JSON.parse(localStorage.getItem('user'));
        }
        const id = e.target.id;
        const res = await get(`data/ideas/${id}`);

        let { _ownerId, title, description, img, _createdOn, _id } = res;
        const currentInfo = info.cloneNode(true);
        currentInfo.querySelector('.det-img').src = img;
        currentInfo.querySelector('.display-5').textContent = title;
        currentInfo.querySelector('.idea-description').textContent = description;

        if (user != null && _ownerId == user._id) {
            currentInfo.querySelector('.detb').style.display = 'block';
            currentInfo.querySelector('.detb').addEventListener('click', async (e) => {
                e.preventDefault();
                const user = JSON.parse(localStorage.getItem('user'));
                const res = await del(`data/ideas/${_id}`, user.accessToken);
                
                catalogView(context);
            });
        } else {
            currentInfo.querySelector('.detb').remove();
        }

        const main = document.querySelector('main');
        main.replaceChildren(currentInfo);
    }
}