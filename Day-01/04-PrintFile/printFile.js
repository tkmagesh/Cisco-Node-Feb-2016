var fs = require('fs');
if (!process.argv[2]){
    console.log('Insufficient number of arguments');
    process.exit(1);
}
var filename = process.argv[2];
fs.access(filename, fs.F_OK | fs.R_OK, function(err) {
    if (err){
        console.log("error accessing file ", filename);
        process.exit(1);
    }
    fs.readFile(filename, {encoding : 'utf8'}, function(err, contents){
        console.log(contents);
    });
});
