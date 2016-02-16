var http = require('http'),
    fs = require('fs'),
    path = require('path');

var server = http.createServer(function(req, res){
    req.url = req.url === '/' ? '/index.html' : req.url;
    var resourcePath = path.join(__dirname, req.url);
    fs.access(resourcePath, fs.F_OK | fs.R_OK, function(err) {
        if (err){
            res.statusCode = 404;
            res.end();
            return;
        }
        var stream = fs.createReadStream(resourcePath);
        stream.pipe(res);
    });
});
server.listen(8080);
console.log('server listening on port 8080!');
