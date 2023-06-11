function listProcessor(input) {

    result = [];
    for(let el of input) {
        let [command, str] = el.split(' ');
        process(command, str);
    }
    
    function process(command,str) {
        command === 'add' ? result.push(str) : false;
        command === 'print' ? console.log(result.join(',')) : false;
        command === 'remove' ? result = result.filter(el => el != str) : false;
    }

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);