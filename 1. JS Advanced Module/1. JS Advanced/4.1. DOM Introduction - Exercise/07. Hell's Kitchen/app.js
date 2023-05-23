function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('textarea').value);
      let objectRestaurant = {};
      let objectBestRestaurant = {
         'Name': '',
         'Average Salary': 0,
         'Best Salary': 0
      };
      
      for(let el of input) {
         let [restaurant, employeeList] = el.split(' - ');
         let employeesArray = employeeList.split(', ');

         if(!objectRestaurant.hasOwnProperty(restaurant)) {
            objectRestaurant[restaurant] = [];
            for(let info of employeesArray) {
               let [name, salary] = info.split(' ');
               salary = +salary;
               objectRestaurant[restaurant].push([name, salary]);
            }
         } else {
            for(let info of employeesArray) {
               let [name, salary] = info.split(' ');
               salary = +salary;
               objectRestaurant[restaurant].push([name, salary]);
            }
         }
      }

      for(let [key, arrayEmployees] of Object.entries(objectRestaurant)) {
         let sortedArrayEmployees = arrayEmployees.sort((a,b) => b[1] - a[1]);
         let sumSalaries = 0;
         sortedArrayEmployees.forEach((element) => {
            sumSalaries += element[1];
         });
         let averageSalary = (sumSalaries / arrayEmployees.length);
         averageSalary = averageSalary.toFixed(2);
         averageSalary = +averageSalary;
         if(averageSalary > objectBestRestaurant['Average Salary']) {
            objectBestRestaurant['Average Salary'] = averageSalary.toFixed(2);
            objectBestRestaurant['Name'] = key;
            objectBestRestaurant['Best Salary'] = sortedArrayEmployees[0][1].toFixed(2);
         }
      }

      let textBestRestaurant = `Name: ${objectBestRestaurant['Name']} Average Salary: ${objectBestRestaurant['Average Salary']} Best Salary: ${objectBestRestaurant['Best Salary']}`;

      document.querySelector('#bestRestaurant p').textContent = textBestRestaurant;

      let bestRestaurant = objectBestRestaurant['Name'];
      let bestEmployees = '';

      for(let i = 0; i < objectRestaurant[bestRestaurant].length; i++) {
         let [name, salary] = objectRestaurant[bestRestaurant][i];
         bestEmployees += `Name: ${name} With Salary: ${salary} `;
      }
      console.log(objectRestaurant)
      let result = bestEmployees.trim();
      document.querySelector('#workers p').textContent = result;
   }
}