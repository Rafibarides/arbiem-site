import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import palette from '../utils/Colors.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: palette.black,
      borderTop: `1px solid ${palette.tertiary}30`,
      padding: '60px 20px 30px',
      fontFamily: '"M PLUS Rounded 1c", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          
          {/* Left Section - Logo and Company Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <img 
                src="/favicon.png" 
                alt="Arbiem Logo" 
                style={{
                  width: '32px',
                  height: '32px'
                }}
              />
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: palette.text
              }}>
                Arbiem
              </span>
            </div>
            
            <p style={{
              color: palette.text,
              opacity: 0.8,
              fontSize: '0.9rem',
              lineHeight: '1.5',
              margin: '0'
            }}>
              A native streaming home for a small, intentional collective of artists, primarily rooted in the greater Brooklyn area.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: palette.purple,
              fontSize: '0.9rem'
            }}>
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Secure Website</span>
            </div>
          </div>

          {/* Center Section - Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '30px'
          }}>
            {/* Platform Links */}
            <div>
              <h4 style={{
                color: palette.text,
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '15px',
                margin: '0 0 15px 0'
              }}>
                Platform
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <li>
                  <Link
                    to="/"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roster"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Roster
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brooklyn"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Brooklyn
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FAQ"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{
                color: palette.text,
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '15px',
                margin: '0 0 15px 0'
              }}>
                Resources
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <li>
                  <a
                    href="https://rafibarides.github.io/lyrics-sync/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Lyrics Sync
                  </a>
                </li>
                <li>
                  <Link
                    to="/careers"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <a
                    href="#sitemap"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 style={{
                color: palette.text,
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '15px',
                margin: '0 0 15px 0'
              }}>
                Support
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <li>
                  <a
                    href="mailto:rafi@arbiem.com"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    to="/support"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{
                color: palette.text,
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '15px',
                margin: '0 0 15px 0'
              }}>
                Legal
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <li>
                  <Link
                    to="/privacy-policy"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.8';
                      e.target.style.color = palette.text;
                    }}
                  >
                    Terms & Agreements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div style={{
          borderTop: `1px solid ${palette.tertiary}30`,
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            color: palette.text,
            fontSize: '0.9rem',
            opacity: 0.7,
            margin: '0'
          }}>
            © {currentYear} Arbiem. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: palette.text,
            fontSize: '0.8rem',
            opacity: 0.6
          }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Brooklyn, NY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
