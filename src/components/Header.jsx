import React from 'react'
import { motion } from 'framer-motion'


export default function Header(){
return (
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-soft">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<motion.div 
initial={{opacity:0, x:-20}} 
animate={{opacity:1, x:0}} 
transition={{duration:0.6}} 
className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
>
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">AB</div>
<div>
<div className="text-sm font-bold text-slate-900">Abhinand K</div>
<div className="text-xs text-slate-500 font-medium">UI/UX Designer</div>
</div>
</motion.div>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors relative group">
About
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
</a>
<a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors relative group">
Portfolio
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
</a>
<a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors relative group">
Skills
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
</a>
<a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors relative group">
Contact
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
</a>
</nav>
<div className="hidden md:flex gap-3 items-center">
<motion.a
href="/resume.pdf"
download="Abhinand-K-Resume.pdf"
whileHover={{scale: 1.05}}
whileTap={{scale: 0.95}}
className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center gap-2"
title="Download Resume"
>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0 0V8m0 4h4m0 0h4m-4 0v4m0-4V8" />
</svg>
Resume
</motion.a>
<motion.a
href="#contact"
whileHover={{scale: 1.05}}
whileTap={{scale: 0.95}}
className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
>
Let's Talk
</motion.a>
</div>
</div>
</header>
)
}