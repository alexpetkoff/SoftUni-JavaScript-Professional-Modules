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
    const main = document.querySelector('main');
    main.innerHTML = '';

    Object.values(recipes).forEach(recipe => {
        const article2 = createRecipe('article', { className: 'preview', onClick: toggleCard });
        const div = createRecipe('div', { className: 'title' });
        const h2 = createRecipe('h2', {}, recipe.name);
        const divSmall = createRecipe('div', { className: 'small' });
        const img = createRecipe('img', { src: recipe.img });

        div.appendChild(h2);
        article2.appendChild(div);
        divSmall.appendChild(img);
        article2.appendChild(divSmall);
        main.appendChild(article2);


        async function toggleCard() {
            const fullRecipe = await getRecipeById(recipe._id);
            
            article2.replaceWith(viewContent(fullRecipe));
        }
    });

}

function viewContent(fullRecipe) {
   
    const article = createRecipe('article', {});
    const h2 = createRecipe('h2', {}, fullRecipe.name);
    article.appendChild(h2);
    const divBand = createRecipe('div', {className: 'band'});
    const divThumb = createRecipe('div', {className: 'thumb'});

    const img = createRecipe('img', {src: fullRecipe.img});
    divThumb.appendChild(img);
    divBand.appendChild(divThumb);
    const divIngr = createRecipe('div', {className: 'ingredients'});

    const h3 = createRecipe('h3', {}, 'Ingredients:');
    const ul = createRecipe('ul', {});
    fullRecipe.ingredients.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    });
    divIngr.appendChild(h3);
    divIngr.appendChild(ul);
    divBand.appendChild(divIngr);
    article.appendChild(divBand);
    const divDesc = createRecipe('div', { className: 'description'});
    const h3Prep = createRecipe('h3', {}, 'Preparation:');
    divDesc.appendChild(h3Prep);
    fullRecipe.steps.forEach(s => {
        const p = createRecipe('p', {}, s);
        divDesc.appendChild(p);
    });
    article.appendChild(divDesc);

    return article;
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