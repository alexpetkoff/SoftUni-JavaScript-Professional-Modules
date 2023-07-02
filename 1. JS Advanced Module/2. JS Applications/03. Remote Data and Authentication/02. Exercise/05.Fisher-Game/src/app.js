
window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    const catches = document.getElementById('catches').children;
    Array.from(catches).forEach(child => child.remove());

    const loadBtn = document.querySelector('.load');
    loadBtn.addEventListener('click', loadCatches);
    const addForm = document.getElementById('addForm');
    const addBtn = document.querySelector('.add');
    addForm.addEventListener('submit', addCatch);


    if (sessionStorage.userData === undefined) {
        addBtn.disabled = true;
        document.querySelectorAll('#addForm input').forEach((x) => (x.disabled = true));
        document.getElementById('user').style.display = 'none';
    } else {
        const { id, email, token } = JSON.parse(sessionStorage.userData);
        document.querySelector('p>span').textContent = email;
        addBtn.disabled = false;
        document.getElementById('guest').style.display = 'none';
        document.getElementById('logout').addEventListener('click', onLogout)
    }
});

async function loadCatches(e) {

    try {
        const catches = document.getElementById('catches').children;
        Array.from(catches).forEach(child => child.remove());

        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();

        document.getElementById('catches')
            .replaceChildren(...data.map(template));

        const updateBtns = document.querySelectorAll('.update');
        Array.from(updateBtns).forEach(b => b.addEventListener('click', updateCatch));
        const deleteBtns = document.querySelectorAll('.delete');
        Array.from(deleteBtns).forEach(b => b.addEventListener('click', deleteCatch));
    } catch (error) {
        alert(error.message)
    }

}

async function addCatch(e) {
    e.preventDefault();

    try {
        const userData = JSON.parse(sessionStorage.userData);
        const formData = new FormData(e.target);
        const objData = Object.fromEntries(formData.entries());
        if (!sessionStorage.userData) {
            window.location = '/login.html';
            return;
        }
        if (Object.values(objData).some(x => x === '')) {
            throw new Error('Fill everything, please!');
        }
        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': userData.token
            },
            body: JSON.stringify(objData)
        });
        if (response.ok != true) {
            throw new Error('smth went wrong')
        }
        e.target.reset();
        loadCatches();

    } catch (error) {
        alert(error.message);
    }

}

async function updateCatch(e) {

    try {
        const id = e.target.getAttribute('data-id');
        const userData = JSON.parse(sessionStorage.userData);
        const div = e.target.parentElement;
        const inputs = div.querySelectorAll('input');
        const data = {};

        Array.from(inputs).forEach(element => data[element.className] = element.value);

        if (Object.values(data).some(x => x == '')) {
            throw new Error('Fill everything, please!')
        }

        const response = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });

        if(response.ok != true) {
            throw new Error('You have no permission to do that!')
        }

        loadCatches();
    } catch (error) {
        alert(error.message);
    }
}

async function deleteCatch(e) {
    try {
        const id = e.target.getAttribute('data-id');
        const userData = JSON.parse(sessionStorage.userData);
        const response = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            }
        });
        if(response.ok != true) {
            throw new Error('You have no permission to do that!')
        }
        loadCatches();
    } catch (error) {
        alert(error.message);
    }

}

async function onLogout(e) {
    e.preventDefault();
    try {
        const { id, email, token } = JSON.parse(sessionStorage.userData);
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
        });

        if (response.status != 204) {
            throw new Error('You are not authorized!');
        }

        sessionStorage.clear();
        window.location = './index.html';
    } catch (error) {
        alert(error.message);
    }

}

function template(i) {
    try {
        const div = document.createElement('div');
        div.className = 'catch';
        let userData = null;

        if (sessionStorage.length != 0) {
            userData = JSON.parse(sessionStorage.userData);
        }
        const ifOwner = userData && i._ownerId === userData.id;

        div.innerHTML =
            `   <label>Angler</label>
        <input type="text" class="angler" value="${i.angler}" ${!ifOwner ? 'disabled' : ''}>
        <label>Weight</label>
        <input type="text" class="weight" value="${i.weight}" ${!ifOwner ? 'disabled' : ''}>
        <label>Species</label>
        <input type="text" class="species" value="${i.species}" ${!ifOwner ? 'disabled' : ''}>
        <label>Location</label>
        <input type="text" class="location" value="${i.location}" ${!ifOwner ? 'disabled' : ''}>
        <label>Bait</label>
        <input type="text" class="bait" value="${i.bait}" ${!ifOwner ? 'disabled' : ''}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${i.captureTime}" ${!ifOwner ? 'disabled' : ''}>
        <button class="update" data-id="${i._id}" ${!ifOwner ? 'disabled' : ''}>Update</button>
        <button class="delete" data-id="${i._id}" ${!ifOwner ? 'disabled' : ''}>Delete</button>
    `;
        return div;
    } catch(error) {
        alert(error.message)
    }
}