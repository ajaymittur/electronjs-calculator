// Add/Customize menu bar

const {app, BrowserWindow} = require('electron');

let win;

app.on('ready', () => {
    // Create new window
    win = new BrowserWindow({height: 510, width: 320, title: 'Calculator'});

    // Load the source file
    win.loadFile('index.html'); 
    
    // Open Developer Tools
    // win.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    // Close the app
    app.quit();
});
