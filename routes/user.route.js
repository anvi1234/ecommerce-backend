
  const express =  require("express");
  const router = express.Router();
  const jwtHelper = require('../config/jwtHelper');
  
  const user = require('../controller/user.controller');
  router.post("/register", user.register);
  router.post('/authenticate',user.authenticate);
  router.get('/cngSite',jwtHelper.verifyJwtToken,user.cngSite)
  router.get("/get-user-by-id/:id", user.getUserById);
  router.get("/get-user", user.getUser);
  router.delete('/deleteuser/:id',user.deleteUser);
  router.put('/updateUser/:id',user.updateUser );
  module.exports = router;