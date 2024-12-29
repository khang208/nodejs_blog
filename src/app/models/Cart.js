// models/cart.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cart = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        comboId: { type: mongoose.Schema.Types.ObjectId, ref: 'Combo' }, 
        quantity: { type: Number, default: 1 },
        price: { type: String },
      },
    ],
    payment: {type: Boolean, default: false},
    totalQuantity: { type: Number, default: 0 }, // Tổng số sản phẩm trong giỏ
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Cart', Cart);
