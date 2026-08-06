import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { X, Mail, Lock, User, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { register, login, loading, error, clearError } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    clearError();
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'register') {
        await register(name, email, password, language);
      } else {
        await login(email, password);
      }
      // Success — close modal
      handleClose();
    } catch {
      // Error is handled by AuthContext
    }
  };

  const handleClose = () => {
    clearError();
    setName('');
    setEmail('');
    setPassword('');
    setMode('login');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="auth-modal-body">
          <h2>{mode === 'login' ? t('auth.login') : t('auth.register')}</h2>
          <p className="auth-modal-subtitle">
            {mode === 'login' ? t('auth.loginDesc') : t('auth.registerDesc')}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'register' && (
              <div className="auth-field">
                <label htmlFor="auth-name">
                  <User size={16} />
                  {t('auth.name')}
                </label>
                <input
                  id="auth-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={t('auth.namePlaceholder')}
                  required
                  minLength={2}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="auth-email">
                <Mail size={16} />
                {t('auth.email')}
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('auth.emailPlaceholder')}
                required
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="auth-password">
                <Lock size={16} />
                {t('auth.password')}
              </label>
              <div className="auth-password-wrapper">
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={t('auth.passwordPlaceholder')}
                  required
                  minLength={6}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="auth-error">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
              id="auth-submit-btn"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  {t('auth.loading')}
                </>
              ) : (
                mode === 'login' ? t('auth.loginBtn') : t('auth.registerBtn')
              )}
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {mode === 'login' ? t('auth.noAccount') : t('auth.hasAccount')}
            </span>
            <button onClick={switchMode} className="auth-switch-btn">
              {mode === 'login' ? t('auth.registerLink') : t('auth.loginLink')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
