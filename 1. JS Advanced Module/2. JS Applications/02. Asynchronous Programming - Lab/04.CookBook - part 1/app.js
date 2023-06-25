async function loadRecipes() {
    let url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    await fetch(url).then(response => {
        return response.json();
    }).then(result => {

        let arrayRes = Object.values(result);
        let main = document.querySelector('main');
        main.innerHTML = '';
        for (let line of arrayRes) {
            let name = line.name;
            let src = line.img;

            main.innerHTML +=
                `<article class="preview">
                    <div class="title">
                        <h2>${name}</h2>
                    </div>
                    <div class="small">
                        <img src="${src}">
                    </div>
                </article>`;
        }

        let articles = document.querySelectorAll('.preview');
        Array.from(articles).forEach(article => {
            article.addEventListener('click', loadContent);
        });

    });

}

async function loadContent(e) {
    let article = e.target;
    let h2 = e.target.querySelector('.title').children[0].textContent;
    let id = '0' + h2.substring(6).trim();
    let url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    await fetch(url).then(response => {
        return response.json();
    }).then(data => {
        let name = data.name;
        let ingredients = data.ingredients;
        let steps = data.steps;
        let ingredientsRes = [];
        ingredients.forEach(line => {
            ingredientsRes.push(`<li>${line}</li>`);
        });
        let stepsRes = [];
        steps.forEach(line => {
            stepsRes.push(`<p>${line}</p>`)
        })
        let newContent = 
            `
                <h2>${name}</h2>
                    <div class="band">
                        <div class="thumb">
                            <img src="${data.img}">
                    </div>
                    <div class="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                    ${ingredientsRes.join('\n')}
                        </ul>
                    </div>
                    </div>
                <div class="description">
                    ${stepsRes.join('\n')}
                </div>`;
        let newArticle = document.createElement('article')
        newArticle.innerHTML = newContent;
        article.replaceWith(newArticle)
    })

}

loadRecipes();