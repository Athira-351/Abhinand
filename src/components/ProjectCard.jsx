import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
