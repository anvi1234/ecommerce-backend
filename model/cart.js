var mongoose = require('mongoose');
const { any } = require('webidl-conversions');

var CartSchema = new mongoose.Schema({
   id:String,
   userId:String,
   cartArray:Array,
   status:String,
   date:String,
   type:String,
   totalAmount:String,
   uploaded:{type:Date,default:Date.now},
   
})

module.exports = mongoose.model('Cart', CartSchema);