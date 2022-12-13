
  const express =  require("express");
  const router = express.Router();
  const order = require('../controller/order.controller');
  router.post("/add-order",  order.addOrderHistory);
  // // Retrieve all Tutorials
  router.get("/get-order-by-id/:id",  order.getOrderHistoryById);
  router.get("/get-order",  order.getOrderHistory);
  router.delete('/deleteorder/:id', order.deleteOrderHistory);
  router.put('/updateorder/:id', order.updateOrderHistory);
  router.get('/orderByuser', order.getOrderHistoryByIdPerUser);
  module.exports = router;