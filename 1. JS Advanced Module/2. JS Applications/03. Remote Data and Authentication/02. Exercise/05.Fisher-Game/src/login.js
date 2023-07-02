const form = document.querySelector('form');
const div = document.getElementById('user');
div.style.display = 'none';

form.addEventListener('submit', loginUser);

async function loginUser(ev) {
    ev.preventDefault();

    try{
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData.entries());
        
        if(email === '' || password === '') {
            throw new Error('All fields must be filled!');
        }

        const response = await fetch('http://localhost:3030/users/login', {     
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
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