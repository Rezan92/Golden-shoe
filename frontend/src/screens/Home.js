import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import MainCarousel from '../components/MainCarousel';
import Carousel from '../components/Carousel';
import Separator from '../components/Separator';
import HeroCardContainer from '../components/HeroCardContainer';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';

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
      <Separator rotate={true} />
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>error</h2>
      ) : (
        <>
          <Carousel products={getProductsByType(products, 'w')} title={'Women'} />
          <HeroCardContainer />
          <Newsletter />
          <Banner />
          <Carousel products={getProductsByType(products, 'm')} title={'Men'} />
        </>
      )}
    </>
  );
};

export default Home;
