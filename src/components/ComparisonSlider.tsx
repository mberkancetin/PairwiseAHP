import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface ComparisonSliderProps {
  item1: string;
  item2: string;
  value: number; // -8 to 8
  onChange: (value: number) => void;
  explanations1: string[];
  explanations2: string[];
  isMainCriteriaComparison: boolean;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400 ml-1 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

interface ExplanationModalProps {
  data: {
    title: string;
    items: string[];
    isMain: boolean;
  };
  onClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ data, onClose }) => {
    const { t } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    
    return (
        <div 
            className="modal-overlay"
            onClick={onClose}
        >
            <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold text-indigo-600 mb-4">{data.title}</h3>
                <ul className={`list-disc list-inside space-y-2 text-slate-600 text-sm max-h-60 overflow-y-auto pr-2 ${data.isMain ? 'font-semibold' : ''}`}>
                    {data.items.map(item => <li key={item}>{data.isMain ? item : t(item)}</li>)}
                </ul>
                <button 
                    onClick={onClose}
                    className="mt-6 w-full bg-slate-100 text-slate-700 font-bold py-2.5 px-4 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    aria-label={t('close_button')}
                >
                    {t('close_button')}
                </button>
            </div>
        </div>
    );
};


const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ item1, item2, value, onChange, explanations1, explanations2, isMainCriteriaComparison }) => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ title: string; items: string[]; isMain: boolean; } | null>(null);

  const intensity = Math.abs(value) + 1;
  const label = value === 0 ? t('intensity_label_1') : t(`intensity_label_${intensity}`);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  const item1Color = value < 0 ? 'text-indigo-600 font-bold' : 'text-gray-600';
  const item2Color = value > 0 ? 'text-indigo-600 font-bold' : 'text-gray-600';
  const labelColor = value === 0 ? 'text-gray-800' : 'text-indigo-700';
  
  const translatedItem1 = t(item1);
  const translatedItem2 = t(item2);
  
  const trackPercentage = ((value + 8) / 16) * 100;

  const CriterionDisplay: React.FC<{
      label: string,
      explanations: string[],
      className: string,
      isMain: boolean,
      onClick: () => void
  }> = ({ label, explanations, className, onClick }) => (
      <div 
          onClick={explanations.length > 0 ? onClick : undefined}
          className={`inline-flex items-center p-2 rounded-md transition-colors ${explanations.length > 0 ? 'cursor-pointer hover:bg-slate-100' : 'cursor-default'} ${className}`}
          role={explanations.length > 0 ? "button" : "presentation"}
          tabIndex={explanations.length > 0 ? 0 : -1}
          onKeyDown={(e) => { if (e.key === 'Enter' && explanations.length > 0) onClick()}}
      >
          <span className={`text-base md:text-lg transition-colors duration-300`}>{label}</span>
          {explanations.length > 0 && <InfoIcon />}
      </div>
  );

  return (
    <>
      <div className="w-full max-w-2xl mx-auto py-4">
          <div className="flex justify-between items-start mb-4 px-2">
              <div className="w-2/5 text-left">
                  <CriterionDisplay 
                    label={translatedItem1}
                    explanations={explanations1}
                    className={item1Color}
                    isMain={isMainCriteriaComparison}
                    onClick={() => setModalData({ title: translatedItem1, items: explanations1, isMain: isMainCriteriaComparison })}
                  />
              </div>
              {/* Fix: Corrected typo in Tailwind class from w-2/s to w-2/5 */}
              <div className="w-2/5 text-right">
                  <CriterionDisplay 
                    label={translatedItem2}
                    explanations={explanations2}
                    className={item2Color}
                    isMain={isMainCriteriaComparison}
                    onClick={() => setModalData({ title: translatedItem2, items: explanations2, isMain: isMainCriteriaComparison })}
                  />
              </div>
          </div>
        
        <div className="slider-container">
          <input
            type="range"
            min="-8"
            max="8"
            step="1"
            value={value}
            onChange={handleSliderChange}
            className="comparison-slider"
            // Fix: Add type assertion for CSS custom property to resolve TypeScript error.
            style={{ '--track-percentage': `${trackPercentage}%` } as React.CSSProperties}
            aria-label="Comparison Slider"
          />
          <div className="absolute w-full flex justify-between text-xs text-gray-400 -bottom-4 px-1 select-none">
            <span>9</span><span>|</span><span>7</span><span>|</span>
            <span>5</span><span>|</span><span>3</span><span>|</span>
            <span>1</span>
            <span>|</span><span>3</span><span>|</span><span>5</span>
            <span>|</span><span>7</span><span>|</span><span>9</span>
          </div>
        </div>

        <div className="text-center mt-8 h-12">
          <p className={`text-lg font-semibold transition-colors duration-300 ${labelColor}`}>
              {label}
          </p>
          {value !== 0 && (
              <p className="text-sm text-gray-500">
                  {t('favoring')} <span className="font-bold">{value < 0 ? translatedItem1 : translatedItem2}</span>
              </p>
          )}
        </div>
      </div>
      {modalData && <ExplanationModal data={modalData} onClose={() => setModalData(null)} />}
    </>
  );
};

export default ComparisonSlider;
