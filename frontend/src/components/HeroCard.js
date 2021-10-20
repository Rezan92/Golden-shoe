const HeroCard = ({ type, title, text, img, hide }) => {
  return (
    <>
      <p className='hero-card_main-text'>{type}</p>
      <h2 className='hero-card_title'>{title}</h2>
      <div className='hero-card_image-container'>
        <img className='hero-card_image' src={img} alt='boot' />
      </div>
      <p className='hero-card_text'>{text}</p>
      <button className='hero-card_btn'>Shop now</button>
    </>
  );
};

export default HeroCard;
