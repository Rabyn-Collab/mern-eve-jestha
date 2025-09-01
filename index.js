import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();

// MVC
//middleware / routes

app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});




app.use(productRoutes);

app.listen(5000, () => {
  console.log('server run and listening');
})

