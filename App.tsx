import React, { useState, useMemo, useCallback } from 'react';
import { AppStep, ComparisonResult } from './types';
import SurveyStep from './components/SurveyStep';
import ResultsStep from './components/ResultsStep';
import UsernameStep from './components/UsernameStep';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import { useSurveyData } from './hooks/useSurveyData';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const buttonClasses = (lang: 'en' | 'tr') => 
        `px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
            language === lang 
            ? 'bg-indigo-600 text-white' 
            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
        }`;

    return (
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button onClick={() => setLanguage('en')} className={buttonClasses('en')}>EN</button>
            <button onClick={() => setLanguage('tr')} className={buttonClasses('tr')}>TR</button>
        </div>
    );
};

function AppContent() {
  const [step, setStep] = useState<AppStep>('username');
  const [username, setUsername] = useState('');
  const [results, setResults] = useState<Record<string, ComparisonResult[]>>({});
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const { t } = useLanguage();

  const { comparisonGroups, getExplanationsForPair } = useSurveyData();
  
  const totalPairs = useMemo(() => comparisonGroups.reduce((acc, group) => acc + group.pairs.length, 0), [comparisonGroups]);
  const pairsCompleted = useMemo(() => {
    let count = 0;
    for (let i = 0; i < currentGroupIndex; i++) {
        count += comparisonGroups[i].pairs.length;
    }
    count += currentPairIndex;
    return count;
  }, [currentGroupIndex, currentPairIndex, comparisonGroups]);

  const handleSelection = useCallback((winner: string, intensity: number) => {
    const group = comparisonGroups[currentGroupIndex];
    const pair = group.pairs[currentPairIndex];
    
    // Convert slider intensity to AHP value (e.g., item2 favored by 9 becomes 1/9)
    let value = 1;
    if (winner === pair.item1) {
        value = intensity;
    } else if (winner === pair.item2) {
        value = 1 / intensity;
    }

    const result: ComparisonResult = {
        pair,
        value,
        winner: intensity === 1 ? null : winner,
    };

    setResults(prevResults => {
      const newGroupResults = [...(prevResults[group.name] || [])];
      const existingResultIndex = newGroupResults.findIndex(r => r.pair.item1 === pair.item1 && r.pair.item2 === pair.item2);
      if (existingResultIndex !== -1) {
          newGroupResults[existingResultIndex] = result;
      } else {
          newGroupResults.push(result);
      }
      return { ...prevResults, [group.name]: newGroupResults };
    });

    // Advance to the next pair or group, or finish the survey
    if (currentPairIndex < group.pairs.length - 1) {
        setCurrentPairIndex(prev => prev + 1);
    } else if (currentGroupIndex < comparisonGroups.length - 1) {
        setCurrentGroupIndex(prev => prev + 1);
        setCurrentPairIndex(0);
    } else {
        setStep('results');
    }
  }, [currentGroupIndex, currentPairIndex, comparisonGroups]);
  
  const handleStart = useCallback((name: string) => {
    setUsername(name);
    setStep('survey');
  }, []);

  const renderContent = () => {
    if (step === 'username') {
      return <UsernameStep onStart={handleStart} />;
    }

    if (step === 'results') {
        return <ResultsStep results={results} username={username} />;
    }
    
    if (comparisonGroups.length === 0 || !comparisonGroups[currentGroupIndex]) {
        return <div>{t('no_comparison_pairs')}</div>;
    }

    const currentGroup = comparisonGroups[currentGroupIndex];
    const currentPair = currentGroup.pairs[currentPairIndex];
    const { explanations1, explanations2, isMain } = getExplanationsForPair(currentPair, currentGroupIndex);

    return (
        <SurveyStep
            groupName={currentGroup.name}
            pair={currentPair}
            onSelection={handleSelection}
            progress={pairsCompleted}
            total={totalPairs}
            explanations1={explanations1}
            explanations2={explanations2}
            isMainCriteriaComparison={isMain}
        />
    );
  };

  return (
    <div className="min-h-full text-slate-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto relative">
        <LanguageSwitcher />
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">{t('app_title')}</h1>
        </header>
        <main className="bg-white rounded-xl shadow-lg p-6 md:p-10 transition-all duration-300 min-h-[520px]">
          {renderContent()}
        </main>
         <footer className="text-center mt-8 text-sm text-slate-400">
            <p>{t('footer_text')}</p>
        </footer>
      </div>
    </div>
  );
}

const App = () => (
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
);

export default App;
