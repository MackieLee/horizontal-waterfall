const path = require('path')
const chokidar = require('chokidar')
const toJSON = require('./toJSON')

let imgPath = path.join(__dirname, '../public/src/photo/photos')
let relPath = path.join(__dirname, '../public')
let fileName = path.join(__dirname, '../data/albums.json')

function watchImgs() {
    let watcher = chokidar.watch(imgPath)
    watcher.on('ready', () => {
        console.log(`[${new Date}] Initial scan complete. Watching albums changes`)
        toJSON(imgPath, relPath, fileName)
        watcher.on('all', () => {
            toJSON(imgPath, relPath, fileName)
        })
    })
}

module.exports = watchImgs
