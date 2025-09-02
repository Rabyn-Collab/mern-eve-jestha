import express from 'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';


const app = express();

//mongodb connect

mongoose.connect('mongodb+srv://psg017597:pass900@cluster0.yqujtfd.mongodb.net/Shopify').then((val) => {
  app.listen(5000, () => {
    console.log('server run and listening');
  })

}).catch((err) => {
  console.log(err);
})

app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});




app.use(productRoutes);

