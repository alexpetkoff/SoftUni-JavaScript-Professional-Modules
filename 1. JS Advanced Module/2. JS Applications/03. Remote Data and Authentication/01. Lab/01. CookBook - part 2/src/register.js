const form = document.querySelector('form');
form.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        if (
            email == '' || password == '' ||
            rePass == '' || password != rePass
        ) {
            throw new Error('Incorect fields!');
        }

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, rePass })
        })

        if (res.status != '200') {
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
        alert(error.message)
    }
}