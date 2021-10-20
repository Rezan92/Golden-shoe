const Newsletter = () => {
  return (
    <div>
      <div className='divider'></div>
      <div className='newsletter-form_container'>
        <p className='newsletter-text'>
          Subscribe now to our newsletter and get €15 for your first online
          purchase.
        </p>
        <form className='newsletter-form'>
          <input
            className='newsletter-form_input'
            type='text'
            placeholder='Your email address'
          />
          <button className='newsletter-form_button'>
            Subsecribe to the newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
