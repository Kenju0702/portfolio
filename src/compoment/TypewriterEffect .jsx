// TypewriterEffect.jsx
import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="text-xl font-mono text-white">
      {displayedText}
    </div>
  );
};

export default TypewriterEffect;
