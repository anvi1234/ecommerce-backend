var mongoose = require('mongoose');
const { any } = require('webidl-conversions');

var orderHistorySchema = new mongoose.Schema({
   id:String,
   userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   cartArray:Array,
   status:String,
   date:String,
   type:String, 
   totalAmount:String,
   changeAdress:Object,
   uploaded:{type:Date,default:Date.now},
   
})

module.exports = mongoose.model('OrderHistory', orderHistorySchema);