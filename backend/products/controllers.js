import data from '../DB.js';

export const getAllProducts = (req, res) => {
  res.send(data);
};

export const getOneProduct = (req, res) => {
  const id = req.params.id;
  const product = data.filter((p) => parseInt(p.id) === parseInt(id));
  if (product.length) {
    res.send(product[0]);
  } else {
    res.status(404).send('This product is not exist');
  }
};
