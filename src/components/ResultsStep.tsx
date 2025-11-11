import React, { useEffect, useState } from 'react';
import { ComparisonResult } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import Spinner from './Spinner';
import { GOOGLE_SCRIPT_URL } from '../config';

interface ResultsStepProps {
  results: Record<string, ComparisonResult[]>;
  username: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const isValidUrl = (urlString: string): boolean => {
    if (!urlString || urlString.includes('PASTE_YOUR_GOOGLE_SCRIPT_URL')) {
        return false;
    }
    try {
        const url = new URL(urlString);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
};

const ResultsStep: React.FC<ResultsStepProps> = ({ results, username }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  useEffect(() => {
    // Check if the fallback URL is being used and issue a warning.
    if (!process.env.GOOGLE_SCRIPT_URL && isValidUrl(GOOGLE_SCRIPT_URL)) {
        console.warn(
            "Security Warning: GOOGLE_SCRIPT_URL is being read from the config.ts file. " +
            "For better security, please set this value as a secret/environment variable in your project settings."
        );
    }

    const submitResults = async () => {
      if (!isValidUrl(GOOGLE_SCRIPT_URL) || !username) {
        if (!isValidUrl(GOOGLE_SCRIPT_URL)) {
            console.warn('Google Script URL is not configured or is invalid. Please set it as a secret or in the config.ts file. Skipping submission.');
        }
        setStatus('idle');
        return;
      }

      setStatus('submitting');
      
      const payload: { [key: string]: string | number } = {
          username,
          timestamp: new Date().toISOString(),
      };

      Object.values(results).forEach(groupResults => {
        if (Array.isArray(groupResults)) {
            groupResults.forEach(result => {
                const { pair, winner, value } = result;
                const columnName = `${pair.item1}/${pair.item2}`;

                let formattedValue: string;

                if (winner === null) {
                    // Equal importance, AHP value is 1
                    formattedValue = 'a1';
                } else if (winner === pair.item1) {
                    // Item 1 is more important
                    const intensity = Math.round(value);
                    formattedValue = `a${intensity}`;
                } else { // winner === pair.item2
                    // Item 2 is more important
                    const intensity = Math.round(1 / value);
                    formattedValue = `b${intensity}`;
                }
                payload[columnName] = formattedValue;
            });
        }
      });

      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // Required for Apps Script
        });
        
        const result = await response.json();

        if (result.status === 'success') {
          setStatus('success');
        } else {
          throw new Error(result.message || 'Unknown error from Google Script');
        }
      } catch (error) {
        console.error('Error submitting results:', error);
        setStatus('error');
      }
    };

    submitResults();
  }, [results, username]);
  
  const SubmissionStatusFeedback = () => {
    if (status === 'submitting') {
        return <div className="flex items-center justify-center text-sm text-gray-500"><Spinner /> <span className="ml-2">{t('saving_results')}</span></div>;
    }
    if (status === 'success') {
        return <div className="text-sm text-green-600">{t('results_saved')}</div>;
    }
    if (status === 'error') {
        return <div className="text-sm text-red-600">{t('results_error')}</div>;
    }
    return null;
  }

  return (
    <div className="text-left animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('survey_complete_title')}</h2>
        <p className="text-gray-600 mb-1">{t('survey_complete_subtitle')}</p>
        <p className="text-gray-500 text-sm">{t('results_for', { username })}</p>
      </div>

      <div className="space-y-8 max-h-80 overflow-y-auto pr-4">
        {Object.entries(results).map(([groupName, groupResults]) => (
          <div key={groupName}>
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">{groupName}</h3>
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3">{t('th_comparison')}</th>
                        <th scope="col" className="px-6 py-3">{t('th_more_important')}</th>
                        <th scope="col" className="px-6 py-3">{t('th_intensity')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(groupResults) && groupResults.map(({ pair, winner, value }, index) => {
                          // AHP value is e.g. 9 or 1/9. Intensity is always >= 1.
                          const intensityValue = Math.round(value >= 1 ? value : 1 / value);
                          const intensityLabel = t(`intensity_label_${intensityValue}`);

                          return (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {t(pair.item1)} vs. {t(pair.item2)}
                                </td>
                                <td className="px-6 py-4 font-semibold">
                                    {winner ? <span className="text-indigo-600">{t(winner)}</span> : <span className="text-gray-500">-</span>}
                                </td>
                                <td className="px-6 py-4">
                                  {intensityLabel} ({intensityValue})
                                </td>
                            </tr>
                          );
                        })}
                    </tbody>
                </table>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 h-6">
        <SubmissionStatusFeedback />
      </div>
       <div className="text-center mt-8">
        <p className="text-gray-600">{t('thank_you_note')}</p>
      </div>
    </div>
  );
};

export default ResultsStep;
