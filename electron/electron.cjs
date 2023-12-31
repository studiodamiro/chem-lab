const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.IS_DEV == 'true' ? true : false;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    icon: path.join(__dirname, 'icon_256.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../dist/index.html')}`);
  // Open the DevTools.
  if (isDev) {
    //mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
