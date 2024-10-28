const express = require("express");
const app = express();

const port = 3000;

// #region Routing
app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to ExpressJS");
})

// Endpoint
// get - method
// "/kittens" - path / route
// action = (req, res) => {}
app.get("/kittens", (req, res) => {
    res.status(200);
    res.send("Welcome to ExpressJS - Kittens Page");
})

// * route must be always at the bottom!!!
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND!");
})
// #endregion

app.listen(port, () => console.log(`Express is running on port: ${port}`));
