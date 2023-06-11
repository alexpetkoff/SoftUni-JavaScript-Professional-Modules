function solve() {

    let buttonAdd = document.querySelector('#add');
    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        let task = document.querySelector('#task').value;
        let description = document.querySelector('#description').value;
        let dueDate = document.querySelector('#date').value;
        if (!task || !description || !dueDate) {
            return;
        }
        openTask(task, description, dueDate);
    });

    function openTask(task, description, dueDate) {
        let divTag = document.querySelectorAll('section')[1]
        let divArticleSection = divTag.children[1];
        let article = document.createElement('article');
        let h3 = document.createElement('h3')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let divFlex = document.createElement('div');
        let buttonStart = document.createElement('button');
        let buttonDelete = document.createElement('button');
        buttonStart.textContent = 'Start';
        buttonDelete.textContent = 'Delete';
        divArticleSection.appendChild(article);
        article.appendChild(h3).textContent = task;
        article.appendChild(p1).textContent = `Description: ${description}`;
        article.appendChild(p2).textContent = `Due Date: ${dueDate}`;
        article.appendChild(divFlex).className = 'flex';
        divFlex.appendChild(buttonStart).className = 'green';
        divFlex.appendChild(buttonDelete).className = 'red';

        buttonDelete.addEventListener('click', (e) => {
            article.remove();
        });
        buttonStart.addEventListener('click', (e) => {
            inProgress(article)
        });
    }

    function inProgress(article) {
        let buttonDelete = article.getElementsByClassName('green')[0];
        let buttonFinish = article.getElementsByClassName('red')[0];
        buttonDelete.textContent = 'Delete';
        buttonFinish.textContent = 'Finish';
        buttonDelete.className = 'red';
        buttonFinish.className = 'orange';
        document.getElementById('in-progress').appendChild(article);

        buttonDelete.addEventListener('click', (e) => {
            article.remove();
        })
        buttonFinish.addEventListener('click', (e) => {
            complete(article);
        })
    }

    function complete(article) {
        let section = document.querySelectorAll('section')[3];
        let secondDiv = section.children[1];
        secondDiv.appendChild(article);
        article.children[3].remove();
    }
}