'use client';

import { useState, useEffect } from 'react';

export default function JournalPortal() {
  const [journalText, setJournalText] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  
  // Theme state holding styling configurations for text and inputs
  const [theme, setTheme] = useState({
    bg: 'bg-[#E5CB50]',
    titleText: 'text-white',
    bodyText: 'text-white/90',
    subText: 'text-white/70',
    inputBg: 'bg-[#333333]',
    inputText: 'text-white',
    inputPlaceholder: 'placeholder-gray-500',
    buttonBg: 'bg-[#A4C3E2]',
    buttonText: 'text-slate-800',
    buttonHover: 'hover:bg-[#8eb2d6]'
  });

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    
    setOpeningTime(now.toTimeString().split(' '));

    // Dynamic styles matched for accessibility and contrast per time window
    if (currentHour >= 5 && currentHour < 12) {
      // Morning Theme: Bright vibrant yellows with crisp dark slate details
      setTheme({
        bg: 'bg-[#FCD34D]',
        titleText: 'text-slate-900',
        bodyText: 'text-slate-800',
        subText: 'text-slate-600',
        inputBg: 'bg-white',
        inputText: 'text-slate-900',
        inputPlaceholder: 'placeholder-slate-400',
        buttonBg: 'bg-slate-900',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-slate-800'
      });
    } else if (currentHour >= 12 && currentHour < 17) {
      // Afternoon Theme: Original layout look
      setTheme({
        bg: 'bg-[#E5CB50]',
        titleText: 'text-white',
        bodyText: 'text-white',
        subText: 'text-white/70',
        inputBg: 'bg-[#333333]',
        inputText: 'text-white',
        inputPlaceholder: 'placeholder-gray-500',
        buttonBg: 'bg-[#A4C3E2]',
        buttonText: 'text-slate-800',
        buttonHover: 'hover:bg-[#8eb2d6]'
      });
    } else if (currentHour >= 17 && currentHour < 20) {
      // Evening Theme: Warm sunset orange tones with clean dark contrast elements
      setTheme({
        bg: 'bg-[#F97316]',
        titleText: 'text-white',
        bodyText: 'text-orange-50',
        subText: 'text-orange-200/80',
        inputBg: 'bg-stone-900',
        inputText: 'text-stone-100',
        inputPlaceholder: 'placeholder-stone-500',
        buttonBg: 'bg-white',
        buttonText: 'text-orange-950',
        buttonHover: 'hover:bg-orange-50'
      });
    } else {
      // Night Theme: High-contrast true dark mode with glowing accents
      setTheme({
        bg: 'bg-[#1E293B]',
        titleText: 'text-indigo-200',
        bodyText: 'text-slate-200',
        subText: 'text-slate-400',
        inputBg: 'bg-slate-900',
        inputText: 'text-slate-100',
        inputPlaceholder: 'placeholder-slate-600',
        buttonBg: 'bg-indigo-500',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-indigo-600'
      });
    }
  }, []);

  const handleAnalyze = () => {
    console.log('Analyzing entry:', journalText);
  };

  return (
    <main className={`min-h-screen ${theme.bg} flex flex-col items-center justify-center font-sans px-4 transition-all duration-1000`}>
      <div className="w-full max-w-2xl text-center space-y-6">
        
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
            className={`w-full h-48 rounded-lg p-4 outline-none resize-none shadow-inner border border-transparent focus:border-current/20 transition-all duration-1000 ${theme.inputBg} ${theme.inputText} ${theme.inputPlaceholder}`}
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
    </main>
  );
}
