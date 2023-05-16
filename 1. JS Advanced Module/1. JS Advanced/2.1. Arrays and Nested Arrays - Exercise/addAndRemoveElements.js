function addRemoveElements(commands) {

    let result = [];
    for (let i = 0; i < commands.length; i++) {

        let check = commands[i] === 'add' ? result.push(i + 1) : result.pop();

    }
    let final = result.length === 0 ? console.log('Empty') :
                result.forEach((e) => console.log(e));
}

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);