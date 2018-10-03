// Add/Customize menu bar

const {app, BrowserWindow, Menu} = require('electron');

let win;
let menuTemplate = [
    {
        label: 'Clear',
        role: 'reload' // Temporary until clear() is fixed
    },
    {
        label: 'Exit',
        role: 'quit'
    },
    {
        label: 'Credits' // Add credits in a new window
    }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate)); 

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
