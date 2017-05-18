const fs = require('fs')
const path = require('path')

function getAlbums(photosPath) {
    let pages = fs.readdirSync(photosPath)
    let collection = {}
    pages.forEach(page => {
        let pagePath = path.join(photosPath, page)
        let stat = fs.statSync(pagePath)
        if (stat.isDirectory()) {
            let albums = fs.readdirSync(pagePath)
            collection[page] = []
            albums.forEach(album => {
                let stat = fs.statSync(path.join(pagePath, album))
                if (stat.isDirectory()) {
                    collection[page].push(album)
                }
            })
        }
    })
    return collection
}

module.exports = getAlbums