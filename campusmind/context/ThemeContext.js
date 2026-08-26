'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Pre-configured theme variations for easier reuse
const themes = {
  morning: {
    name: 'Morning',
    bg: 'bg-[#FCD34D]',
    titleText: 'text-slate-900',
    bodyText: 'text-slate-800',
    subText: 'text-slate-600',
    inputBg: 'bg-white',
    inputText: 'text-slate-900',
    inputPlaceholder: 'placeholder-slate-400',
    buttonBg: 'bg-slate-900',
    buttonText: 'text-white',
    buttonHover: 'hover:bg-slate-800',
    navBg: 'bg-white/40',
    navText: 'text-slate-900'
  },
  afternoon: {
    name: 'Afternoon',
    bg: 'bg-[#E5CB50]',
    titleText: 'text-white',
    bodyText: 'text-white',
    subText: 'text-white/70',
    inputBg: 'bg-[#333333]',
    inputText: 'text-white',
    inputPlaceholder: 'placeholder-gray-500',
    buttonBg: 'bg-[#A4C3E2]',
    buttonText: 'text-slate-800',
    buttonHover: 'hover:bg-[#8eb2d6]',
    navBg: 'bg-black/10',
    navText: 'text-white'
  },
  evening: {
    name: 'Evening',
    bg: 'bg-[#F97316]',
    titleText: 'text-white',
    bodyText: 'text-orange-50',
    subText: 'text-orange-200/80',
    inputBg: 'bg-stone-900',
    inputText: 'text-stone-100',
    inputPlaceholder: 'placeholder-stone-500',
    buttonBg: 'bg-white',
    buttonText: 'text-orange-950',
    buttonHover: 'hover:bg-orange-50',
    navBg: 'bg-black/20',
    navText: 'text-orange-100'
  },
  night: {
    name: 'Night',
    bg: 'bg-[#1E293B]',
    titleText: 'text-indigo-200',
    bodyText: 'text-slate-200',
    subText: 'text-slate-400',
    inputBg: 'bg-slate-900',
    inputText: 'text-slate-100',
    inputPlaceholder: 'placeholder-slate-600',
    buttonBg: 'bg-indigo-500',
    buttonText: 'text-white',
    buttonHover: 'hover:bg-indigo-600',
    navBg: 'bg-slate-900/60',
    navText: 'text-indigo-200'
  }
};

export function ThemeProvider({ children }) {
  const [currentMode, setCurrentMode] = useState('afternoon');
  const [theme, setTheme] = useState(themes.afternoon);

  // Set initial theme based on local system time
  useEffect(() => {
    const currentHour = new Date().getHours();
    let initialMode = 'night';

    if (currentHour >= 5 && currentHour < 12) initialMode = 'morning';
    else if (currentHour >= 12 && currentHour < 17) initialMode = 'afternoon';
    else if (currentHour >= 17 && currentHour < 20) initialMode = 'evening';

    setCurrentMode(initialMode);
    setTheme(themes[initialMode]);
  }, []);

  // Handler to cycle or set specific manual themes
  const changeThemeMode = useCallback((mode) => {
    if (themes[mode]) {
      setCurrentMode(mode);
      setTheme(themes[mode]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ ...theme, currentMode, changeThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
