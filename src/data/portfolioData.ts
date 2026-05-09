import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Aman Verma',
  title: 'Full Stack Engineer',
  bio: `Results-driven Full Stack Engineer with 2+ years of experience building scalable web applications. I specialize in React.js + NestJS systems, real-time architectures with Socket.io & BullMQ, and AI integrations using GPT-4 and Whisper. Currently at Prakash Software Solutions, Indore.`,
  roles: ['Full Stack Engineer', 'React.js Developer', 'NestJS Backend Dev', 'AI Integration Engineer'],
  stats: [
    { label: 'Years Experience', value: '2', suffix: '+' },
    { label: 'Production Apps', value: '4', suffix: '+' },
    { label: 'Query Performance Boost', value: '40', suffix: '%' },
    { label: 'Speech Recognition Accuracy', value: '95', suffix: '%+' },
  ],
  skills: [
    {
      name: 'Languages',
      skills: [
        { name: 'JavaScript (ES6+)', proficiency: 95 },
        { name: 'TypeScript', proficiency: 90 },
        { name: 'HTML5', proficiency: 95 },
        { name: 'CSS3', proficiency: 85 },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', proficiency: 95 },
        { name: 'Redux Toolkit', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 90 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express.js', proficiency: 90 },
        { name: 'NestJS', proficiency: 85 },
        { name: 'REST APIs', proficiency: 95 },
        { name: 'Socket.io', proficiency: 90 },
        { name: 'BullMQ', proficiency: 85 },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'PostgreSQL', proficiency: 90 },
        { name: 'MySQL', proficiency: 85 },
        { name: 'Redis', proficiency: 85 },
      ],
    },
    {
      name: 'ORM / Tools',
      skills: [
        { name: 'Sequelize ORM', proficiency: 85 },
        { name: 'Postman', proficiency: 95 },
        { name: 'Git', proficiency: 90 },
        { name: 'JWT', proficiency: 90 },
        { name: 'RBAC', proficiency: 85 },
      ],
    },
    {
      name: 'AI / Cloud',
      skills: [
        { name: 'OpenAI GPT-4', proficiency: 90 },
        { name: 'Whisper (STT)', proficiency: 95 },
        { name: 'Python', proficiency: 75 },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Video Quality Service',
      description: 'Full-stack computer vision platform for AI-driven car inspection — tire gauge analysis, scratch detection, license plate recognition.',
      highlights: [
        'Async video pipelines with BullMQ — 50% latency reduction',
        'Redis caching reduced DB load by ~35%',
        'WebSocket live progress updates',
        'Multi-role RBAC (Admin, Dealer, Technician)',
        'Dashboard analytics with histogram + AI-generated reports',
      ],
      tech: ['React.js', 'NestJS', 'BullMQ', 'Redis', 'WebSocket', 'PostgreSQL', 'Python'],
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Talk to Jorge',
      description: 'Real-time multilingual chat platform with text and audio translation across 10+ languages using GPT-4 and Whisper.',
      highlights: [
        'GPT-4 for text translation + TTS',
        'Whisper for STT with 95%+ accuracy',
        'Socket.io sub-100ms message delivery',
        'Seamless concurrent user support',
      ],
      tech: ['React.js', 'NestJS', 'GPT-4', 'Whisper', 'Socket.io', 'PostgreSQL'],
      category: 'ai',
    },
    {
      id: 3,
      title: 'Meeting Buddy',
      description: 'End-to-end meeting management platform with real-time Q&A, live polls, and interactive quizzes for 500+ college students.',
      highlights: [
        'WebSocket real-time Q&A and polls',
        'Automated marksheet generation post-quiz',
        '80% reduction in manual grading effort',
        'Zero message loss under load testing',
      ],
      tech: ['React.js', 'NestJS', 'Socket.io', 'PostgreSQL'],
      category: 'fullstack',
    },
    {
      id: 4,
      title: 'Med-Reminder',
      description: 'Backend for a medication reminder mobile app with dosage scheduling and automated reminder workflows.',
      highlights: [
        'RESTful APIs in Node.js/Express.js',
        '<50ms average query response time',
        'Push notification integration',
        'Flutter mobile app backend',
      ],
      tech: ['Node.js', 'Express.js', 'MySQL', 'Flutter'],
      category: 'backend',
    },
  ],
  experience: [
    {
      id: 1,
      title: 'Software Engineer II',
      company: 'Prakash Software Solutions Pvt. Ltd.',
      location: 'Indore, MP',
      period: 'Jun 2023 – Present',
      highlights: [
        'Designed and built scalable full-stack web applications using React.js, NestJS, and PostgreSQL',
        'Implemented async video processing pipelines with BullMQ, reducing latency by 50%',
        'Integrated AI models (GPT-4, Whisper) for multilingual chat and video analysis features',
        'Developed real-time communication features with Socket.io supporting 500+ concurrent users',
        'Optimized database queries and implemented Redis caching, improving response times by 40%',
        'Implemented secure multi-role RBAC system with JWT authentication',
      ],
    },
  ],
  contact: {
    email: 'amanverma.dev@gmail.com',
    linkedin: 'https://linkedin.com/in/aman-verma-dev',
    location: 'Indore, MP, India',
  },
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/amanverma', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/aman-verma-dev', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:amanverma.dev@gmail.com', icon: 'email' },
  ],
};