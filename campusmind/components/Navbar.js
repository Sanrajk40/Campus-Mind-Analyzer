"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the path tracker hook
import { HiMenu, HiX } from 'react-icons/hi'; 
import AnimatedText from './AnimatedText'; 
import { useTheme } from '@/context/ThemeContext'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme(); 
    const pathname = usePathname(); // Get the current active URL path

    // Array configuration for cleaner link mapping and management
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];

    // Helper function to check if a route is currently active
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
                <span className="px-2 text-white/50 uppercase tracking-wider font-bold text-[10px]">Test Theme:</span>
                {['morning', 'afternoon', 'evening', 'night'].map((mode) => (
                    <button
                        key={mode}
                        onClick={() => theme.changeThemeMode(mode)}
                        className={`px-2 py-1 rounded transition-all capitalize font-medium ${
                            theme.currentMode === mode 
                            ? 'bg-white text-slate-900 shadow-sm' 
                            : 'text-white/70 hover:bg-white/10'
                        }`}
                    >
                        {mode}
                    </button>
                ))}
            </div>

            {/* Hamburger Icon - visible only on mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
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

            {/* Mobile Menu */}
            {isOpen && (
                <ul className={`absolute top-[8vh] right-4 w-[45%] z-50 flex flex-col items-start gap-4 py-6 px-5 text-lg font-medium md:hidden rounded-lg shadow-xl backdrop-blur-md ${theme.navBg} ${theme.navText} transition-all duration-500 border border-white/10`}>
                    {/* Mini switcher inline for mobile testing */}
                    <div className="flex flex-wrap gap-1 p-1 w-full bg-black/10 rounded mb-2 border border-white/5 justify-between">
                        {['morning', 'afternoon', 'evening', 'night'].map((mode) => (
                            <button
                                key={mode}
                                onClick={() => theme.changeThemeMode(mode)}
                                className={`text-[10px] px-1.5 py-0.5 rounded capitalize ${theme.currentMode === mode ? 'bg-white text-black' : 'text-white'}`}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                    
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
                </ul>
            )}
        </nav>
    );
}
