function filterEmployees(data, criteria) {
    let result = [];
    let arrayData = JSON.parse(data);
    let [key, value] = criteria.split('-');

    arrayData.forEach(employee => {
        employee[key] === value ? result.push(employee) : false;
    });

    result.forEach((employee, index) => {
        console.log(`${index}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
    })
}


filterEmployees(
`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`
,'gender-Female');
