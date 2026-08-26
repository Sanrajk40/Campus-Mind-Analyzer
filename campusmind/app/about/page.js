'use client';

import { useTheme } from '@/context/ThemeContext';
// Changed FaUserGrad to FaUserGraduate
import { FaBrain, FaRobot, FaUserGraduate, FaGraduationCap } from 'react-icons/fa';

export default function AboutPage() {
  const theme = useTheme();

  const creators = [
    { name: 'Saptarsha Ghosh', role: 'Backend Developer', branch: 'CSE (AIML), HITK' },
    { name: 'Unnay Dutta', role: 'UI/UX Design & Theme Developer', branch: 'CSE (AIML), HITK' },
    { name: 'Aritrik Roy', role: 'Full Stack Next.js Architect', branch: 'CSE (AIML), HITK' },
    { name: 'Surya Sekhar Chakraborty', role: 'Backend Dev & Security Lead', branch: 'CSE (AIML), HITK' },
    { name: 'Sanraj Kumar', role: 'Backend Dev & Main Lead', branch: 'CSE (AIML), HITK' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 transition-all duration-1000 space-y-16">
      
      {/* Vision Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-1000 ${theme.titleText}`}>
          The Vision Behind Campus Mind
        </h1>
        
        <p className={`text-base md:text-lg leading-relaxed transition-colors duration-1000 ${theme.bodyText} opacity-90`}>
          As university students, academic schedules, exam deadlines, and shifting lifestyles frequently overlap, making it challenging to balance mental wellness. <strong>Campus Mind</strong> was engineered to bridge this gap. By combining secure, personal daily journaling with smart natural language processing tools, our architecture offers immediate context-aware layout modifications alongside personalized wellness check-ins.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-6 text-left">
          <div className={`p-4 rounded-xl flex items-start gap-3 transition-colors duration-1000 ${theme.inputBg} ${theme.inputText}`}>
            <FaBrain size={24} className={`mt-1 shrink-0 ${theme.titleText}`} />
            <div>
              <h3 className="font-bold text-sm">Empathetic Design</h3>
              <p className="text-xs opacity-75 mt-0.5">Layout structures naturally adapt to matches your system timeframe to calm eye strain.</p>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl flex items-start gap-3 transition-colors duration-1000 ${theme.inputBg} ${theme.inputText}`}>
            <FaRobot size={24} className={`mt-1 shrink-0 ${theme.titleText}`} />
            <div>
              <h3 className="font-bold text-sm">AIML Driven Insights</h3>
              <p className="text-xs opacity-75 mt-0.5">Utilizes structural model layers to decode mood indices and log long-term stress patterns safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-bold tracking-wide transition-colors duration-1000 ${theme.titleText}`}>
            Meet The Minds
          </h2>
          <p className={`text-sm flex items-center justify-center gap-1.5 transition-colors duration-1000 ${theme.subText}`}>
            <FaGraduationCap size={16} /> Developed by Department of Computer Science & Engineering (AIML) at HITK
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {creators.map((student, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-md border border-white/5 transition-all duration-1000 transform hover:-translate-y-1 ${theme.inputBg} ${theme.inputText}`}
            >
              {/* Using the corrected icon component here */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-white/10 ${theme.titleText}`}>
                <FaUserGraduate size={24} />
              </div>

              <h3 className="font-bold text-lg tracking-wide">{student.name}</h3>
              <p className={`text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1.5 bg-black/20 ${theme.titleText}`}>
                {student.role}
              </p>
              
              <span className="text-[11px] uppercase tracking-wider opacity-60 mt-4 block">
                {student.branch}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
