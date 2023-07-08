export function updateView() {

    const user = sessionStorage.userData;
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.style.display = 'none');
    console.log(sections)
    if(user === undefined) {
        document.querySelectorAll('.nav-item.user').forEach(e => e.style.display = 'none');
        document.getElementById('home-page').style.display = 'block';
        
    } else {
        document.querySelectorAll('.nav-item.guest').forEach(e => e.style.display = 'none');
        document.getElementById('welcome-msg').textContent = `Welcome, ${JSON.parse(sessionStorage.userData.email)}`;
    }

}

export async function showMovies() {

    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();

    return;

}