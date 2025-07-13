import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../utils/Colors.js';
import GradientButton from './GradientButton.jsx';

const NavBar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleResourcesToggle = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if mobile on resize
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'About', link: '/#about', type: 'hash' },
    { name: 'FAQ', link: '/FAQ', type: 'route' },
    { name: 'Roster', link: '/roster', type: 'route' },
    { name: 'Brooklyn', link: '/brooklyn', type: 'route' }
  ];

  const handleLinkClick = (item) => {
    if (item.type === 'hash') {
      if (location.pathname !== '/') {
        // If we're not on home page, go to home first
        window.location.href = item.link;
      } else {
        // If we're on home page, smooth scroll to section
        const targetId = item.link.replace('/#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        background: `linear-gradient(to bottom, ${palette.black} 0%, ${palette.black}60 70%, transparent 100%)`,
        backdropFilter: 'blur(5px)',
        zIndex: 1000,
        padding: isMobile ? '20px 20px' : '30px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: '"M PLUS Rounded 1c", sans-serif'
      }}>
        
        {/* Logo */}
        <div style={{ flex: '0 0 auto' }}>
          <Link to="/">
            <img 
              src="/logo-trans.png" 
              alt="Arbiem Logo" 
              style={{
                height: '30px',
                cursor: 'pointer'
              }}
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        {!isMobile && (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flex: '1 1 auto',
              justifyContent: 'center'
            }}>
              {menuItems.map((item, index) => (
                item.type === 'route' ? (
                  <Link
                    key={index}
                    to={item.link}
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                      fontWeight: '500',
                      opacity: 0.75,
                      transition: 'opacity 0.3s ease, color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.75';
                      e.target.style.color = palette.text;
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.link}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                      }
                      handleLinkClick(item);
                    }}
                    style={{
                      color: palette.text,
                      textDecoration: 'none',
                      fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                      fontWeight: '500',
                      opacity: 0.75,
                      transition: 'opacity 0.3s ease, color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.color = palette.purple;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.75';
                      e.target.style.color = palette.text;
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}

              {/* Resources Dropdown */}
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: palette.text,
                    fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                    fontWeight: '500',
                    opacity: 0.75,
                    cursor: 'pointer',
                    fontFamily: '"M PLUS Rounded 1c", sans-serif',
                    transition: 'opacity 0.3s ease, color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                  onClick={handleResourcesToggle}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.color = palette.purple;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.75';
                    e.target.style.color = palette.text;
                  }}
                >
                  Resources
                  <span style={{
                    fontSize: '0.8em',
                    transition: 'transform 0.3s ease',
                    transform: isResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ▼
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isResourcesOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '10px',
                    background: `${palette.black}95`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 0',
                    minWidth: '180px',
                    boxShadow: `0 8px 32px ${palette.black}60`,
                    border: `1px solid ${palette.tertiary}30`
                  }}>
                    <a
                      href="https://rafibarides.github.io/lyrics-sync/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        color: palette.text,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        opacity: 0.75,
                        transition: 'opacity 0.3s ease, background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.backgroundColor = `${palette.purple}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '0.75';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      Lyrics Sync
                    </a>
                    <a
                      href="mailto:rafibaridesstudio@gmail.com"
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        color: palette.text,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        opacity: 0.75,
                        transition: 'opacity 0.3s ease, background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.backgroundColor = `${palette.purple}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '0.75';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      Get on Arbiem
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Download Button */}
            <div style={{ 
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center'
            }}>
              <GradientButton
                icon={faApple}
                size="small"
                onClick={() => window.open('https://apple.com', '_blank')}
              >
                Download
              </GradientButton>
            </div>
          </>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            className="hamburger-button"
            style={{
              background: 'none',
              border: 'none',
              color: palette.text,
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleMobileMenuToggle}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isMobile && (
        <div 
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            background: `${palette.black}95`,
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontFamily: '"M PLUS Rounded 1c", sans-serif'
          }}
        >
          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
            item.type === 'route' ? (
              <Link
                key={index}
                to={item.link}
                style={{
                  color: palette.text,
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  opacity: 0.75,
                  transition: 'opacity 0.3s ease, color 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.color = palette.purple;
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.75';
                  e.target.style.color = palette.text;
                }}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={index}
                href={item.link}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                  }
                  handleLinkClick(item);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  color: palette.text,
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  opacity: 0.75,
                  transition: 'opacity 0.3s ease, color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.color = palette.purple;
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.75';
                  e.target.style.color = palette.text;
                }}
              >
                {item.name}
              </a>
            )
          ))}

          {/* Mobile Resources Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ 
              color: palette.text, 
              fontSize: '1.2rem', 
              fontWeight: '600',
              opacity: 0.9,
              margin: '0'
            }}>
              Resources
            </h3>
            <a
              href="https://rafibarides.github.io/lyrics-sync/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: palette.text,
                textDecoration: 'none',
                fontSize: '1.1rem',
                opacity: 0.75,
                transition: 'opacity 0.3s ease, color 0.3s ease'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.color = palette.purple;
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.75';
                e.target.style.color = palette.text;
              }}
            >
              Lyrics Sync
            </a>
            <a
              href="mailto:rafibaridesstudio@gmail.com"
              style={{
                color: palette.text,
                textDecoration: 'none',
                fontSize: '1.1rem',
                opacity: 0.75,
                transition: 'opacity 0.3s ease, color 0.3s ease'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.color = palette.purple;
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.75';
                e.target.style.color = palette.text;
              }}
            >
              Get on Arbiem
            </a>
          </div>

          {/* Mobile Download Button */}
          <div style={{ marginTop: '1rem' }}>
            <GradientButton
              icon={faApple}
              size="medium"
              onClick={() => {
                window.open('https://apple.com', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              Download
            </GradientButton>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
