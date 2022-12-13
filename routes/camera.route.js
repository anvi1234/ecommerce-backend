
  const express =  require("express");
  const router = express.Router();
  const camera = require('../controller/camera.controller');
  router.post("/add-camera",camera.addCamera);
  // // Retrieve all Tutorials
  router.get("/get-camera-by-id/:id", camera.getCameraById);
  router.get("/get-camera", camera.getCamera);
  router.delete('/deletecamera/:id',camera.deleteCamera);
  router.put('/updatecamera/:id',camera.updateCamera );
  module.exports = router;