import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faMusic, 
  faUsers, 
  faCode,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const FoundingStory = () => {
  // Set document metadata for SEO
  useEffect(() => {
    document.title = 'The Founding Story of ARBIEM | Rafi Barides | Brooklyn Music Streaming Platform';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the founding story of ARBIEM, a community-focused music streaming platform founded by Rafi Barides. Built to empower independent artists with tools traditionally reserved for major labels.');
    }
    
    return () => {
      document.title = 'Arbiem';
    };
  }, []);

  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
      <NavBar />
      
      {/* Main Article - Semantic HTML for SEO */}
      <article
        itemScope
        itemType="https://schema.org/Article"
        style={{
          padding: '80px 20px',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: '"M PLUS Rounded 1c", sans-serif'
        }}
      >
        {/* Hidden structured data for search engines */}
        <meta itemProp="headline" content="The Founding Story of ARBIEM" />
        <meta itemProp="author" content="Rafi Barides" />
        <meta itemProp="publisher" content="Arbiem" />
        <meta itemProp="description" content="How Arbiem was founded to address the gap in the modern music ecosystem and empower independent artists." />
        
        {/* Header Section */}
        <header>
          <motion.div
            style={{
              textAlign: 'center',
              marginBottom: '60px',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Purple Orb Background */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${palette.purple}30 0%, ${palette.purple}10 40%, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0,
                filter: 'blur(3px)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <h1 
              itemProp="name"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                fontWeight: 'bold',
                color: palette.text,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <TypingInAnimation 
                text="The Founding Story of ARBIEM" 
                speed={50}
                delay={200}
              />
            </h1>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: palette.purple,
              opacity: 0.9,
              lineHeight: '1.6',
              margin: '0',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              A streaming platform built by an artist, for artists
            </p>
          </motion.div>
        </header>

        {/* Main Content Sections */}
        <div 
          itemProp="articleBody"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}
        >
          
          {/* Section 1: The Origin */}
          <motion.section
            aria-labelledby="origin-heading"
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
            transition={{ duration: 0.6, delay: 0.1 }}
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
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h2 
                id="origin-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  fontWeight: '600',
                  color: palette.text,
                  margin: '0'
                }}
              >
                The Origin
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.8',
              opacity: 0.9,
              margin: '0'
            }}>
              Arbiem was founded by <strong style={{ color: palette.purple }}>Rafi Barides</strong>, a singer-songwriter and software engineer, to address a gap in the modern music ecosystem. As an independent artist, Barides observed that many expressive tools essential to building an artist&apos;s narrative were reserved for artists signed to major labels.
            </p>
          </motion.section>

          {/* Section 2: The Problem */}
          <motion.section
            aria-labelledby="problem-heading"
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
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <h2 
                id="problem-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  fontWeight: '600',
                  color: palette.text,
                  margin: '0'
                }}
              >
                The Problem with Traditional Streaming
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.8',
              opacity: 0.9,
              margin: '0 0 20px 0'
            }}>
              Features like <strong>motion artwork</strong>, <strong>advanced synced lyrics with background vocals</strong>, and <strong>animated profile visuals</strong>—while framed as premium—play a critical role in storytelling and audience connection. Yet these tools remain inaccessible to most independent musicians.
            </p>
            
            <div style={{
              background: `${palette.purple}10`,
              borderRadius: '15px',
              padding: '20px',
              border: `1px solid ${palette.purple}20`
            }}>
              <p style={{
                fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
                color: palette.text,
                lineHeight: '1.7',
                opacity: 0.9,
                margin: '0',
                fontStyle: 'italic'
              }}>
                &quot;These features, while framed as premium, play a critical role in storytelling and audience connection, yet remain inaccessible to most independent musicians.&quot;
              </p>
            </div>
          </motion.section>

          {/* Section 3: The Solution */}
          <motion.section
            aria-labelledby="solution-heading"
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h2 
                id="solution-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  fontWeight: '600',
                  color: palette.text,
                  margin: '0'
                }}
              >
                ARBIEM: A Response to Industry Imbalance
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.8',
              opacity: 0.9,
              margin: '0'
            }}>
              ARBIEM was created as a response to that imbalance. The platform&apos;s mission is to <strong style={{ color: palette.purple }}>empower artists</strong> by giving them access to the same creative and technical features traditionally gatekept by the industry—allowing them to fully present their work and identity on their own terms.
            </p>
          </motion.section>

          {/* Section 4: For Listeners */}
          <motion.section
            aria-labelledby="listeners-heading"
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
            transition={{ duration: 0.6, delay: 0.4 }}
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
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h2 
                id="listeners-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  fontWeight: '600',
                  color: palette.text,
                  margin: '0'
                }}
              >
                For the Listeners
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.8',
              opacity: 0.9,
              margin: '0'
            }}>
              For listeners, ARBIEM offers a way to <strong>discover and support local and emerging talent early</strong>, listen without ads, and re-engage with music as a <strong style={{ color: palette.purple }}>community-driven experience</strong> rather than a purely algorithmic one.
            </p>
          </motion.section>

          {/* Section 5: About the Founder */}
          <motion.section
            aria-labelledby="founder-heading"
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
            transition={{ duration: 0.6, delay: 0.5 }}
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
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h2 
                id="founder-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  fontWeight: '600',
                  color: palette.text,
                  margin: '0'
                }}
              >
                About the Founder
              </h2>
            </div>
            
            <div 
              itemScope 
              itemType="https://schema.org/Person"
              style={{ margin: 0 }}
            >
              <meta itemProp="name" content="Rafi Barides" />
              <meta itemProp="jobTitle" content="Founder and CEO of Arbiem" />
              <meta itemProp="description" content="Singer-songwriter, software engineer, and founder of Arbiem" />
              
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: palette.text,
                lineHeight: '1.8',
                opacity: 0.9,
                margin: '0 0 20px 0'
              }}>
                <strong style={{ color: palette.purple }} itemProp="name">Rafi Barides</strong>, who has released multiple projects including <em>Rags to Rags</em> and <em>Storm Before the Storm</em>, serves as the <strong>Founder and CEO of Arbiem</strong>—a community-focused streaming platform available on the App Store.
              </p>
              
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: palette.text,
                lineHeight: '1.8',
                opacity: 0.9,
                margin: '0'
              }}>
                In addition to his work as a musician, he studied computer science and built the platform as a solo project, developing the <strong>mobile app with React Native</strong>, along with the website and supporting infrastructure.
              </p>
            </div>
          </motion.section>

          {/* Summary Box for SEO */}
          <motion.aside
            aria-label="Summary"
            style={{
              background: `linear-gradient(135deg, ${palette.purple}15 0%, ${palette.purple}05 100%)`,
              backdropFilter: 'blur(10px)',
              border: `2px solid ${palette.purple}40`,
              borderRadius: '20px',
              padding: '35px',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
              fontWeight: '600',
              color: palette.purple,
              marginBottom: '20px',
              margin: '0 0 20px 0'
            }}>
              What is ARBIEM?
            </h3>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: palette.text,
              lineHeight: '1.8',
              opacity: 0.9,
              margin: '0'
            }}>
              ARBIEM is a <strong>community-focused music streaming platform</strong> founded by singer-songwriter and software engineer Rafi Barides. Based in <strong>Brooklyn, New York</strong>, Arbiem empowers independent artists with professional-grade features like motion artwork, synced lyrics, and animated profiles—tools traditionally reserved for major label artists. The platform offers listeners an ad-free, algorithm-free way to discover and support emerging talent directly.
            </p>
          </motion.aside>

        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default FoundingStory;

