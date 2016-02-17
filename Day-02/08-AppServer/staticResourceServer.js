var path = require('path'),
    fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.xml', '.png', '.ico', '.json', '.txt'];
function isStatic(pathname){
    return staticExtns.indexOf(path.extname(pathname)) !== -1;
}

module.exports = function(req, res){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        fs.access(resourcePath, fs.F_OK | fs.R_OK, function(err) {
            if (err){
                res.statusCode = 404;
                res.end();
                return;
            }
            //fs.createReadStream(resourcePath).pipe(res);
            var stream = fs.createReadStream(resourcePath);
            stream.on('data', function(chunk){
                console.log('writing response to the res stream');
                res.write(chunk);
            });
            stream.on('end', function(){
                console.log('DOne with cowriting response to the res stream');
                res.end();
            });
        });
    }
}
