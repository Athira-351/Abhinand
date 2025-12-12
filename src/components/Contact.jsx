import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useFetchJSON from '../hooks/useFetchJSON'

export default function Contact() {
  const { data } = useFetchJSON('/data/portfolio.json')
  const meta = data?.meta
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:${meta?.email}?subject=Message from ${name}&body=${message}%0A%0AFrom: ${email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 font-light">
            I'd love to hear from you! Whether you have a question or a project opportunity, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                  <a
                    href={`mailto:${meta?.email}`}
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors break-all"
                  >
                    {meta?.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                  <a
                    href={`tel:${meta?.phone}`}
                    className="text-slate-900 font-medium hover:text-indigo-600 transition-colors"
                  >
                    {meta?.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</div>
                  <p className="text-slate-900 font-medium">{meta?.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
              <h4 className="font-semibold text-slate-900 mb-3">Response Time</h4>
              <p className="text-sm text-slate-600">I typically respond within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
