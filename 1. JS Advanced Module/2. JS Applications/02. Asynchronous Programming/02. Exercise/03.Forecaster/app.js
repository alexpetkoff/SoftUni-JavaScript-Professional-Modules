async function attachEvents() {

    const input = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const divForecast = document.getElementById('forecast');
    const divCurrent = document.getElementById('current');
    const divUpcoming = document.getElementById('upcoming');

    submitBtn.addEventListener('click', async (e) => {
        

        try {

            divForecast.style.display = 'block';
            let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations/`);
            let data = await response.json();
            let location = data.find(loc => loc.name === input.value);

            let currentCondition = await currentConditions(location);
            let threeDayCondition = await threeDayConditions(location);

            divCurrent.appendChild(createEl(currentCondition));
            divUpcoming.innerHTML += createEl(threeDayCondition);

        }
        catch (e){
            divForecast.style.display = 'block';
            divForecast.innerText = `${e}`;
        }

    });

    async function currentConditions(location) {

        let currentConditionsRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`);
        let currentCondData = await currentConditionsRes.json();

        return currentCondData;

    }

    async function threeDayConditions(location) {

        let threeDayConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`);
        let threeDayConditionData = await threeDayConditionRes.json();

        return threeDayConditionData;

    }

    function createEl(obj) {

        let conditionsObject = {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': `&#x2614;`,
            'Degrees': '&#176;'
        }

        if(obj.name === input.value) {
            //three day forecast

            let result =  `
                <div class="forecast-info">
                    <span class="upcoming">
                        <span class="symbol">${conditionsObject[obj.forecast[0].condition]}</span>
                        <span class="forecast-data">${obj.forecast[0].low}&#176;/${obj.forecast[0].high}&#176;</span>
                        <span class="forecast-data">${obj.forecast[0].condition}</span>
                    </span>
                    <span class="upcoming">
                        <span class="symbol">${conditionsObject[obj.forecast[1].condition]}</span>
                        <span class="forecast-data">${obj.forecast[1].low}&#176;/${obj.forecast[1].high}&#176;</span>
                        <span class="forecast-data">${obj.forecast[1].condition}</span>
                    </span>
                    <span class="upcoming">
                        <span class="symbol">${conditionsObject[obj.forecast[2].condition]}</span>
                        <span class="forecast-data">${obj.forecast[2].low}&#176;/${obj.forecast[2].high}&#176;</span>
                        <span class="forecast-data">${obj.forecast[2].condition}</span>
                    </span>
                </div>
            `;
            return result;

        } else {
            //current forecast
            let divMain = document.createElement('div');
            divMain.classList.add('forecasts');
            
            let spanConditionSymb = document.createElement('span');
            spanConditionSymb.classList.add('condition', 'symbol');
            spanConditionSymb.innerHTML = `${conditionsObject[obj.forecast.condition]}`;
            divMain.appendChild(spanConditionSymb);

            let spanCondition = document.createElement('span');
            spanCondition.classList.add('condition');
            divMain.appendChild(spanCondition);

            for(let i = 0; i < 3; i++) {
                let span = document.createElement('span');
                span.classList.add('forecast-data');
                spanCondition.appendChild(span);
            }

            spanCondition.children[0].textContent = obj.name;
            spanCondition.children[1].innerHTML = `${obj.forecast.low}&#176;/${obj.forecast.high}&#176;`;
            spanCondition.children[2].textContent = obj.forecast.condition;

            return divMain;
        }
    }

}

attachEvents();