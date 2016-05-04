exports.shorten = function(link)
{
  var key = link._id.toString().slice(19);
  var shortURL = link.shortenedURL + key;
  return shortURL;
};