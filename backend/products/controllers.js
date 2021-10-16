import data from '../DB.js';

export const getAllProducts = (req, res) => {
  res.send(data);
};
