import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypingInAnimation = ({ 
  text, 
  speed = 100, 
  delay = 500, 
  style = {},
  className = '',
  onComplete = () => {}
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return; // Prevent re-running

    // Start typing after delay
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      setDisplayedText('');
      setHasAnimated(true);

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeNextChar, speed);
        } else {
          setShowCursor(false);
          onComplete();
        }
      };

      typeNextChar();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, hasAnimated]);

  return (
    <>
      <style>
        {`
          @keyframes cursor-blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .typing-cursor {
            animation: cursor-blink 1s infinite;
            font-weight: normal;
          }
        `}
      </style>
      <span className={className} style={style}>
        {displayedText}
        {showCursor && (
          <span className="typing-cursor">|</span>
        )}
      </span>
    </>
  );
};

TypingInAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  delay: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onComplete: PropTypes.func
};

export default TypingInAnimation;
