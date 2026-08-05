import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, CreditCard, Loader2, AlertCircle, Apple } from 'lucide-react';
import './PaymentModal.css';

export default function PaymentModal({ isOpen, onClose, plan, price, priceType, certId, certName }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | loading | error
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceType: priceType || 'pro_monthly',
          certId: certId || '',
          certName: certName || plan || '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      console.error('Checkout error:', err);
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="payment-modal-body">
          <h2>{t('payment.title')}</h2>

          {/* Order Summary */}
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

          {/* Payment Info */}
          <div className="checkout-info">
            <div className="checkout-methods">
              <div className="checkout-method-item">
                <Apple size={20} />
                <span>Apple Pay</span>
              </div>
              <div className="checkout-method-item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span>Google Pay</span>
              </div>
              <div className="checkout-method-item">
                <CreditCard size={20} />
                <span>Credit / Debit Card</span>
              </div>
            </div>
            <p className="checkout-info-text">
              You'll be redirected to secure checkout powered by Lemon Squeezy. Apple Pay, Google Pay, and international cards are supported automatically.
            </p>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="checkout-error">
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Checkout Button */}
          <button
            className="pay-btn"
            onClick={handleCheckout}
            disabled={status === 'loading'}
            id="proceed-checkout-btn"
          >
            {status === 'loading' ? (
              <>
                <div className="spinner" />
                {t('payment.processing')}
              </>
            ) : (
              <>
                <CreditCard size={18} />
                Proceed to Secure Checkout
              </>
            )}
          </button>

          <div className="payment-secure">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style={{ color: 'var(--color-success)' }}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span>{t('payment.secure')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
