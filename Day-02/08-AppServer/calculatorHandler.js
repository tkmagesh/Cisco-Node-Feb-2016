var qs = require('querystring'),
    calculator = require('./calculator');

module.exports = function(req, res){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var query = req.url.query,
            op = query.op || 'add',
            n1 = parseInt(query.n1, 10) || 0,
            n2 = parseInt(query.n2, 10) || 0;
        var result = calculator[op](n1, n2);

        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
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
    }
}
