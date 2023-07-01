const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadBooks);
const form = document.querySelector('form');
form.addEventListener('submit', submitBook);

const tbody = document.querySelector('tbody');
window.onload(tbody.innerHTML = '');

async function loadBooks(event) {
    tbody.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    Object.entries(data).forEach(line => {
        const id = line[0];
        const { author, title } = line[1];

        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tdTitle.textContent = title;
        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = author;
        const tdBtns = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('id', id)
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('id', id);
        tdBtns.appendChild(editBtn);
        tdBtns.appendChild(deleteBtn);
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdBtns);

        editBtn.addEventListener('click', editFunc);
        deleteBtn.addEventListener('click', deleteFunc);
        tbody.appendChild(tr);
    });

}

async function submitBook(event) {
    event.preventDefault();

    const data = new FormData(form);

    if (data.get('title') === '' || data.get('author') === '') {
        return;
    }

    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            author: data.get('author'),
            title: data.get('title')
        })
    })

}

async function deleteFunc(event) {
    const id = event.target.id;

    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    loadBooks();
}


function editFunc(event) {

    id = event.target.id;
    const button = document.querySelector('form button');
    const h3 = form.firstElementChild;
    h3.textContent = 'Edit FORM';

    const author = event.target.parentElement.previousElementSibling;
    const title = event.target.parentElement.previousElementSibling.previousElementSibling;

    const titleInput = document.getElementsByName('title')[0];
    const authorInput = document.getElementsByName('author')[0];

    button.textContent = 'Save';
    button.id = id;
    titleInput.value = title.textContent;
    authorInput.value = author.textContent;

    form.removeEventListener('submit', submitBook);
    form.addEventListener('submit', saveBook);

}

async function saveBook(event) {
    event.preventDefault();
    const h3 = form.querySelector('h3')
    const newTitle = document.querySelector('[name="title"]').value;
    const newAuthor = document.querySelector('[name="author"]').value;
    console.log(newTitle)
    const button = document.querySelector('form button');
    const id = button.id;

    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            author: newAuthor,
            title: newTitle
        })
    });

    form.removeEventListener('submit', saveBook);
    button.textContent = 'Submit';
    button.removeAttribute('id')
    form.addEventListener('submit', submitBook);
    h3.textContent = "FORM";

}
