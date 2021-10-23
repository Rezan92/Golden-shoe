import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
        <h1 className='banner-title'>Shop Now</h1>
        <div className='banner-btns'>
          <Link to={'/w/product'}>
            <button className='banner-btn'>Women's Shoes</button>
          </Link>
          <Link to={'/w/product'}>
            <button className='banner-btn'>Men's Shoes</button>
          </Link>
          <Link>
            <button className='banner-btn'>Stores</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
