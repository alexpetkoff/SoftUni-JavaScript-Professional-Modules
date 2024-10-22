const http = require("http");
const homeTemplate = require("./views/home/index")
const siteCSS = require("./content/styles/site.js")
const port = 5555;

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeTemplate);
    } else if (url === "/content/styles/site.css") {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(siteCSS);
    } else {
        res.write("Hello to: " + url);
    }
    res.end();
});

server.listen(port, () => console.log(`Server is listening on port: ${port}`))