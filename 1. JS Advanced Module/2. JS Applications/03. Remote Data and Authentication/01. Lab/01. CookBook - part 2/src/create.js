const form = document.querySelector('form');
form.addEventListener('submit', createRecipe);

async function createRecipe(e) {
    e.preventDefault();

    try {
        const userData = JSON.parse(sessionStorage.userData);
        const formData = new FormData(e.target);
        let {name, img, ingredients, steps} = Object.fromEntries(formData.entries());

        if(name == '' || img == '' || ingredients == '' || steps == '') {
            throw new Error('Please, fill all fields!');
        }

        ingredients = ingredients.split('\n');
        steps = steps.split('\n');

        const res = await fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                name: name,
                img: img,
                ingredients: ingredients,
                steps: steps
            })
        });
       
        if(res.ok === false) {
            const error = await res.json();
            throw error;
        }

        window.location = 'index.html';

    } 
    catch(error) {
        alert(error.message);
    }

}