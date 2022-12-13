const express = require('express');
const router = express.Router();

router.use('/product', require('./product.route'));
router.use('/users', require('./user.route'));
router.use('/todo', require('./todo.route'));
router.use('/camera', require('./camera.route'));
router.use('/cart', require('./cart.route'));
router.use('/order', require('./order.route'));
// router.use('/questions', require('./api/question.route'));
// router.use('/files', require('./api/file.route'));
// router.use('/company-details', require('./api/company-detail.route'));
// router.use('/project-details', require('./api/project-detail.route'));
// router.use('/categories', require('./api/category.route'));
// router.use('/images-explorers', require('./api/images-extraction.route'));
// router.use('/search-string', require('./api/clean-text.route'));
// router.use('/classifications', require('./api/classification.route'));

module.exports = router;
