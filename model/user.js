const mongoose  = require("mongoose");
const bcrypt = require('bcryptjs');
const { method } = require("lodash");
const passport = require("passport");
const jwt = require('jsonwebtoken');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderHistory',
       
    },
   userName :{
        type:String
    },
    mobileNo :{
        type:String
    },
   address1 :{
        type:String
    },
    address2 :{
        type:String
    },
    district:{
        type:String
    },
    
    pinCode:{
        type:String
    },
   
    emailName:{
        type:String,
        unique: false
 },
    // password:{
    //     type:String,
    //  },
     changeAddress:{
        type:Array
     }
   })

 
//Events
// userSchema.pre('save',function(next){
//     bcrypt.genSalt(10,(err,salt) =>{
//         bcrypt.hash(this.password ,salt,(err,hash)=>{
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         })
//     })
// })

//method
// userSchema.methods.verifyPassword = function(password) {
 
//     return bcrypt.compareSync(password, this.password);
//   };

userSchema.methods.generateJwt = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}
mongoose.model('User', userSchema )