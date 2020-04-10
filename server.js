const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/work', async (req, res) => {
    res.render('work');
});

app.get('/weurd', async (req, res) => {
    res.render('weurd');
});

app.listen(5000);