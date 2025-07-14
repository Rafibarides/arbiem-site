import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import { palette } from './utils/Colors'

// Home page component
const HomePage = () => {
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FAQ" element={<FAQpage />} />
          <Route path="/brooklyn" element={<Brooklyn />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
