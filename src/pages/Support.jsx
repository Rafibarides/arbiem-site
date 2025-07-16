import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuestionCircle, 
  faExclamationTriangle, 
  faComments, 
  faEnvelope,
  faHeadset,
  faPlay,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const Support = () => {
  const supportTopics = [
    {
      icon: faExclamationTriangle,
      title: "App won't load or crashes",
      description: "If the app is having trouble loading or unexpectedly crashes, try restarting the app or your device. Most issues resolve after a quick restart.",
      color: palette.purple
    },
    {
      icon: faPlay,
      title: "Songs not playing",
      description: "Check your internet connection and ensure you have a stable connection. Songs require an active internet connection to stream.",
      color: palette.purpleAccent
    },
    {
      icon: faEye,
      title: "Visual bugs or glitches",
      description: "If you're experiencing visual issues like missing images or layout problems, try closing and reopening the app. These are usually temporary display issues.",
      color: palette.purple
    },
    {
      icon: faComments,
      title: "General feedback",
      description: "We'd love to hear your thoughts about the app! Whether it's suggestions for improvement or just general feedback, feel free to reach out.",
      color: palette.purpleAccent
    }
  ];

  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
      <NavBar />
      
      <div style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: '"M PLUS Rounded 1c", sans-serif'
      }}>
        
        {/* Header */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '20px'
          }}>
            <TypingInAnimation 
              text="💬 Need Help?" 
              speed={60}
              delay={200}
            />
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            opacity: 0.9,
            lineHeight: '1.6',
            margin: '0'
          }}>
            We&apos;re here to help with any issues or questions.
          </p>
        </motion.div>

        {/* Support Topics */}
        <motion.div
          style={{
            marginBottom: '60px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '600',
            color: palette.text,
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Common Topics
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {supportTopics.map((topic, index) => (
              <motion.div
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${palette.tertiary}30`,
                  borderRadius: '20px',
                  padding: '25px',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 10px 30px ${topic.color}20`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    color: topic.color,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${topic.color}20`,
                    borderRadius: '50%',
                    flexShrink: 0
                  }}>
                    <FontAwesomeIcon icon={topic.icon} />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: '600',
                    color: palette.text,
                    margin: '0'
                  }}>
                    {topic.title}
                  </h3>
                </div>
                
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                  color: palette.text,
                  lineHeight: '1.5',
                  opacity: 0.9,
                  margin: '0'
                }}>
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          style={{
            background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${palette.tertiary}30`,
            borderRadius: '20px',
            padding: '40px',
            position: 'relative',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '25px'
          }}>
            <div style={{
              fontSize: '2.5rem',
              color: palette.purple,
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${palette.purple}20`,
              borderRadius: '50%'
            }}>
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '600',
              color: palette.text,
              margin: '0'
            }}>
              Still need help?
            </h2>
          </div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            lineHeight: '1.6',
            opacity: 0.9,
            marginBottom: '25px'
          }}>
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help! 
            Reach out to us directly and we&apos;ll get back to you as soon as possible.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '20px',
            background: `${palette.purple}10`,
            borderRadius: '15px',
            border: `1px solid ${palette.purple}30`
          }}>
            <FontAwesomeIcon 
              icon={faEnvelope} 
              style={{
                fontSize: '1.2rem',
                color: palette.purple
              }}
            />
            <a
              href="mailto:support@arbiem.com"
              style={{
                color: palette.purple,
                textDecoration: 'none',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: '600',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              support@arbiem.com
            </a>
          </div>
          
          <p style={{
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            color: palette.text,
            opacity: 0.7,
            marginTop: '20px',
            marginBottom: '0'
          }}>
            We typically respond within 24-48 hours
          </p>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '40px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              style={{
                fontSize: '1.5rem',
                color: palette.purple
              }}
            />
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
              fontWeight: '600',
              color: palette.text,
              margin: '0'
            }}>
              More Resources
            </h3>
          </div>
          
          <p style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
            color: palette.text,
            opacity: 0.8,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            For additional information about the app and our policies, 
            check out our FAQ page or review our Terms and Privacy Policy.
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
