const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturingDate: {
    type: Date,
    required: true
  },
  perishableProduct: Boolean,
  expirationDate: Date,
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Product', ProductSchema)
