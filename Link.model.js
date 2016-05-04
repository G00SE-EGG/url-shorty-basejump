var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
    originalURL : String,
    shortenedURL : {
        type : String,
        default : 'http://www/shorty.com/'
    },
    longKey : String,
    shortKey : String
    
});

module.exports = mongoose.model('Link',LinkSchema);