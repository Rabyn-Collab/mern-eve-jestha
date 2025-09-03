import mongoose from "mongoose";


const productShema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  stock: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['electronics', 'fashion', 'jewelery', 'books'],
    required: true
  },
  brand: {
    type: String,
    enum: ['apple', 'samsung', 'sony', 'dolce', 'gucci', 'nike', 'amazon'],
    required: true
  }



}, { timestamps: true });


const Product = mongoose.model('Product', productShema);

export default Product;