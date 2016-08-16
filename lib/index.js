/*
 * Chalk Cli Spinner
 * https://github.com/goliatone/chalk-cli-spinner
 *
 * Copyright (c) 2015 goliatone
 * Licensed under the MIT license.
 */

'use strict';

var logUpdate = require('log-update');
var chalk = require('chalk');

function Spinner(msg){
    this.start(msg);
}

Spinner.Patterns = [
'0123456789',
'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
'⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓',
'⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆',
'⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋',
'⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁',
'⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈',
'⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈',
'|/-\\',
'◴◷◶◵',
'◰◳◲◱',
'◐◓◑◒',
'▉▊▋▌▍▎▏▎▍▌▋▊▉',
'▌▄▐▀',
'╫╪',
'■□▪▫',
'←↑→↓',
// 'basic'	: '|/—\\',
// 'circle-light' 	: ['◜ ',' ◝',' ◞','◟ '],
// 'circle-cross' 	: '⊕⊗',
// 'circle'		: '◐◓◑◒',
//
// 'square-light'	: ['⌜ ',' ⌝',' ⌟','⌞ '],
// 'square-corner' : '◢◣◤◥',
// 'square-line' 	: '▤▧▥▨',
//
// 'bar-v'	: '▁▂▃▄▅▆▇█▇▆▄▂▁',
// 'bar-h'	: '▏▎▍▌▋▋▊▋▌▍▎▏',
//
// 'triangle-bold' : '▲▶▼◀',
//
// 'arrow-barrel': '➮➱➯➭➫━',
// 'warning' : '░▒▓▓▒'
];

Spinner.prototype.start = function(message){
    this.message = message;
    this.frame = elegantSpinner();
    var self = this;

    this.interval = setInterval(function () {
        logUpdate(chalk.cyan(self.frame()) + ' ' + message);
    }, 50);
};

Spinner.prototype.stop = function(){
    clearInterval(this.interval);
    logUpdate.done();
    logUpdate.clear();
};

Spinner.prototype.lastFrame = function(glyph){

    this.frame = function(){
        return chalk.cyan(glyph);
    };
    logUpdate.clear();
    var self = this;
    setTimeout(function(){
        clearInterval(self.interval);
    }, 50);

    // logUpdate.done();
};

var frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

frames = '▁▂▃▄▅▆▇█▇▆▄▂▁'.split('');


function elegantSpinner() {
	var i = 0;

	return function () {
		return frames[i = ++i % frames.length];
	};
}
/**
 * Exports module
 */
 module.exports = Spinner;
