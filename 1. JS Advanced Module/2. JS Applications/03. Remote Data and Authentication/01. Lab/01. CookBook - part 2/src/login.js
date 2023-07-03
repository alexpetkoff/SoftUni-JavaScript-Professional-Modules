const form = document.querySelector('form');
form.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {

        if(email == '' || password == '') {
            throw new Error('All fields must be filled!');
        }

        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if(res.status != '200') {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        const userData = {
            email: data.email,
            token: data.accessToken,
            id: data._id
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = 'index.html';

    } catch(error) {

        alert(error.message);

    }
}