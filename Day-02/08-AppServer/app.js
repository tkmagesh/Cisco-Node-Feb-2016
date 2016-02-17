var middlewares = [];

function app(req, res){
    function exec(middlewares, req, res){
        var first = middlewares[0],
            remaining = middlewares.slice(1),
            next = function(){
                exec(remaining, req, res);
            };
        if (first) first(req, res, next);
    }
    exec(middlewares, req, res);
}

app.use = function(middleware){
    middlewares.push(middleware);
}

module.exports = app;
