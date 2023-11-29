const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Connecting to database
// const query = 'mongodb+srv://Username:<password>'
// 	+ '@student.tuufn.mongodb.net/College?'
// 	+ 'retryWrites=true&w=majority'

const query = "mongodb://127.0.0.1:27017/collect_skripskip"

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db).then(()=>{console.log(`Database Connected !`)});

module.exports = router;
