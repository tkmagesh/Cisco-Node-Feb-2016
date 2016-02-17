module.exports = function(req, res, next){
    console.log('writing 404 response to the res stream');
    res.statusCode = 404;
    res.end();
    next();
}
