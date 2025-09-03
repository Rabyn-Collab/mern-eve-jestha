import Product from "../models/Product.js";
import fs from 'fs';



export const getProducts = async (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
}

export const getProduct = async (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
}

export const addProduct = async (req, res) => {
  try {
    await Product.create({
      ...req.body,
      image: req.imagePath
    });
    return res.status(201).json({ message: 'Product successfully created' });
  } catch (err) {
    fs.unlink(`./uploads/${req.imagePath}`, (imageErr) => {
      return res.status(400).json({ message: err.message });
    })

  }
}




export const updateProduct = async (req, res) => {
  console.log(req.params)
  return res.status(200).json({ message: 'welcome to backened' });
}

export const deleteProduct = async (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
}

