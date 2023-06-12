class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal (peak, altitude) {

        if(this.goals[peak] != undefined) { // ????????????
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
            
    }

    hike (peak, time, difficultyLevel) {

        if(this.goals[peak] === undefined) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if(this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let difference = this.resources - (time * 10);

        if(difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources = this.resources - (time * 10);
        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;

    }

    rest (time) {

        this.resources += (time * 10);

        if(this.resources >= 100) {

            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;

        } else {

            return `You have rested for ${time} hours and gained ${time * 10}% resources`;

        }

    }

    showRecord (criteria) {

        if(this.listOfHikes.length === 0) {

            return `${this.username} has not done any hiking yet`;

        }

        let allHikes = [];
        if(criteria === 'hard' || criteria === 'easy') {

            this.listOfHikes.find((hike) => {
                hike.difficultyLevel === criteria ?
                    allHikes.push(hike) :
                    false
            });

            if(allHikes.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                allHikes.sort((a,b) => a.time - b.time);
                return `${this.username}'s best ${criteria} hike is ${allHikes[0].peak} peak, for ${allHikes[0].time} hours`;
            }
            
        } else {
            let allRes = "All hiking records:\n";
            let resArr = [];
            this.listOfHikes.forEach((hike) => {
                resArr.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            });
            allRes += resArr.join('\n');
            return allRes;
        }
        
    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));