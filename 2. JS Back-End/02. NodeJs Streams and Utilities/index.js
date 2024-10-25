const http = require('http');
const fs = require('fs').promises;
const PORT = 5555;

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
];
const breedsArray = ['Bombay Cat', 'Test Cat'];

const server = http.createServer(async (req, res) => {

    const { url, method } = req;

    if (url === "/" && method === 'GET') {
        try {
            const homeHtml = await fs.readFile("./views/home/index.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(homeHtml);
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    } else if (url === "/content/styles/site.css" && method === 'GET') {
        try {
            const css = await fs.readFile("./content/styles/site.css", "utf-8");
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(css);
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    } else if (url === "/cats/add-breed" && method === "GET") {
        try {
            const catBreedHtml = await fs.readFile("./views/addBreed.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(catBreedHtml);
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    } else if (url === "/cats/add-cat" && method === "GET") {
        try {
            const catBreedHtml = await fs.readFile("./views/addCat.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(catBreedHtml);
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    }

    res.end();
});

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));