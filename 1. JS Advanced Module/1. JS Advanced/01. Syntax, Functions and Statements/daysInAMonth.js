function daysInAMonth(month, year) {
   
    let result = new Date(year, month, 0).getDate();
    console.log(result);   

}

daysInAMonth(7, 1992)