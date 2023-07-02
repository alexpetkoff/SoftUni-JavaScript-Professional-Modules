const form = document.querySelector('form');
form.addEventListener('submit', registerUser);
const div = document.getElementById('user');
div.style.display = 'none';

async function registerUser(event) {
    event.preventDefault();

    const dataForm = new FormData(form);
    const {email, password, rePass} = Object.fromEntries(dataForm.entries());

    try {
        if(email == '' || password == '' || rePass == '' || password != rePass) {
            throw new Error('Passwords don\'t match / Empty fields');
        }
        
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if(response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const userData = {
            id: data._id,
            email: data.email,
            token: data.accessToken,
        }
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';

    } catch(error) {
        alert(error.message);
    }

}