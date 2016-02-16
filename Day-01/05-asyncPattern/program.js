/* Sync */
function addSync(x,y){
    console.log('[Provider] processing ', x, 'and ', y);
    if (x === 0 || y === 0) throw new Error('invalid arguments');
    var result = x + y;
    console.log('[Provider] returning result');
    return result;
}

function addSyncClient(x,y){
    console.log('[Consumer] trigger addSync');
    try{
        var result = addSync(x,y);
        console.log('[Consumer] result = ', result);
    } catch (e) {
        console.log('something went wrong - ', e);
    }
}

module.exports.addSyncClient = addSyncClient;

function add(x,y, onResult){
    console.log('[Provider] processing ', x, 'and ', y);
    setTimeout(function(){
        if (x === 0 || y === 0) {
            var err =  Error('invalid arguments');
            onResult(err, null);
            return;
        }
        var result = x + y;
        console.log('[Provider] returning result');
        //return result;
        if (typeof onResult === 'function')
            onResult(null, result);
    },5000);
}

function addClient(x,y){
    console.log('[Consumer] trigger add');
    add(x,y, function(err, result){
        if(err){
            console.log('something went wrong - ', err);
            return;
        }
        console.log('[Consumer] result = ', result);
    });
}

module.exports.addClient = addClient;
