const divUser = document.getElementById('user');
const divGuest = document.getElementById('guest');

window.addEventListener('DOMContentLoaded', () => {

    if (sessionStorage.userData != null) {
        divUser.style.display = 'inline';
        divGuest.style.display = 'none';
    } else {
        divUser.style.display = 'none';
        divGuest.style.display = 'inline';
    }

});

//LOGOUT functionality
const logoutBTN = document.getElementById('logoutBtn');
logoutBTN.addEventListener('click', logout);

async function logout(e) {
    const userData = JSON.parse(sessionStorage.userData);
    try {
        const res = await fetch('http://localhost:3030/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
                }
        });

        sessionStorage.clear();
        window.location = 'index.html'

    } catch (error) {
        alert(error.message);
    }

}

async function loadRecipes() {

    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {

    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function showRecipes(recipes) {

    const result =
        createRecipe('article', { className: 'preview', onClick: toggleCard },
            createRecipe('div', { className: 'title' },
                createRecipe('h2', {}, recipes.name)),
            createRecipe('div', { className: 'small' },
                createRecipe('img', { src: recipes.img })),);

    return result;

    async function toggleCard(e) {
        const fullRecipe = await getRecipeById(recipes._id);
        result.replaceWith(showRecipesInfo(fullRecipe));
    }
}

function showRecipesInfo(recipe) {

    const result = createRecipe('article', {},
        createRecipe('h2', {}, recipe.name),
        createRecipe('div', { className: 'band' },
            createRecipe('div', { className: 'thumb' },
                createRecipe('img', { src: recipe.img })),
            createRecipe('div', { className: 'ingredients' },
                createRecipe('h3', {}, 'Ingredients:'),
                createRecipe('ul', {}, recipe.ingredients.map(i => createRecipe('li', {}, i))))),
        createRecipe('div', { className: 'description' }, createRecipe('h3', {}, 'Preparation:'),
            recipe.steps.map(s => createRecipe('p', {}, s))));

    return result;

}

window.addEventListener('load', async () => {

    const main = document.querySelector('main');
    const recipes = await loadRecipes();

    const cards = recipes.map(x => showRecipes(x));
    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));

});


function createRecipe(type, attributes, ...content) {

    const element = document.createElement(type);

    Object.entries(attributes).forEach(([key, value]) => {
        key.substring(0, 2) === 'on' ?
            element.addEventListener(key.substring(2).toLowerCase(), value) :
            element[key] = value;
    });

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {

        if (typeof e === 'string' || typeof e === 'number') {
            const node = document.createTextNode(e);
            element.appendChild(node);
        } else {
            element.appendChild(e);
        }

    });
    return element;
}