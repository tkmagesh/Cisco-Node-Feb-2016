var http = require('http'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorHandler = require('./calculatorHandler'),
    notFoundHandler = require('./notFoundHandler'),
    app = require('./app');

app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080!');
