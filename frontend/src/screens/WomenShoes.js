import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ListOfItems from '../components/ListOfItems';

const WomenShoes = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, error, products } = store.products;

  const getProductsByType = (products, type) => {
    const filteredProducts = products.filter(
      (products) => products.type === type
    );
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
        <ListOfItems
          products={getProductsByType(products, 'w')}
          title={"Women's Shoes"}
        />
      )}
    </>
  );
};

export default WomenShoes;
