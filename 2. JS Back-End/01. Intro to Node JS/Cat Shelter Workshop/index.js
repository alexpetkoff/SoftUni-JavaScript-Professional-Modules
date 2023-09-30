const http = require('http');
const homePage = require('./views/home/index.js');
const port = 5500;

const server = http.createServer(async (req,res) => {
   
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write(homePage);

    res.end();
});

server.listen(port, () => console.log('The server is listening on port 5500!'));