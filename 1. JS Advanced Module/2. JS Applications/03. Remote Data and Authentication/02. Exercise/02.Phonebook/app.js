function attachEvents() {
    
    const ul = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createPhonebook);

    async function loadPhonebook(event) {

        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        ul.innerHTML='';
        Object.values(data).forEach(e => {

            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', deleteFunc);

            li.textContent = `${e.person}: ${e.phone}`;
            li.appendChild(btn);
            ul.appendChild(li);

            async function deleteFunc(event) {
                const id = e._id;
          
                await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                });

                loadPhonebook();
            }
        })
    }

    async function createPhonebook(event) {

        const personInput = document.getElementById('person');
        const person = personInput.value;
        const phoneInput = document.getElementById('phone');
        const phone = phoneInput.value;

        await fetch('http://localhost:3030/jsonstore/phonebook/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                person: person,
                phone: phone
            })
        });
        
        personInput.value = '';
        phoneInput.value = '';

        loadPhonebook();
    }

}

attachEvents();