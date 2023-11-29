const dbConfig = require('../../config/db.config')

const mongoose = require('mongoose')

// Promise merupakan core untuk proses asyncronus
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.url = dbConfig.url //dari modul db config

module.exports = db