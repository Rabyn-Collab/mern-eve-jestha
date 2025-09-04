import Product from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";



export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid product id' });
    const isExist = await Product.findById(id);
    if (!isExist) return res.status(404).json({ message: 'product not found' });
    return res.status(200).json(isExist);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
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
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid product id' });
    const isExist = await Product.findById(id);
    if (!isExist) return res.status(404).json({ message: 'product not found' });

    isExist.title = req.body?.title || isExist.title;
    isExist.description = req.body?.description || isExist.description;
    isExist.price = req.body?.price || isExist.price;
    isExist.stock = req.body?.stock || isExist.stock;
    isExist.category = req.body?.category || isExist.category;
    if (req.imagePath) {
      fs.unlink(`./uploads/${isExist.image}`, async (imageErr) => {
        isExist.image = req.imagePath;
        await isExist.save();
        return res.status(200).json({ message: 'Product successfully updated' });
      });
    } else {
      await isExist.save();
      return res.status(200).json({ message: 'Product successfully updated' });
    }


  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid product id' });
    const isExist = await Product.findById(id);
    if (!isExist) return res.status(404).json({ message: 'product not found' });

    fs.unlink(`./uploads/${isExist.image}`, async (imageErr) => {
      await isExist.deleteOne();

      return res.status(200).json({ message: 'Product successfully deleted' });
    });



  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

