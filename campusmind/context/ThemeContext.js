'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Pre-configured theme variations for easier reuse
const themes = {
  morning: {
  name: 'Quiet Sage',
  bg: 'bg-[#D1E7DD]',                // Prominent, rich therapeutic green tint (solid, no transparency)
  
  // High contrast text anchors to prevent blending with the deeper background
  titleText: 'text-slate-900',       // Deep charcoal text to cleanly anchor the layout
  bodyText: 'text-slate-800',        // Clear body text
  subText: 'text-slate-600',         
  
  // Isolated structural components
  inputBg: 'bg-white',               // Solid white box so the journaling section pops crisply
  inputText: 'text-slate-900',       
  inputPlaceholder: 'placeholder-slate-400',
  
  // High-contrast deep green primary action buttons
  buttonBg: 'bg-[#14532D]',          // Rich dark forest green button for an explicit visual weight
  buttonText: 'text-white',          
  buttonHover: 'hover:bg-[#166534]', 
  
  // Navigation separation
  navBg: 'bg-white/60',              // Clean glassmorphism that clearly defines the header section
  navText: 'text-slate-900'          
},
  afternoon: {
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
    bg: 'bg-[#334155]',            // Lifted to a softer, less heavy dark slate-blue
    titleText: 'text-indigo-100',   // Slightly brightened for crisp contrast
    bodyText: 'text-slate-100',     // Clear, soft light text
    subText: 'text-slate-300',      // Balanced secondary text
    inputBg: 'bg-[#1E293B]',        // Reused your old background color here for depth!
    inputText: 'text-slate-100',
    inputPlaceholder: 'placeholder-slate-400',
    buttonBg: 'bg-indigo-500',
    buttonText: 'text-white',
    buttonHover: 'hover:bg-indigo-600',
    navBg: 'bg-slate-900/40',       // Soft transparent overlay
    navText: 'text-indigo-100'
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
