function solve() {

    let id = 'depot';
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let span = document.querySelector('.info');

    async function depart() {

        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            
            let name = data.name;
            let next = data.next;
            id = next;
            span.textContent = `Next stop ${name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch(error) {
            span.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

    }

    function arrive() {
        span.textContent = span.textContent.replace('Next stop', 'Arriving at');
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();