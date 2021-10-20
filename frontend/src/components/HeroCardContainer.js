import HeroCard from './HeroCard';

const HeroCardContainer = () => {
  return (
    <div className='heroCard-flex'>
      <div className='hero-card_container heroCard1'>
        <HeroCard
          type={'Women'}
          title={'SPUAT'}
          text={
            'SPUAT is the fashionable ankle boot in signature Think! look. Made from chrome-free tanned leather, it is good for your feet and the environment.'
          }
          img={'/images/main/low-shoes-brown.jpg'}
        />
      </div>
      <div className='hero-card_container heroCard2'>
        <HeroCard
          type={'Women'}
          title={'DELICIA'}
          text={
            'DELICIA is an absolute eye-catcher. The wooden button is a special highlight. The leather-covered heels are colour-coordinated and enable comfortable walking.'
          }
          img={'/images/main/mCIVITA-Low-Shoes-Black.jpg'}
        />
      </div>
      <div className='hero-card_container heroCard3'>
        <HeroCard
          hide={true}
          type={'Men'}
          title={'Kong'}
          text={
            'The casual KONG lace-up offers perfect support. The shoe can be individually adjusted to the foot. The soft leathers nestle delicately against the foot and provide a great wearing comfort.'
          }
          img={'/images/main/Kong_brown.jpg'}
        />
      </div>
    </div>
  );
};

export default HeroCardContainer;
