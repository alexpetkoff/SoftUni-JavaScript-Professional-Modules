// Imports
const express = require("express");
const handlebarsConfig = require('./config/handlebarsConfig')
const expressConfig = require('./config/expressConfig');

// Local variables
const app = express();
const PORT = 3000;

// Configs
handlebarsConfig(app);
expressConfig(app);

// Routing
app.get("/", (req, res) => {
    res.render("partials/index", {});
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));