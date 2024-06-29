import React from 'react';
import './HeaderContent.css';
import FallingText from '../FallingText/FallingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const HeaderContent = ({ headerTitle, headerName, headerDate, headerInvitation, headerLocation }) => {
  const date = new Date(headerDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  let period;

  if (hour >= 12) {
    period = 'pm';
  } else {
    period = 'am';
  }

  const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
  
  return (  
    <div className='header-content'>
      <div className='container text-center'>
        <FallingText text={headerTitle}/>
        <h1 className='header-name pacifico-regular-font' data-aos='jump'>{headerName}</h1>
        <p className='header-invitation quicksand-font' data-aos='jump'>{headerInvitation}</p>
        <p className='header-date quicksand-font' data-aos='jump'>{day}.{month}.{year}</p>
        <p className='header-hour quicksand-font' data-aos='jump'>{hour}:{minutes} {period}</p>
        <p className='header-location quicksand-font' data-aos='jump'>{locationIcon} {headerLocation}</p>
      </div>
    </div>
  );
};

export default HeaderContent;
