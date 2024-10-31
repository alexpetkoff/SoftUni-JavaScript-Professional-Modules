const router = require('express').Router();

router.get("/", (req, res) => {
    res.render('partials/index')
})

router.get("/about", (req, res) => {
    res.render('partials/about')
})

router.get("/create", (req, res) => {
    res.render('partials/create')
})

module.exports = router;