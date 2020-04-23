const express = require('express');
const app = express();
// del hbs se inporta
const hbs = require('hbs');
require('./hbs/helpers/helper');


//conectar en cualquier puerto
const port = process.env.PORT || 3000;



//midleware
app.use(express.static(__dirname + '/public'));



// expres hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Javier'
    });

});

app.get('/abaut', (req, res) => {

    res.render('abaut');

});

app.listen(3000, () => {
    console.log(`Escuchando en el puerto ${port}`);

});