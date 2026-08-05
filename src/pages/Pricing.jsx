import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ChevronDown, ShieldCheck } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import './Pricing.css';

export default function Pricing() {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const openPayment = (plan, price, priceType) => {
    setSelectedPlan({ plan, price, priceType });
    setPaymentOpen(true);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

  return (
    <main className="pricing-page" id="pricing-page">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">{t('pricing.title')}</h1>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="pricing-toggle" id="pricing-toggle">
          <span className={!yearly ? 'active' : ''}>{t('pricing.monthly')}</span>
          <button
            className={`pricing-switch ${yearly ? 'active' : ''}`}
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle yearly pricing"
          />
          <span className={yearly ? 'active' : ''}>{t('pricing.yearly')}</span>
          {yearly && <span className="save-badge">{t('pricing.save')}</span>}
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {/* Free Tier */}
          <div className="pricing-card glass-card" id="pricing-free">
            <h3 className="pricing-card-name">{t('pricing.free.name')}</h3>
            <p className="pricing-card-desc">{t('pricing.free.description')}</p>
            <div className="pricing-card-price">
              <span className="price-amount">{t('pricing.free.price')}</span>
            </div>
            <div className="pricing-features">
              {t('pricing.free.features', { returnObjects: true }).map((feature, i) => (
                <div key={i} className="pricing-feature">
                  <Check size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-secondary btn-lg" id="free-plan-btn">
              {t('pricing.free.cta')}
            </button>
          </div>

          {/* Single Course */}
          <div className="pricing-card glass-card" id="pricing-course">
            <h3 className="pricing-card-name">{t('pricing.course.name')}</h3>
            <p className="pricing-card-desc">{t('pricing.course.description')}</p>
            <div className="pricing-card-price">
              <span className="price-amount">{t('pricing.course.price')}</span>
              <span className="price-period"> {t('pricing.oneTime')}</span>
              <div className="price-bhd">{t('pricing.course.priceBHD')}</div>
            </div>
            <div className="pricing-features">
              {t('pricing.course.features', { returnObjects: true }).map((feature, i) => (
                <div key={i} className="pricing-feature">
                  <Check size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => openPayment(t('pricing.course.name'), t('pricing.course.price'), 'course')}
              id="course-plan-btn"
            >
              {t('pricing.course.cta')}
            </button>
          </div>

          {/* Pro */}
          <div className="pricing-card glass-card popular" id="pricing-pro">
            <span className="popular-badge">{t('pricing.pro.popular')}</span>
            <h3 className="pricing-card-name">{t('pricing.pro.name')}</h3>
            <p className="pricing-card-desc">{t('pricing.pro.description')}</p>
            <div className="pricing-card-price">
              <span className="price-amount">
                {yearly ? t('pricing.pro.priceYearly') : t('pricing.pro.price')}
              </span>
              <span className="price-period">
                {yearly ? t('pricing.perYear') : t('pricing.perMonth')}
              </span>
              <div className="price-bhd">{t('pricing.pro.priceBHD')}</div>
            </div>
            <div className="pricing-features">
              {t('pricing.pro.features', { returnObjects: true }).map((feature, i) => (
                <div key={i} className="pricing-feature">
                  <Check size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => openPayment(
                t('pricing.pro.name'),
                yearly ? t('pricing.pro.priceYearly') + t('pricing.perYear') : t('pricing.pro.price') + t('pricing.perMonth'),
                yearly ? 'pro_yearly' : 'pro_monthly'
              )}
              id="pro-plan-btn"
            >
              {t('pricing.pro.cta')}
            </button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="guarantee-section" id="guarantee">
          <h3>
            <ShieldCheck size={20} style={{ color: 'var(--color-success)' }} />
            {t('pricing.guarantee')}
          </h3>
          <p>{t('pricing.guaranteeDesc')}</p>
        </div>

        {/* FAQ */}
        <div className="faq-section" id="pricing-faq">
          <h2>{t('pricing.faq.title')}</h2>
          {faqKeys.map(key => (
            <div key={key} className="faq-item">
              <button
                className={`faq-question ${openFaq === key ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === key ? null : key)}
              >
                <span>{t(`pricing.faq.${key}`)}</span>
                <ChevronDown size={18} />
              </button>
              <div className={`faq-answer ${openFaq === key ? 'open' : ''}`}>
                <p>{t(`pricing.faq.a${key.slice(1)}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        plan={selectedPlan?.plan}
        price={selectedPlan?.price}
        priceType={selectedPlan?.priceType}
      />
    </main>
  );
}
