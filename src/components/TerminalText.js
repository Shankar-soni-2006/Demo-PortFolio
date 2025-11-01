import React, { useState, useEffect } from 'react';

export default function TerminalText({ 
  text, 
  speed = 100, 
  className = '', 
  showCursor = true,
  onComplete = () => {} 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <span className={`${className} ${showCursor && !isComplete ? 'terminal-cursor' : ''}`}>
      {displayText}
    </span>
  );
}