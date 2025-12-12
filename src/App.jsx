import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen bg-white text-slate-900">
{/* Background gradient elements */}
<div className="fixed top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
<div className="fixed bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

<Header />
<main className="max-w-6xl mx-auto px-6 relative z-10">
<Hero />
<div className="border-t border-slate-200"></div>
<About />
<div className="border-t border-slate-200"></div>
<Projects />
<div className="border-t border-slate-200"></div>
<Skills />
<div className="border-t border-slate-200"></div>
<Contact />
</main>
<Footer />
</div>
)
}