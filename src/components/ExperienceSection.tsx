import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent"
          />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-bg transform -translate-x-1/2 z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="p-6 bg-surface rounded-2xl border border-white/5 hover:border-accent-violet/30 transition-colors">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-accent-cyan/10 text-accent-cyan rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-text-muted mb-4 justify-start">
                    <span>{exp.company}</span>
                    <MapPinIcon className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2 justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}