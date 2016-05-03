var express = require("express");
var app = express();
var validUrl = require("./url_validator");
var Link = require("./Link.model");
var mongoose = require("mongoose");
//creates a view and configures express to use it by default
var handlebars = require("express3-handlebars").create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

var db = 'mongodb://localhost/Links';

mongoose.connect(db);

//app.get() is the method that allows you to add routes
//it takes a path(defines the route) and a function as parameters
//function provided will be invoked(called) when the route is matched
//parameters passed are request/repsonse objects
//for now, we're returning plain-text with status code of 200 (express default)
//route for the home page
app.get('/', function(req, res){
   res.render('home');
});//view engine returns type of 'text/html' and status of 200 by default

//route for the about page
app.get('/new*', function(req, res) {
    var foo = req.url.replace(/\/[a-z]+\//, '');
    var testLink;// = new Link(foo);
    //console.log(foo);
    if(validUrl.isValidLink(foo))
    {
        //res.render('new', {url : '<a href = ' + foo + 'target=_blank>link</a>'});
        testLink = new Link({originalURL : foo});
        testLink.save(function(err, testLink){
            if(err)console.error(err);
            //console.dir(testLink);
        });
        res.send(testLink);
        console.log('Link is valid', testLink.originalURL);
    }
    else
    {
        //res.render('new', {url : 'Error'});
        res.send('Please enter in a valid link');
        console.log('link is invalid', testLink.originalURL);
    }
   
});

/*
app.use is a method by which express adds middleware
(catch all handler for anything that didn't get matched by supplied routes)
routes and middleware ordder is important
*/

//custom 404 page
app.use(function(req, res){
   res.status(404);
   res.render('404');
});

//custom 500 page
app.use(function(err, req, res, next){
   console.error(err.stack); 
   res.status(500);
   res.render('500');
});

app.listen(app.get('port'),function(){
   console.log('Express started on ' + app.get('port'));
});

/*
Model-View-Controller
View - is what get delivered to the user, in the case of a website, its usually
HTML
*/