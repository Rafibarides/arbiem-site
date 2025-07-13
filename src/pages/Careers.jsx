import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faHeart, 
  faUsers, 
  faEnvelope,
  faHandshake,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const Careers = () => {
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
              text="Careers" 
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
            Join our mission to support independent artists
          </p>
        </motion.div>

        {/* Main Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          
          {/* Current Status */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Current Opportunities
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              margin: '0'
            }}>
              We are <strong>not hiring</strong> at this time, but if you believe that you can contribute meaningfully and believe in the mission, please reach out.
            </p>
          </motion.div>

          {/* What We Look For */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '35px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px'
            }}>
              <div style={{
                fontSize: '2rem',
                color: palette.purple,
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${palette.purple}20`,
                borderRadius: '50%'
              }}>
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                What We Value
              </h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  icon: faHeart,
                  title: "Passion for Music",
                  description: "Deep appreciation for independent artists and authentic creative expression"
                },
                {
                  icon: faUsers,
                  title: "Community Focus",
                  description: "Understanding that we&apos;re building for artists and listeners, not investors"
                },
                {
                  icon: faHandshake,
                  title: "Collaborative Spirit",
                  description: "Ability to work with a small, intentional team toward shared goals"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: `${palette.purple}10`,
                    borderRadius: '15px',
                    padding: '20px',
                    border: `1px solid ${palette.purple}20`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    color: palette.purple,
                    marginBottom: '10px'
                  }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h4 style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                    fontWeight: '600',
                    color: palette.text,
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: palette.text,
                    opacity: 0.8,
                    lineHeight: '1.4',
                    margin: '0'
                  }}>
                    {item.description}
                  </p>
                </div>
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
              textAlign: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '25px'
            }}>
              <div style={{
                fontSize: '2rem',
                color: palette.purple,
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${palette.purple}20`,
                borderRadius: '50%'
              }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Get in Touch
              </h3>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              marginBottom: '25px'
            }}>
              Think you can make a meaningful contribution to our mission? 
              We&apos;d love to hear from you. Tell us about your skills, experience, and why you believe in what we&apos;re building.
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
                href="mailto:rafibaridesstudio@gmail.com?subject=Career Inquiry - Arbiem"
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
                rafibaridesstudio@gmail.com
              </a>
            </div>
            
            <p style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              color: palette.text,
              opacity: 0.7,
              marginTop: '20px',
              marginBottom: '0'
            }}>
              Include &quot;Career Inquiry&quot; in your subject line
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
