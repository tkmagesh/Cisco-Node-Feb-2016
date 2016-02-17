function f1Sync(){
    console.log('f1Sync triggered');
    console.log('f1Sync completed');
}

function f2Sync(){
    console.log('f2Sync triggered');
    console.log('f2Sync completed');
}

function f3Sync(){
    console.log('f3Sync triggered');
    console.log('f3Sync completed');
}

function f4Sync(){
    console.log('f4Sync triggered');
    console.log('f4Sync completed');
}

function runSync(){
    f1Sync();
    f2Sync();
    f3Sync();
    f4Sync();
}
module.exports.runSync = runSync;

function f1(){
    console.log('f1 triggered');
    setTimeout(function(){
        console.log('f1 completed');
    }, 3000);
}

function f2(){
    console.log('f2 triggered');
    setTimeout(function(){
        console.log('f2 completed');
    }, 3000);
}

function f3(){
    console.log('f3 triggered');
    setTimeout(function(){
        console.log('f3 completed');
    }, 3000);
}

function f4(){
    console.log('f4 triggered');
    setTimeout(function(){
        console.log('f4 completed');
    }, 3000);
}

function run(){
    f1();
    f2();
    f3();
    f4();
}

module.exports.run = run;
