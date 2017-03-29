const { BrowserWindow } = require('electron');

if (process.type !== 'browser') {
    console.error('Please use remote.require to import electron-win in renderer process.');
}

const winMap = {};

function getWindow(name) {
    return winMap[name];
}

function setWindow(name, win) {
    winMap[name] = win;
}

function getAllWindows() {
    const winArr = [];

    for(const key in winMap) {
        winArr.push(winMap[key]);
    }

    return winArr;
}

function addWindow(name, win) {
    const existWin = getWindow(name);

    if (!existWin) {
        setWindow(name, win);
        return getWindow(name);
    }

    return false;
}

function createWindow(name, options) {
    const newWin = new BrowserWindow(options);

    newWin.loadURL(options.path);

    newWin.on('closed', () => {
        if (newWin === winMap[name]) {
            delete winMap[name];
        }
    });

    return addWindow(name, newWin);
}

function destroyWindow(name) {
    const win = getWindow(name);

    if (win) {
        win.close();
        delete winMap[name];
    }
}

function bringWindowToFront(name) {
    const win = getWindow(name);

    if (win) {
        win.restore();
        win.show();
    }
}

module.exports = {
    getWindow,
    getAllWindows,
    addWindow,
    createWindow,
    destroyWindow,
    bringWindowToFront,
};
