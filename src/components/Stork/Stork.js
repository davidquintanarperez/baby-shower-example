import React from 'react';
import './Stork.css';
import stork from '../Images/Stork.png'

const Stork = () => {

  return (
    <div className='stork'>
      <img src={stork} alt='stork'></img>
    </div>
  );
};

export default Stork;