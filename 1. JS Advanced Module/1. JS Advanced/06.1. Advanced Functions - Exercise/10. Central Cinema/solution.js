function solve() {

    let addDiv = document.getElementById('container');
    let nameInput = addDiv.children[0];
    let hallInput = addDiv.children[1];
    let priceInput = addDiv.children[2];
    let btnOnScreen = addDiv.children[3];
    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', deleteAll);
    btnOnScreen.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();
        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        let isValid = name && hall && price; 
  
        if (!isValid || isNaN(price) || Number(price) == 0) {return;}

        onScreen(name, hall, price);
        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
    }

    function onScreen(name, hall, price) {
        let section = document.getElementById('movies');
        let ul = section.getElementsByTagName('ul')[0];

        let li = document.createElement('li');
        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let div = document.createElement('div');
        let strong2 = document.createElement('strong');
        let input = document.createElement('input');
        let button = document.createElement('button');

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        div.appendChild(strong2);
        div.appendChild(input);
        div.appendChild(button);
        ul.appendChild(li);
        span.textContent = `${name}`;
        strong.textContent = `Hall: ${hall}`;
        strong2.textContent = `${Number(price).toFixed(2)}`;
        input.setAttribute('placeholder', 'Tickets Sold');
        button.textContent = 'Archive';

        button.addEventListener('click', () => {
            if(input.value && !isNaN(input.value)) {
                let ticketsSold = Number(input.value);
                let total = ticketsSold * Number(price);
                li.remove();
                archive(name, total);
            }
        });
    }

    function archive(name, total) {
        let section = document.getElementById('archive');
        let ul = section.getElementsByTagName('ul')[0];

        let li = document.createElement('li')
        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let deleteBtn = document.createElement('button');

        span.textContent = name;
        strong.textContent = `Total amount: ${total.toFixed(2)}`;
        deleteBtn.textContent = 'Delete';
        ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }
    function deleteAll(e) {
        let archiveList = document.querySelector('#archive');
        let ul = archiveList.getElementsByTagName('ul')
        let list = ul[0].children;
        Array.from(list).forEach(el => el.remove());
    }
}