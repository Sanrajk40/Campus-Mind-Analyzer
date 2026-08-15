'use client';
import { useTheme } from '@/context/ThemeContext';

export default function MainWrapper({ children }) {
  const theme = useTheme();
  return (
    <div className={`min-h-screen ${theme.bg} transition-all duration-1000 flex flex-col justify-between`}>
      {children}
    </div>
  );
}
