import Separator from './Separator';
import Catagories from './Catagories';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Separator />
      <header className='footer-header'>
        <h1 className='footer-logo'>GOLDEN SHOE</h1>
        <ul className='footer-social_media-container'>
          <li className='footer-social_media'>
            <FaFacebookSquare size='30' color='white' />
          </li>
          <li className='footer-social_media'>
            <FaInstagramSquare size='30' color='white' />
          </li>
          <li className='footer-social_media'>
            <FaYoutubeSquare size='30' color='white' />
          </li>
        </ul>
      </header>
      <div className='footer-body'>
        <Catagories
          title={'Your Account'}
          items={[
            'My Account',
            'Check Order',
            'Rewards',
            'Gift Cards',
            'Payment',
          ]}
        />
        <Catagories
          title={'CUSTOMER SERVICE'}
          items={['To order', 'Shipments', 'my orders', 'See More']}
        />
        <Catagories
          title={'Collection'}
          items={[
            "Women's shoes",
            "Men's shoes",
            "Women's Sneakers",
            "Women's Boots",
          ]}
        />
        <Catagories
          title={'About us'}
          items={[
            'Our stores',
            'All stores',
            'About GOLDEN SHOE',
            'Press contact',
            'Careers',
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
