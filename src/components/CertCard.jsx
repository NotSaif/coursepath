import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { Shield, Cloud, BarChart3, ClipboardList, Network, BookOpen, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import ProgressBar from './ProgressBar';
import './CertCard.css';

const iconMap = {
  Shield, Cloud, BarChart3, ClipboardList, Network
};

export default function CertCard({ cert }) {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const { getCertProgress } = useProgress();
  const progress = getCertProgress(cert.id);

  const IconComponent = iconMap[cert.careerPath === 'cybersecurity' ? 'Shield' :
    cert.careerPath === 'cloud' ? 'Cloud' :
    cert.careerPath === 'data' ? 'BarChart3' :
    cert.careerPath === 'project' ? 'ClipboardList' : 'Network'];

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      to={`/cert/${cert.id}`}
      className="cert-card glass-card"
      data-path={cert.careerPath}
      id={`cert-card-${cert.id}`}
    >
      <div className="cert-card-header">
        <div>
          <h3 className="cert-card-title">{cert.name[language]}</h3>
          <span className="cert-card-org">{cert.organization}</span>
        </div>
        <div className={`cert-card-icon ${cert.careerPath}`}>
          <IconComponent size={24} />
        </div>
      </div>

      <p className="cert-card-description">{cert.description[language]}</p>

      <div className="cert-card-meta">
        <span className={`badge badge-${cert.careerPath}`}>
          {t(`certDetail.difficulties.${cert.difficulty}`)}
        </span>
        <span className="cert-card-meta-item">
          <BookOpen size={14} />
          {cert.chapters.length} {t('catalog.chapters')}
        </span>
        <span className="cert-card-meta-item">
          <Clock size={14} />
          {cert.estimatedWeeks} {t('catalog.weeks')}
        </span>
      </div>

      {progress.percentage > 0 && (
        <ProgressBar percentage={progress.percentage} showLabel={false} />
      )}

      <div className="cert-card-footer">
        <span className="btn btn-secondary btn-sm">
          {progress.percentage > 0 ? t('catalog.continueLearning') : t('catalog.startLearning')}
          <Arrow size={14} />
        </span>
      </div>
    </Link>
  );
}
