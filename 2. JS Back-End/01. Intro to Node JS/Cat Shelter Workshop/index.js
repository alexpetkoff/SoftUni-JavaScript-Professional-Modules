const http = require('http');
const homePage = require('./views/home/index.js');
const styles = require('./content/styles/site.js');
const addBreed = require('./views/addBreed.js');
const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');

const port = 5500;

const server = http.createServer(async (req,res) => {
    
    const url = req.url;

    if(url == '/') { //homePage rendering
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.write(homePage);
    }

    if(url == '/content/styles/site.css') { //CSS styles rendering
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(styles);
    }

    if(url == '/cats/add-breed') { //addBreed page
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.write(addBreed);
    }

    res.end();
});

server.listen(port, () => console.log('The server is listening on port 5500!'));