import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePurchase } from '../context/PurchaseContext';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Sparkles, LogIn, LogOut, User } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import AuthModal from './AuthModal';
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isPro, unlockedCourses } = usePurchase();
  const { isAuthenticated, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close user menu when clicking outside
  useEffect(() => {
    if (!userMenuOpen) return;
    const handleClick = () => setUserMenuOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [userMenuOpen]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/catalog', label: t('nav.catalog') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/dashboard', label: t('nav.dashboard') },
    { to: '/about', label: t('nav.about') },
  ];

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

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

            {isAuthenticated ? (
              <div className="navbar-user-menu" onClick={e => e.stopPropagation()}>
                <button
                  className="navbar-user-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  id="user-menu-btn"
                >
                  <div className="navbar-user-avatar">
                    {user?.name?.charAt(0)?.toUpperCase() || <User size={14} />}
                  </div>
                  <span className="navbar-user-name">{user?.name}</span>
                </button>
                {userMenuOpen && (
                  <div className="navbar-user-dropdown">
                    <div className="navbar-user-dropdown-header">
                      <span className="navbar-user-dropdown-name">{user?.name}</span>
                      <span className="navbar-user-dropdown-email">{user?.email}</span>
                    </div>
                    <div className="navbar-user-dropdown-divider" />
                    <Link to="/dashboard" className="navbar-user-dropdown-item">
                      {t('nav.dashboard')}
                    </Link>
                    <button
                      className="navbar-user-dropdown-item logout"
                      onClick={handleLogout}
                    >
                      <LogOut size={14} />
                      {t('auth.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setAuthModalOpen(true)}
                id="nav-login-btn"
              >
                <LogIn size={14} />
                {t('auth.login')}
              </button>
            )}

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
        {isAuthenticated ? (
          <button className="btn btn-secondary btn-lg" onClick={handleLogout} style={{ marginTop: 'var(--space-md)' }}>
            <LogOut size={16} />
            {t('auth.logout')}
          </button>
        ) : (
          <button
            className="btn btn-primary btn-lg"
            onClick={() => { setMobileOpen(false); setAuthModalOpen(true); }}
            style={{ marginTop: 'var(--space-md)' }}
          >
            <LogIn size={16} />
            {t('auth.login')}
          </button>
        )}
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
