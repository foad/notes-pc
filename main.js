// Basic init
const electron = require('electron');
const { app, BrowserWindow } = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false
  });

  mainWindow.setMenu(null);
  mainWindow.toggleDevTools();
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});
