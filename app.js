const {
    app,
    BrowserWindow,
    webContents
} = require('electron');
let appWindow

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 1000,
        webPreferences: {
            devTools: false,
          nodeIntegration: true,
          icon: 'dist/browser/assets/logo.png'
        }
    })
    appWindow.loadFile('dist/browser/index.html');
    appWindow.on('closed', function() {
        appWindow = null
    })
    // appWindow.webContents.openDevTools();
}
app.whenReady().then(()=>{
    createWindow();
})
