import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ListOfItems from '../components/ListOfItems';

const AllProducts = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, error, products } = store.products;

  const getProductsByType = (products, type) => {
    let filteredProducts = [];
    if (type) {
      filteredProducts = products.filter((products) => products.type === type);
    } else {
      filteredProducts = products;
    }
    return filteredProducts;
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(listProducts());
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'dark'}>No items yet</Message>
      ) : (
        <ListOfItems products={getProductsByType(products)} title={'All Shoes'} />
      )}
    </>
  );
};

export default AllProducts;
