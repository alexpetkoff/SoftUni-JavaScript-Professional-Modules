function loadCommits() {
    
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let ul = document.getElementById('commits');

    fetch(url).then((response) => {

        if(response.status != 200) {
            throw `Error: ${response.status} (Not Found)`;
        }
        return response.json();

    }).then((data) => {

        ul.replaceChildren();
        for(let element of data) {
            let li = document.createElement('li');
            li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
            ul.appendChild(li);

        }
    }).catch(error => {

        ul.replaceChildren();
        let li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
        
    });


}