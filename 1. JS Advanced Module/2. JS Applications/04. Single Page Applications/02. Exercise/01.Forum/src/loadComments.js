export async function loadComments(e) {

    const container = document.querySelector('.container');
    document.querySelector('.theme-content').style.display = 'block';
    Array.from(container.children).forEach(el => el.style.display = 'none');


    try {
        const id = e.target.id;
        
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);

        if (response.ok == false) {
            throw new Error(response.json());
        }

        const data = await response.json();
        console.log('----', data)
        let {title, username, content, _id} = data

        document.querySelector('.theme-name').children[0].textContent = title;

        const comment = document.querySelector('.comment');
        comment.innerHTML = '';
        const header = document.createElement('div');
        header.className = 'header';

        header.innerHTML =
            `<img src="./static/profile.png" alt="avatar">
                <p><span>${username}</span> posted on <time>2020-10-10 12:08:28</time></p>
            <p class="post-content">${content}</p>`;
        comment.appendChild(header);

        const form = document.querySelector('.answer').children[0];
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            try {

                Object.values(data).forEach(d => {
                    if (d === '') {
                        throw new Error('Fill everything!');
                    }
                });

                const dataSend = {
                    postText: data.postText,
                    username: data.username,
                    postID: _id
                }

                const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataSend)
                });

            } catch (error) {
                alert(error.message);
            }
            renderComments(_id);
            form.reset();
        });
        renderComments(_id);
    } catch (error) {
        alert(error.message);
    }

}

async function renderComments(id) {

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const data = await response.json();
    const divComment = document.querySelector('.comment');
    // div.innerHTML = '';

    Object.values(data).forEach(comment => {
        console.log(comment)
        if (comment.postID === id) {
            const div = document.createElement('div');
            div.className = 'user-comment';

            div.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${comment.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                    <div class="post-content">
                        <p>${comment.postText}</p>
                    </div>
                </div>
            </div>`;
            divComment.appendChild(div);
        }
    })
    return;
}