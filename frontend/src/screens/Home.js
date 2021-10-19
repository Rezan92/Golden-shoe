import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import MainCarousel from '../components/MainCarousel';
import Women from '../components/Women';

const Home = () => {
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
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <MainCarousel />
      <div className='belt'></div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>error</h2>
      ) : (
        <Women products={getProductsByType(products, 'w')} />
      )}
    </>
  );
};

export default Home;
