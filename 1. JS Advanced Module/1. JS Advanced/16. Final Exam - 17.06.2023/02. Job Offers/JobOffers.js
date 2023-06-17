class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        let setNames = new Set();

        candidates.forEach(c => {
            let [name, education, yearsExperience] = c.split('-');
            yearsExperience = Number(yearsExperience);

            let isFound = this.jobCandidates.find(e =>
                e['name'] === name
            );

            if (isFound && isFound.yearsExperience < yearsExperience) {
                isFound.yearsExperience = yearsExperience;
                setNames.add(name);
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
                setNames.add(name);
            }

        });

        let res = Array.from(setNames);
        return `You successfully added candidates: ${res.join(', ')}.`;

    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let isFound = this.jobCandidates.find(e =>
            e.name === name
        );
        if (!isFound) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > isFound.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        isFound.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }


    salaryBonus(name) {

        let isFound = this.jobCandidates.find(e =>
            e.name === name
        );

        if (!isFound) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (isFound.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }

        if (isFound.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {

        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let result = ['Candidates list:'];

        let sorted = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(e => result.push(`${e.name}-${e.yearsExperience}`));

        return result.join('\n');

    }

}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "John Doe-Bachelor-11", "Daniel Jones- Bachelor-18"]));