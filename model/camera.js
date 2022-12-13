var mongoose = require('mongoose');

var CameraSchema = new mongoose.Schema({
   id:String,
   fireBaseUrl:Array,
   userId:String,
   status:String,
   date:Date,
   type:String,
   totalAmount:String,
})

module.exports = mongoose.model('camera',CameraSchema);