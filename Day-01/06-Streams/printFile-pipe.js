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
    var stream = fs.createReadStream(filename, {encoding : 'utf8'});
    stream.pipe(process.stdout);
    var readCount = 0;
    stream.on('data', function(chunk){
        ++readCount;
    });
    stream.on('end', function(){
        console.log('job done with - ' +  readCount + ' reads');
    });
    stream.on('error', function(err){
        console.log('unknown error' , err);
        process.exit(1);
    });
});
