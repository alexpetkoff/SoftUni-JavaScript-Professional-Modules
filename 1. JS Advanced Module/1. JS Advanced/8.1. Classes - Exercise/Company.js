class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if(!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        
        if(!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push([name, salary, position]);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let bestDepartment = '';
        let highestAvgSalary = 0;
        let employeesArray = [];

        for(let department in this.departments) {
            let currentDepartmentStats = this.departments[department];

            currentDepartmentStats.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

            let sumSalaries = 0;
            let currentAvgSalary = 0;
            let employeeInfo = [];
            for(let [name, salary, position] of currentDepartmentStats) {
                sumSalaries += Number(salary);
                employeeInfo.push(`${name} ${salary} ${position}`);
            }
            
            currentAvgSalary = sumSalaries / currentDepartmentStats.length;

            if(currentAvgSalary > highestAvgSalary) {
                highestAvgSalary = currentAvgSalary;
                bestDepartment = department;
                employeesArray = [];
                employeesArray.push(employeeInfo);
            }
        }

        let result = `Best Department is: ${bestDepartment}\n` +
                     `Average salary: ${highestAvgSalary.toFixed(2)}\n` +
                     `${employeesArray[0].join('\n')}`
        
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());