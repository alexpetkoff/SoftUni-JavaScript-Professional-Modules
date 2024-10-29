const express = require("express")
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hello from ExpressJS!</h2>')
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`))