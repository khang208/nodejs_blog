const express = require('express');
const router = express.Router();

const cartControllers = require('../app/controllers/CartController');
router.get('/', cartControllers.storeCart);
router.post('/minus', cartControllers.minus);
router.post('/payment', cartControllers.payment);
router.post('/plus', cartControllers.plus);
router.post('/delete', cartControllers.delete);
router.post('/add-to-cart/combo', cartControllers.addToCartCombo);
router.post('/add-to-cart', cartControllers.addToCart);

// router.get('/trash/courses', cartControllers.trash);

module.exports = router;
