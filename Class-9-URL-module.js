var http = require('http');
var url = require('url'); // Change the import

var myServer = http.createServer(function(req, res) {
  var newURL = "http://rabbil.com/blog.html?year=2024&month=january";
  var newURLObj = url.parse(newURL, true);

  var newHost = newURLObj.host;
  var newPathName = newURLObj.pathname;
  var newSearch = newURLObj.search;

  res.writeHead(200, {'Content-Type': 'text/html'}); // Fix the typo
  res.write(newHost); // domain name
  res.write(newPathName); // main slug
  res.write(newSearch); // extra slug for query
  res.end();
});

myServer.listen(9200);
console.log('We Are Ready');