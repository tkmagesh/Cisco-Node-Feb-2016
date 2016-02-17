var url = require('url');

module.exports = function(req, res, next){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    next();
}
