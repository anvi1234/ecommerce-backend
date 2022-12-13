const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Cart = mongoose.model('Cart')
  
  module.exports.addCart = (req,res,next) =>{
    var cart = new  Cart()
    cart.userId = req.body.userId,
    cart.cartArray = req.body.cartArray,
    cart.status = req.body.status,
    cart.date = req.body.cart,
    cart.type = req.body.type,
    cart.totalAmount = req.body.totalAmount
    // siteRegistration.billNo = req.body.billNo;
    // siteRegistration.poNo = req.body.poNo;
    // siteRegistration.date = req.body.date
  
    cart.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getCart = (req,res,next)=>{
    Cart.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteCart = (req,res,next)=>{
  Cart.find({item: req.params.id}).deleteOne(function(err, data){
    if(err) throw err;
      res.json(data);   
  }); 

    
    // let id = req.params.id;
    // Cart.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
    //   if (err) res.json(err);
    //   else res.json('Product Deleted Successfully');
    //   });
    }


    module.exports.updateCart = (req,res,next)=>{
       Cart.findById(req.params.id, function (err,cart) {
          if (!cart)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
          
            cart.userId = req.body.userId,
            cart.cartArray = req.body.cartArray,
            cart.status = req.body.status
            cart.date = req.body.date
            cart.type = req.body.type
            cart.totalAmount = req.body.totalAmount
            cart.save().then(emp => {
          res.json('Product Updated Successfully');
          })
          .catch(err => {
          res.status(400).send("Unable To Update Expenses");
          });
          }
          });
        }

        module.exports.getCartById = (req,res,next)=>{
            let id = req.params.id;
            Cart.findOne({userId:id},
              (err,user)=>{
                  if(!user)
                  return res.json({
                      status:false,user:[]
                  })
                else
                  return res.status(200).json({
                      status:true,user: user
                  })
              }
              )
             }
      
        
  

















