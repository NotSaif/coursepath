import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePurchase } from '../context/PurchaseContext';
import { GraduationCap, Sparkles } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isPro, unlockedCourses } = usePurchase();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/catalog', label: t('nav.catalog') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/dashboard', label: t('nav.dashboard') },
    { to: '/about', label: t('nav.about') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" id="logo-link">
            <div className="navbar-logo-icon">
              <GraduationCap size={20} />
            </div>
            <span>{t('brand')}</span>
            {isPro && (
              <span className="badge badge-accent" style={{ fontSize: '10px', padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Sparkles size={10} /> PRO
              </span>
            )}
            {!isPro && unlockedCourses.length > 0 && (
              <span className="badge badge-accent" style={{ fontSize: '10px', padding: '2px 8px' }}>
                {unlockedCourses.length} Course{unlockedCourses.length > 1 ? 's' : ''} Unlocked
              </span>
            )}
          </Link>

          <div className="navbar-links">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <div className="lang-toggle-wrapper">
              <LanguageToggle />
            </div>
            <Link to="/catalog" className="btn btn-primary btn-sm" id="nav-cta">
              {t('nav.getStarted')}
            </Link>
            <button
              className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/catalog" className="btn btn-primary btn-lg" style={{ marginTop: 'var(--space-md)' }}>
          {t('nav.getStarted')}
        </Link>
      </div>
    </>
  );
}
