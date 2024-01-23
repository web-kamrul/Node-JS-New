var http = require ('http');
var myServer = http.createServer(function(req,res){
    res.end ('This is Kamrul islam');
})
myServer.listen(5000);
console.log ('We Are Ready');