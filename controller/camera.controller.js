const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Camera = mongoose.model('camera')
  
  module.exports.addCamera = (req,res,next) =>{
    var camera = new  Camera()
    
    camera.fireBaseUrl = req.body.fireBaseUrl,
    camera.userId = req.body.userId,
    camera.status = req.body.status,
    camera.date = req.body.date,
    camera.type = req.body.type,
    // siteRegistration.billNo = req.body.billNo;
    // siteRegistration.poNo = req.body.poNo;
    // siteRegistration.date = req.body.date
  
    camera.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getCamera = (req,res,next)=>{
    Camera.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteCamera = (req,res,next)=>{
    
    let id = req.params.id;
    Camera.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


    module.exports.updateCamera = (req,res,next)=>{
        Camera.findById(req.params.id, function (err,camera) {
          if (!camera)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
          
            camera.fireBaseUrl = req.body.fireBaseUrl,
            camera.userId = req.body.userId,
            camera.status = req.body.status,
            camera.date = req.body.date,
            camera.type = req.body.type,
            camera.save().then(emp => {
          res.json('Product Updated Successfully');
          })
          .catch(err => {
          res.status(400).send("Unable To Update Expenses");
          });
          }
          });
        }

        module.exports.getCameraById = (req,res,next)=>{
            let id = req.params.id;
            Camera.findOne({userId:id},
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
      
        
  

















