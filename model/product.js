var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
   id:String,
   fireBaseUrl:String,
   productName:String,
   category:String,
   key:String,
   price:String,
   weight:String,
   description:String,
   priceArray:Array,
   isSubPrice:Boolean,
   producttype:String,
   uploaded:{type:Date,default:Date.now},
   
})

module.exports = mongoose.model('Products',ProductSchema);