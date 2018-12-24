const ipcRenderer = require('electron').ipcRenderer;
const path = require('path');

let defaultTheme = 'light.css';
let stylesheetLink = document.createElement('link');

stylesheetLink.setAttribute('rel', 'stylesheet');
stylesheetLink.setAttribute('type', 'text/css');
stylesheetLink.setAttribute('href', path.join('../styles/', defaultTheme));

document.getElementsByTagName('head')[0].appendChild(stylesheetLink);

ipcRenderer.on('channelTheme', (event, message) => {
    // receive the theme and handle it here
});