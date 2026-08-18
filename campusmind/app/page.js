'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext'; // Import your global theme hook

export default function JournalPortal() {
  const [journalText, setJournalText] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  
  // Consume your shared theme variables from the Context engine
  const theme = useTheme();

  // Set the initial opening time stamp cleanly on client component mounting
  useEffect(() => {
    const now = new Date();
    // Keeps only the readable HH:MM:SS format
    setOpeningTime(now.toTimeString().split(' ')[0]);
  }, []);

  const handleAnalyze = () => {
    console.log('Analyzing entry:', journalText);
  };

  return (
    <div className="w-full max-w-2xl text-center space-y-6 py-12">
      
      {/* Main Title */}
      <h1 className={`text-4xl md:text-5xl font-bold tracking-wide transition-colors duration-1000 ${theme.titleText}`}>
        Campus Mind: Student Journaling Portal
      </h1>

      {/* Timestamp */}
      <p className={`text-sm tracking-wide transition-colors duration-1000 ${theme.subText}`}>
        Opening Time: {openingTime || 'Loading...'}
      </p>

      {/* Prompt */}
      <h2 className={`text-xl md:text-2xl font-semibold mt-4 transition-colors duration-1000 ${theme.bodyText}`}>
        How are you feeling today! Well write your mind out here
      </h2>

      {/* Input Wrapper */}
      <div className="text-left">
        <label htmlFor="journal" className={`text-xs block mb-1 transition-colors duration-1000 ${theme.subText}`}>
          Your Private Journal
        </label>
        
        {/* Text Area Input */}
        <textarea
          id="journal"
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Start typing your thoughts here..."
          className={`w-full h-48 rounded-lg p-4 outline-none resize-none shadow-md border border-transparent focus:border-current/20 transition-all duration-1000 ${theme.inputBg} ${theme.inputText} ${theme.inputPlaceholder}`}
        />
      </div>
      
      
      {/* Action Button */}
      <div className="text-left">
        <button
          onClick={handleAnalyze}
          className={`font-medium py-1.5 px-4 rounded shadow-sm text-sm transition-all duration-300 ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
        >
          Analyze My Entry
        </button>
      </div>

    </div>
  );
}
