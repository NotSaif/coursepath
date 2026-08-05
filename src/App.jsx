import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CertDetail from './pages/CertDetail';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cert/:certId" element={<CertDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ProgressProvider>
          <AppContent />
        </ProgressProvider>
      </LanguageProvider>
    </Router>
  );
}
