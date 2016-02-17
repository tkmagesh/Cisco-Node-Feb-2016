var http = require('http'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorHandler = require('./calculatorHandler'),
    notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticResourceServer(req, res);
    calculatorHandler(req, res);
    notFoundHandler(req, res);
});
server.listen(8080);
console.log('server listening on port 8080!');
