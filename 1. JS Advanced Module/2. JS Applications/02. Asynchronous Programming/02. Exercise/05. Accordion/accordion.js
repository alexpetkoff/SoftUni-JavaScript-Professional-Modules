async function solution() {

    const section = document.getElementById('main')
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    data.forEach(element => {
        const {_id, title} = element;

        const accordion = document.createElement('div');
        accordion.classList.add('accordion');
        const head = document.createElement('div');
        head.classList.add('head');
        const span = document.createElement('span');
        span.textContent = title;
        const button = document.createElement('button');
        button.classList.add('button');
        button.setAttribute('id', _id);
        button.textContent = 'More'
        const extra = document.createElement('div');
        extra.classList.add('extra');
        const pContent = document.createElement('p');
        extra.style.display = 'none';

        head.appendChild(span);
        head.appendChild(button);
        accordion.appendChild(head);
        extra.appendChild(pContent);
        accordion.appendChild(extra);
        section.appendChild(accordion)
        button.addEventListener('click', showHidden);
        
    });

    async function showHidden(event) {
        const button = event.target;
        const responseHidden = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`);
        const dataHidden = await responseHidden.json();
        const head = button.parentElement;
        const extra = head.nextElementSibling;

        if(button.textContent === 'More') {
            button.textContent = 'Less';
            extra.children[0].textContent = dataHidden.content;
            extra.style.display = 'block';
        } else {
            button.textContent = 'More';
            extra.style.display = 'none';
        }
    }
}

solution();