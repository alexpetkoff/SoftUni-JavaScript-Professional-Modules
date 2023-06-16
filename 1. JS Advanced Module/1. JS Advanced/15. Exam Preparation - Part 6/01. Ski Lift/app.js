window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let peopleCountInput = document.getElementById('people-count');
    let fromDateInput = document.getElementById('from-date');
    let daysCountInput = document.getElementById('days-count');

    let nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let peopleCount = peopleCountInput.value;
        let fromDate = fromDateInput.value;
        let daysCount = daysCountInput.value;

        if (firstName === '' || lastName === '' || peopleCount === '' || fromDate === '' || daysCount === '') return;

        let ul = document.getElementsByClassName('ticket-info-list')[0];

        let li = document.createElement('li');
        li.classList.add('ticket');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`
        let p1 = document.createElement('p');
        p1.textContent = `From date: ${fromDate}`;
        let p2 = document.createElement('p');
        p2.textContent = `For ${daysCount} days`;
        let p3 = document.createElement('p');
        p3.textContent = `For ${peopleCount} people`;
        let buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';
        buttonEdit.classList = 'edit-btn';
        let buttonCont = document.createElement('button')
        buttonCont.textContent = 'Continue';
        buttonCont.classList = 'continue-btn';

        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        li.appendChild(buttonEdit);
        li.appendChild(buttonCont);

        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysCountInput.value = '';

        nextStepBtn.disabled = true;

        buttonEdit.addEventListener('click', (e) => {

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            fromDateInput.value = fromDate;
            daysCountInput.value = daysCount;

            nextStepBtn.disabled = false;
            ul.innerHTML = '';

        }); 

        buttonCont.addEventListener('click', (e) => {

            let ul = document.getElementsByClassName('confirm-ticket')[0];
            ul.innerHTML = `
            <li class="ticket-content">
                <article>
                    <h3>Name: ${firstName} ${lastName}</h3>
                    <p>From date: ${fromDate}</p>
                    <p>For ${daysCount} days</p>
                    <p>For ${peopleCount} people</p>
                </article>
                <button class="confirm-btn">Confirm</button>
                <button class="cancel-btn">Cancel</button>
            </li>`;

            e.target.parentElement.remove();

            let cancel = document.getElementsByClassName('cancel-btn')[0];
            cancel.addEventListener('click', cancelFunc);

            let confirm = document.getElementsByClassName('confirm-btn')[0];
            confirm.addEventListener('click', confirmFunc);

        });

        function cancelFunc(event) {

            let li = event.target.parentElement;
            li.remove();

            nextStepBtn.disabled = false;
        
        }

        function confirmFunc(event) {

            let div = document.getElementById('main');
            div.remove();

            let h1 = document.createElement('h1');
            h1.id = 'thank-you';
            h1.textContent = 'Thank you, have a nice day! ';

            let buttonBack = document.createElement('button');
            buttonBack.id = 'back-btn';
            buttonBack.textContent = 'Back';

            let body = document.getElementsByTagName('body')[0];
            body.appendChild(h1);
            body.appendChild(buttonBack);

            buttonBack.addEventListener('click', () => {
                window.location.reload();
            });
        
        }

    }
}