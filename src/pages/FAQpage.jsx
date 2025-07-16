import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import palette from '../utils/Colors.js';
import NavBar from '../components/NavBar.jsx';
import TypingInAnimation from '../components/TypingInAnimation.jsx';
import Footer from '../sections/Footer.jsx';

const FAQpage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Is Arbiem really free?",
      answer: "Yes. No subscriptions, no ads. Artists share their music here because they want you to hear it clearly, fully, and without barriers."
    },
    {
      question: "Can artists earn any money at all on Arbiem?",
      answer: "Each artist has a Support/Donate button on their profile. Fans can contribute directly, based on their experience, appreciation, and ability."
    },
    {
      question: "Why isn't every artist on Arbiem?",
      answer: "Arbiem isn't open to the public like other platforms. It's intentionally small, focused on artists from a close-knit community primarily in the greater Brooklyn area."
    },
    {
      question: "Can I upload my music to Arbiem?",
      answer: "If you're aligned with our values and want to contribute to a platform that values artistry over algorithms, email info@arbiem.com"
    },
    {
      question: "Is the audio really uncompressed?",
      answer: "Yes. No data squeezing, no loudness wars. What you hear is what the artist uploaded."
    },
    {
      question: "Is there a mobile app yet?",
      answer: "Yes, it's available on the app store."
    },
    {
      question: "Does Arbiem have synced lyrics?",
      answer: (
        <span>
          Yup! We have a native tool (
          <a 
            href="https://rafibarides.github.io/lyrics-sync/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: palette.purple, textDecoration: 'underline' }}
          >
            link here
          </a>
          ) that creates a downloadable json to include with your song submission.
        </span>
      )
    },
    {
      question: "What makes Arbiem different from Bandcamp or SoundCloud?",
      answer: "Bandcamp is great for buying music. SoundCloud is great for demos and exposure. Arbiem is a listening platform, a space to experience music in its final, fully-art-directed form. It's about curation, not scale."
    },
    {
      question: 'What does the name "Arbiem" mean?',
      answer: "It's a play on the initials R.B.M., a media collective that powers the platform and a nod to the idea that something small and homegrown can still hit hard."
    }
  ];

  return (
    <div style={{ backgroundColor: palette.black, minHeight: '100vh' }}>
      <NavBar />
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '80px 20px',
        fontFamily: '"M PLUS Rounded 1c", sans-serif'
      }}>
        
        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: palette.text,
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            <TypingInAnimation 
              text="Everything you need to know about Arbiem" 
              speed={45}
              delay={300}
            />
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              style={{
                background: `linear-gradient(135deg, ${palette.secondary}60 0%, ${palette.tertiary}30 100%)`,
                backdropFilter: 'blur(15px)',
                border: `1px solid ${palette.tertiary}40`,
                borderRadius: '15px',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                boxShadow: `0 8px 30px ${palette.purple}20`
              }}
            >
              {/* Question */}
              <button
                style={{
                  width: '100%',
                  padding: '25px',
                  background: 'transparent',
                  border: 'none',
                  color: palette.text,
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  fontFamily: '"M PLUS Rounded 1c", sans-serif'
                }}
                onClick={() => toggleQuestion(index)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = `${palette.purple}10`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon 
                  icon={openQuestion === index ? faChevronUp : faChevronDown}
                  style={{
                    fontSize: '1rem',
                    color: palette.purple,
                    transition: 'transform 0.3s ease'
                  }}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 25px 25px 25px',
                      borderTop: `1px solid ${palette.tertiary}30`
                    }}>
                      <p style={{
                        fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                        color: palette.text,
                        lineHeight: '1.6',
                        opacity: 0.9,
                        margin: '20px 0 0 0'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

                 {/* Contact Section */}
         <motion.div
           style={{
             textAlign: 'center',
             marginTop: '60px'
           }}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
         >
           <p style={{
             fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
             color: palette.text,
             opacity: 0.7,
             margin: '0'
           }}>
             Still have questions? Get in touch with us directly: {' '}
             <a
               href="mailto:support@arbiem.com"
               style={{
                 color: palette.purple,
                 textDecoration: 'none',
                 transition: 'opacity 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.target.style.opacity = '0.8';
               }}
               onMouseLeave={(e) => {
                 e.target.style.opacity = '1';
               }}
             >
               support@arbiem.com
             </a>
           </p>
         </motion.div>

      </div>
      <Footer />
    </div>
  );
};

export default FAQpage;
