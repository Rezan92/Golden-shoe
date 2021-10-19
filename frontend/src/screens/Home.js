import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Carousel from '../components/Carousel';
import Women from '../components/Women';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Carousel />
      <div className='belt'></div>
      <Women />
    </>
  );
};

export default Home;
