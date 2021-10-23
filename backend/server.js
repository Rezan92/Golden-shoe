import express from 'express';
import dotenv from 'dotenv';
import allProduct from './products/router.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/', allProduct);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
