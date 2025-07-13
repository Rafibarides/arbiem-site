import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const Roster = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            "image": "https://i.pinimg.com/736x/3c/b5/00/3cb5006d920ab3293da41860dcef7bd4.jpg",
            "singles": [
              {
                "id": 1,
                "name": "Dance With Me",
                "coverArt": "https://blog.pixpa.com/wp-content/uploads/2021/03/word-image-122.jpeg",
                "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "releaseDate": "2021-01-01",
                "lyrics": "./../../LyricCenter/FeelsLikeHome.json"
              }
            ],
            "albums": [
              {
                "id": 1,
                "name": "After Dark",
                "coverArt": "https://progradedigital.com/wp-content/uploads/2023/04/31-Main-Image.png",
                "releaseDate": "2021-01-01"
              }
            ],
            "bio": "Joey is a singer-songwriter from Los Angeles, California. He has been making music for over 10 years and has released several albums and singles."
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
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Ben%20Lerner/benLerner.jpg",
            "albums": [
              {
                "id": 3,
                "name": "The Only Living Boy in Brooklyn",
                "coverArt": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Ben%20Lerner/Albums/theOnlyLivingBoyInBrooklyn/theOnlyLivingBoyInBrooklyn.jpg",
                "releaseDate": "2024-12-08"
              }
            ]
          },
          {
            "id": 5,
            "name": "Rafi Barides",
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/rafiBarides.jpg",
            "singles": [
              {
                "id": 16,
                "name": "Outer Space (ft. Shira Neshama)",
                "coverArt": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/Singles/OuterSpace/outerSpace.jpg",
                "audio": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/Singles/OuterSpace/outerSpace.wav",
                "releaseDate": "2024-01-04",
                "lyrics": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/Singles/OuterSpace/outerSpaceLyrics.json"
              }
            ],
            "albums": [
              {
                "id": 2,
                "name": "Rags to Rags",
                "coverArt": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Rafi%20Barides/Albums/RagsToRags/ragsToRags.jpg",
                "releaseDate": "2020-01-01"
              }
            ],
            "bio": "Rafi Barides is a singer-songwriter from Los Angeles, California. He has been making music for over 10 years and has released several albums and singles.",
            "supportLink": "https://www.paypal.com"
          },
          {
            "id": 6,
            "name": "Ericah",
            "image": "https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev/Artists/Ericah/ericah.jpeg"
          }
        ];
        
        setArtists(fallbackData);
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
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
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
      <NavBar />
      
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
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
                    transition: 'transform 0.3s ease'
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

        {/* Join Section */}
        <motion.div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: `linear-gradient(135deg, ${palette.secondary}60 0%, ${palette.tertiary}30 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${palette.tertiary}30`,
            borderRadius: '20px',
            marginTop: '40px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '20px'
          }}>
            Want to join Arbiem?
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            opacity: 0.8,
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            We&apos;re always looking for talented artists to join our community.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              opacity: 0.9
            }}>
              Email us at:
            </span>
            <a
              href="mailto:rafibaridesstudio@gmail.com"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: palette.purple,
                textDecoration: 'none',
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
        </motion.div>
      </section>
    </div>
  );
};

export default Roster;
