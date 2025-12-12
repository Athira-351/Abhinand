import React from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'


export default function Projects(){
  const { data, loading } = useFetchJSON('/data/portfolio.json')
  const projects = data?.projects || []

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Selected Work</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 font-light">Crafting user-centered experiences with strong visual systems.</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full hover:shadow-md transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                >
                  View Project <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
              <p className="text-slate-600 text-center max-w-md">
                Exciting new projects are on the way! Check back soon to see my latest work and creative endeavors.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}