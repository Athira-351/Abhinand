import React from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'

export default function Skills() {
  const { data } = useFetchJSON('/data/portfolio.json')
  const skills = data?.skills || []
  const software = data?.software || []

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Skills & Tools</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100"
          >
            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
          >
            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Software & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {software.map((tool, idx) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:border-purple-400 hover:text-purple-600 hover:shadow-md transition-all cursor-pointer"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
