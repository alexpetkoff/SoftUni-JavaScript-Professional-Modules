function constructionCrew(workerObject) {

    let worker = {...workerObject}
    
    if(worker.dizziness === true) {
        let neededLvlOfHydration = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated = neededLvlOfHydration;
    } 

    return worker;
}

constructionCrew({ 
    weight: 80, //kg
    experience: 1, //years
    levelOfHydrated: 0, //ml
    dizziness: true });