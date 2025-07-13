import { motion } from 'framer-motion';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import palette from '../utils/Colors.js';
import GradientButton from '../components/GradientButton.jsx';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const WelcomeSection = () => {
  // Create particle elements
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: palette.black,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"M PLUS Rounded 1c", sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      {/* Animated Purple Glow */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          background: `radial-gradient(circle, ${palette.purple}40 0%, ${palette.purple}20 30%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${palette.purple}60 0%, transparent 60%)`,
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            bottom: '0px',
            left: `${20 + (index * 3)}%`,
            width: '4px',
            height: '4px',
            backgroundColor: palette.purple,
            borderRadius: '50%',
            zIndex: 2
          }}
          animate={{
            y: [-10, -300, -10],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6 + (index * 0.2),
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '800px',
        width: '100%'
      }}>
        
        {/* Main Heading */}
        <motion.h1
          style={{
            fontSize: 'clamp(1rem, 8vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2',
            color: palette.text
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A new kind of{' '}
          <span style={{
            background: `linear-gradient(135deg, ${palette.purple} 0%, #ff00ff 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            streaming
          </span>
          {' '}platform.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          style={{
            fontSize: 'clamp(0.6rem, 2vw, 1.2rem)',
            color: palette.text,
            marginBottom: '40px',
            opacity: 0.9
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingInAnimation 
            text="Arbiem is not scalable. (That's the point)" 
            speed={50}
            delay={300}
          />
        </motion.p>

        {/* Download Button - Now using GradientButton component */}
        <GradientButton
          icon={faApple}
          size="medium"
          onClick={() => window.open('https://apple.com', '_blank')}
        >
          Download
        </GradientButton>
      </div>
    </div>
  );
};

export default WelcomeSection;
