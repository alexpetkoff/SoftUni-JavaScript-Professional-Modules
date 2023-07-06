import { loadComments } from "./loadComments.js";

export async function loadTopics() {

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    const topicTitle = document.querySelector('.topic-title');
    topicTitle.innerHTML = '';

    Object.values(data).forEach(element => {

        let {_id, content, title, username} = element;
        
        topicTitle.innerHTML += `
        <div class="topic-container">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="#" class="normal">
                        <h2 id="${_id}">${title}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });

    const a = document.querySelectorAll('.normal');
    Array.from(a).forEach(element => element.addEventListener('click', loadComments))
    
}