const http = require('http');
const homePage = require('./views/home/index.js');
const styles = require('./content/styles/site.js');

const port = 5500;

const server = http.createServer(async (req,res) => {
    
    const url = req.url;

    if(url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.write(homePage);
    }

    if(url == '/content/styles/site.css') {
        res.write(styles);
    }



    res.end();
});

server.listen(port, () => console.log('The server is listening on port 5500!'));