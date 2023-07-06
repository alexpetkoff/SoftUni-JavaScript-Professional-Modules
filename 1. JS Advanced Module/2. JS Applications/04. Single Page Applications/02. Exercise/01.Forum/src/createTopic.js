import { loadTopics } from "./loadTopics.js";

const form = document.querySelector('form');
const cancel = form.querySelector('.cancel');
const post = form.querySelector('.public');

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
});

post.addEventListener('click', createTopic);

export async function createTopic(e) {
    e.preventDefault();

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        Object.values(data).forEach(d => {
            if(d === '') {
                throw new Error('Fill everything!');
            }
        });

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.topicName,
                username: data.username,
                content: data.postText
            })
        })

        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error);
        }

        form.reset();
        loadTopics();
    } catch (error) {
        alert(error.message);
    }
}