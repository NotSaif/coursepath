import './ProgressBar.css';

export default function ProgressBar({ percentage = 0, label, showLabel = true, large = false }) {
  const getColorClass = () => {
    if (percentage === 100) return 'complete';
    if (percentage >= 60) return 'high';
    if (percentage >= 30) return 'mid';
    return 'low';
  };

  return (
    <div className="progress-bar-container">
      {showLabel && (
        <div className="progress-bar-label">
          {label && <span>{label}</span>}
          <span className="percentage">{percentage}%</span>
        </div>
      )}
      <div className={`progress-bar-wrapper ${large ? 'large' : ''}`}>
        <div
          className={`progress-bar-fill ${getColorClass()}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
