const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path")

const app = express();
const PORT = 3000;

//handlebars config
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "views");

//Setup static files
const staticFiles = express.static(path.resolve(__dirname, 'static'));
app.use(staticFiles);

app.get("/", (req, res) => {
    res.render("partials/index", {});
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));