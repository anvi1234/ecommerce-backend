var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
   id:String,
   array:[],
   userId:String,
   status:String,
   date:String,
   totalAmount:String
})

module.exports = mongoose.model('ToDo',TodoSchema);