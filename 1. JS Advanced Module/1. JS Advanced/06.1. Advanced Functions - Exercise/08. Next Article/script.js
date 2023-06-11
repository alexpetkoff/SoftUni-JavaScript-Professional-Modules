function getArticleGenerator(articles) {
    let index = 0;
    return function () {
        let div = document.getElementById('content');
        let article = document.createElement('article');
        let content = articles[index];
        if (index < articles.length) {
            let newArticle = div.appendChild(article);
            newArticle.textContent = content;
        }
        index++;
    }
}