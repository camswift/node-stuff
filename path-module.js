//use this module to make working with paths easier

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

console.log('dir: ' + pathObj.dir);