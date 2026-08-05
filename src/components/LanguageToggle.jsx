import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { language, setLang } = useLanguage();

  return (
    <div className="lang-toggle" id="language-toggle" role="group" aria-label="Language selection">
      <button
        className={`lang-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        className={`lang-option ${language === 'ar' ? 'active' : ''}`}
        onClick={() => setLang('ar')}
        aria-pressed={language === 'ar'}
      >
        عربي
      </button>
    </div>
  );
}
