

var Cspin = require('..');
var spinner = new Cspin('Hello World!');

setTimeout(function(){
    console.log('Stop');
    setTimeout(function(){
        console.log('Done');
    }, 3000);
    spinner.lastFrame('√');

}, 2000);
