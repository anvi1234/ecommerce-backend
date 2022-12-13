
const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Todo = mongoose.model('ToDo')
  
  module.exports.addToDo = (req,res,next) =>{
    var todo = new  Todo()
    todo.array = req.body.array;
    todo.userId = req.body.userId;
    todo.status = req.body.status;
    todo.date = req.body.date;
    todo.totalAmount = req.body.totalAmount
    todo.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }

  module.exports.getToDo = (req,res,next)=>{
    Todo.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteToDo = (req,res,next)=>{
    let id = req.params.id;
    Product.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }

    module.exports.updateToDo = (req,res,next)=>{
        Todo.findById(req.params.id, function (err,todo) {
          if (!todo)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
            todo.array = req.body.array;
            todo.userId = req.body.userId;
            todo.status = req.body.status;
            todo.date = req.body.date;
            todo.totalAmount = req.body.totalAmount
          todo.save().then(emp => {
          res.json('Product Updated Successfully');
          })
          .catch(err => {
          res.status(400).send("Unable To Update Expenses");
          });
          }
          });
        }

        module.exports.getTodoById = (req,res,next)=>{
            let id = req.params.id;
            Todo.findOne({_id:id},
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
      