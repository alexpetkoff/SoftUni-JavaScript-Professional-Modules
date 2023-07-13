import { html, render } from './node_modules/lit-html/lit-html.js';

async function fetchItems() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    return data;
}

function renderItems(items) {
    const menu = document.getElementById('menu');
    render(
        html`
        ${Object.values(items).map((item) => html`<option value="${item._id}">${item.text}</option>`)}
      `,
        menu
    );
}

async function addItem(itemText) {
    if(itemText === '') {
        return;
    }
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: itemText })
    });

    if (response.ok) {
        const newItem = await response.json();
        return newItem;
    } else {
        throw new Error('Failed to add item');
    }
}

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemInput = document.getElementById('itemText');
    const newItemText = itemInput.value;

    try {
        const newItem = await addItem(newItemText);
        itemInput.value = '';
        renderItems(await fetchItems());
    } catch (error) {
        console.error(error);
    }
});

(async () => {
    try {
        const items = await fetchItems();
        renderItems(items);
    } catch (error) {
        console.error(error);
    }
})();