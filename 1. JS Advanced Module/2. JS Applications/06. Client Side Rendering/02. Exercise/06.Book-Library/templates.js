import { html, render } from './node_modules/lit-html/lit-html.js';

let isVisibleEdit = false;

export async function renderAllBooks() {
    const body = document.querySelector('body');

    const tempBtn = html`
        <button id="loadBooks">LOAD ALL BOOKS</button>
    `;

    render(tempBtn, body);

    const loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', async function load(e) {

        const response = await fetch
            ('http://localhost:3030/jsonstore/collections/books');
        const data = await response.json();

        const tempBooks = html`
                    <button id="loadBooks">LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${Object.values(data).map((b) => {
                    return html`
                        <tr>
                            <td>${b.title}</td>
                            <td>${b.author}</td>
                            <td>
                                <button class="edit">Edit</button>
                                <button class="del">Delete</button>
                            </td>
                        </tr>
                    `}
                )}
            </tbody>
        </table>

        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit">
        </form>

        <form id="edit-form">
            <input type="hidden" name="id">
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Save">
        </form>
        `;
        render(tempBooks, body);
        
        const btnsEdit = document.querySelectorAll('.edit');
        const btnsDel = document.querySelectorAll('.del');
        const addForm = document.getElementById('add-form');
        const editForm = document.getElementById('edit-form');
        editForm.style.display = 'none';
        addForm.style.display = 'block';
        Array.from(btnsEdit).forEach(btn => btn.addEventListener('click', editInfo));
        Array.from(btnsDel).forEach(btn => btn.addEventListener('click', deleteInfo));
    });
}

function editInfo(e) {
    const editForm = document.getElementById('edit-form');
    const addForm = document.getElementById('add-form');

    editForm.style.display = 'block';
    addForm.style.display = 'none';

}

function deleteInfo(e) {
    console.log('this is for delete');
}