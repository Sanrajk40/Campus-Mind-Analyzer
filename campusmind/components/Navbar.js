"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import AnimatedText from './AnimatedText';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme(); // Now includes theme state and changeThemeMode function

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
                <Link href={"/"} className="hover:opacity-80 transition-opacity">Home</Link>
                <Link href={"/about"} className="hover:opacity-80 transition-opacity">About</Link>
                <Link href={"/services"} className="hover:opacity-80 transition-opacity">Services</Link>
                <Link href={"/contact"} className="hover:opacity-80 transition-opacity">Contact</Link>
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
                    <Link href={"/"} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href={"/about"} onClick={() => setIsOpen(false)}>About</Link>
                    <Link href={"/services"} onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href={"/projects"} onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href={"/contactme"} onClick={() => setIsOpen(false)}>Contact Me</Link>
                </ul>
            )}
        </nav>
    );
}
