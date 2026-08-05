import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { usePurchase } from '../context/PurchaseContext';
import { certifications } from '../data/certifications';
import ChapterItem from '../components/ChapterItem';
import ProgressBar from '../components/ProgressBar';
import PaymentModal from '../components/PaymentModal';
import {
  ArrowLeft, ArrowRight, Clock, BarChart3, DollarSign, Building2,
  ExternalLink, Lock, Lightbulb, Sparkles, CheckCircle2
} from 'lucide-react';
import './CertDetail.css';

const FREE_CHAPTERS = 2; // First 2 chapters are free for non-purchased

export default function CertDetail() {
  const { certId } = useParams();
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const { getCertProgress } = useProgress();
  const { isCertUnlocked } = usePurchase();
  const [paymentOpen, setPaymentOpen] = useState(false);

  const cert = certifications.find(c => c.id === certId);
  if (!cert) return <Navigate to="/catalog" replace />;

  const isUnlocked = isCertUnlocked(cert.id);
  const progress = getCertProgress(cert.id);
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <main className="cert-detail-page" id="cert-detail-page">
      <div className="container">
        <Link to="/catalog" className="cert-detail-back" id="back-to-catalog">
          <BackArrow size={16} />
          {t('certDetail.backToCatalog')}
        </Link>

        {/* Header */}
        <div className="cert-detail-header">
          <div className="cert-detail-info">
            <div className="cert-detail-badge-row">
              <span className={`badge badge-${cert.careerPath}`}>
                {t(`careerPaths.${cert.careerPath}.name`)}
              </span>
              <span className="badge badge-accent">
                {t(`certDetail.difficulties.${cert.difficulty}`)}
              </span>
            </div>
            <h1>{cert.name[language]}</h1>
            <p className="cert-detail-org">{cert.organization}</p>
            <p className="cert-detail-desc">{cert.description[language]}</p>

            <div className="cert-detail-meta-grid">
              <div className="cert-meta-item">
                <span className="meta-label"><Clock size={12} /> {t('certDetail.estimatedTime')}</span>
                <span className="meta-value">{cert.estimatedWeeks} {t('certDetail.weeks')}</span>
              </div>
              <div className="cert-meta-item">
                <span className="meta-label"><BarChart3 size={12} /> {t('certDetail.difficulty')}</span>
                <span className="meta-value">{t(`certDetail.difficulties.${cert.difficulty}`)}</span>
              </div>
              <div className="cert-meta-item">
                <span className="meta-label"><DollarSign size={12} /> {t('certDetail.examCost')}</span>
                <span className="meta-value">{cert.examCost}</span>
              </div>
              <div className="cert-meta-item">
                <span className="meta-label"><Building2 size={12} /> {t('certDetail.organization')}</span>
                <span className="meta-value">{cert.organization}</span>
              </div>
            </div>

            {/* Progress */}
            <div className="cert-detail-progress">
              <div className="cert-detail-progress-label">
                <span>{progress.completed}/{progress.total} {t('certDetail.chaptersCompleted')}</span>
              </div>
              <ProgressBar percentage={progress.percentage} showLabel={false} large />
            </div>

            {/* Exam Actions */}
            <div className="cert-exam-actions">
              <a
                href={cert.officialExamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id="register-exam-btn"
              >
                {t('certDetail.registerExam')}
                <ExternalLink size={16} />
              </a>
              <a
                href={cert.officialSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="official-site-btn"
              >
                {t('certDetail.officialSite')}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="roadmap-section" id="study-roadmap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <h2>
              <Sparkles size={22} style={{ color: 'var(--accent-primary)' }} />
              {t('certDetail.roadmap')}
            </h2>
            {isUnlocked && (
              <span className="badge badge-accent" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', fontSize: 'var(--text-xs)' }}>
                <CheckCircle2 size={14} /> Full Access Unlocked
              </span>
            )}
          </div>
          <div className="chapters-list">
            {cert.chapters.map((chapter, index) => {
              const isFree = index < FREE_CHAPTERS;
              const chapterLocked = !isUnlocked && !isFree;
              return (
                <div key={chapter.id}>
                  {!isUnlocked && isFree && index === 0 && (
                    <div style={{ marginBottom: 'var(--space-sm)' }}>
                      <span className="badge badge-accent">{t('certDetail.freePreview')}</span>
                    </div>
                  )}
                  <ChapterItem
                    chapter={chapter}
                    certId={cert.id}
                    index={index}
                    isLocked={chapterLocked}
                  />
                </div>
              );
            })}
          </div>

          {/* Unlock Banner - Only show if course is not unlocked */}
          {!isUnlocked && (
            <div className="unlock-banner" id="unlock-banner">
              <Lock size={32} style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-sm)' }} />
              <h3>{t('certDetail.locked')}</h3>
              <p>{t('certDetail.lockedDesc')}</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setPaymentOpen(true)}
                  id="unlock-course-btn"
                >
                  {t('pricing.course.cta')} — {t('pricing.course.price')}
                </button>
                <Link to="/pricing" className="btn btn-secondary btn-lg">
                  {t('pricing.pro.cta')}
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Exam Tips */}
        <div className="exam-tips-section" id="exam-tips">
          <h2>
            <Lightbulb size={20} style={{ color: 'var(--color-warning)' }} />
            {t('certDetail.examTips')}
          </h2>
          <div className="exam-tips-list">
            {cert.examTips[language].map((tip, i) => (
              <div key={i} className="exam-tip">
                <Lightbulb size={14} />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        plan={cert.name[language]}
        price={t('pricing.course.price')}
        priceType="course"
        certId={cert.id}
        certName={cert.name.en}
      />
    </main>
  );
}
