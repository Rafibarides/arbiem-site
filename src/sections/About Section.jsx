import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBan, 
  faEyeSlash, 
  faRobot, 
  faLock, 
  faCompress, 
  faUsers, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <section 
      id="about"
      style={{
        minHeight: '100vh',
        backgroundColor: palette.black,
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"M PLUS Rounded 1c", sans-serif'
      }}
    >
      {/* Animated Purple Orb */}
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${palette.purple}40 0%, ${palette.purple}20 40%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1,
          filter: 'blur(3px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [-20, 20, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Section 1: About Arbiem with Mockup */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '60px',
          marginBottom: '120px',
          flexWrap: 'wrap',
          height: '80vh' // Ensure enough height for parallax effect
        }}>
          {/* Text Content */}
          <motion.div
            style={{
              flex: '1 1 400px',
              minWidth: '300px'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 'bold',
              color: palette.text,
              marginBottom: '25px',
              lineHeight: '1.2'
            }}>
              <TypingInAnimation 
                text="About Arbiem" 
                speed={60}
                delay={200}
              />
            </h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              marginBottom: '25px'
            }}>
              Arbiem is a native streaming home for a small, intentional collective of artists, primarily rooted in the greater Brooklyn area. Built by artists for artists, with the listener in mind, Arbiem is a community-first platform that lets fans experience music exactly as the artist intended.
            </p>
            <div style={{
              fontSize: 'clamp(0.95rem, 2.8vw, 1.15rem)',
              color: palette.text,
              fontWeight: '600',
              lineHeight: '1.5',
              opacity: 0.95
            }}>
              <p style={{ marginBottom: '8px', color: palette.purple }}>This is not Spotify.</p>
              <p style={{ marginBottom: '8px' }}>This is not about growth at all costs.</p>
              <p>This is about authenticity, intention, and creative freedom.</p>
            </div>
          </motion.div>

          {/* Mockup Image with Proper Parallax */}
          <motion.div
            style={{
              flex: '1 1 350px',
              minWidth: '250px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/mockup1.png"
              alt="Arbiem App Mockup"
              style={{
                maxWidth: '70%',
                height: 'auto',
                borderRadius: isMobile ? '1.8rem' : '3rem',
                boxShadow: `0 15px 40px ${palette.purple}30`,
                position: 'relative',
                zIndex: 3,
                transform: `translateY(${scrollY > window.innerHeight ? (scrollY - window.innerHeight) * -0.45 : 0}px)`, // Parallax only during About section, maintaining 1.5x height ratio
                transition: 'transform 0.1s ease-out'
              }}
            />
          </motion.div>
        </div>

        {/* Section 2: What Makes Arbiem Different */}
        <motion.div
          style={{
            marginBottom: '120px',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '40px'
          }}>
            <TypingInAnimation 
              text="What Makes Arbiem Different" 
              speed={50}
              delay={300}
            />
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { text: "No subscriptions", icon: faBan },
              { text: "No ads", icon: faEyeSlash },
              { text: "No mystery algorithm", icon: faRobot },
              { text: "No gatekeeping of features like motion artwork or synced lyrics", icon: faLock },
              { text: "No compression, at all. Your music and cover art in full-quality", icon: faCompress },
              { text: "No punishing small artists just for being independent", icon: faUsers },
              { text: "No inflated payouts to major labels that leave smaller voices unheard", icon: faChartLine }
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${palette.secondary}80 0%, ${palette.tertiary}40 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${palette.tertiary}30`,
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'left',
                  height: '190px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 8px 25px ${palette.purple}20`
                }}
              >
                <div style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  color: palette.text,
                  flexShrink: 0
                }}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p style={{
                  fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)',
                  color: palette.text,
                  lineHeight: '1.3',
                  opacity: 0.9,
                  margin: '0',
                  flex: '1'
                }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: What's the Catch */}
        <motion.div
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '30px'
          }}>
            <TypingInAnimation 
              text="What's the Catch?" 
              speed={55}
              delay={200}
            />
          </h3>
          
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            color: palette.text,
            lineHeight: '1.6',
            opacity: 0.9,
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            Arbiem is 100% free for both artists and listeners. Every artist on the platform chooses to make their music available without barriers, so that fans can hear it as it was meant to be heard.
          </p>
          
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            color: palette.text,
            lineHeight: '1.6',
            opacity: 0.9,
            margin: '0',
            textAlign: 'left'
          }}>
            Each artist profile includes a <strong style={{ color: palette.purple }}>Support</strong> button, where fans can donate directly based on their experience and ability.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
