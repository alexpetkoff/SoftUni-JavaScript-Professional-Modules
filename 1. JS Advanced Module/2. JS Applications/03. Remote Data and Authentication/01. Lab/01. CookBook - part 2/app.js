async function loadRecipes() {

    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const recipes = await response.json();

    return recipes;
}

async function getRecipeById(id) {

    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const recipe = await response.json();

    return recipe;
}

async function appendRecipes() {

    const recipes = await loadRecipes();
    console.log(Object.values(recipes));
    const main = document.querySelector('main');
    main.innerHTML = '';

    Object.values(recipes).forEach(recipe => {
        const article = createRecipe('article', { className: 'preview', onClick: viewContent });
        const div = createRecipe('div', { className: 'title' });
        const h2 = createRecipe('h2', {}, recipe.name);
        const divSmall = createRecipe('div', { className: 'small' });
        const img = createRecipe('img', { src: recipe.img });

        div.appendChild(h2);
        article.appendChild(div);
        divSmall.appendChild(img);
        article.appendChild(divSmall);
        main.appendChild(article);
    });

}

async function viewContent(event) {
    console.log('ima event');
}

window.addEventListener('load', async () => {

    appendRecipes();

});

function createRecipe(type, attributes, ...content) {

    const element = document.createElement(type);

    Object.entries(attributes).forEach(([key, value]) => {
        key.substring(0, 2) === 'on' ?
            element.addEventListener(key.substring(2).toLowerCase(), value) :
            element[key] = value;
    });

    content.forEach(line => {
        element.textContent = line;
    });

    return element;

}