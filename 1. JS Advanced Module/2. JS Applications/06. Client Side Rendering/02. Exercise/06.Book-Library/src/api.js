const url = 'http://localhost:3030/jsonstore/collections/books/';

export async function getAllBooks() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export async function createBook(author, title) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            author,
            title
            })
    });
    // const data = await response.json();
    // return data;
}

export async function updateBook(id, author, title) {
    const response = await fetch(url + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            author,
            title
            })
    });
    const data = await response.json();
    return data;
}

export async function selectBook(id) {
    const response = await fetch(url + id);
    const data = response.json();
    return data;
}

export async function deleteBook(id) {
    const response = await fetch(url + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
   return;
}