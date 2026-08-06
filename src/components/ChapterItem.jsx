import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { ChevronDown, Play, FileText, HelpCircle, ExternalLink, Check, Clock, Lock, X } from 'lucide-react';
import './ChapterItem.css';

export default function ChapterItem({ chapter, certId, index, isLocked = false }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { isChapterCompleted, toggleChapter } = useProgress();
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const completed = isChapterCompleted(certId, chapter.id);

  const getEmbedId = (video) => {
    if (video.embedId) return video.embedId;
    if (video.url?.includes('watch?v=')) {
      return video.url.split('v=')[1]?.split('&')[0];
    }
    if (video.url?.includes('youtu.be/')) {
      return video.url.split('youtu.be/')[1]?.split('?')[0];
    }
    return null;
  };

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
    <>
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
                    <div
                      key={i}
                      className="resource-link"
                      onClick={() => setActiveVideo(video)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Play size={16} className="resource-icon video" />
                      <span className="resource-text">{video.title[language]}</span>
                      {video.duration && <span className="resource-duration">{video.duration}</span>}
                      <span className="badge badge-accent" style={{ fontSize: '11px', padding: '2px 6px', marginLeft: 'auto' }}>
                        Watch Video ▶
                      </span>
                    </div>
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

      {/* Embedded Video Modal */}
      {activeVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              backgroundColor: 'var(--bg-card, #111827)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Play size={20} style={{ color: '#ef4444' }} />
                <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>{activeVideo.title[language]}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', padding: '4px' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              {getEmbedId(activeVideo) ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${getEmbedId(activeVideo)}?autoplay=1&modestbranding=1&rel=0`}
                  title={activeVideo.title[language]}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', gap: '12px' }}>
                  <p>External Video</p>
                  <a href={activeVideo.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Open Video on YouTube <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <span style={{ fontSize: '12px', color: '#aaa' }}>
                {activeVideo.duration && `Duration: ${activeVideo.duration}`}
              </span>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'var(--accent-primary, #00f2fe)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
              >
                Open on YouTube <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
