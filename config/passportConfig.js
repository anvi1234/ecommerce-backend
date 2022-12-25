const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User')

passport.use(
  new localStrategy({
        usernameField:'mobileNo'
    },
    (mobileNo,done)=>{
          console.log("mobileno",mobileNo)
      User.findOne({
        mobileNo:mobileNo , 
       },
            (err,user)=>{

            
              
                if(err)
                return done(err);
                else if(!user)
                return done(null,false,{isStatus:"false",message:"Credential is wrong"})
                // else if(!user.verifyPassword(password))
                // return done(null,false,{message:"password is not registered"})
        
                    // Password did not match
                    
                    
                    // Success scenario
                    else
                    return done(null, user);
                
            })
    })
)