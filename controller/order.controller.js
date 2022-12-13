const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const OrderHistory = mongoose.model('OrderHistory')
  const Cart = mongoose.model('Cart')

  module.exports.addOrderHistory= (req,res,next) =>{
   
    var order = new  OrderHistory()
    order.userId = req.body.userId,
    order.cartArray = req.body.cartArray,
    order.status = req.body.status,
    order.date = req.body.date,
    order.type = req.body.type,
    order.totalAmount = req.body.totalAmount
    if(req.body?.cartId){
        Cart.findByIdAndRemove({ _id: req.body.cartId }, function (err,expense) {
            if (err) res.json(err);
            else {
              order.save((err,doc)=>{
                  if(!err)
                  res.send(doc);
                   else{
                          return next(err);
                      }
             })
            }
            });
    }
    else{
        order.save((err,doc)=>{
            if(!err)
            res.send(doc);
             else{
                    return next(err);
                }
       })
    }
    // siteRegistration.billNo = req.body.billNo;
    // siteRegistration.poNo = req.body.poNo;
    // siteRegistration.date = req.body.date
   
    
    }
  
  
  

  
module.exports.getOrderHistory = (req,res,next)=>{
    OrderHistory.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteOrderHistory = (req,res,next)=>{
    
    let id = req.params.id;
    OrderHistory.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


    module.exports.updateOrderHistory = (req,res,next)=>{
        OrderHistory.findById(req.params.id, function (err,cart) {
          if (!cart)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
          
            cart.userId = req.body.userId,
            cart.cartArray = req.body.cartArray,
            cart.status = req.body.status
            cart.date = req.body.date
            cart.type = req.body.type,
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

        module.exports.getOrderHistoryById = (req,res,next)=>{
            let id = req.params.id;
            OrderHistory.find({userId:id},
              (err,user)=>{
                  if(!user)
                  return res.status(404).json({
                      status:false,message:"User not found"
                  })
                else
                  return res.status(200).json({
                      status:true,user: user
                  })
              }
              )
             }
      
        
             module.exports.getOrderHistoryById = (req,res,next)=>{
              let id = req.params.id;
              OrderHistory.find({userId:id},
                (err,user)=>{
                    if(!user)
                    return res.status(404).json({
                        status:false,message:"User not found"
                    })
                  else
                    return res.status(200).json({
                        status:true,user: user
                    })
                }
                )
               }
  
    module.exports.getOrderHistoryByIdPerUser = (req,res,next)=>{
              OrderHistory.find()
   .populate('userId')
   .exec(function (err, result) {
    if(!result)
    return res.status(404).json({
        status:false,message:"User not found"
    })
  else
    return res.status(200).json({
        status:true,user: result
    })
}
   
)}
            
                 
















