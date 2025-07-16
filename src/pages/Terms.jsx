import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileContract, 
  faUserSlash, 
  faCopyright, 
  faExclamationTriangle, 
  faShieldAlt,
  faEdit,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const Terms = () => {
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
              text="Terms and Conditions" 
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
              Terms and Conditions for Arbiem Music
            </h2>
          </div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: palette.text,
            opacity: 0.9,
            lineHeight: '1.6',
            margin: '0'
          }}>
            Welcome to Arbiem Music. By downloading or using this app, you agree to the following terms. Please read them carefully. If you do not agree, do not use the app.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          
          {/* Purpose of the App */}
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
                <FontAwesomeIcon icon={faFileContract} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                1. Purpose of the App
              </h3>
            </div>
            
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              margin: '0'
            }}>
              Arbiem Music is a free, non-commercial, front-end music player created to showcase the work of a grassroots artist collective based in Brooklyn. The app allows users to stream curated music content, view playlists, and explore artist information — all without user accounts, sign-ins, or data collection.
            </p>
          </motion.div>

          {/* No User Accounts */}
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
                <FontAwesomeIcon icon={faUserSlash} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                2. No User Accounts or Personal Information
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '10px' }}>• We do not require or allow account creation.</li>
                <li style={{ marginBottom: '10px' }}>• We do not collect or store personal data (such as names, emails, phone numbers, or location).</li>
                <li style={{ marginBottom: '0' }}>• This app is strictly view-only and does not provide any interactive or upload features.</li>
              </ul>
            </div>
          </motion.div>

          {/* Intellectual Property */}
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
                <FontAwesomeIcon icon={faCopyright} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                3. Intellectual Property
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                All music, images, and content featured in Arbiem Music are owned by their respective creators or used with permission.
              </p>
              
              <p style={{ marginBottom: '10px' }}>
                <strong>You may not:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Reproduce or redistribute music or content outside the app</li>
                <li style={{ marginBottom: '8px' }}>• Reverse-engineer or extract assets from the app</li>
                <li style={{ marginBottom: '0' }}>• Use any content commercially without prior written consent from the content owner</li>
              </ul>
            </div>
          </motion.div>

          {/* Usage Restrictions */}
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
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                4. Usage Restrictions
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                By using Arbiem Music, you agree not to:
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Attempt to interfere with the normal operation of the app</li>
                <li style={{ marginBottom: '8px' }}>• Modify or hack the app in any way</li>
                <li style={{ marginBottom: '8px' }}>• Misrepresent the app or its creators</li>
                <li style={{ marginBottom: '0' }}>• Use the app for illegal, harmful, or abusive purposes</li>
              </ul>
            </div>
          </motion.div>

          {/* Disclaimer of Warranty */}
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
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                5. Disclaimer of Warranty
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                This app is provided &quot;as is&quot; without warranties of any kind.
              </p>
              
              <p style={{ marginBottom: '10px' }}>
                <strong>We do not guarantee:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• That the app will be error-free or continuously available</li>
                <li style={{ marginBottom: '8px' }}>• That any content is accurate, up-to-date, or complete</li>
                <li style={{ marginBottom: '0' }}>• That the app is suitable for any particular purpose</li>
              </ul>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
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
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                6. Limitation of Liability
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                To the fullest extent permitted by law, Arbiem Music and its creators will not be held liable for:
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>• Any damages or losses from using or being unable to use the app</li>
                <li style={{ marginBottom: '8px' }}>• Any content errors or omissions</li>
                <li style={{ marginBottom: '0' }}>• Any third-party issues related to devices or operating systems</li>
              </ul>
            </div>
          </motion.div>

          {/* Changes to Terms */}
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
                <FontAwesomeIcon icon={faEdit} />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: '600',
                color: palette.text,
                margin: '0'
              }}>
                7. Changes to These Terms
              </h3>
            </div>
            
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9,
              margin: '0'
            }}>
              We may update these terms from time to time. Continued use of the app after changes are made constitutes your acceptance of the revised terms.
            </p>
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
            transition={{ duration: 0.6, delay: 0.8 }}
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
                8. For Artists Contributing Content
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>If you are an artist uploading content to Arbiem, you agree to the following:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 15px 0'
              }}>
                <li style={{ marginBottom: '8px' }}>• You must submit a signed license and agreement form before uploading any content</li>
                <li style={{ marginBottom: '8px' }}>• You confirm ownership of all intellectual property you submit</li>
                <li style={{ marginBottom: '8px' }}>• You must provide your legal name and contact information</li>
                <li style={{ marginBottom: '8px' }}>• By submitting content, you choose to participate and affirm ownership rights</li>
                <li style={{ marginBottom: '8px' }}>• You grant Arbiem permission to stream your content through the platform</li>
                <li style={{ marginBottom: '8px' }}>• You can remove your content at any time</li>
                <li style={{ marginBottom: '0' }}>• No content can be submitted without proper certification and signing</li>
              </ul>
              
              <p style={{ marginBottom: '15px' }}>
                <strong>Content Ownership and Responsibility:</strong>
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 15px 0'
              }}>
                <li style={{ marginBottom: '8px' }}>• You retain full ownership of your intellectual property</li>
                <li style={{ marginBottom: '8px' }}>• You are responsible for ensuring you have rights to all submitted material</li>
                <li style={{ marginBottom: '8px' }}>• You upload your own media on your own terms</li>
                <li style={{ marginBottom: '0' }}>• You must have proper licensing for any third-party elements in your work</li>
              </ul>
              
              <p style={{ margin: '0' }}>
                Arbiem operates as a small, community-based platform where all content is submitted with full permission by rightful owners. We do not provide unauthorized access to any third-party content.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
                Contact Information
              </h3>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: palette.text,
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              <p style={{ marginBottom: '15px' }}>
                For questions or concerns, you can contact the developer at:
              </p>
              
              <p style={{ 
                margin: '0',
                fontWeight: '600',
                color: palette.purple
              }}>
                Arbiem Music Support
              </p>
              
              <p style={{ 
                margin: '10px 0 0 0',
                fontStyle: 'italic',
                opacity: 0.8
              }}>
                Thanks for using Arbiem Music — a home for our independent music collective.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
