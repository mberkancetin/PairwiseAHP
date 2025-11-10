import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface UsernameStepProps {
  onStart: (username: string) => void;
}

const UsernameStep: React.FC<UsernameStepProps> = ({ onStart }) => {
  const [username, setUsername] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onStart(username.trim());
    }
  };

  return (
    <div className="text-center animate-fade-in flex flex-col justify-center h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('username_title')}</h2>
      <p className="text-gray-600 mb-6">{t('username_prompt')}</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t('username_placeholder')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          required
          aria-label="Username"
        />
        <button
          type="submit"
          disabled={!username.trim()}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors"
        >
          {t('start_survey_button')}
        </button>
      </form>
    </div>
  );
};

export default UsernameStep;
