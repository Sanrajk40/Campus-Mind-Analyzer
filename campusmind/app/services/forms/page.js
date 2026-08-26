'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

// Static mockup dataset containing 3 distinct forms and their random questions
const MOCK_FORMS = [
  {
    id: 'stress-audit',
    name: 'Daily Stress & Anxiety Audit',
    description: 'A quick check-in to measure current academic and lifestyle stress pressures.',
    questions: [
      { id: 'q1', type: 'select', text: 'How overwhelmed do you feel by your current course load?', options: ['Not at all', 'Manageable', 'Highly Stressed', 'Severe Burnout'] },
      { id: 'q2', type: 'text', text: 'What is the primary factor impacting your focus today?' },
      { id: 'q3', type: 'select', text: 'How many hours of restful sleep did you get last night?', options: ['Less than 4 hours', '4-6 hours', '7-8 hours', '9+ hours'] }
    ]
  },
  {
    id: 'sleep-hygiene',
    name: 'Sleep Quality & Routine Tracker',
    description: 'Evaluate your sleep patterns and screen-time habits before bedtime.',
    questions: [
      { id: 'q1', type: 'select', text: 'Do you use digital screens within 30 minutes of sleeping?', options: ['Always', 'Often', 'Rarely', 'Never'] },
      { id: 'q2', type: 'select', text: 'Rate your overall energy levels upon waking up this morning:', options: ['Exhausted', 'Slightly Groggy', 'Refreshed', 'Energetic'] },
      { id: 'q3', type: 'text', text: 'Describe any recurring dreams or nighttime disruptions you noticed recently:' }
    ]
  },
  {
    id: 'social-battery',
    name: 'Social Battery & Connectivity Log',
    description: 'Check your current social wellness balance and campus community connection.',
    questions: [
      { id: 'q1', type: 'select', text: 'How long have you spent engaging with friends or campus groups today?', options: ['0 hours (Isolated)', '1-2 hours', '3-5 hours', '5+ hours'] },
      { id: 'q2', type: 'select', text: 'Do you currently feel supported by your immediate peer circles?', options: ['Completely', 'Somewhat', 'Neutral', 'Isolated'] },
      { id: 'q3', type: 'text', text: 'What social activity brings you the highest sense of comfort right now?' }
    ]
  }
];

export default function FormsPage() {
  const theme = useTheme();
  const [selectedForm, setSelectedForm] = useState(null);
  const [formResponses, setFormResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle saving user input response values dynamically
  const handleInputChange = (questionId, value) => {
    setFormResponses(prev => ({ ...prev, [questionId]: value }));
  };

  // Submit trigger simulation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting Responses for ${selectedForm.name}:`, formResponses);
    setIsSubmitted(true);
  };

  // Reset back to main listing menu
  const resetFormState = () => {
    setSelectedForm(null);
    setFormResponses({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 transition-colors duration-1000">
      
      {/* 1. SINGLE DETAILED FORM ACTIVE VIEW */}
      {selectedForm ? (
        <div className="space-y-6">
          {/* Back button to drop back out to forms dashboard */}
          <button 
            onClick={resetFormState}
            className={`flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity mb-4 ${theme.titleText}`}
          >
            <FaArrowLeft /> Back to Forms List
          </button>

          {isSubmitted ? (
            /* Thank you Message Screen */
            <div className={`p-8 rounded-xl text-center shadow-md space-y-4 transition-all duration-1000 ${theme.inputBg} ${theme.inputText}`}>
              <div className="flex justify-center"><FaCheckCircle size={48} className="text-green-500" /></div>
              <h2 className="text-2xl font-bold">Form Submitted Successfully!</h2>
              <p className="opacity-80 max-w-md mx-auto text-sm">
                Thank you for logging your thoughts. Your responses have been securely stored in your private log encrypted repository.
              </p>
              <button 
                onClick={resetFormState}
                className={`mt-4 font-semibold py-2 px-6 rounded shadow text-sm transition-all ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
              >
                Done
              </button>
            </div>
          ) : (
            /* Active Form Sheet Fields Layout */
            <form onSubmit={handleSubmit} className={`p-6 md:p-8 rounded-xl shadow-md border border-white/5 space-y-6 transition-all duration-1000 ${theme.inputBg} ${theme.inputText}`}>
              <div>
                <h2 className={`text-2xl font-bold ${theme.titleText}`}>{selectedForm.name}</h2>
                <p className="text-xs opacity-70 mt-1">{selectedForm.description}</p>
              </div>

              <div className="space-y-4">
                {selectedForm.questions.map((question) => (
                  <div key={question.id} className="flex flex-col gap-1 text-left">
                    <label className="text-sm font-medium opacity-90">{question.text}</label>
                    
                    {question.type === 'select' ? (
                      <select
                        required
                        value={formResponses[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className="w-full p-2.5 rounded bg-black/20 text-sm border border-white/10 outline-none focus:border-white/30"
                      >
                        <option value="" disabled className="text-slate-800">Select an option...</option>
                        {question.options.map(opt => (
                          <option key={opt} value={opt} className="text-slate-800">{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        required
                        placeholder="Type your response here..."
                        value={formResponses[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className="w-full p-2.5 rounded bg-black/20 text-sm border border-white/10 outline-none placeholder-white/30 focus:border-white/30"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-2.5 px-4 rounded shadow text-sm transition-all duration-300 ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
              >
                Submit Form
              </button>
            </form>
          )}
        </div>
      ) : (
        
        /* 2. FORMS DASHBOARD DIRECTORY MAIN VIEW */
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className={`text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.titleText}`}>
              Assessment Forms Directory
            </h1>
            <p className={`text-sm max-w-xl mx-auto transition-colors duration-1000 ${theme.bodyText} opacity-90`}>
              Select any evaluation prompt below to complete your metric logging for today.
            </p>
          </div>

          <div className="space-y-4">
            {MOCK_FORMS.map((form) => (
              <div
                key={form.id}
                className={`flex flex-col sm:flex-row justify-between sm:items-center rounded-xl p-5 shadow-sm border border-white/5 gap-4 transition-all duration-1000 ${theme.inputBg} ${theme.inputText}`}
              >
                <div className="text-left space-y-1">
                  <h2 className="text-lg font-bold tracking-wide">{form.name}</h2>
                  <p className="text-xs opacity-75 max-w-xl leading-relaxed">{form.description}</p>
                </div>

                <button
                  onClick={() => setSelectedForm(form)}
                  className={`whitespace-nowrap font-medium py-1.5 px-5 rounded text-xs transition-all duration-300 ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
                >
                  Start Form
                </button>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/services" className={`text-xs underline tracking-wide opacity-80 hover:opacity-100 ${theme.bodyText}`}>
              ← Return to Main Services
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
