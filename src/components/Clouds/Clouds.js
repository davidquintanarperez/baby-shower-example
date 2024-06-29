import React, { useState, useEffect } from 'react';
import './Clouds.css';
import Cloud from '../Cloud/Cloud';

const Clouds = ({ headerHeight }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      // Función que maneja el evento de cambio de tamaño de la ventana
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Suscripción al evento de cambio de tamaño de la ventana
      window.addEventListener('resize', handleResize);
  
      // Limpieza de la suscripción al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez al montar el componente
    const distanceWidth = windowWidth/4.1
    const distaceHeigth = headerHeight/5

    const cloud1 = <Cloud top={distaceHeigth*0} zIndex='1' useStateValue={distanceWidth*0} speed='1'/>
    const cloud2 = <Cloud top={distaceHeigth*3} zIndex='1' useStateValue={distanceWidth*1} speed='1'/>
    const cloud3 = <Cloud top={distaceHeigth*1} zIndex='0' useStateValue={distanceWidth*2} speed='1'/>
    const cloud4 = <Cloud top={distaceHeigth*4} zIndex='0' useStateValue={distanceWidth*3} speed='1'/>
    const cloud5 = <Cloud top={distaceHeigth*2} zIndex='0' useStateValue={distanceWidth*4} speed='1'/>

    return (
      <div className='clouds' style={{ minHeight: `${headerHeight}px` }}>
        {cloud1}
        {cloud2}
        {cloud3}
        {cloud4}
        {cloud5}
      </div>
    );
};

export default Clouds;
