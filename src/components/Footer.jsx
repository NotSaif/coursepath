import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <div className="navbar-logo-icon">
                <GraduationCap size={20} />
              </div>
              <span>{t('brand')}</span>
            </Link>
            <p>{t('footer.description')}</p>
          </div>

          <div className="footer-column">
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><Link to="/catalog">{t('nav.catalog')}</Link></li>
              <li><Link to="/pricing">{t('nav.pricing')}</Link></li>
              <li><Link to="/dashboard">{t('nav.dashboard')}</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><a href="mailto:hello@coursepath.io">{t('about.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#">{t('footer.privacy')}</a></li>
              <li><a href="#">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
