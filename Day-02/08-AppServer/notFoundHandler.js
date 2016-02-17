module.exports = function(req, res){
    console.log('writing 404 response to the res stream');
    res.statusCode = 404;
    res.end();
}
