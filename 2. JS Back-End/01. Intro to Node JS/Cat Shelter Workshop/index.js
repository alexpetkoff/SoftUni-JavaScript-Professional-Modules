const http = require("http");
const homeTemplate = require("./views/home/index")
const catCardTemplate = require("./views/templates/catCardTemplate.js")
const siteCSS = require("./content/styles/site.js")
const port = 5555;

const catsArray = [
    {
        imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
        name: 'Pretty Kitty',
        breed: 'Bombay Cat',
        price: '',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg',
        name: 'Pretty Kitty 2',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg',
        name: 'Pretty Kitty 3',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        name: 'Pretty Kitty 4',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
        name: 'Pretty Kitty 5',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    }
]

const catsArrayTemplate = catsArray.map(cat => catCardTemplate
    .replace("{{imageUrl}}", cat.imageUrl)
    .replaceAll("{{name}}", cat.name)
    .replace("{{breed}}", cat.breed)
    .replace("{{description}}", cat.description)
)

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/' && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeTemplate.replace("{{catsArrayTemplate}}", catsArrayTemplate));
    } else if (url === "/content/styles/site.css" && req.method === "GET") {
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