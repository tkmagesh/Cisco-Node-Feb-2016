var calculator = require('./calculator');

module.exports = function(req, res, next){
    if (req.url.pathname === '/calculator'){
        var op = req.field('op') || 'add',
            n1 = parseInt(req.field('n1'), 10) || 0,
            n2 = parseInt(req.field('n2'), 10) || 0;
        var result = calculator[op](n1, n2);
        res.write(result.toString());
        res.end();
    }else {
        next();
    }
}
