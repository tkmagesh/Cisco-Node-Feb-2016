var http = require('http');
var server = http.createServer(function(req, res){
    console.log(req.url);
    res.write('welcome to node.js');
    res.end();
});
server.listen(8080);
console.log('server listening on port 8080!');
