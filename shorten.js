exports.shorten = function(link)
{
  var key = link._id.toString().slice(19);
  var shortURL = link.shortenedURL + key;
  /*link.save(function(err, testLink){
            if(err)console.error(err);
            //console.dir(testLink);
        });*/
  return shortURL;
};