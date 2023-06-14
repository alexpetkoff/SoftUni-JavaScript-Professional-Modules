window.addEventListener("load", solve);

function solve() {

  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');

  let pusblishButton = document.getElementById('publish-btn');
  pusblishButton.addEventListener('click', publishFunc);

  let clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', clearPosts);

  //1. Getting info from the form:
  function publishFunc() {

    if(titleInput.value != '' && categoryInput.value != '' && contentInput.value != '') {

      let ul = document.getElementById('review-list');

      let li = document.createElement('li');
      li.classList.add('rpost');
      
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let pCategory = document.createElement('p');
      let pContent = document.createElement('p');

      h4.textContent = `${titleInput.value}`;
      pCategory.textContent = `Category: ${categoryInput.value}`;
      pContent.textContent = `Content: ${contentInput.value}`;

      article.appendChild(h4);
      article.appendChild(pCategory);
      article.appendChild(pContent);

      let buttonEdit = document.createElement('button');
      let buttonApprove = document.createElement('button');
      buttonEdit.classList.add('action-btn', 'edit');
      buttonApprove.classList.add('action-btn', 'approve');
      buttonEdit.textContent = 'Edit';
      buttonApprove.textContent = 'Approve';

      li.appendChild(article);
      li.appendChild(buttonEdit);
      li.appendChild(buttonApprove);
      ul.appendChild(li);

      buttonEdit.addEventListener('click', editPost);
      buttonApprove.addEventListener('click', approvePost);

      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

    }

  }

  //2.Edit Posts
  function editPost(event) {
    
    let currentLi = event.target.parentElement;
    let currentArticle = currentLi.children[0];
    
    titleInput.value = currentArticle.children[0].textContent;
    categoryInput.value = currentArticle.children[1].textContent.substring(10);
    contentInput.value = currentArticle.children[2].textContent.substring(9);

    currentLi.remove();

  }

  //3.Approve Posts
  function approvePost(event) {

    let currentLi = event.target.parentElement;
    currentLi.children[2].remove();
    currentLi.children[1].remove();

    let ul = document.getElementById('published-list');
    ul.appendChild(currentLi);

  }

  //4.Clear Posts

  function clearPosts(event) {
    let button = event.target;
    let ul = button.previousElementSibling;
    let liCollection = Array.from(ul.children);

    liCollection.forEach(li => {
      li.remove();
    });
  }
  
}