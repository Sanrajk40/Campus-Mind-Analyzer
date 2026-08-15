"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Added useRouter
import { HiMenu, HiX } from 'react-icons/hi'; 
import AnimatedText from './AnimatedText'; 
import { useTheme } from '@/context/ThemeContext'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme(); 
    const pathname = usePathname();
    const router = useRouter(); // Initialize navigation controller router

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];

    const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className={`navbar md:px-60 flex w-full h-[8vh] items-center justify-between border-b border-white/10 px-4 ${theme.navBg} ${theme.navText} transition-all duration-1000 relative`}>
            <h1 className='text-xl flex font-bold'>
                <span><AnimatedText text="Campus" /></span>
                <span className={`pl-2 ${theme.titleText}`}><AnimatedText text="Mind" /></span>
            </h1>

            {/* TEMPORARY TESTING OVERRIDE PANEL */}
            <div className="hidden lg:flex items-center gap-1 bg-black/20 p-1 rounded-md text-xs border border-white/5 mx-4">
                <span className="px-2 text-white/50 uppercase tracking-wider font-bold text-[10px]">Test:</span>
                {['morning', 'afternoon', 'evening', 'night'].map((mode) => (
                    <button
                        key={mode}
                        onClick={() => theme.changeThemeMode(mode)}
                        className={`px-1.5 py-0.5 rounded transition-all capitalize font-medium ${
                            theme.currentMode === mode 
                            ? 'bg-white text-slate-900 shadow-sm' 
                            : 'text-white/70 hover:bg-white/10'
                        }`}
                    >
                        {mode}
                    </button>
                ))}
            </div>

            {/* Desktop Menu & Action Buttons wrapper grid */}
            <div className="hidden md:flex items-center gap-8">
                <ul className="flex gap-6 text-sm font-medium">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                className={`transition-all duration-300 relative py-1 px-2 rounded-md ${
                                    active 
                                    ? `${theme.buttonBg} ${theme.buttonText} font-bold shadow-sm` 
                                    : 'hover:opacity-70 opacity-90'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </ul>

                {/* Desktop Sign In Primary Link Button */}
                <button
                    onClick={() => router.push('/login')}
                    className={`font-semibold py-1.5 px-4 rounded shadow-sm text-xs transition-all duration-300 border border-current/20 ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}`}
                >
                    Sign In
                </button>
            </div>

            {/* Hamburger Icon - visible only on mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className={`absolute top-[8vh] right-4 w-[50%] z-50 flex flex-col items-start gap-4 py-6 px-5 text-lg font-medium md:hidden rounded-lg shadow-xl backdrop-blur-md ${theme.navBg} ${theme.navText} transition-all duration-500 border border-white/10`}>
                    
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                onClick={() => setIsOpen(false)}
                                className={`w-full py-1.5 px-3 rounded-md transition-all duration-300 ${
                                    active 
                                    ? `${theme.buttonBg} ${theme.buttonText} font-bold shadow-inner` 
                                    : 'hover:bg-white/10'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <hr className="w-full border-t border-white/10 my-1" />

                    {/* Mobile Menu Action Trigger Button button */}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            router.push('/login');
                        }}
                        className={`w-full text-center font-bold py-2 px-3 rounded-md text-sm transition-all duration-300 ${theme.buttonBg} ${theme.buttonText}`}
                    >
                        Sign In
                    </button>
                </ul>
            )}
        </nav>
    );
}
