const express = require('express')
const app = express();
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Ivan Hurtado',
        titulo: 'Template hbs Express'
    });
})
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Ivan Hurtado',
        titulo: 'Template hbs Express'
    });
})
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Ivan Hurtado',
        titulo: 'Template hbs Express'
    });
})
app.get('/index', function (req, res) {
    res.render('home', {
        nombre: 'Ivan Hurtado',
        titulo: 'Template hbs Express'
    });
})
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})