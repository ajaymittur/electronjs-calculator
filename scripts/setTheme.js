const ipcRenderer = require('electron').ipcRenderer;
const path = require('path');

let lightTheme = 'light.css', darkTheme = 'dark.css';

let stylesheetLink = document.createElement('link');
stylesheetLink.setAttribute('rel', 'stylesheet');
stylesheetLink.setAttribute('type', 'text/css');
stylesheetLink.setAttribute('href', path.join('..\\styles\\themes', lightTheme));

document.getElementsByTagName('head')[0].appendChild(stylesheetLink);

ipcRenderer.on('calculator-theme', (event, message) => {
    if (message == 'light')
        stylesheetLink.setAttribute('href', path.join('..\\styles\\themes', lightTheme));
    else if (message == 'dark')
        stylesheetLink.setAttribute('href', path.join('..\\styles\\themes', darkTheme)); 
});