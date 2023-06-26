function lockedProfile() {

    const main = document.getElementById('main');
    const profileTemplate = document.querySelector('.profile');
    const inputs = document.querySelectorAll('input');
    const hiddenDiv = document.querySelector('.user1Username');
    hiddenDiv.style.display = 'none';
    main.innerHTML = '';

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(user => {
                const { _id, username, email, age } = user;
                const [radioLock, radioUnlock, _username, _email, _age] = Array.from(inputs);
                
                _username.value = username;
                _email.value = email;
                _age.value = age;
                radioLock.setAttribute('name', `${username}Lock`);
                radioUnlock.setAttribute('name', `${username}Lock`);

                const currentUserProfile = profileTemplate.cloneNode(true);
                const button = currentUserProfile.querySelector('button');
                button.addEventListener('click', showHide)
                main.appendChild(currentUserProfile);
            });

        });

}

function showHide(event) {

    const button = event.target;
    const profile = button.parentElement;
    const currentRadioLock = profile.children[2];
    const hiddenElement = profile.children[9];

    if (!currentRadioLock.checked) {
        if (hiddenElement.style.display === 'block') {
            hiddenElement.style.display = 'none';
            button.innerText = 'Show more';
        } else {
            hiddenElement.style.display = 'block';
            button.innerText = 'Hide it';
        }
    }

}