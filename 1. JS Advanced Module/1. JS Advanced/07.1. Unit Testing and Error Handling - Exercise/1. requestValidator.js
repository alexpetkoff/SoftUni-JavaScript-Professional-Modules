function requestValidator(input) {
    //local variables
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /^[a-zA-Z.0-9]+$/gm;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageRegex = /[<>&'"\\]/gm;

    if(!input.hasOwnProperty('method') || !methods.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if(!input.hasOwnProperty('uri') || !uriRegex.test(input.uri) || input.uri === "") {
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!input.hasOwnProperty('version') || !versions.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if(!input.hasOwnProperty('message') || messageRegex.test(input.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return input;
}

console.log(requestValidator(
{
method: 'POST',
version: 'HTTP/0.9',
uri: 'home.bash',
message: ''
}));