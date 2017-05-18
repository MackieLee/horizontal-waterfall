const fs = require('fs')
const path = require('path')

function isImg(file) {
    const reg = /.(jpg|jpeg|png|gif)$/
    return reg.test(file)
}

function getImgs(dir) {
    let imgs = []
    let files = fs.readdirSync(dir)
    files.forEach(file => {
        let filePath = path.join(dir, file)
        let stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            [].push.apply(imgs, getImgs(filePath, imgs))
        } else
        if (isImg(filePath)) {
            imgs.push(filePath)
        }
    })
    return imgs
}

module.exports = getImgs
