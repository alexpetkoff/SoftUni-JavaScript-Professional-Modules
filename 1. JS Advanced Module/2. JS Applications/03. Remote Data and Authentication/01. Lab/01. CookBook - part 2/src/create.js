const form = document.querySelector('form');
form.addEventListener('submit', createRecipe);

async function createRecipe(e) {
    e.preventDefault();

    try {
        const userData = JSON.parse(sessionStorage.userData);
        const formData = new FormData(e.target);
        
        let name = formData.get('name');
        let img = formData.get('img');
        let ingredients = formData.get('ingredients');
        let steps = formData.get('steps');

        if(name = '' || img == '' || ingredients == '' || steps == '') {
            throw new Error('Please, fill all fields!');
        }

        ingredients = ingredients.split('\n');
        steps = steps.split('\n');
        console.log(name)
        debugger;
        // const res = await fetch('http://localhost:3030/data/recipes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-Authorization': userData.token
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         img: img,
        //         ingredients: ingredients,
        //         steps: steps
        //     })
        // });
       
        window.location = 'index.html';

    } 
    catch(error) {
        alert(error.message);
    }

}