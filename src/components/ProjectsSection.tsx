import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

function ProjectCard({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative p-6 bg-surface rounded-2xl border border-white/5 hover:border-accent-violet/50 transition-colors"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm mb-4">{project.description}</p>

          <ul className="space-y-2 mb-6">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-bg rounded-full text-text-muted border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-accent-cyan text-sm hover:underline"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              View Project
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}