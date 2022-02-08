//use this module to interact with the operating system

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('total mem: ' + totalMemory);

//template string

console.log(`Total Memory: ${totalMemory} `)
console.log(`Free Memory: ${freeMemory} `)