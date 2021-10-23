import Separator from './Separator';
import Catagories from './Catagories';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Separator />
      <header className='footer-header'>
        <Link to={'/'}>
          <h1 className='footer-logo'>GOLDEN SHOE</h1>
        </Link>
        <ul className='footer-social_media-container'>
          <li className='footer-social_media facebook'>
            <FaFacebookSquare size='30' color='white' />
          </li>
          <li className='footer-social_media instagram'>
            <FaInstagramSquare size='30' color='white' />
          </li>
          <li className='footer-social_media youtube'>
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
          items={['To Order', 'Shipments', 'My Orders', 'See More']}
        />
        <Catagories
          title={'Collection'}
          items={[
            "Women's Shoes",
            "Men's Shoes",
            "Women's Sneakers",
            "Women's Boots",
          ]}
        />
        <Catagories
          title={'About us'}
          items={[
            'Our Stores',
            'All Stores',
            'About GOLDEN SHOE',
            'Press Contact',
            'Careers',
          ]}
        />
      </div>
      <hr />
      <div className='copy-right'>
        <span className='copy-right_text'>
          © 2021 GOLDENshoe.com. All Rights Reserved.
        </span>
        <ul className='footer-service'>
          <li className='footer-service_item'>Privacy Policy</li>
          <li className='footer-service_item footer-service_item2'>Warranty</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
