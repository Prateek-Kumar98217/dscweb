"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-blue-900/5 to-background"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="glow-text">Touch</span>
        </h2>
        <p className="text-lg text-foreground/60 text-center mb-12">We'd love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-foreground/80 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-cyan-500/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-foreground/80 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-cyan-500/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-foreground/80 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-cyan-500/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Your message..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-background rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="card-gradient border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-foreground/70 text-sm font-semibold mb-1">Email</p>
                  <a href="mailto:contact@dscbvcoe.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    contact@dscbvcoe.com
                  </a>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm font-semibold mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm font-semibold mb-1">Location</p>
                  <p className="text-cyan-400">BVCOE, New Delhi, India</p>
                </div>
              </div>

              <div>
                <p className="text-foreground/70 text-sm font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                    title="GitHub"
                  >
                    <Github size={20} className="text-cyan-400 group-hover:text-cyan-300" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} className="text-cyan-400 group-hover:text-cyan-300" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                    title="Instagram"
                  >
                    <Instagram size={20} className="text-cyan-400 group-hover:text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
