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
        label: 'Credits',
        click: openCredits
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

function openCredits() {
    let credits = new BrowserWindow({height: 260, width: 160, title: 'Credits', parent: win});
    credits.loadFile('credits.html');
}