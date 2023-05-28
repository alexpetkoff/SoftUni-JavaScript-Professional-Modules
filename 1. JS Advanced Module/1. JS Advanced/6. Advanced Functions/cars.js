function cars(commands) {
    let listCars = {};
    let functionality = {
        create(name) {
            listCars[name] = {};
        },
        inherit(name, nameParent) {
            listCars[name] = Object.create(listCars[nameParent]);
        },
        set(name, key ,value) {
            listCars[name][key] = value;
        },
        print(name) {
            let output = [];
            for(let key in listCars[name]) {
                output.push(`${key}:${listCars[name][key]}`)
            }
            console.log(output.join(','))
        }
    };

    commands.forEach(cmd => {
        let array = cmd.split(' ');
        let [command, name, k, v] = [...array];
        if(command === 'create') {
            array.length > 2 ? functionality.inherit(name, v) : functionality.create(name);
        } else {
            command === 'set' ? functionality.set(name, k, v) : functionality.print(name);
        }
    });
}


cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);