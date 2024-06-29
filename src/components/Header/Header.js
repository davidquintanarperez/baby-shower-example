import React, { useRef, useState, useEffect } from 'react';
import './Header.css';
import HeaderContent from '../HeaderContent/HeaderContent';
import Clouds from '../Clouds/Clouds';
import Stork from '../Stork/Stork';

const Header = ({ headerTitle, headerName, headerDate, headerInvitation, headerLocation }) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.clientHeight;
        setHeaderHeight(height);
      }
    };

    // Actualizar la altura al cargar la página
    updateHeight();

    // Actualizar la altura cada vez que se redimensione la ventana
    window.addEventListener('resize', updateHeight);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (  
    <div className='header' ref={headerRef}>
      <Clouds headerHeight={headerHeight}/>
      <Stork/>
      <HeaderContent headerTitle={headerTitle} headerName={headerName} headerDate={headerDate} headerInvitation={headerInvitation} headerLocation={headerLocation}/>
    </div>
  );
};

export default Header;
