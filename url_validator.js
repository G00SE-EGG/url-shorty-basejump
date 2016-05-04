function Link(org, short)
{
	this.org = org;
  this.short = short;
  this.print = function()
  {
  	console.log(JSON.stringify(this.org, this.short));
  }
}

/* this function checks to see if the provided link is valid. If so, return true
else return false;
*/
function isValidLink(link)
{
var validUrl = /[https?]{4,5}[:\/\/]{3}[a-zA-Z0-9]+\.(com|org|net|gov|it)\/?/;
if(validUrl.test(link))
{
console.log(validUrl.test(link));
	return true;
}
else
{
console.log(validUrl.test(link));
	return false;
}
}



function shorten(link)
{
	
	if(isValidLink(link))
  {
  var newLink = new Link(link, '');
	//newLink.short = '<a href="https://google.com"> www.shortlink1.com</a>';
  newLink.short = '<a href=' + newLink.org + ' target=_blank>www.shortlink1.com</a>';
  return newLink.short;
  }
  else 
  {
  	var obj = {};
    obj.err = "Invalid Url format";
    return JSON.stringify(obj);
  }
}

/*function main()
{
var str = '';
	$('#btn').on('click', function(){
  str = $('#inp').val();
  $('#para').html(shorten(str));
  });
}

main();*/

exports.isValidLink = function(link)
{
    //var validUrl = /[https?]{4,5}[:\/\/]{3}[a-zA-Z]+\.(com|org|net|gov|it)\/?/;
    var validUrl = /[https?]{4,5}[:\/\/www]{6}\.[a-zA-Z]+\.(com|org|net|gov|it)\/?/;
if(validUrl.test(link))
{
console.log(validUrl.test(link));
	return true;
}
else
{
console.log(validUrl.test(link));
	return false;
}
};
