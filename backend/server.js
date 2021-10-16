import express from 'express';
import dotenv from 'dotenv';
import allProduct from './products/router.js';
dotenv.config();

const app = express();

app.use('/api/', allProduct);

app.get('/', (req, res) => {
  res.send("Hello I'm the server :)");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
