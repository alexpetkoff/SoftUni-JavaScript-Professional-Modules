const form = document.querySelector('form');
const div = document.getElementById('user');
div.style.display = 'none';

form.addEventListener('submit', loginUser);

async function loginUser(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const {email, password} = Object.fromEntries(formData.entries());
    
    const response = await fetch('http://localhost:3030/users/login', {
        
        //TO DO tomorrow

    })
    
} 