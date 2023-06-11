function attachEventsListeners() {

    //adding event listener
    document.getElementById('convert').addEventListener('click', calc);

    function calc() {
        let ratios = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254
        };

        //taking html elements for input and output
        let inputValue = document.getElementById('inputDistance').value;
        let outputValue = document.getElementById('outputDistance')
        //taking the selected units...
        let from = document.getElementById('inputUnits').value;
        let to = document.getElementById('outputUnits').value;

        let calcInMeters = Number(inputValue) * ratios[from];
        let result = calcInMeters / ratios[to];
        outputValue.value = result;
    }
}