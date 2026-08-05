import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { certifications } from '../data/certifications';
import { careerPaths } from '../data/careerPaths';
import CertCard from '../components/CertCard';
import {
  Sparkles, ArrowRight, ArrowLeft, Target, BookOpen, Award,
  Search, Layout, BarChart3, Globe, Briefcase, Shield, Cloud,
  ClipboardList, Network, CheckCircle
} from 'lucide-react';
import './Home.css';

const iconMap = { Shield, Cloud, BarChart3, ClipboardList, Network };

export default function Home() {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  const whyFeatures = [
    { icon: Search, key: 'feature1' },
    { icon: Layout, key: 'feature2' },
    { icon: BarChart3, key: 'feature3' },
    { icon: CheckCircle, key: 'feature4' },
    { icon: Globe, key: 'feature5' },
    { icon: Briefcase, key: 'feature6' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="home-hero" id="hero-section">
        <div className="hero-bg">
          <div className="hero-grid-pattern" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">
              <Sparkles size={14} />
              {t('hero.tagline')}
            </span>
            <h1 className="hero-title">
              {t('hero.title')}{' '}
              <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-ctas">
              <Link to="/catalog" className="btn btn-primary btn-lg" id="hero-cta-primary">
                {t('hero.cta')}
                <Arrow size={18} />
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
            <div className="hero-stats">
              {Object.entries(t('hero.stats', { returnObjects: true })).map(([key, value]) => (
                <div className="hero-stat" key={key}>
                  <span className="hero-stat-dot" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" id="how-it-works" ref={addRevealRef}>
        <div className="container reveal" ref={addRevealRef}>
          <div className="section-header">
            <h2 className="section-title">{t('howItWorks.title')}</h2>
            <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
          </div>
          <div className="how-it-works-grid">
            {['step1', 'step2', 'step3'].map((step, i) => (
              <div key={step} className="hiw-card glass-card reveal" ref={addRevealRef}>
                <div className="hiw-step-number">{i + 1}</div>
                <h3>{t(`howItWorks.${step}.title`)}</h3>
                <p>{t(`howItWorks.${step}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Certifications */}
      <section className="section" id="featured-certs">
        <div className="container reveal" ref={addRevealRef}>
          <div className="section-header">
            <h2 className="section-title">{t('featured.title')}</h2>
            <p className="section-subtitle">{t('featured.subtitle')}</p>
          </div>
          <div className="featured-grid">
            {certifications.map(cert => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/catalog" className="btn btn-secondary btn-lg">
              {t('featured.viewAll')}
              <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="section" id="career-paths" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container reveal" ref={addRevealRef}>
          <div className="section-header">
            <h2 className="section-title">{t('careerPaths.title')}</h2>
            <p className="section-subtitle">{t('careerPaths.subtitle')}</p>
          </div>
          <div className="career-paths-grid">
            {careerPaths.map(path => {
              const Icon = iconMap[path.icon] || Shield;
              return (
                <Link
                  to={`/catalog?path=${path.id}`}
                  key={path.id}
                  className="career-path-card glass-card"
                  id={`career-path-${path.id}`}
                >
                  <div className="career-path-icon" style={{ background: `${path.color}15`, color: path.color }}>
                    <Icon size={28} />
                  </div>
                  <h3>{path.name[language]}</h3>
                  <p>{path.description[language]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CertPath */}
      <section className="section" id="why-certpath">
        <div className="container reveal" ref={addRevealRef}>
          <div className="section-header">
            <h2 className="section-title">{t('whyCertPath.title')}</h2>
            <p className="section-subtitle">{t('whyCertPath.subtitle')}</p>
          </div>
          <div className="why-grid">
            {whyFeatures.map(({ icon: Icon, key }) => (
              <div key={key} className="why-card glass-card">
                <div className="why-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{t(`whyCertPath.${key}.title`)}</h3>
                  <p>{t(`whyCertPath.${key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" id="cta-section">
        <div className="container">
          <div className="cta-banner reveal" ref={addRevealRef}>
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <Link to="/catalog" className="btn btn-primary btn-lg">
              {t('cta.button')}
              <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
