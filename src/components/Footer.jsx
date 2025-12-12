import React from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'

export default function Footer() {
  const { data } = useFetchJSON('/data/portfolio.json')
  const meta = data?.meta
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                AB
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">{meta?.name}</h3>
                <p className="text-sm text-slate-600">{meta?.title}</p>
              </div>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-xs">
                Creating beautiful and functional digital experiences through thoughtful design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold text-slate-900 mb-4">Navigation</h4>
              <nav className="space-y-2">
                <a href="#projects" className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  Work
                </a>
                <a href="#about" className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  About
                </a>
                <a href="#skills" className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  Skills
                </a>
                <a href="#contact" className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-slate-900 mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${meta?.email}`}
                  className="block text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  {meta?.email}
                </a>
                <a
                  href={`tel:${meta?.phone}`}
                  className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {meta?.phone}
                </a>
                <p className="text-sm text-slate-600">{meta?.location}</p>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
              <p>© {currentYear} {meta?.name}. All rights reserved.</p>
              <p className="text-xs">Designed & Developed by <strong>Athira Anil</strong></p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
