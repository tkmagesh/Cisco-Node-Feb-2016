/*accummulator.js
    - add(x)
    - subtract(x)
    - multiply(x)
    - divide(x)
    - getResult()
*/

var accummulator = require('./accummulator.js');
console.log(accummulator.getResult()); // => 0
accummulator.add(100);
accummulator.subtract(50);
accummulator.multiply(10);
accummulator.divide(2);
console.log(accummulator.getResult()); // => 250
