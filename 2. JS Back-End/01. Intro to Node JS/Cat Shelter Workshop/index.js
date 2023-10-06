const http = require('http');
const port = 5500;

const handlers = require('./handlers');

const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    
    for(let handler of handlers) {
        if (!handler(req,res)) { 
            break;
        }
    }

});

server.listen(port, () => console.log('The server is listening on port 5500!'));