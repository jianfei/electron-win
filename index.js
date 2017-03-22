const isMainProcess = process.type === 'browser';

let win;

if (isMainProcess) {
    win = require('./win');
} else {
    const { remote } = require('electron');
    win = remote.require(`${__dirname}/win`);
}

module.exports = win;