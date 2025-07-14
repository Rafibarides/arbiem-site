import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import palette from '../utils/Colors.js';
import { fetchArtists } from '../utils/api.js';

const FeaturedArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Adjustable speed variable (pixels per second)
  const scrollSpeed = 50;
  
  useEffect(() => {
    const loadArtists = async () => {
      try {
        const data = await fetchArtists();
        setArtists(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setArtists([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadArtists();
  }, []);

  if (loading || artists.length === 0) {
    return null; // Don't render anything while loading
  }

  // Create enough copies of the artist array to fill the screen and create seamless loop
  const repeatedArtists = Array(Math.ceil(20 / artists.length)).fill(artists).flat();
  
  // Calculate animation duration based on speed
  const imageWidth = 120; // px
  const gap = 20; // px
  const totalWidth = repeatedArtists.length * (imageWidth + gap);
  const animationDuration = totalWidth / scrollSpeed;

  return (
    <section style={{
      backgroundColor: palette.black,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background overlay for smooth edges */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, ${palette.black} 0%, transparent 10%, transparent 90%, ${palette.black} 100%)`,
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Scrolling container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '250px',
        overflow: 'hidden',
        paddingTop: '30px'
      }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            height: '100%',
            willChange: 'transform'
          }}
          animate={{
            x: [-totalWidth / 2, 0]
          }}
          transition={{
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity
          }}
        >
          {repeatedArtists.map((artist, index) => (
            <div
              key={`${artist.id}-${index}`}
              style={{
                flexShrink: 0,
                width: `${imageWidth}px`,
                height: `${imageWidth}px`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                border: `2px solid ${palette.tertiary}40`,
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = `${palette.purple}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = `${palette.tertiary}40`;
              }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(100%)';
                }}
              />
              
              {/* Subtle overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, ${palette.black}20, transparent 60%)`,
                pointerEvents: 'none'
              }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
