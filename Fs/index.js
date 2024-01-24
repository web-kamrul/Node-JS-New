var fs = require ('fs'); // for FS module add
var http = require ('http');

var server = http.createServer(function(req,res){



    /*
    // 1 =========================================
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
    // 1.1 =========================================
    // readFile > Sync

    if (req.url="/") {
        let myData = fs.readFileSync ('home.html');
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(myData)
            res.end()
    }
    */



    /*
    // 2 =========================================
    // writeFile > Asyn

    if (req.url="/") {
        fs.writeFile ('newfile.txt','Welcome to Node JS', function(error){
            if (error) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Create Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Create Successfully")
                res.end()
            }
        })
    }
    */



    /*
    // 2.1 =========================================
    // writeFile > Sync

    if (req.url="/") {
        let myerror = fs.writeFileSync ('newfileSync.txt','Welcome to Node JS');
            if (myerror) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Create Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Create Successfully")
                res.end()
            }
    }
    */



    /*
    // 3 =========================================
    // rename > Asyn

    if (req.url="/") {
        fs.rename ('rename.txt','newRename.txt', function(error){
            if (error) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Rename Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Rename Successfully")
                res.end()
            }
        })
    }
    */

    /*
    // 3.1 =========================================
    // rename > Sync

    if (req.url="/") {
        let result = fs.renameSync ('newRename.txt', 'newRename.txt')
            if (result) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Rename Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Rename Successfully")
                res.end()
            }
    }
    */



    /*
    // 4 =========================================
    // delete > Asyn

    if (req.url="/") {
        fs.unlink ('kamrul.txt', function(error){
            if (error) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Delete Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Delete Successfully")
                res.end()
            }
        })
    }
    */



    /* 
    // 4.1 =========================================
    // delete > Sync

    if (req.url="/") {
        let result = fs.unlinkSync ('suhana.txt')
            if (result) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Delete Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Delete Successfully")
                res.end()
            }
    }
    */



    /*
    // 5.1 =========================================
    // Exists > Sync

    if (req.url="/") {
        let result = fs.existsSync ('about.html')
            if (result) {
                res.end('True')
            }
            else {
                res.end('False')
            }
    }
    */





























})
server.listen(3310);
console.log ('We Are Ready');


