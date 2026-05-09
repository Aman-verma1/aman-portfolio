import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a chat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-white/5">
              <div className="p-3 bg-accent-cyan/10 rounded-xl">
                <EnvelopeIcon className="w-6 h-6 text-accent-cyan" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Email</p>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-text-primary hover:text-accent-cyan transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-white/5">
              <div className="p-3 bg-accent-violet/10 rounded-xl">
                <svg className="w-6 h-6 text-accent-violet" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-text-muted text-sm">LinkedIn</p>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-cyan transition-colors">
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-white/5">
              <div className="p-3 bg-accent-violet/10 rounded-xl">
                <PhoneIcon className="w-6 h-6 text-accent-violet" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Phone</p>
                <a href={`tel:${portfolioData.contact.phone}`} className="text-text-primary hover:text-accent-cyan transition-colors">
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-white/5">
              <div className="p-3 bg-accent-cyan/10 rounded-xl">
                <MapPinIcon className="w-6 h-6 text-accent-cyan" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Location</p>
                <p className="text-text-primary">{portfolioData.contact.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onMouseMove={handleMouseMove}
            className="relative p-8 bg-surface rounded-2xl border border-white/5"
          >
            <motion.div
              style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
              className="absolute pointer-events-none w-32 h-32 bg-accent-cyan/20 rounded-full blur-[40px]"
            />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-muted text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-white/10 rounded-xl text-text-primary focus:border-accent-cyan focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-muted text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-white/10 rounded-xl text-text-primary focus:border-accent-cyan focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-muted text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-white/10 rounded-xl text-text-primary focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-bg font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}