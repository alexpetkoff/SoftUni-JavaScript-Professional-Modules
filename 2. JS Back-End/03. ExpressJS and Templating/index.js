const express = require("express");
const app = express();

const port = 3000;

const bodyParser = express.urlencoded({ extended: false })
app.use(bodyParser)

// #region Routing
app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to ExpressJS");
});


app.post("/kittens", (req, res) => {
    console.log(req.body.name) // now we can read the json because of the bodyParser middleware
    res.send("Welcome to ExpressJS - Post request");
});

// Endpoint
// get - method
// "/kittens" - path / route
// action = (req, res) => {}
app.get("/kittens", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <form method="post">
            <label for="name">Name:</label>
            <input name="name" type="text" id="name" />
            <input type="submit" />
        </form>
    </body>
    <script>console.log('Loading from sent html!')</script>
</html>`)
});


app.get("/kittens/:kittenId", (req, res) => {

    res.send(`This is kitten with id: ${req.params.kittenId}`)
});

// * route must be always at the bottom!!!
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND!");
});
// #endregion

app.listen(port, () => console.log(`Express is running on port: ${port}`));
