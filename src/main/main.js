const { app, BrowserWindow, components } = require('electron')

// A: switches region — leave empty, just know why it's here

function createWindow () {
  const win = new BrowserWindow({ width: 1200, height: 800 })
  // B: load https://music.apple.com
}

// C: await components.whenReady(), then createWindow()

app.on('window-all-closed', () => app.quit())