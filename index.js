const path = require('path')
const express = require('express')
const morgan = require('morgan')
const watchImgs = require('./util/watchImgs')

const app = express()
app.use(morgan('short'))
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/get-all-photos', (req, res) => {
    res.set('Content-Type', 'Application/json')
    res.sendFile(path.resolve(__dirname, './data/albums.json'))
})

const server = app.listen(8000, () => {
    watchImgs()
    let port = server.address().port
    console.log(`Listening at port: ${port}`)
})