
var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var newsModel = require("../models/newsModel.js");


router.get('/', function(req, res, next) {
    newsModel.find(function (err, news) {
if (err) return next(err);
else {
res.json(news);
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
