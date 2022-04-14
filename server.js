const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const app = express();

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(db);
})

app.post('/api/notes', (req, res) => {
    db.push(req.body);

    fs.writeFile('./db/db.json', JSON.stringify(db), () => {
        res.send(req.body)
    })
})

app.listen(3001, () => {
    console.log("Server has started at PORT 3001.")
})

