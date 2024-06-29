import React from 'react';
import { useSpring, animated } from 'react-spring';
import './FallingText.css';

const FallingText = ({ text }) => {
  const letters = text.split('');

  return (
    <div className="falling-text-container">
      <h1>
        {letters.map((char, index) => (
          <FallingLetter key={index} char={char} delay={index * 200} />
        ))}
      </h1>
    </div>
  );
};

const FallingLetter = ({ char, delay }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 6 },
    delay: delay,
  });

  const className = char === ' ' ? 'falling-letter space' : 'falling-letter';

  return (
    <animated.span style={styles} className={className}>
        <div className='caveat-font'>
            {char === ' ' ? '\u00A0' : char}
        </div>
    </animated.span>
  );
};

export default FallingText;
