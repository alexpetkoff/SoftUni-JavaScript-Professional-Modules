const express = require('express')
const path = require("path")

const expressConfig = (app) => {
    const staticFiles = express.static(path.resolve(__dirname, '../static'));
    app.use(staticFiles);
}

module.exports = expressConfig;