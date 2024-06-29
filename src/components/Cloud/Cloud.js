import React, { useState, useEffect } from 'react';
import './Cloud.css';

const Cloud = ({ top, zIndex, useStateValue, speed }) => {
  const [left, setLeft] = useState([useStateValue]);

  useEffect(() => {
    const bodyWidth = document.body.clientWidth;
    const cloudWidth = 250; // Ancho de la nube
    const moveSpeed = parseInt(speed, 10); // Velocidad de movimiento
    let animationFrameId;

    const moveCloud = () => {
      setLeft(prevLeft => prevLeft - moveSpeed);
      animationFrameId = requestAnimationFrame(moveCloud);

      if (left + cloudWidth < 0) {
        setLeft(bodyWidth);
      }
    };

    animationFrameId = requestAnimationFrame(moveCloud);

    return () => cancelAnimationFrame(animationFrameId);
  }, [left, speed]);

  return (
    <div className="cloud" style={{ left: `${left}px`, top: `${top}px`, zIndex: `${zIndex}` }}></div>
  );
};

export default Cloud;
