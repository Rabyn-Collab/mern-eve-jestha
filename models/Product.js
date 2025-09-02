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
  }



}, { timestamps: true });


const Product = mongoose.model('Product', productShema);

export default Product;