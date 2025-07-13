import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import palette from '../utils/Colors.js';

const FeaturedArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Adjustable speed variable (pixels per second)
  const scrollSpeed = 50;
  
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/jsonMaster/artists.json', {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        console.error('Fetch error:', err);
        // Fallback to hardcoded data for now
        const fallbackData = [
          {
            "id": 1,
            "name": "Joey",
            "image": "https://i.pinimg.com/736x/3c/b5/00/3cb5006d920ab3293da41860dcef7bd4.jpg"
          },
          {
            "id": 2,
            "name": "Devin Bryer",
            "image": "https://img.freepik.com/premium-photo/close-up-portrait-millennial-boy-teenager-seriously-looking-camera-handsome-beautiful-young-man_516988-1669.jpg"
          },
          {
            "id": 3,
            "name": "Kyle K",
            "image": "https://www.shutterstock.com/image-photo/handsome-calm-man-portrait-young-600nw-1615127239.jpg"
          },
          {
            "id": 4,
            "name": "Ben Lerner",
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Ben%20Lerner/benLerner.jpg"
          },
          {
            "id": 5,
            "name": "Rafi Barides",
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/rafiBarides.jpg"
          },
          {
            "id": 6,
            "name": "Ericah",
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Ericah/ericah.jpeg"
          }
        ];
        setArtists(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
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
