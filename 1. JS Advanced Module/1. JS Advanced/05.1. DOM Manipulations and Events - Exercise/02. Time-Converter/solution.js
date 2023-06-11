function attachEventsListeners() {
    //setting ratios to calculate end result
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    //taking elements from HTML and adding eventListener
    let btns = document.querySelectorAll('[type="button"]');
    let arrayBtns = Array.from(btns);
    arrayBtns.forEach((button) => {
        button.addEventListener('click', calcValues);
    })

    //function to calculate values with ratios
    function calcValuesToRatios(value, type) {
        let inDays = value / ratios[type];
        let inHours = inDays * ratios['hours'];
        let inMinutes = inDays * ratios['minutes'];
        let inSeconds = inDays * ratios['seconds'];

        return [inDays, inHours, inMinutes, inSeconds];
    }

    //eventListener Function
    function calcValues(event) {
        let button = event.target;
        let inputValue = Number(button.previousElementSibling.value);
        let inputId = button.previousElementSibling.id;
        let arrayResult = calcValuesToRatios(inputValue,inputId);
        let arrayOfInputs = Array.from(document.querySelectorAll('[type="text"]'));

        arrayOfInputs.forEach((element) => {
            element.value = arrayResult.shift();
        })
    }
}