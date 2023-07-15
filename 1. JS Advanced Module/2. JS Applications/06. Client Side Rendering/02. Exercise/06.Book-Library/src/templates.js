import { html } from '../node_modules/lit-html/lit-html.js';
import { getAllBooks, selectBook } from './api.js';

export const renderButton = () => {
    return html`
        <button id="loadBooks">LOAD ALL BOOKS</button>
    `;
}

export const renderTable = (data) => {
    return html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${Object.entries(data).map((el) => html`
            <tr>
                <td>${el[1].title}</td>
                <td>${el[1].author}</td>
                <td>
                    <button id=${el[0]} class="edit">Edit</button>
                    <button id=${el[0]} class="del">Delete</button>
                </td>
            </tr>
        `)}
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
    `;
}

export const renderEditTable = async (data, id) => {
    const selectedData = await selectBook(id);
    
    return html`
        <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${Object.entries(data).map((el) => html`
            <tr>
                <td>${el[1].title}</td>
                <td>${el[1].author}</td>
                <td>
                    <button id=${el[0]} class="edit">Edit</button>
                    <button id=${el[0]} class="del">Delete</button>
                </td>
            </tr>
        `)}
        </tbody>
    </table>

    <form id="edit-form">
        <input type="hidden" name="${id}">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" value="${selectedData.title}" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" value="${selectedData.author}" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
    `;
}