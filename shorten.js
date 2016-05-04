module.exports = function(link)
{
  var key = link._id.slice(19);
  var shortURL = link.defaultUrl + key;
  return shortURL;
};