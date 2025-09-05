import User from "../models/User.js";
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';






export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email: email });
    if (!isExist) return res.status(404).json({ message: 'user not found' });

    const comparePass = bcrypt.compareSync(password, isExist.password);

    if (!comparePass) return res.status(400).json({ message: 'invalid credentials' });

    const token = jwt.sign({
      id: isExist._id,
      role: isExist.role
    }, 'secret');

    return res.status(200).json({
      token,
      email: isExist.email,
      role: isExist.role
    });


  } catch (err) {
    return res.status(400).json({ message: err.message });

  }

}


export const registerUser = async (req, res) => {

  const { username, email, password } = req.body;
  try {


    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({
      username,
      email,
      password: hashPass,
      image: req.imagePath
    });
    return res.status(201).json({ message: 'user successfully created' });

  } catch (err) {
    fs.unlink(`./user_images/${req.imagePath}`, (imageErr) => {
      return res.status(400).json({ message: err.message });
    })

  }

}