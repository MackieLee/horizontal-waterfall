const fs = require('fs')
const path = require('path')
const getAlbums = require('./getAlbums')
const getImgs = require('./getImgs')

function toJSON(imgPath, relPath, fileName) {
    let albums = getAlbums(imgPath)
    let data = {}
    for (let page in albums) {
        data[page] = {}
        albums[page].forEach(album => {
            let albumPath = path.join(imgPath, page, album)
            let imgs = getImgs(albumPath)
            for(let i=0, l=imgs.length; i<l; i++) {
                imgs[i] = path.sep + path.relative(relPath, imgs[i])
            }
            data[page][album] = imgs
        })
    }
    fs.writeFile(fileName, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log(err)
        } else {
            console.log(`[${new Date}] Output to albums json file`)
        }
    })
}

module.exports = toJSON