import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, LayoutDashboard } from 'lucide-react';
import './Result.css';

export default function Success() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [session, setSession] = useState(null);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-session/${sessionId}`)
        .then(res => res.json())
        .then(data => setSession(data))
        .catch(err => console.error('Failed to fetch session:', err));
    }
  }, [sessionId]);

  return (
    <main className="result-page" id="success-page">
      <div className="result-card glass-card">
        <div className="result-icon success">
          <CheckCircle size={40} />
        </div>
        <h1>{t('payment.success')}</h1>
        <p>{t('payment.successDesc')}</p>

        {session && (
          <div className="result-details">
            {session.customerEmail && (
              <div className="result-details-row">
                <span className="label">Email</span>
                <span className="value">{session.customerEmail}</span>
              </div>
            )}
            {session.amountTotal && (
              <div className="result-details-row">
                <span className="label">Amount</span>
                <span className="value">
                  ${(session.amountTotal / 100).toFixed(2)} {session.currency?.toUpperCase()}
                </span>
              </div>
            )}
            <div className="result-details-row">
              <span className="label">Status</span>
              <span className="value" style={{ color: 'var(--color-success)' }}>
                ✓ {session.status === 'paid' ? 'Paid' : 'Confirmed'}
              </span>
            </div>
          </div>
        )}

        <div className="result-actions">
          <Link to="/dashboard" className="btn btn-primary btn-lg" id="go-to-dashboard">
            <LayoutDashboard size={18} />
            {t('nav.dashboard')}
          </Link>
          <Link to="/catalog" className="btn btn-secondary btn-lg">
            {t('nav.catalog')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
