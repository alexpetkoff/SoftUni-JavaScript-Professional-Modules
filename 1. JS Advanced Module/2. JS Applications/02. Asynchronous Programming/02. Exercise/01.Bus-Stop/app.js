async function getInfo() {
    
    const input = document.getElementById('stopId');
    const id = input.value;
    const div = document.getElementById('stopName');
    const ul = document.getElementById('buses');

    await fetch(`http://localhost:3030/jsonstore/bus/businfo/${id}`)
        .then(response => {

            ul.innerHTML = '';
            if(response.ok != true) {
                throw new Error('Error');
            }

            return response.json();
        })
        .then(data => {

            const buses = data.buses;
            const name = data.name;
            
            div.textContent = `${name}`;
            
            for(let [busId, time] of Object.entries(buses)) {
                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                ul.appendChild(li);
            }

        })
        .catch(error => {
            div.textContent = 'Error';
        });

}