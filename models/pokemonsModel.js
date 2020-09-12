const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var pokemonsSchema = new Schema({
    name: String,
    type: String,
    weight: String,
    evolutionOf: String,
    nextEvolution: String,
    abilities: String,
    img: String
},
{
collection: "pokemons"
});

module.exports = mongoose.model('pokemonsModel', pokemonsSchema);