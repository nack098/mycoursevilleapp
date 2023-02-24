const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    alwaysOnTop: false,
    title: "MyCourseVille",
  });

  window.loadURL('https://www.mycourseville.com/')
};

app.whenReady().then(() => {
  createWindow()

  app.on('browser-window-created', (event, window) => {
    window.setSize(1280, 720)
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
