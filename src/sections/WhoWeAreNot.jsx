import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLock, 
  faDollarSign, 
  faGavel, 
  faCrown, 
  faCompress 
} from '@fortawesome/free-solid-svg-icons';
import palette from '../utils/Colors.js';
import TypingInAnimation from '../components/TypingInAnimation.jsx';

const WhoWeAreNot = () => {
  const notItems = [
    {
      icon: faLock,
      text: "We will not arbitrarily gatekeep features like motion artwork, reserving it for labels."
    },
    {
      icon: faDollarSign,
      text: "We will not require you to spend MONTHLY to have fans be able to review your lyrics through a sleazy third party like Musixmatch."
    },
    {
      icon: faGavel,
      text: "We will not punish you for not being on a label."
    },
    {
      icon: faCrown,
      text: "We will not do \"winner-takes-all\" because we do not need to overpay for Taylor Swift's licensing rights."
    },
    {
      icon: faCompress,
      text: "We will not compress your audio or artwork (at all!)"
    }
  ];

  return (
    <section style={{
      backgroundColor: palette.black,
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"M PLUS Rounded 1c", sans-serif'
    }}>
      {/* Background Animation Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${palette.purple}20 0%, ${palette.purple}10 40%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1,
          filter: 'blur(3px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-10, 10, -10]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${palette.purple}30 0%, ${palette.purple}15 40%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1,
          filter: 'blur(2px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [15, -15, 15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Header */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 'bold',
            color: palette.text,
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            <TypingInAnimation 
              text="Who We Are NOT" 
              speed={60}
              delay={200}
            />
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: `linear-gradient(90deg, ${palette.purple}, ${palette.purpleAccent})`,
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </motion.div>

        {/* Vertical Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '40px'
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '4px',
            background: `linear-gradient(180deg, ${palette.purple}, ${palette.purpleAccent})`,
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            zIndex: 1
          }} />

          {/* Timeline Items */}
          {notItems.map((item, index) => (
            <div key={index} style={{
              position: 'relative',
              marginBottom: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
            }}>
              {/* Bullet Point */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${palette.purple}, ${palette.purpleAccent})`,
                border: `3px solid ${palette.black}`,
                zIndex: 3,
                boxShadow: `0 0 0 2px ${palette.purple}40`
              }} />

                             {/* Icon */}
               <div style={{
                 position: 'absolute',
                 left: '50%',
                 top: '50%',
                 transform: 'translate(-50%, -50%)',
                 fontSize: '1.1rem',
                 color: palette.purple,
                 zIndex: 4,
                 background: palette.black,
                 borderRadius: '50%',
                 width: '50px',
                 height: '50px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 border: `2px solid ${palette.purple}60`
               }}>
                 <FontAwesomeIcon icon={item.icon} />
               </div>

              {/* Pill Card */}
              <motion.div
                style={{
                  background: `linear-gradient(135deg, ${palette.secondary}70 0%, ${palette.tertiary}30 100%)`,
                  backdropFilter: 'blur(15px)',
                  border: `2px solid ${palette.tertiary}40`,
                  borderRadius: '50px',
                                     padding: '20px 30px',
                   maxWidth: '350px',
                   position: 'relative',
                   zIndex: 10,
                   marginLeft: index % 2 === 0 ? '0' : 'auto',
                   marginRight: index % 2 === 0 ? 'auto' : '0',
                   textAlign: 'left'
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${palette.purple}30`,
                  borderColor: `${palette.purple}60`
                }}
              >
                                 <p style={{
                   fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                   color: palette.text,
                   lineHeight: '1.5',
                   opacity: 0.9,
                   margin: '0',
                   fontWeight: '500'
                 }}>
                   <TypingInAnimation 
                     text={item.text}
                     speed={30}
                     delay={500 + (index * 300)}
                   />
                 </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '50px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: palette.text,
            fontWeight: '500',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Artists first, not profit margins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreNot;
