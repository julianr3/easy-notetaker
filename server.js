const express = require('express');
const path = require('path');

const app = express();

// middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(3001, () => {
    console.log("Server has started at PORT 3001.")
})

