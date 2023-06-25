function loadRepos() {

	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	let ul = document.getElementById('repos');

	fetch(url).then((response) => {

		if (response.ok === false) {
			throw `${response.status} ${response.statusText}`;
		}
		return response.json();

	}).then((data) => {

		ul.replaceChildren();
		for(let entry of data) {
			let li = document.createElement('li');
			li.innerHTML = `<a href="${entry.html_url}">${entry.full_name}</a>`;
			ul.appendChild(li);
		}
		
	}).catch((error) => {
		ul.innerHTML = `${error}`;
	});

}