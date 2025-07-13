import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeSection from './sections/WelcomeSection'
import AboutSection from './sections/About Section'
import FAQpage from './pages/FAQpage'
import Brooklyn from './pages/Brooklyn'
import Roster from './pages/Roster'
import NavBar from './components/NavBar'
import { palette } from './utils/Colors'

// Home page component
const HomePage = () => {
  return (
    <>
      <NavBar />
      <WelcomeSection />
      <AboutSection />
    </>
  );
};

function App() {
  return (
    <div style={{ backgroundColor: palette.black }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FAQ" element={<FAQpage />} />
          <Route path="/brooklyn" element={<Brooklyn />} />
          <Route path="/roster" element={<Roster />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
