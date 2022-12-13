
  const express =  require("express");
  const router = express.Router();
  const cart = require('../controller/cart.controller');
  router.post("/add-cart", cart.addCart);
  // // Retrieve all Tutorials
  router.get("/get-cart-by-id/:id", cart.getCartById);
  router.get("/get-cart", cart.getCart);
  router.delete('/deletecart/:id',cart.deleteCart);
  router.put('/updatecart/:id',cart.updateCart);
  module.exports = router;