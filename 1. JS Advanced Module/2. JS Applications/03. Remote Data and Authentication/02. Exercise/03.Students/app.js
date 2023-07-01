renderStudents();

const tbody = document.querySelector('tbody');
const form = document.getElementById('form');
form.addEventListener('submit', addStudent);

async function renderStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    tbody.innerHTML = '';
    Object.values(data).forEach(student => {
        const row = document.createElement('tr');

        for (let key in student) {
            if (key != '_id') {
                const td = document.createElement('td');
                td.textContent = student[key];
                row.appendChild(td);
            }
        }
    
        tbody.appendChild(row);
    });
}

async function addStudent(event) {

    event.preventDefault();

    const data = new FormData(form);

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            facultyNumber: data.get('facultyNumber'),
            grade: data.get('grade')
        })
    });
    renderStudents();
}
