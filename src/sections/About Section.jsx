import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faEyeSlash,
  faRobot,
  faLock,
  faCompress,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import palette from "../utils/Colors.js";
import TypingInAnimation from "../components/TypingInAnimation.jsx";
import Mockup3D from "../components/Mockup3D.jsx";

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Variants for icon hover animation loop
  const iconVariants = {
    initial: { y: 0, rotate: 0 },
    hovered: {
      y: [0, -3, 0, 2, 0],
      rotate: [0, -3, 0, 3, 0],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Variants for card hover to also drive child icon variants
  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hovered: {
      scale: 1.02,
      boxShadow: `${palette.purple}20 0px 8px 25px`,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: palette.black,
        padding: "60px 20px",
        position: "relative",
        overflow: "visible",
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
      }}
    >
      {/* Animated Purple Orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${palette.purple}40 0%, ${palette.purple}20 40%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 1,
          filter: "blur(3px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section 1: About Arbiem with Mockup */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "60px",
              marginBottom: isMobile ? "20px" : "36px",
            flexWrap: "wrap",
              // height intentionally unset to avoid vertical clipping of 3D canvas
          }}
        >
          {/* Text Content */}
          <motion.div
            style={{
              flex: "1 1 400px",
              minWidth: "300px",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: "bold",
                color: palette.text,
                marginBottom: "25px",
                lineHeight: "1.2",
              }}
            >
              <TypingInAnimation text="About Arbiem" speed={60} delay={200} />
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                color: palette.text,
                lineHeight: "1.6",
                opacity: 0.9,
                marginBottom: "25px",
              }}
            >
              Arbiem is a streaming home for a growing collective of independent
              artists. Built by artists for artists, it lets listeners hear
              music exactly as intended. Rooted in Brooklyn and open to creators
              everywhere, Arbiem puts community and sound quality first, making
              it a great place to discover new artists.
            </p>
            <div
              style={{
                fontSize: "clamp(0.95rem, 2.8vw, 1.15rem)",
                color: palette.text,
                fontWeight: "600",
                lineHeight: "1.5",
                opacity: 0.95,
              }}
            >
              <p style={{ marginBottom: "8px", color: palette.purple }}>
                This is not Spotify.
              </p>
              <p style={{ marginBottom: "8px" }}>
                This is not about growth at all costs.
              </p>
              <p>
                This is about authenticity, intention, and creative freedom.
              </p>
            </div>
          </motion.div>

          {/* 3D Mockup with scroll-reactive rotation and subtle parallax */}
          <motion.div
            style={{
              flex: "1 1 350px",
              minWidth: "250px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 20,
                transform: `translateY(${ 
                  scrollY > window.innerHeight 
                    ? (scrollY - window.innerHeight) * -0.2 
                    : 0 
                }px)`,
                transition: "transform 0.1s ease-out",
                background: 'transparent',
                filter: 'none',
                overflow: 'visible',
                marginTop: isMobile ? '-20px' : '-60px'
              }}
            >
              <Mockup3D
                isMobile={isMobile}
                rotation={(scrollY - window.innerHeight) * 0.003}
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2: What Makes Arbiem Different */}
        <motion.div
          style={{
            marginBottom: "120px",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: "bold",
              color: palette.text,
              marginBottom: "40px",
            }}
          >
            <TypingInAnimation
              text="What Makes Arbiem Different"
              speed={50}
              delay={300}
            />
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              { text: "No subscriptions", icon: faBan },
              { text: "No ads", icon: faEyeSlash },
              { text: "No mystery algorithm", icon: faRobot },
              {
                text: "No gatekeeping of features like motion artwork or synced lyrics",
                icon: faLock,
              },
              {
                text: "No compression, at all. Your music and cover art in full-quality",
                icon: faCompress,
              },
              {
                text: "No punishing small artists just for being independent",
                icon: faUsers,
              },
              {
                text: "No inflated payouts to major labels that leave smaller voices unheard",
                icon: faChartLine,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  style={{
                    background: `linear-gradient(135deg, ${palette.secondary}20 0%, ${palette.tertiary}10 100%)`,
                    backdropFilter: "blur(20px) saturate(160%)",
                    WebkitBackdropFilter: "blur(20px) saturate(160%)",
                    border: `1px solid ${palette.tertiary}20`,
                    borderRadius: "16px",
                    padding: "16px",
                    textAlign: "left",
                    height: "165px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hovered"
                  animate="rest"
                >
                <motion.div
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: palette.text,
                    flexShrink: 0,
                  }}
                  variants={iconVariants}
                  initial="initial"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)",
                    color: palette.text,
                    lineHeight: "1.3",
                    opacity: 0.9,
                    margin: "0",
                    flex: "1",
                  }}
                >
                  {item.text}
                </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: What's the Catch */}
        <motion.div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: "bold",
              color: palette.text,
              marginBottom: "30px",
            }}
          >
            <TypingInAnimation
              text="What's the Catch?"
              speed={55}
              delay={200}
            />
          </h3>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              color: palette.text,
              lineHeight: "1.6",
              opacity: 0.9,
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Arbiem is 100% free for both artists and listeners. Every artist on
            the platform chooses to make their music available without barriers,
            so that fans can hear it as it was meant to be heard.
          </p>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              color: palette.text,
              lineHeight: "1.6",
              opacity: 0.9,
              margin: "0",
              textAlign: "left",
            }}
          >
            Each artist profile includes a{" "}
            <strong style={{ color: palette.purple }}>Support</strong> button,
            where fans can donate directly based on their experience and
            ability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
