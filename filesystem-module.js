/* 
use this module for interacting with the file system.
all the methods come in pairs, asynchronous & synchronous.
use asynchronous -- asynchronous has callback function
 */


const fs = require('fs');

// const files = fs.readdirSync('./'); //synchronous


fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result: ', files);
});

