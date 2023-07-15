import { html , render } from './node_modules/lit-html/lit-html.js';
import { deleteBook, getAllBooks, updateBook, createBook } from './src/api.js';
import { renderButton, renderEditTable, renderTable } from './src/templates.js';

const btnDiv = document.querySelector('#btn');
const containerDiv = document.querySelector("#container");
render(renderButton(), btnDiv);

const loadBtn = document.getElementById('loadBooks')
loadBtn.addEventListener('click', async () => {
    const data = await getAllBooks();
    render(renderTable(data), containerDiv);
});

containerDiv.addEventListener('click', renderFunc);

async function renderFunc(e) {
    const target = e.target;
    
    if(target.className === 'edit') {
        const data = await getAllBooks();
        render( await renderEditTable(data, target.id), containerDiv);
        const form = document.querySelector('#edit-form');

        form.addEventListener('submit', async(event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            const { author, title } = data;
            if(!title || !author) {
                return;
            }
            const id = target.id;
            await updateBook(id, author, title);
            loadBtn.click();
        });
    }

    if(target.className === 'del') {
        const id = target.id;
        await deleteBook(id);
        loadBtn.click();
    }
    if(target.value === 'Submit') {

        const form = document.querySelector('#add-form');
        form.addEventListener('submit', formFunc)
        async function formFunc (event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            const { author, title } = data;
            if(!data || !title) {
                form.removeEventListener('submit', formFunc);
                return;
            }
            await createBook(author, title);
            form.reset();
            loadBtn.click();
            form.removeEventListener('submit', formFunc);
        }
    }
}