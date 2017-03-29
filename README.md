# electron-win

An window manager for Electron.

You can use it both in main and renderer process.

## Usage

```javascript
npm install --save electron-win

// in main process
const win = require('electron-win');

// in renderer process
const win = require('electron').remote.require('electron-win');
```

## API

**win.getWindow(name)**

Get window by name.

**win.getAllWindows()**

Get all windows.

**win.addWindow(name, windowInstance)**

Register an existing window with a given name.

**win.createWindow(name[, options])**

Create and register a window.

The options are almost the same as creating a native BrowserWindow in electron. [See this API](https://electron.atom.io/docs/api/browser-window/). There are some other properties you can use:

- path: string. The url to load.

**win.destroyWindow(name)**

Close and destroy a window.

**win.bringWindowToFront(name)**

Restore and activate a window.