
  const express =  require("express");
const router = express.Router();
const product = require('../controller/product.controller');
router.post("/add-product", product.addProduct);
// // Retrieve all Tutorials
router.get("/get-product-by-id/:id", product .getProductById);
router.get("/get-product", product.getProduct);
router.delete('/deleteProduct/:id',product.deleteProduct);
router.put('/updateProduct/:id',product.updateProduct );
module.exports = router;