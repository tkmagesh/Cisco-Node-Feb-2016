var http = require('http'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorHandler = require('./calculatorHandler'),
    notFoundHandler = require('./notFoundHandler');

var middlewares = [dataParser, staticResourceServer, calculatorHandler, notFoundHandler];

var server = http.createServer(function(req, res){
    function exec(middlewares, req, res){
        var first = middlewares[0],
            remaining = middlewares.slice(1),
            next = function(){
                exec(remaining, req, res);
            };
        if (first) first(req, res, next);
    }
    exec(middlewares, req, res);
});
server.listen(8080);
console.log('server listening on port 8080!');
