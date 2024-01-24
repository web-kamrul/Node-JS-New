var fs = require ('fs'); // for FS module add
var http = require ('http');

var server = http.createServer(function(req,res){


    
    /*
    // 1=========================================
    // readFile > Asyn

    if (req.url="/") {
        fs.readFile ('home.html',function(error,data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    */



    /*
    // 2=========================================
    // readFile > Sync
    if (req.url="/") {
        let myData = fs.readFileSync ('home.html');
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(myData)
            res.end()
    }
    */
})
server.listen(6500);
console.log ('We Are Ready');


