function attachEvents() {
    
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const btnViewPosts = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const pPostBody = document.getElementById('post-body');
    const ulComments = document.getElementById('post-comments');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPosts.addEventListener('click', viewPosts)


    async function loadPosts(event) {
        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const data = await response.json();
        selectPosts.innerHTML = '';
        for(let key in data) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data[key].title;
            selectPosts.appendChild(option);
        }
    }

    async function viewPosts(event) {
        const menu = event.target.previousElementSibling;
        const selectedOption = menu.options[menu.selectedIndex].value;
        ulComments.innerHTML = '';
        
        const response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        const data = await response.json();

        postTitle.textContent = data[selectedOption].title;
        pPostBody.textContent = data[selectedOption].body;
        
        const responseComments = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        const dataComments = await responseComments.json();

        let arrayComments = [];
        Object.values(dataComments).forEach(comment => {
            if(comment.postId === selectedOption) {
               arrayComments.push([comment.text, comment.id]);
            }
        });

        arrayComments.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c[0];
            li.id = c[1];
            ulComments.appendChild(li);
        });
    }
}

attachEvents();