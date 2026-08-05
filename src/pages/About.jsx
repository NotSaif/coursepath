import { useTranslation } from 'react-i18next';
import { Accessibility, LayoutGrid, Target, Mail } from 'lucide-react';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Accessibility, key: 'v1' },
    { icon: LayoutGrid, key: 'v2' },
    { icon: Target, key: 'v3' },
  ];

  return (
    <main className="about-page" id="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>{t('about.title')}</h1>
        </div>

        <div className="about-section">
          <h2>{t('about.mission')}</h2>
          <p>{t('about.missionText')}</p>
        </div>

        <div className="about-section">
          <h2>{t('about.story')}</h2>
          <p>{t('about.storyText')}</p>
        </div>

        <div className="about-section">
          <h2>{t('about.values.title')}</h2>
          <div className="about-values-grid">
            {values.map(({ icon: Icon, key }) => (
              <div key={key} className="about-value-card glass-card">
                <div className="about-value-icon">
                  <Icon size={24} />
                </div>
                <h3>{t(`about.values.${key}.title`)}</h3>
                <p>{t(`about.values.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-contact" id="contact-section">
          <Mail size={32} style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-md)' }} />
          <h2>{t('about.contact')}</h2>
          <p>{t('about.contactText')}</p>
          <a href={`mailto:${t('about.email')}`}>{t('about.email')}</a>
        </div>
      </div>
    </main>
  );
}
