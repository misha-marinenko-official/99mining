const {
    app,
    BrowserWindow
} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow(require("./config"))

    if(mainWindow.loadURL('https://misha-marinenko-official.github.io/99mining/')){
        console.log("[Debug]", "Load https://misha-marinenko-official.github.io/99mining/",  "\n", "Config:", "\n", require("./config"));
    }


    mainWindow.on('closed', function() {
        mainWindow = null
        console.log("[Debug]", "Close. EXIT");
        app.quit();
        process.exit();
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
        console.log("[Debug]", "Close. EXIT triggered by macOS window-all-closed");
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
        console.log("[Debug]", "Creating window");
    }
})

