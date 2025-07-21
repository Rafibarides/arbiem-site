import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import palette from '../utils/Colors.js';
import NavBar from '../components/NavBar.jsx';
import GradientButton from '../components/GradientButton.jsx';
import TypingInAnimation from '../components/TypingInAnimation.jsx';
import Footer from '../sections/Footer.jsx';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Brooklyn = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollY(newScrollY);
    };
    
    // Add scroll listener with multiple fallbacks
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Force initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const photos = [
    '/brooklyn/brooklyn1.avif',
    '/brooklyn/brooklyn2.avif',
    '/brooklyn/brooklyn3.avif',
    '/brooklyn/brooklyn4.avif',
    '/brooklyn/brooklyn5.avif'
  ];



  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
      <NavBar />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 20px',
        fontFamily: '"M PLUS Rounded 1c", sans-serif'
      }}>
        
        {/* Logo */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/logo-trans.png" 
            alt="Arbiem Logo" 
            style={{
              height: isMobile ? '40px' : '55px',
              marginBottom: '20px'
            }}
          />
        </motion.div>

                {/* Main Heading */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '0',
            lineHeight: '1.2'
          }}>
            <TypingInAnimation 
              text="We are rooted in Brooklyn's artistic DNA" 
              speed={40}
              delay={200}
            />
          </h1>
        </motion.div>

        {/* Photo Collection */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: isMobile ? '300px' : '400px',
          marginBottom: '50px',
          position: 'relative',
          width: '100%',
          overflow: 'visible'
        }}>
          {photos.map((photo, index) => {
            // Gentle, overlapping start with subtle spread
            const baseX = (index - 2) * (isMobile ? 25 : 40);
            const baseY = (index % 2 === 0 ? -10 : 10);
            const baseRotation = (index - 2) * 5;
            
            const scrollEffect = scrollY * 0.45; // Balanced fanning
            const finalX = baseX + (scrollEffect * (index - 2) * 0.3);
            const finalY = baseY + (scrollEffect * 0.025);
            const finalRotation = baseRotation + (scrollEffect * 0.04);
            const finalScale = Math.max(0.75, 1 - (scrollY * 0.0006));
            
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  width: isMobile ? '120px' : '160px',
                  height: isMobile ? '160px' : '220px',
                  transform: `translate(${finalX}px, ${finalY}px) rotate(${finalRotation}deg) scale(${finalScale})`,
                  zIndex: [3, 1, 5, 2, 4][index],
                  opacity: 1,
                  transition: 'none'
                }}
              >
              <img
                src={photo}
                alt={`Brooklyn photo ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  boxShadow: `0 4px 20px ${palette.black}40, 0 1px 3px ${palette.black}60`,
                  border: `4px solid #f8f8f8`,
                  filter: 'sepia(0.1) contrast(1.1) brightness(0.95)',
                  transition: 'filter 0.3s ease'
                }}
                             />
               {/* Vintage photo effect */}
               <div style={{
                 position: 'absolute',
                 bottom: '8px',
                 left: '8px',
                 right: '8px',
                 height: '20px',
                 background: '#f8f8f8',
                 borderRadius: '0 0 2px 2px'
               }} />
              </div>
            );
          })}
        </div>

                {/* Content */}
        <motion.div
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: '50px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            lineHeight: '1.7',
            opacity: 0.9,
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '25px' }}>
              The purpose of Arbiem Music is to unify and empower a collective of modern artists making music. Making music in apartments, studios, converted closets, and rented shul basements.
            </p>
            
            <p style={{ marginBottom: '25px' }}>
              Some of us grew up on Golden Era hip hop, some on niggunim.
              We&apos;ve played open mics in Crown Heights, sung in choirs off Ocean Parkway, and bounced between sheva brachos and Rockwood Music Hall, all in the same week.
            </p>
            
            <p style={{ 
              marginBottom: '0',
              fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)',
              fontWeight: '600',
              color: palette.purple,
              textAlign: 'center'
            }}>
              <TypingInAnimation 
                text="Arbiem is for the block. For the booth. For Brooklyn." 
                speed={40}
                delay={200}
              />
            </p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '40px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <GradientButton
            icon={faApple}
            size="large"
            onClick={() => window.open('https://apps.apple.com/us/app/arbiem/id6748650787', '_blank')}
          >
            Download
          </GradientButton>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
};

export default Brooklyn;
