var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var routes = require('./routes')
var server = express()

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))

server.use('/', routes)
module.exports = server
