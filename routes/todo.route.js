
  const express =  require("express");
  const router = express.Router();
  
  
  const todo = require('../controller/todo.controller');
  router.post("/addtodo", todo.addToDo);
  // // Retrieve all Tutorials
  router.get("/get-todo-by-id/:id", todo.getTodoById);
  router.get("/get-todo", todo.getToDo);
  router.delete('/deletetodo/:id',todo.deleteToDo);
  router.put('/updatetodo/:id',todo.updateToDo );
  module.exports = router;