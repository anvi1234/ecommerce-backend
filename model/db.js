const { json } = require('body-parser');
const mongoose = require('mongoose');
const DB = 'mongodb+srv://Rasanwala:Rasan123@cluster0.ibk4857.mongodb.net/Rasanwala?retryWrites=true&w=majority'
// const DB ='mongodb://127.0.0.1:27017/rashanWala' 
mongoose.connect(DB).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("no connection",err);
})


require("./product");
require("./user");
require("./todo");
require("./camera");
require("./cart");
require("./order");

