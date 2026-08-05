import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { XCircle, ArrowRight } from 'lucide-react';
import './Result.css';

export default function Cancel() {
  const { t } = useTranslation();

  return (
    <main className="result-page" id="cancel-page">
      <div className="result-card glass-card">
        <div className="result-icon cancel">
          <XCircle size={40} />
        </div>
        <h1>Payment Cancelled</h1>
        <p>No worries — you weren't charged. You can try again anytime or explore our free content.</p>

        <div className="result-actions">
          <Link to="/pricing" className="btn btn-primary btn-lg" id="back-to-pricing">
            {t('nav.pricing')}
            <ArrowRight size={18} />
          </Link>
          <Link to="/catalog" className="btn btn-secondary btn-lg">
            {t('nav.catalog')}
          </Link>
        </div>
      </div>
    </main>
  );
}
