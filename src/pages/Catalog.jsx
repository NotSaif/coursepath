import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { certifications } from '../data/certifications';
import { careerPaths } from '../data/careerPaths';
import CertCard from '../components/CertCard';
import { Search } from 'lucide-react';
import './Catalog.css';

export default function Catalog() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const activeFilter = searchParams.get('path') || 'all';

  const setFilter = (path) => {
    if (path === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ path });
    }
  };

  const filteredCerts = useMemo(() => {
    let result = certifications;

    if (activeFilter !== 'all') {
      result = result.filter(c => c.careerPath === activeFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.name.en.toLowerCase().includes(q) ||
        c.name.ar.includes(q) ||
        c.organization.toLowerCase().includes(q) ||
        c.careerPath.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeFilter, search]);

  return (
    <main className="catalog-page" id="catalog-page">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'start' }}>
          <h1 className="section-title">{t('catalog.title')}</h1>
          <p className="section-subtitle" style={{ marginInline: 0 }}>{t('catalog.subtitle')}</p>
        </div>

        <div className="catalog-filters">
          <div className="filter-tabs" role="tablist">
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              role="tab"
              id="filter-all"
            >
              {t('catalog.filterAll')}
            </button>
            {careerPaths.map(path => (
              <button
                key={path.id}
                className={`filter-tab ${activeFilter === path.id ? 'active' : ''}`}
                onClick={() => setFilter(path.id)}
                role="tab"
                id={`filter-${path.id}`}
              >
                {path.name[language]}
              </button>
            ))}
          </div>

          <div className="catalog-search">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('catalog.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              id="catalog-search-input"
            />
          </div>
        </div>

        {filteredCerts.length > 0 ? (
          <div className="catalog-grid">
            {filteredCerts.map(cert => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <p>{t('catalog.noResults')}</p>
          </div>
        )}
      </div>
    </main>
  );
}
