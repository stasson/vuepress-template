const packagejson = require('../../package.json')
const configureWebpack = require('./webpack')
const markdown = require('./markdown')
let {title, description} = require('../config.js')

title = title || packagejson.name
description = description  || packagejson.description

module.exports = {
  title, 
  description, 
  configureWebpack,
  markdown
}
