
var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var pokemonsModel = require("../models/pokemonsModel.js");


router.get('/', function(req, res, next) {
pokemonsModel.find(function (err, pokemons) {
if (err) return next(err);
else {
res.json(pokemons);
}
});
});
module.exports = router;

// router.post('/', (req, res) =>{
//     pokemonsModel.create({
//         name: "",
//         type: "",
//         weight: "",
//         evolutionOf: "",
//         nextEvolution: "",
//         abilities: ""
//     })
//    .then(pokemons => res.send(pokemons))
//    .catch(err => res.send(err));

// });

/*router.delete('/:id', function(req, res, next) {
    pokemonsModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    });
    });*/
