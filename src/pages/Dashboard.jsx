import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { certifications } from '../data/certifications';
import ProgressBar from '../components/ProgressBar';
import CertCard from '../components/CertCard';
import { BookOpen, Award, Clock, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const { getActiveCerts, getCertProgress, getTotalStats, getRecentActivity } = useProgress();

  const activeCertIds = getActiveCerts();
  const activeCerts = certifications.filter(c => activeCertIds.includes(c.id));
  const stats = getTotalStats();
  const recentActivity = getRecentActivity();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const recommendedCerts = certifications.filter(c => !activeCertIds.includes(c.id)).slice(0, 3);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return language === 'ar' ? 'الآن' : 'Just now';
    if (diffMins < 60) return language === 'ar' ? `منذ ${diffMins} دقيقة` : `${diffMins}m ago`;
    if (diffHours < 24) return language === 'ar' ? `منذ ${diffHours} ساعة` : `${diffHours}h ago`;
    return language === 'ar' ? `منذ ${diffDays} يوم` : `${diffDays}d ago`;
  };

  if (activeCerts.length === 0) {
    return (
      <main className="dashboard-page" id="dashboard-page">
        <div className="container">
          <div className="dashboard-welcome">
            <h1>{t('dashboard.title')}</h1>
          </div>
          <div className="dashboard-empty">
            <BookOpen size={48} style={{ color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }} />
            <p>{t('dashboard.noCerts')}</p>
            <Link to="/catalog" className="btn btn-primary btn-lg">
              {t('dashboard.startExploring')}
              <Arrow size={18} />
            </Link>
          </div>

          {recommendedCerts.length > 0 && (
            <div className="dashboard-section" style={{ marginTop: 'var(--space-2xl)' }}>
              <h2>{t('dashboard.recommended')}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-lg)' }}>
                {t('dashboard.recommendedDesc')}
              </p>
              <div className="dashboard-active-certs">
                {recommendedCerts.map(cert => (
                  <CertCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard-page" id="dashboard-page">
      <div className="container">
        <div className="dashboard-welcome">
          <h1>{t('dashboard.title')}</h1>
          <p>{t('dashboard.welcome')} 👋</p>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-stats-grid">
          <div className="dashboard-stat-card glass-card">
            <div className="dashboard-stat-value">{stats.chaptersCompleted}</div>
            <div className="dashboard-stat-label">{t('dashboard.chaptersCompleted')}</div>
          </div>
          <div className="dashboard-stat-card glass-card">
            <div className="dashboard-stat-value">{stats.certsInProgress}</div>
            <div className="dashboard-stat-label">{t('dashboard.certsInProgress')}</div>
          </div>
          <div className="dashboard-stat-card glass-card">
            <div className="dashboard-stat-value">{stats.hoursStudied}</div>
            <div className="dashboard-stat-label">{t('dashboard.hoursStudied')}</div>
          </div>
          <div className="dashboard-stat-card glass-card">
            <div className="dashboard-stat-value">
              {stats.totalChapters > 0 ? Math.round((stats.chaptersCompleted / stats.totalChapters) * 100) : 0}%
            </div>
            <div className="dashboard-stat-label">{t('dashboard.overallProgress')}</div>
          </div>
        </div>

        {/* Active Certifications */}
        <div className="dashboard-section">
          <h2>{t('dashboard.activeCerts')}</h2>
          <div className="dashboard-active-certs">
            {activeCerts.map(cert => {
              const progress = getCertProgress(cert.id);
              return (
                <Link
                  to={`/cert/${cert.id}`}
                  key={cert.id}
                  className="dashboard-cert-card glass-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="dashboard-cert-header">
                    <div>
                      <h3>{cert.shortName[language]}</h3>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                        {cert.organization}
                      </span>
                    </div>
                    <span className={`badge badge-${cert.careerPath}`}>
                      {progress.completed}/{progress.total}
                    </span>
                  </div>
                  <ProgressBar
                    percentage={progress.percentage}
                    label={t('dashboard.progress')}
                  />
                  <span className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                    {t('dashboard.continue')} <Arrow size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        {recentActivity.length > 0 && (
          <div className="dashboard-section">
            <h2>{t('dashboard.recentActivity')}</h2>
            <div className="dashboard-activity-list">
              {recentActivity.map((activity, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-dot" />
                  <div className="activity-info">
                    <p>{t('dashboard.completedChapter')} "{activity.chapter.title[language]}"</p>
                    <span>{activity.cert.shortName[language]} • {formatDate(activity.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended */}
        {recommendedCerts.length > 0 && (
          <div className="dashboard-section">
            <h2>{t('dashboard.recommended')}</h2>
            <div className="dashboard-active-certs">
              {recommendedCerts.map(cert => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
