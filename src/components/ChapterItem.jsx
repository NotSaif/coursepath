import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { ChevronDown, Play, FileText, HelpCircle, ExternalLink, Check, Clock, Lock } from 'lucide-react';
import './ChapterItem.css';

export default function ChapterItem({ chapter, certId, index, isLocked = false }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { isChapterCompleted, toggleChapter } = useProgress();
  const [isOpen, setIsOpen] = useState(false);

  const completed = isChapterCompleted(certId, chapter.id);

  if (isLocked) {
    return (
      <div className="chapter-item locked" id={`chapter-${chapter.id}`}>
        <div className="chapter-header">
          <div className="chapter-number">{index + 1}</div>
          <div className="chapter-info">
            <h3 className="chapter-title">{chapter.title[language]}</h3>
            <div className="chapter-meta">
              <span><Clock size={12} /> {chapter.estimatedHours} {t('certDetail.hours')}</span>
            </div>
          </div>
          <Lock size={18} className="chapter-chevron" style={{ color: 'var(--text-tertiary)' }} />
        </div>
      </div>
    );
  }

  return (
    <div className={`chapter-item ${completed ? 'completed' : ''}`} id={`chapter-${chapter.id}`}>
      <div className="chapter-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chapter-number">
          {completed ? <Check size={18} /> : index + 1}
        </div>
        <div className="chapter-info">
          <h3 className="chapter-title">{chapter.title[language]}</h3>
          <div className="chapter-meta">
            <span><Clock size={12} /> {chapter.estimatedHours} {t('certDetail.hours')}</span>
            <span>•</span>
            <span>{chapter.resources.videos.length} {t('certDetail.videos')}</span>
            <span>•</span>
            <span>{chapter.resources.pdfs.length} {t('certDetail.pdfs')}</span>
          </div>
        </div>
        <ChevronDown size={20} className={`chapter-chevron ${isOpen ? 'open' : ''}`} />
      </div>

      <div className={`chapter-body ${isOpen ? 'open' : ''}`}>
        <div className="chapter-content">
          {/* Objectives */}
          <div className="chapter-objectives">
            <h4>{t('certDetail.objectives')}</h4>
            <ul>
              {chapter.objectives[language].map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Videos */}
          {chapter.resources.videos.length > 0 && (
            <div className="chapter-resources-section">
              <h4><Play size={16} style={{ color: '#ef4444' }} /> {t('certDetail.videos')}</h4>
              <div className="chapter-resources-list">
                {chapter.resources.videos.map((video, i) => (
                  <a key={i} href={video.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    <Play size={16} className="resource-icon video" />
                    <span className="resource-text">{video.title[language]}</span>
                    {video.duration && <span className="resource-duration">{video.duration}</span>}
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* PDFs */}
          {chapter.resources.pdfs.length > 0 && (
            <div className="chapter-resources-section">
              <h4><FileText size={16} style={{ color: '#f59e0b' }} /> {t('certDetail.pdfs')}</h4>
              <div className="chapter-resources-list">
                {chapter.resources.pdfs.map((pdf, i) => (
                  <a key={i} href={pdf.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    <FileText size={16} className="resource-icon pdf" />
                    <span className="resource-text">{pdf.title[language]}</span>
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Practice */}
          {chapter.resources.practice?.length > 0 && (
            <div className="chapter-resources-section">
              <h4><HelpCircle size={16} style={{ color: '#8b5cf6' }} /> {t('certDetail.practice')}</h4>
              <div className="chapter-resources-list">
                {chapter.resources.practice.map((q, i) => (
                  <a key={i} href={q.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    <HelpCircle size={16} className="resource-icon practice" />
                    <span className="resource-text">{q.title[language]}</span>
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Complete Button */}
          <div className="chapter-actions">
            <button
              className={`complete-btn ${completed ? 'done' : 'incomplete'}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleChapter(certId, chapter.id);
              }}
            >
              <Check size={16} />
              {completed ? t('certDetail.completed') : t('certDetail.markComplete')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
