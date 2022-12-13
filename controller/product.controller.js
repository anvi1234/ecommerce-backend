const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Product = mongoose.model('Products')
  
  module.exports.addProduct = (req,res,next) =>{
    var product = new   Product()
    product.productName = req.body.productName,
    product.category = req.body.category
    product.key = req.body.key
    product.description= req.body.description
    product.priceArray = req.body.priceArray
    product.fireBaseUrl = req.body.fireBaseUrl
    product.isSubPrice = req.body.isSubPrice
    product.weight = req.body.weight
    product.price = req.body.price
    product.producttype = req.body.producttype
    product.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getProduct = (req,res,next)=>{
 Product.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteProduct = (req,res,next)=>{
    
    let id = req.params.id;
    Product.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


    module.exports.updateProduct = (req,res,next)=>{
        Product.findById(req.params.id, function (err,product) {
          if (!product)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
          
            product.productName = req.body.productName,
            product.category = req.body.category
            product.key = req.body.key
            product.description= req.body.description
            product.imageUrl = req.body.imageUrl;
            product.fireBaseUrl = req.body.fireBaseUrl;
            product.priceArray = req.body.priceArray;
            product.isSubPrice = req.body.isSubPrice;
            product.weight = req.body.weight;
            product.price = req.body.price;
            product.producttype = req.body.producttype
            product.save().then(emp => {
          res.json('Product Updated Successfully');
          })
          .catch(err => {
          res.status(400).send("Unable To Update Expenses");
          });
          }
          });
        }

        module.exports.getProductById = (req,res,next)=>{
            let id = req.params.id;
           Product.findOne({_id:id},
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
      
        
  

















