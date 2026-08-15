'use client';

import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaFacebook, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();

  const handleProviderLogin = (provider) => {
    // This is a placeholder for your NextAuth / Supabase connection logic
    console.log(`Initiating auth process with: ${provider}`);
    alert(`Connecting to ${provider} authentication gateway...`);
  };

  return (
    <div className="w-full max-w-md mx-auto py-12 px-6 transition-all duration-1000">
      
      {/* Back button link */}
      <button 
        onClick={() => router.back()}
        className={`flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity mb-8 ${theme.titleText}`}
      >
        <FaArrowLeft size={14} /> Back
      </button>

      {/* Login Card Shield Block Container */}
      <div className={`p-8 rounded-2xl shadow-xl border border-white/5 space-y-6 text-center transition-all duration-1000 ${theme.inputBg} ${theme.inputText}`}>
        
        <div className="space-y-2">
          <h1 className={`text-3xl font-bold tracking-tight ${theme.titleText}`}>Welcome Back</h1>
          <p className="text-xs opacity-75">Access your private student journaling logs and mental wellness progress dashboard securely.</p>
        </div>

        {/* Auth Provider Providers Stack Layout */}
        <div className="space-y-3 pt-4">
          
          {/* Google Button Option */}
          <button
            onClick={() => handleProviderLogin('Google')}
            className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-medium py-2.5 px-4 rounded-lg shadow-sm text-sm transition-all duration-200"
          >
            <FaGoogle size={18} className="text-red-500" />
            Continue with Google
          </button>

          {/* GitHub Button Option */}
          <button
            onClick={() => handleProviderLogin('GitHub')}
            className="w-full flex items-center justify-center gap-3 bg-[#24292e] text-white hover:bg-[#1c2024] font-medium py-2.5 px-4 rounded-lg shadow-sm text-sm transition-all duration-200 border border-white/5"
          >
            <FaGithub size={18} />
            Continue with GitHub
          </button>

          {/* Facebook Button Option */}
          <button
            onClick={() => handleProviderLogin('Facebook')}
            className="w-full flex items-center justify-center gap-3 bg-[#1877f2] text-white hover:bg-[#166fe5] font-medium py-2.5 px-4 rounded-lg shadow-sm text-sm transition-all duration-200"
          >
            <FaFacebook size={18} />
            Continue with Facebook
          </button>

        </div>

        {/* Small Encryption Notice Footer text safety tag */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-[10px] opacity-50 uppercase tracking-wider leading-relaxed">
            🛡️ Secured with student multi-factor cloud encryption.
          </p>
        </div>

      </div>
    </div>
  );
}
