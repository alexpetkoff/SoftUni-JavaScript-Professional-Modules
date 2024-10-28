const express = require("express");
const app = express();

const port = 3000;

// #region Routing
app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to ExpressJS");
});

app.post("/", (req, res) => {
    res.send("Welcome to ExpressJS - Post request");
});

// Endpoint
// get - method
// "/kittens" - path / route
// action = (req, res) => {}
app.get("/kittens", (req, res) => {

    res.send('This is kittens page!')
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