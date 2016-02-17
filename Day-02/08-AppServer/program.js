var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    calculator = require('./calculator'),
    path = require('path');

//http://localhost:8080/calculator?op=add&n1=100&n2=200

/*
- dataParser
- staticServer
- calculatorHandler
- notFoundHandler
*/

var staticExtns = ['.html', '.css', '.js', '.xml', '.png', '.ico', '.json', '.txt'];
function isStatic(pathname){
    return staticExtns.indexOf(path.extname(pathname)) !== -1;
}

var server = http.createServer(function(req, res){
    console.log('req -> ', req.url);
    req.url = req.url === '/' ? '/index.html' : req.url;
    var urlObj = url.parse(req.url, true);
    if (isStatic(urlObj.pathname)){
        var resourcePath = path.join(__dirname, urlObj.pathname);
        fs.access(resourcePath, fs.F_OK | fs.R_OK, function(err) {
            if (err){
                res.statusCode = 404;
                res.end();
                return;
            }
            var stream = fs.createReadStream(resourcePath);
            stream.pipe(res);
        });
    } else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
        var query = urlObj.query,
            op = query.op || 'add',
            n1 = parseInt(query.n1, 10) || 0,
            n2 = parseInt(query.n2, 10) || 0;
        var result = calculator[op](n1, n2);

        res.write(result.toString());
        res.end();
    } else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var query = qs.parse(reqData),
                op = query.op || 'add',
                n1 = parseInt(query.n1, 10) || 0,
                n2 = parseInt(query.n2, 10) || 0;
            var result = calculator[op](n1, n2);

            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080!');
