var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
    originalURL : String,
    shortenedURL : String,
    longKey : String,
    shortKey : String
    
});

module.exports = mongoose.model('Link',LinkSchema);