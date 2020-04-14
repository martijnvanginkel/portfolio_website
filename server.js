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

app.get('/the_journey', async (req, res) => {
    res.render('the_journey');
});

app.get('/cms', async (req, res) => {
    res.render('cms');
});

app.get('/get_next_line', async (req, res) => {
    res.render('get_next_line');
});

app.get('/pixel_farm', async (req, res) => {
    res.render('pixel_farm');
});

app.get('/raycasting', async (req, res) => {
    res.render('raycasting');
});

app.listen(5000);