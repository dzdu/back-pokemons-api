const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: String,
    text: String,
    img: String,
    link: String,
    dateCreated: Date
},
{
collection: "news"
});

module.exports = mongoose.model('newsModel', newsSchema);