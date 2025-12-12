import React from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'


export default function Hero(){
const { data } = useFetchJSON('/data/portfolio.json')
const meta = data?.meta


return (
<section className="py-20 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="space-y-4">
<motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent leading-tight">
{meta?.name}
</motion.h1>
<motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="text-2xl font-semibold text-indigo-600">
{meta?.title}
</motion.p>
</div>

<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:0.6}} className="text-lg text-slate-700 leading-relaxed max-w-xl font-light">
{meta?.intro}
</motion.p>

<motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.5, duration:0.6}} className="flex gap-4 pt-4">
<a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
View My Work
</a>
<a href={`mailto:${meta?.email}`} className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-slate-300 text-slate-900 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
Get In Touch
</a>
</motion.div>

<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6, duration:0.6}} className="pt-6 border-t border-slate-200">
<div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Tools & Technologies</div>
<div className="flex flex-wrap gap-2">
{data?.software?.slice(0,5).map(s => (
<motion.div key={s} initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.3}} className="px-3 py-1.5 rounded-full border border-slate-300 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
{s}
</motion.div>
))}
</div>
</motion.div>
</div>

<div className="hidden lg:block relative h-full">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-3xl blur-3xl"></div>
<motion.img initial={{x:40, opacity:0, rotate:5}} animate={{x:0, opacity:1, rotate:0}} transition={{delay:0.3, duration:0.8}} src="/images/abhinand_pi.jpg" alt="ui mockup" className="relative w-full max-w-sm rounded-3xl shadow-2xl border border-white/20" />
<motion.img initial={{x:-40, opacity:0, rotate:-5}} animate={{x:0, opacity:1, rotate:-8}} transition={{delay:0.5, duration:0.8}} src="/images/abhinand_pi.jpg" alt="ui mockup" className="relative absolute -right-8 top-32 w-48 rounded-2xl border-4 border-white shadow-2xl" />
</div>
</section>
)
}