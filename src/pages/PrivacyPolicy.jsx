import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faHdd, 
  faLock, 
  faToggleOff, 
  faCheckCircle,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const PrivacyPolicy = () => {
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
              text="Privacy Policy" 
              speed={60}
              delay={200}
            />
          </h1>
          
          <div style={{
            background: `linear-gradient(135deg, ${palette.secondary}80 0%, ${palette.tertiary}40 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${palette.tertiary}30`,
            borderRadius: '15px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: '600',
              color: palette.text,
              margin: '0'
            }}>
              Privacy Policy for Arbiem Music
            </h2>
          </div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: palette.text,
            opacity: 0.9,
            lineHeight: '1.6',
            margin: '0'
          }}>
                         At Arbiem Music, your privacy is our priority. This privacy policy is designed to be transparent and simple, in full compliance with Apple&apos;s App Store guidelines.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          
          {/* Data Collection */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Data Collection
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>We do not collect, store, or share any personal information.</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 15px 0'
              }}>
                <li style={{ marginBottom: '8px' }}>• No name, email, phone number, or location is ever requested or stored.</li>
                <li style={{ marginBottom: '8px' }}>• We do not use tracking technologies, analytics services, or cookies.</li>
                <li style={{ marginBottom: '8px' }}>• The app does not connect to any third-party servers or databases.</li>
              </ul>
              
              <p style={{ margin: '0' }}>
                Arbiem Music is a view-only front-end application. It exists solely to provide access to music from our independent artist collective. It is not a full-stack or cloud-based service.
              </p>
            </div>
          </motion.div>

          {/* Local Caching */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
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
              marginBottom: '20px'
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
                <FontAwesomeIcon icon={faHdd} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Local Caching
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                For performance and offline support, the app temporarily stores limited, non-personal data (like cover art or song metadata) on your device only. This is done to improve your experience when using playlists.
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Cached data never leaves your phone.</li>
                <li style={{ marginBottom: '0' }}>• It is not used for tracking or profiling.</li>
              </ul>
            </div>
          </motion.div>

          {/* No Sign-In */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                No Sign-In, No Accounts
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>We do not have:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Account creation</li>
                <li style={{ marginBottom: '8px' }}>• User login</li>
                <li style={{ marginBottom: '8px' }}>• Subscriptions or in-app purchases</li>
                <li style={{ marginBottom: '0' }}>• Contact forms or feedback mechanisms</li>
              </ul>
            </div>
          </motion.div>

          {/* App Permissions */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                <FontAwesomeIcon icon={faToggleOff} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                App Permissions
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>Arbiem Music does not request access to:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Contacts</li>
                <li style={{ marginBottom: '8px' }}>• Photos</li>
                <li style={{ marginBottom: '8px' }}>• Camera</li>
                <li style={{ marginBottom: '8px' }}>• Microphone</li>
                <li style={{ marginBottom: '8px' }}>• Location</li>
                <li style={{ marginBottom: '0' }}>• Bluetooth or local network</li>
              </ul>
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Compliance with App Store Guidelines
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                                 <strong>This app meets Apple&apos;s privacy requirements:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 15px 0'
              }}>
                <li style={{ marginBottom: '8px' }}>• No data collection</li>
                <li style={{ marginBottom: '8px' }}>• No third-party tracking</li>
                <li style={{ marginBottom: '8px' }}>• No analytics SDKs</li>
                <li style={{ marginBottom: '0' }}>• No user identifiers</li>
              </ul>
              
              <p style={{ margin: '0' }}>
                If Apple updates its requirements, we will update this policy to remain fully compliant.
              </p>
            </div>
          </motion.div>

          {/* For Artists */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                🎵
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                For Artists
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>If you&apos;re an artist contributing content to Arbiem:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 15px 0'
              }}>
                <li style={{ marginBottom: '8px' }}>• We do not collect or store personal information from your audience</li>
                <li style={{ marginBottom: '8px' }}>• Your uploaded content remains your intellectual property</li>
                <li style={{ marginBottom: '8px' }}>• You maintain control and can remove your content at any time</li>
                <li style={{ marginBottom: '0' }}>• We only store basic metadata necessary for app functionality</li>
              </ul>
              
              <p style={{ margin: '0' }}>
                Our platform is designed to respect both artist and listener privacy while providing a quality streaming experience.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${palette.tertiary}30`,
              borderRadius: '20px',
              padding: '30px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
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
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                Contact Us
              </h3>
            </div>
            
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              margin: '0'
            }}>
              If you have questions or concerns about this policy, you can contact the developer at:{' '}
              <a 
                href="mailto:info@arbiem.com"
                style={{
                  color: palette.purple,
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                info@arbiem.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
