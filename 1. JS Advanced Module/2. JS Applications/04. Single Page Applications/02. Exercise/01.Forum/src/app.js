import { createTopic } from "./createTopic.js";
import { loadComments } from "./loadComments.js";
import { loadTopics } from "./loadTopics.js";

const container = document.querySelector('.container')
const main = container.querySelector('main');

const home = document.querySelector('a');
home.addEventListener('click', homeView);

function homeView() {
    Array.from(container.children).forEach(el => el.style.display = 'none');
    main.style.display = 'block';
    loadTopics();
}

homeView();