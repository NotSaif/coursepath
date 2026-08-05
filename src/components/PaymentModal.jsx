import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Check, Lock, CreditCard } from 'lucide-react';
import './PaymentModal.css';

export default function PaymentModal({ isOpen, onClose, plan, price }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | processing | success | error
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  if (!isOpen) return null;

  const handleApplePay = async () => {
    setStatus('processing');
    // Simulated Apple Pay flow - in production, this would use Stripe Payment Request API
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleCardPay = async (e) => {
    e.preventDefault();
    setStatus('processing');
    // Simulated card payment - in production, this would use Stripe Elements
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleClose = () => {
    setStatus('idle');
    setCardNumber('');
    setExpiry('');
    setCvc('');
    onClose();
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 16);
    return v.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 2) return v.slice(0, 2) + '/' + v.slice(2);
    return v;
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="payment-success">
            <div className="success-icon">
              <Check size={32} />
            </div>
            <h3>{t('payment.success')}</h3>
            <p>{t('payment.successDesc')}</p>
            <button className="btn btn-primary btn-lg" onClick={handleClose}>
              {t('payment.close')}
            </button>
          </div>
        ) : (
          <div className="payment-modal-body">
            <h2>{t('payment.title')}</h2>

            <div className="payment-summary">
              <div className="payment-summary-row">
                <span>{plan}</span>
                <span>{price}</span>
              </div>
              <div className="payment-summary-row total">
                <span>Total</span>
                <span>{price}</span>
              </div>
            </div>

            {/* Apple Pay Button */}
            <button
              className="apple-pay-btn"
              onClick={handleApplePay}
              disabled={status === 'processing'}
              id="apple-pay-btn"
            >
              {status === 'processing' ? (
                <div className="spinner" />
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="currentColor" height="20">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  {t('pricing.applePay')}
                </>
              )}
            </button>

            <div className="payment-divider">
              <span>{t('payment.orPayWith')}</span>
            </div>

            {/* Card Form */}
            <form className="card-form" onSubmit={handleCardPay}>
              <div>
                <label>{t('payment.cardNumber')}</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="4242 4242 4242 4242"
                  value={cardNumber}
                  onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                  id="card-number-input"
                />
              </div>
              <div className="input-row">
                <div>
                  <label>{t('payment.expiry')}</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={e => setExpiry(formatExpiry(e.target.value))}
                    id="expiry-input"
                  />
                </div>
                <div>
                  <label>{t('payment.cvc')}</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="123"
                    maxLength={4}
                    value={cvc}
                    onChange={e => setCvc(e.target.value.replace(/\D/g, ''))}
                    id="cvc-input"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="pay-btn"
                disabled={status === 'processing'}
                id="pay-card-btn"
              >
                {status === 'processing' ? (
                  <div className="spinner" />
                ) : (
                  <>
                    <CreditCard size={18} />
                    {t('payment.pay')} {price}
                  </>
                )}
              </button>
            </form>

            <div className="payment-secure">
              <Lock size={12} />
              <span>{t('payment.secure')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
