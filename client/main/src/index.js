const fs = require('fs');

const {app, BrowserWindow} = require('electron');

function createMainWindow () {
  win = new BrowserWindow({
  width: 1200, height: 800, transparent: false,
  webPreferences: {
    nodeIntegration: false,
    preload: __dirname + 'preloads/preload.js'
  }});
  win.loadURL('http://localhost:3000');
    
  win.webContents.openDevTools({ mode: 'detach' });
  win.on('closed', () => {  
    win = null
  });
};

let win;

app.on('ready', createMainWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', () => {
  if (win === null) {
    createMainWindow()
  }
});
