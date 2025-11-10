
import React, { useState } from 'react';
import { ComparisonPair } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import ComparisonSlider from './ComparisonSlider';

interface SurveyStepProps {
  groupName: string;
  pair: ComparisonPair;
  onSelection: (winner: string, intensity: number) => void;
  progress: number;
  total: number;
  explanations1: string[];
  explanations2: string[];
  isMainCriteriaComparison: boolean;
}

const ProgressBar: React.FC<{ progress: number, total: number }> = ({ progress, total }) => {
    const percentage = total > 0 ? (progress / total) * 100 : 0;
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4">
            <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

const SurveyStep: React.FC<SurveyStepProps> = ({
  groupName,
  pair,
  onSelection,
  progress,
  total,
  explanations1,
  explanations2,
  isMainCriteriaComparison
}) => {
  const { t } = useLanguage();
  const [sliderValue, setSliderValue] = useState(0);

  const handleNext = () => {
    // Intensity is 1-9. Slider is -8 to 8.
    const intensity = sliderValue === 0 ? 1 : Math.abs(sliderValue) + 1;
    // Winner is item1 if negative, item2 if positive. Pass item2 if 0, it doesn't matter.
    const winner = sliderValue < 0 ? pair.item1 : pair.item2;
    onSelection(winner, intensity);
    setSliderValue(0); // Reset for the next pair
  };

  return (
    <div className="animate-fade-in flex flex-col h-full">
      <ProgressBar progress={progress} total={total} />
      <div className="text-center mb-6">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">{groupName}</p>
          <h2 className="text-lg md:text-xl font-medium text-slate-800 mt-1">
              {t('which_is_more_important_v2', { item1: t(pair.item1), item2: t(pair.item2) })}
          </h2>
      </div>

      <div className="mt-4 flex-grow flex flex-col justify-center">
        <ComparisonSlider
            item1={pair.item1}
            item2={pair.item2}
            value={sliderValue}
            onChange={setSliderValue}
            explanations1={explanations1}
            explanations2={explanations2}
            isMainCriteriaComparison={isMainCriteriaComparison}
        />
      </div>

      <div className="mt-auto pt-6 text-center">
        <button
            onClick={handleNext}
            className="w-full max-w-xs mx-auto bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
            {t('next_button')}
        </button>
      </div>
    </div>
  );
};

export default SurveyStep;
