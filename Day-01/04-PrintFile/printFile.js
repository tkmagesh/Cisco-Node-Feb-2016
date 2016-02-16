var fs = require('fs');
fs.readFile('test.txt', {encoding : 'utf8'}, function(err, contents){
    console.log(contents);
});
