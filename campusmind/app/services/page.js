'use client';

import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';
import { FaFileAlt, FaRunning, FaComments } from 'react-icons/fa';

export default function ServicesPage() {
  const router = useRouter();
  const theme = useTheme();

  // Data structure for the different service offerings
  const serviceOptions = [
    {
      id: 'forms',
      title: 'Assessment Forms',
      description: 'Access diagnostic self-assessments, stress check-ins, and guided mental wellness feedback logs.',
      icon: <FaFileAlt size={28} />,
      actionText: 'View Forms'
    },
    {
      id: 'activities',
      title: 'Wellness Activities',
      description: 'Explore daily micro-habits, guided breathing exercises, and custom campus mindfulness challenges.',
      icon: <FaRunning size={28} />,
      actionText: 'Explore Activities'
    },
    {
      id: 'counseling',
      title: 'Personal Counseling',
      description: 'Schedule private, encrypted 1-on-1 counseling sessions with certified campus wellness advisors.',
      icon: <FaComments size={28} />,
      actionText: 'Book a Free Session'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 transition-colors duration-1000">

      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h1 className={`text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.titleText}`}>
          Our Wellness Services
        </h1>
        <p className={`text-base transition-colors duration-1000 ${theme.bodyText} opacity-90`}>
          Select from our dedicated support features designed to help you navigate campus life with a healthy, balanced mind.
        </p>
      </div>

      {/* Services Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {serviceOptions.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col justify-between rounded-xl p-6 shadow-md border border-white/5 transition-all duration-1000 ${theme.inputBg} ${theme.inputText}`}
          >
            <div className="space-y-4">
              {/* Graphic Icon Area */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 ${theme.titleText}`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h2 className="text-xl font-bold tracking-wide">
                {service.title}
              </h2>

              {/* Service Description */}
              <p className="text-sm opacity-80 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Context-Aware Action Button */}
            <button
              onClick={() => {
                if (service.id === 'forms') {
                  router.push('/services/forms');
                } else {
                  console.log(`Navigating to ${service.id}`);
                }
              }}
              className={`w-full font-semibold py-2 px-4 rounded-md shadow-sm text-sm text-center transition-all duration-300 mt-8 ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
            >
              {service.actionText}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}
