const http = require('http');
const fs = require('fs').promises;
const PORT = 5555;

const breedsArray = ['Bombay Cat', 'Test Cat'];

async function generateCatCards() {
    const catCardTemplate = await fs.readFile("./views/home/catCardTemplate.html", "utf-8");
    const data = await fs.readFile('./cats.json', 'utf-8');
    const catsArray = JSON.parse(data);

    return catsArray.map(cat => {
        return catCardTemplate
            .replace("{{imageUrl}}", cat.imageUrl)
            .replaceAll("{{name}}", cat.name)
            .replace("{{breed}}", cat.breed)
            .replace("{{description}}", cat.description);
    }).join('');
}

async function generateBreedOptions() {
    const optionsTemplate = await fs.readFile("./views/optionsTemplate.html", "utf-8")

    return breedsArray.map(breed => {
        return optionsTemplate.replaceAll("{{breed}}", breed)
    }).join('');
}

const server = http.createServer(async (req, res) => {

    const { url, method } = req;

    if (url === "/" && method === 'GET') {
        try {
            const homeHtml = await fs.readFile("./views/home/index.html", "utf-8");
            const catCardArray = await generateCatCards();

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(homeHtml.replace("{{template}}", catCardArray));
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
            const breedOptions = await generateBreedOptions();
            const addCatTemplate = await fs.readFile("./views/addCat.html", "utf-8");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(addCatTemplate.replace("{{optionsTemplate}}", breedOptions));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    } else if (url === "/" && method === "POST") {
        try {
            let body = ""

            req.on('data', (chunk) => {
                body += chunk.toString();
            })

            req.on('end', async () => {
                const formData = new URLSearchParams(body);
                const name = formData.get("name")
                const description = formData.get("description")
                const upload = formData.get("url")
                const breed = formData.get("breed")

                const data = await fs.readFile('./cats.json', 'utf-8');
                const parsedData = JSON.parse(data)
                parsedData.push({ name, description, imageUrl: upload, breed })
                await fs.writeFile('./cats.json', JSON.stringify(parsedData, null, 2), 'utf-8');

            });

            const homeHtml = await fs.readFile("./views/home/index.html", "utf-8");
            const catCardArray = await generateCatCards();

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(homeHtml.replace("{{template}}", catCardArray));

        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error: Could not load the page.");
        }
    }
    res.end();

});

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));