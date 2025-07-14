import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';
import Footer from '../sections/Footer.jsx';
import { fetchArtists } from '../utils/api.js';

const Roster = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArtists = async () => {
      try {
        const data = await fetchArtists();
        setArtists(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load artists. Please try again later.');
        setArtists([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadArtists();
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
        <NavBar />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          color: palette.text,
          fontSize: '1.2rem',
          fontFamily: '"M PLUS Rounded 1c", sans-serif'
        }}>
          Loading artists...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
        <NavBar />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          color: palette.text,
          fontSize: '1.2rem',
          fontFamily: '"M PLUS Rounded 1c", sans-serif'
        }}>
          Error: {error}
        </div>
        <Footer />
      </div>
    );
  }

  if (!loading && artists.length === 0) {
    return (
      <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
        <NavBar />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          color: palette.text,
          fontSize: '1.2rem',
          fontFamily: '"M PLUS Rounded 1c", sans-serif'
        }}>
          No artists found. Check back soon!
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <NavBar />
      
      {/* Background Particles and Orbs */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        {/* Large Purple Orb */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '350px',
            height: '350px',
            background: `radial-gradient(circle, ${palette.purple}30 0%, ${palette.purple}15 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(4px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [-30, 30, -30],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium Purple Orb */}
        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${palette.purple}40 0%, ${palette.purple}20 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(3px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [20, -20, 20],
            y: [10, -10, 10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Small Purple Orb */}
        <motion.div
          style={{
            position: 'absolute',
            top: '30%',
            left: '70%',
            width: '120px',
            height: '120px',
            background: `radial-gradient(circle, ${palette.purple}50 0%, ${palette.purple}25 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [-15, 15, -15],
            y: [25, -25, 25]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: palette.purple,
              borderRadius: '50%',
              opacity: 0.6,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Additional accent orbs */}
        <motion.div
          style={{
            position: 'absolute',
            top: '80%',
            right: '5%',
            width: '80px',
            height: '80px',
            background: `radial-gradient(circle, ${palette.purple}60 0%, ${palette.purple}30 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
        position: 'relative',
        zIndex: 2
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
              text="Arbiem Roster" 
              speed={60}
              delay={300}
            />
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            Meet the artists who call Arbiem home
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '30px',
          marginBottom: '80px'
        }}
        className="roster-grid"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              style={{
                background: `linear-gradient(135deg, ${palette.secondary}80 0%, ${palette.tertiary}40 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${palette.tertiary}30`,
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 15px 40px ${palette.purple}20`
              }}
            >
              {/* Artist Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                overflow: 'hidden'
              }}>
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    filter: 'grayscale(100%)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  background: `linear-gradient(to top, ${palette.black}90, transparent)`,
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Artist Name */}
              <div style={{
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  fontWeight: 'bold',
                  color: palette.text,
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  {artist.name}
                </h3>
                
                {/* Optional bio or additional info */}
                {artist.bio && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: palette.text,
                    opacity: 0.7,
                    marginTop: '10px',
                    lineHeight: '1.4'
                  }}>
                    {artist.bio.length > 100 ? `${artist.bio.substring(0, 100)}...` : artist.bio}
                  </p>
                )}
                
                {/* Show counts for singles/albums if available */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  marginTop: '15px',
                  fontSize: '0.8rem',
                  color: palette.purple,
                  opacity: 0.8
                }}>
                  {artist.singles && artist.singles.length > 0 && (
                    <span>{artist.singles.length} Single{artist.singles.length > 1 ? 's' : ''}</span>
                  )}
                  {artist.albums && artist.albums.length > 0 && (
                    <span>{artist.albums.length} Album{artist.albums.length > 1 ? 's' : ''}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: palette.text,
            opacity: 0.7,
            margin: '0'
          }}>
            Want to join Arbiem? Email us at{' '}
            <a
              href="mailto:rafibaridesstudio@gmail.com"
              style={{
                color: palette.purple,
                textDecoration: 'none',
                fontWeight: '500',
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
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Roster;
