'use strict'
var path = require('path')
var express = require('express')

var app = express()

// webpack hot server
var webpack = require('webpack')
var config = require('./webpack.config')
var compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, err => {
  console.log(err ? err : 'Listening at http://localhost:3000')
})
