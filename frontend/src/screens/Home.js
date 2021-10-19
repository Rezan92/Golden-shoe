import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Carousel from '../components/Carousel';
import Women from '../components/Women';

const Home = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, error, products } = store.products;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <div className='belt'></div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>error</h2>
      ) : (
        products.map((product) => <h1 key={product.id}>{product.name}</h1>)
      )}
      <Women />
    </>
  );
};

export default Home;
