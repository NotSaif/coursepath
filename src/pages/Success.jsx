import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePurchase } from '../context/PurchaseContext';
import { CheckCircle, ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';
import './Result.css';

export default function Success() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { unlockPro, unlockCourse } = usePurchase();
  const [unlockedTarget, setUnlockedTarget] = useState(null);

  useEffect(() => {
    const certId = searchParams.get('cert_id');
    const priceType = searchParams.get('price_type');

    if (priceType === 'pro_monthly' || priceType === 'pro_yearly') {
      unlockPro();
      setUnlockedTarget('pro');
    } else if (priceType === 'course' && certId && certId !== 'none') {
      unlockCourse(certId);
      setUnlockedTarget(certId);
    } else if (certId && certId !== 'none') {
      unlockCourse(certId);
      setUnlockedTarget(certId);
    } else {
      // If no valid target is passed in URL, do not grant Pro automatically
      setUnlockedTarget('general');
    }
  }, [searchParams, unlockCourse, unlockPro]);

  return (
    <main className="result-page" id="success-page">
      <div className="result-card glass-card">
        <div className="result-icon success">
          <CheckCircle size={40} />
        </div>
        <h1>{t('payment.success')}</h1>
        <p>{t('payment.successDesc')}</p>

        <div className="result-details" style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: 'var(--text-lg)' }}>
            <Sparkles size={20} />
            <span>
              {unlockedTarget === 'pro'
                ? 'Pro Subscription Activated!'
                : unlockedTarget && unlockedTarget !== 'general'
                ? 'Course Materials Unlocked!'
                : 'Payment Confirmed!'}
            </span>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '8px' }}>
            {unlockedTarget === 'pro'
              ? 'All certification roadmaps and chapters are now fully unlocked for your account.'
              : unlockedTarget && unlockedTarget !== 'general'
              ? 'Your purchased course roadmap and materials are now fully unlocked.'
              : 'Thank you for your purchase. Your access has been updated.'}
          </p>
        </div>

        <div className="result-actions">
          {unlockedTarget && unlockedTarget !== 'pro' && unlockedTarget !== 'general' ? (
            <Link to={`/cert/${unlockedTarget}`} className="btn btn-primary btn-lg" id="go-to-unlocked-course">
              Start Unlocked Course
              <ArrowRight size={18} />
            </Link>
          ) : (
            <Link to="/catalog" className="btn btn-primary btn-lg" id="go-to-catalog-unlocked">
              Explore Courses
              <ArrowRight size={18} />
            </Link>
          )}
          <Link to="/dashboard" className="btn btn-secondary btn-lg" id="go-to-dashboard">
            <LayoutDashboard size={18} />
            {t('nav.dashboard')}
          </Link>
        </div>
      </div>
    </main>
  );
}
