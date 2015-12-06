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

function Spinner(){
    this.start();
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
    var frame = elegantSpinner();

    this.interval = setInterval(function () {
        logUpdate(chalk.cyan(frame()));
    }, 50);
};

Spinner.prototype.stop = function(){
    clearInterval(this.interval);
    logUpdate.clear();
};

var frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

frames = '▁▂▃▄▅▆▇█▇▆▄▂▁'.split('')

function elegantSpinner() {
	var i = 0;

	return function () {
		return frames[i = ++i % frames.length];
	};
};
/**
 * Exports module
 */
 module.exports = Spinner;
