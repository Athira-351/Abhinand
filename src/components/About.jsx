import React from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'

export default function About() {
  const { data } = useFetchJSON('/data/portfolio.json')
  const meta = data?.meta
  const education = data?.education || []
  const languages = data?.languages || []

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>
        
        <p className="text-lg text-slate-700 max-w-3xl mb-12 leading-relaxed font-light">{meta?.intro}</p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:border-indigo-300 hover:shadow-md transition-all"
                  >
                    <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{edu.course}</div>
                    <div className="text-sm text-slate-500 mt-1">{edu.school}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-slate-800 text-sm font-semibold hover:shadow-md transition-all cursor-pointer"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
