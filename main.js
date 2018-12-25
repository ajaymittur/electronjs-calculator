// TODO change the dimensions of the app, make them bigger preferrably

const {app, BrowserWindow, Menu} = require('electron');

let win, credits;
let menuTemplate = [
     {
         label: 'Theme',
         submenu: [
            {
                label: 'Light',
                click: sendLightTheme
            },
            {
                label: 'Dark',
                click: sendDarkTheme
            },
        ]
     },
     {
         type: 'separator'
     },
     {
         label: 'Credits',
         click() {
             let credits = new BrowserWindow({height: 260, width: 160, title: 'Credits', parent: win});
             credits.loadFile('pages/credits.html');
         }
     },
     {
        type: 'separator'
     },
     {
         label: 'Exit',
         role: 'quit'
     }
    // Only for debugging
    //  {
    //      label: 'Reload',
    //      role: 'reload'
    //  }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate)); 

app.on('ready', () => {
    // Create new window
    win = new BrowserWindow({height: 510, width: 320, title: 'Calculator'});

    // Load the source file
    win.loadFile('pages/index.html'); 

    // Open Developer Tools
    // win.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    // Close the app
    app.quit();
});

function sendLightTheme() {
    win.webContents.send('calculator-theme', 'light');
}

function sendDarkTheme() {
    win.webContents.send('calculator-theme', 'dark');
}