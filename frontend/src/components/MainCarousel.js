import './mainCarousel.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainCarousel = () => {
  const [counter, setCounter] = useState(1);
  const [size] = useState(100);
  const [transition, setTransition] = useState('all 0.5s ease-out');
  const dots = useRef();

  const prev = () => {
    if (counter <= 0) return;
    setTransition('all 0.5s ease-out');
    setCounter(counter - 1);
  };

  const next = () => {
    if (counter >= 5) return;
    setTransition('all 0.5s ease-out');
    setCounter(counter + 1);
  };

  const handleTransitionEnd = () => {
    if (counter <= 0) {
      setTransition('none');
      setCounter(4);
    }
    if (counter > 4) {
      setTransition('none');
      setCounter(1);
    }
  };

  const currentSlide = (n) => {
    setTransition('all 0.5s ease-out');
    setCounter(n);
  };

  useEffect(() => {
    const childrenArray = Array.from(dots.current.children);
    childrenArray.forEach((el, i) => {
      if (counter > childrenArray.length) {
        childrenArray[0].style.background = '#ffffffc4';
      }
      if (counter === 0) {
        childrenArray[3].style.background = '#ffffffc4';
        childrenArray[0].style.background = '#36363665';
      }
      if (counter === i + 1) {
        el.style.background = '#ffffffc4';
      } else {
        if (counter !== 0) {
          el.style.background = '#36363665';
        }
      }
    });
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className='carousel-container'>
        <button onClick={prev} className='carousel__button previous'>
          {'<'}
        </button>
        <button onClick={next} className='carousel__button next'>
          {'>'}
        </button>
        <div
          className='carousel-slide'
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate(-${size * counter}%)`,
            transition: transition,
          }}
        >
          <div className='slide img1'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Sport</h2>
              <Link to={'/all/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
          <div className='slide img2'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Men</h2>
              <Link to={'/m/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
          <div className='slide img3'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Sneakers</h2>
              <Link to={'/all/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
          <div className='slide img4'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Women</h2>
              <Link to={'/w/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
          <div className='slide img5'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Sport</h2>
              <Link to={'/all/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
          <div className='slide img6'>
            <div className='slide_title-container'>
              <h2 className='slide_title'>Men</h2>
              <Link to={'/m/product'}>
                <button className='slide_btn'>Shop now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='dots' ref={dots}>
          <div onClick={() => currentSlide(1)} className='dot'></div>
          <div onClick={() => currentSlide(2)} className='dot'></div>
          <div onClick={() => currentSlide(3)} className='dot'></div>
          <div onClick={() => currentSlide(4)} className='dot'></div>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
