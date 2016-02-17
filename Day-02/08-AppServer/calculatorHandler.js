var calculator = require('./calculator'),
    Handlebars = require('handlebars'),
    path = require('path'),
    fs = require('fs');

module.exports = function(req, res, next){
    var responseData = null;
    if (req.url.pathname === '/calculator'){
        if (req.method === 'GET'){
            responseData = {
                n1 : 0,
                n2 : 0,
                result : 0,
                op : 'add'
            }
        } else if (req.method === 'POST'){
            var op = req.field('op') || 'add',
                n1 = parseInt(req.field('n1'), 10) || 0,
                n2 = parseInt(req.field('n2'), 10) || 0;
            var result = calculator[op](n1, n2);
            responseData = {
                op : op,
                n1 : n1,
                n2 : n2,
                result : result
            };
            responseData[op] = true;
            console.log(responseData);
        }
        fs.readFile(path.join(__dirname, '/templates/calculator.hbs'), {encoding : 'utf8'}, function(err, fileContents){
            if (err){
                res.statusCode = 500;
                res.end();
                return;
            }
            var template = Handlebars.compile(fileContents);
            var response = template(responseData);
            res.write(response);
            res.end();
        });
    } else {
        next();
    }
}
