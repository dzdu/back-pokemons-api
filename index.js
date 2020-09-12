const express = require('express');
const mongoose = require('mongoose');
//var bodyParser = require('body-parser')
var path = require('path');
var cors = require('cors');
var pokemonsRouter = require('./routes/pokemonsRoute');
var newsRouter = require('./routes/newsRoute')


var app = express();
var port = 3001;
var uri = 'mongodb+srv://admin:admin@studyforfree-zbtpf.gcp.mongodb.net/Pokemons?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log("connected to db");
});
mongoose.connection.on('error', (err) => {
    console.log("NOT connected to db " + err);
});

app.listen(port, function(){
    console.log("Nu funkar sida på port " + port);
});


app.use(express.static(path.join(__dirname,'public')));
app.use('/pokemons', pokemonsRouter);
app.use('/news', newsRouter);

app.use(cors());
app.use(express.json);






