import React from 'react';

const Catagories = ({ title, items }) => {
  return (
    <div className='catagory-container'>
      <h4 className='catagory-title'>{title}</h4>
      <ul className='catagory-item_container'>
        {items.map((item, i) => (
          <li key={i} className='catagory-item'>
            <span className='catagory-item_text'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catagories;
