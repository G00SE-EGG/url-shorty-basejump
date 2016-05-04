var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
    originalURL : String,
    shortenedURL : {
        type : String,
        default : 'https://url-shortyy.herokuapp.com/'
    },
    longKey : String,
    shortKey : String
    
});

module.exports = mongoose.model('Link',LinkSchema);