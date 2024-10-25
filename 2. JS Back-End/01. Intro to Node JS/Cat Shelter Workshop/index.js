const http = require("http");

const homeTemplate = require("./views/home/index");
const addCatTemplate = require("./views/addCat.js");
const addBreedTemplate = require("./views/addBreed.js");
const catCardTemplate = require("./views/templates/catCardTemplate.js");

const siteCSS = require("./content/styles/site.js");
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

const breedsArray = ['Bombay Cat', 'Test Cat']

const createCatsArrayTemplate = () => {
    return catsArray.map(cat => catCardTemplate
        .replace("{{imageUrl}}", cat.imageUrl)
        .replaceAll("{{name}}", cat.name)
        .replace("{{breed}}", cat.breed)
        .replace("{{description}}", cat.description)
    ).join('');
};

const breedOptionsArray = breedsArray.map(breed =>
    `<option value="${breed}">${breed}</option>`
);

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/' && req.method === "GET") {

        const catsArrayTemplate = createCatsArrayTemplate()

        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeTemplate.replace("{{catsArrayTemplate}}", catsArrayTemplate));
    } else if (url === "/content/styles/site.css" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(siteCSS);
    } else if (url === "/cats/add-cat" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(addCatTemplate.replace('{{breedOptions}}', breedOptionsArray.join('')))

    } else if (url === "/" && req.method === "POST") {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const formData = new URLSearchParams(body)
            const name = formData.get("name")
            const description = formData.get("description")
            const upload = formData.get("upload")
            const breed = formData.get("breed")

            catsArray.push(
                {
                    imageUrl: upload,
                    name,
                    breed,
                    description
                },
            )

            res.end();

        })
        const updatedCatsArrayTemplate = createCatsArrayTemplate();

        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeTemplate.replace("{{catsArrayTemplate}}", updatedCatsArrayTemplate));
        res.end();

    } else if (url === "/cats/add-breed" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(addBreedTemplate);
        res.end();
    }

    res.end();
});

server.listen(port, () => console.log(`Server is listening on port: ${port}`));