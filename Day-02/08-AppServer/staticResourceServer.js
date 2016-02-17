var path = require('path'),
    fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.xml', '.png', '.ico', '.json', '.txt'];
function isStatic(pathname){
    return staticExtns.indexOf(path.extname(pathname)) !== -1;
}

module.exports = function(resPath){
    return function(req, res, next){
            if (isStatic(req.url.pathname)){
                var resourcePath = path.join(resPath, req.url.pathname);
                fs.access(resourcePath, fs.F_OK | fs.R_OK, function(err) {
                    if (err){
                        res.statusCode = 404;
                        res.end();
                        return;
                    }
                    fs.createReadStream(resourcePath).pipe(res);
                });
            } else {
                next();
            }
        }
};
