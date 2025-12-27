import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import WelcomeSection from './sections/WelcomeSection'
import AboutSection from './sections/About Section'
import FeaturedArtists from './sections/FeaturedArtists'
import WhoWeAreNot from './sections/WhoWeAreNot'
import Footer from './sections/Footer'
import FAQpage from './pages/FAQpage'
import Brooklyn from './pages/Brooklyn'
import Roster from './pages/Roster'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Support from './pages/Support'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import FoundingStory from './pages/FoundingStory'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import { palette } from './utils/Colors'

// Handle GitHub Pages redirects
const GitHubPagesRedirect = () => {
  useEffect(() => {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const redirect = urlParams.get('p');
    
    if (redirect) {
      // Remove the redirect parameter from the URL
      const newUrl = window.location.origin + '/' + redirect;
      window.history.replaceState(null, null, newUrl);
    }
  }, []);
  
  return null;
};

// Home page component
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to about section when accessed via /about
    if (location.pathname === '/about') {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <WelcomeSection />
      <AboutSection />
      <FeaturedArtists />
      <WhoWeAreNot />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div style={{ backgroundColor: palette.black }}>
      <Router>
        <GitHubPagesRedirect />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/faq" element={<FAQpage />} />
          <Route path="/brooklyn" element={<Brooklyn />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/founding-story" element={<FoundingStory />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
