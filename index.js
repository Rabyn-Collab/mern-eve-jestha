import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

//mongodb connect

mongoose.connect('mongodb+srv://psg017597:pass900@cluster0.yqujtfd.mongodb.net/Shopify').then((val) => {
  app.listen(5000, () => {
    console.log('server run and listening');
  })

}).catch((err) => {
  console.log(err);
})
app.use(cors());
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.use(express.static('uploads'));
app.use(express.static('user_images'));


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});




app.use(productRoutes);
app.use(userRoutes);

