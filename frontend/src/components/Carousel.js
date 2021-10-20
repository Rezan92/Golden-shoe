import './carousel.css';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Carousel = ({ products, title }) => {
  const checkWindowWidth = () => {
    if (window.innerWidth <= 600) {
      return { size: 100, currentSlide: 1 };
    } else if (window.innerWidth <= 810) {
      return { size: 33.33, currentSlide: 3 };
    } else if (window.innerWidth <= 1000) {
      return { size: 25, currentSlide: 4 };
    } else {
      return { size: 20, currentSlide: 5 };
    }
  };
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(checkWindowWidth().size);
  const [currentSlide, setCurrentSlide] = useState(
    checkWindowWidth().currentSlide
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const prev = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const next = () => {
    if (counter >= products.length - currentSlide) return;
    setCounter(counter + 1);
  };

  useEffect(() => {
    const updateWindowValue = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 600) {
        setSize(100);
        setCurrentSlide(1);
      } else if (windowWidth <= 810) {
        setSize(33.33);
        setCurrentSlide(3);
      } else if (windowWidth <= 1000) {
        setSize(25);
        setCurrentSlide(4);
      } else {
        setSize(20);
        setCurrentSlide(5);
      }
    };

    window.addEventListener('resize', updateWindowValue);

    return function cleanupListener() {
      window.removeEventListener('resize', updateWindowValue);
    };
  });
  return (
    <div className='section-carousel'>
      <h2 className='section-header'>{title}</h2>
      {products.length && (
        <div className='section-carousel_container'>
          <div
            className='section-carousel_slides'
            style={{
              transform: `translate(-${size * counter}%)`,
            }}
          >
            {products.map((p) => (
              <div key={p.id} className='section-carousel_slide'>
                <Card className=' section-carousel_card'>
                  <div className='section-carousel_img-container'>
                    <Card.Img
                      variant='top'
                      src={p.img}
                      className='section-carousel_img'
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className='section-carousel_text'>
                      {p.name}
                    </Card.Text>
                    <Card.Text className='section-carousel_text'>
                      €{p.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={prev}
        className='section-carousel_button section-carousel_previous'
        style={{ display: counter === 0 ? 'none' : 'block' }}
      >
        {'<'}
      </button>
      <button
        onClick={next}
        className='section-carousel_button section-carousel_next'
        style={{ display: counter + currentSlide === 20 ? 'none' : 'block' }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
