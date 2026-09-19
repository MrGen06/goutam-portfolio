// ============================================================
// src/data/portfolio.ts  —  Single Source of Truth
// ============================================================
// ALL portfolio content lives here.
// Update this file to change copy without touching UI code.
//
// TODO markers indicate fields that need real URLs/values
// before the site is published.
// ============================================================

import type {
  PersonalInfo,
  NavItem,
  Education,
  SkillCategory,
  Project,
  Position,
  Achievement,
  CourseCategory,
} from '../types';

// ── Navigation ───────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Education',   href: '#education' },
  { label: 'Positions',   href: '#positions' },
  { label: 'Achievements',href: '#achievements' },
  { label: 'Contact',     href: '#contact' },
];

// ── Personal / Profile ───────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: 'Goutam Khandelwal',
  role: 'AI & Backend Developer',
  tagline: 'Building intelligent systems with LLMs, GraphRAG, and backend engineering — combining a strong mathematical foundation with applied projects in ML, NLP, and cloud platforms.',
  summary:
    'B.Tech student in Mathematics and Computing at NIT Kurukshetra (CGPA: 9.08) with hands-on experience in Python, machine learning, deep learning, SQL, and Generative AI. Built and deployed ML and LLM-powered applications involving GraphRAG, NLP, and computer vision using FastAPI, PyTorch, Scikit-Learn, and cloud platforms. Strong foundation in probability, statistics, and problem solving, with a 1750+ LeetCode rating.',
  aboutParagraphs: [
    'I am a B.Tech student in Mathematics & Computing at the National Institute of Technology, Kurukshetra (CGPA: 9.08 through 5th semester). My technical focus is centered on AI/ML, Generative AI, NLP, GraphRAG, and backend engineering — building practical, production-grade applications that turn complex models into reliable software.',
    'My background in Mathematics & Computing provides a rigorous foundation in probability, statistics, linear algebra, and discrete structures. This quantitative mindset directly shapes how I approach algorithmic problem solving, retrieval architectures, and backend optimization.',
  ],
  quickFacts: [
    {
      id: 'institution',
      label: 'Institution',
      value: 'NIT Kurukshetra',
      detail: 'B.Tech Mathematics & Computing',
      icon: 'graduation-cap',
    },
    {
      id: 'discipline',
      label: 'Discipline',
      value: 'Math & Computing',
      detail: 'Probability, Linear Algebra & Algorithms',
      icon: 'sigma',
    },
    {
      id: 'academics',
      label: 'Academic Record',
      value: '9.08 CGPA',
      detail: 'Till 5th Semester',
      icon: 'award',
    },
    {
      id: 'leetcode',
      label: 'Problem Solving',
      value: '1750+ Rating',
      detail: 'LeetCode Profile',
      icon: 'trophy',
    },
  ],
  location: 'NIT Kurukshetra, Haryana, India',
  contact: {
    email: 'goutam.ind.2005gmail.com',
    location: 'NIT Kurukshetra, Haryana, India',
    // TODO: add resume PDF URL
    resumeUrl: '',
    social: [
      // TODO: fill GitHub profile URL
      { label: 'GitHub',   url: '', icon: 'github' },
      // TODO: fill LinkedIn profile URL
      { label: 'LinkedIn', url: '', icon: 'linkedin' },
      // TODO: fill LeetCode profile URL
      { label: 'LeetCode', url: '', icon: 'leetcode' },
    ],
  },
};

// ── Education ────────────────────────────────────────────────

export const education: Education[] = [
  {
    id: 'nit-kkr',
    institution: 'National Institute of Technology, Kurukshetra',
    degree: 'B.Tech',
    field: 'Mathematics and Computing',
    score: '9.08',
    scoreLabel: 'CGPA',
    period: '2023 – 2027',
    location: 'Kurukshetra, Haryana',
    isCurrent: true,
  },
  {
    id: 'dav-koylanagar',
    institution: 'DAV Public School, Koylanagar',
    degree: 'Senior Secondary (Class XII)',
    score: '94.2%',
    scoreLabel: 'Percentage',
    period: '2022',
    board: 'CBSE',
  },
  {
    id: 'tata-dav-sijua',
    institution: 'TATA DAV School, Sijua',
    degree: 'Matriculation (Class X)',
    score: '94%',
    scoreLabel: 'Percentage',
    period: '2020',
    board: 'CBSE',
  },
];

// ── Skills ───────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'code',
    skills: ['Python', 'C++', 'SQL'],
  },
  {
    id: 'ml-dl',
    label: 'Machine Learning',
    icon: 'brain',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Scikit-Learn',
      'PyTorch',
      'DistilBERT',
      'NLP',
      'NumPy',
      'Pandas',
    ],
  },
  {
    id: 'gen-ai',
    label: 'Generative AI',
    icon: 'sparkles',
    skills: ['LLMs', 'RAG', 'GraphRAG'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'Neo4j'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & APIs',
    icon: 'server',
    skills: ['FastAPI', 'Streamlit', 'REST APIs'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Deployment',
    icon: 'cloud',
    skills: ['Microsoft Azure', 'Hugging Face', 'Docker'],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

// ── Projects ─────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'omniplant-ai',
    title: 'Omniplant.AI',
    subtitle: 'GraphRAG Platform for Industrial Maintenance',
    duration: 'Jun 2026 – Jul 2026',
    team: '2-member team',
    deployment: 'Render & Streamlit Cloud',
    technologies: [
      'Python',
      'FastAPI',
      'Streamlit',
      'Neo4j',
      'LLMs',
      'LlamaParse',
      'Hugging Face',
      'PostgreSQL',
      'ImageKit',
    ],
    highlights: [
      {
        text: 'Built a hybrid GraphRAG pipeline via Neo4j, vector search, and BAAI/bge-small-en for context-aware maintenance retrieval.',
      },
      {
        text: 'Parsed 10+ industrial manuals via LlamaParse into a knowledge graph of 200+ nodes and 500+ edges.',
      },
      {
        text: 'Built FastAPI services with JWT/RBAC, PostgreSQL, and Streamlit, deployed to Render and Streamlit Cloud.',
      },
    ],
    // TODO: fill GitHub repo URL
    githubUrl: '',
    // TODO: fill live demo URL if available
    liveUrl: '',
    featured: true,
  },
  {
    id: 'ai-support-ticket',
    title: 'AI Support Ticket Intelligence & Response Assistant',
    subtitle: 'Automated triage and LLM-powered drafting for support workflows',
    duration: 'Aug 2026',
    deployment: 'Azure Container Apps (Docker)',
    technologies: [
      'Python',
      'Scikit-Learn',
      'PyTorch',
      'DistilBERT',
      'LLMs',
      'FastAPI',
      'Streamlit',
      'Docker',
      'Azure',
    ],
    highlights: [
      {
        text: 'Built an AI ticket triage system predicting queue, priority, and SLA deadlines using Scikit-Learn and DistilBERT.',
      },
      {
        text: 'Added LLM summarization and auto-drafting for human-in-the-loop support workflows.',
      },
      {
        text: 'Developed a FastAPI backend and Streamlit UI, deployed on Azure Container Apps with Docker.',
      },
    ],
    // TODO: fill GitHub repo URL
    githubUrl: '',
    // TODO: fill live demo URL if available
    liveUrl: '',
    featured: false,
  },
  {
    id: 'image-colorizer',
    title: 'Image Colorizer',
    subtitle: 'Deep Learning Web App',
    duration: 'Dec 2025',
    deployment: 'Hugging Face Spaces (Docker)',
    technologies: ['Python', 'OpenCV (DNN)', 'Flask', 'Docker', 'Hugging Face'],
    highlights: [
      {
        text: 'Built an image colorization pipeline with OpenCV DNN and a pre-trained Caffe model.',
      },
      {
        text: 'Developed a Flask app with image upload, before/after preview, and result downloads.',
      },
      {
        text: 'Dockerized and deployed to Hugging Face Spaces, serving large weights via HF Datasets.',
      },
    ],
    // TODO: fill GitHub repo URL
    githubUrl: '',
    // TODO: fill Hugging Face Spaces demo URL
    liveUrl: '',
    featured: false,
  },
];

// ── Positions of Responsibility ──────────────────────────────

export const positions: Position[] = [
  {
    id: 'pr-head-anant',
    role: 'PR & Social Media Head',
    organization: 'Anant — The Mathematical Society, NIT KKR',
    period: 'Aug 2024 – May 2025',
  },
  {
    id: 'event-head-techspardha',
    role: 'Event Head',
    organization: 'Techspardha',
    period: '2024–25',
    detail: '27 Feb 2025 – 2 Mar 2025',
  },
];

// ── Achievements ─────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    id: 'nxtwave-cpl',
    title: 'NxtWave Coding Premier League — All India Rank 13',
    description: 'Achieved AIR 13 in the NxtWave Coding Premier League.',
    type: 'competitive',
    year: 'April 2026',
  },
  {
    id: 'leetcode-rating',
    title: 'LeetCode Rating: 1750+',
    description: 'Maintained a competitive LeetCode rating of 1750+.',
    type: 'competitive',
  },
  {
    id: 'reliance-scholar',
    title: 'Reliance Foundation Undergraduate Scholar',
    description:
      'Selected in the top 5000 nationwide via aptitude test and JEE score.',
    type: 'scholarship',
    year: '2023 – Present',
  },
  {
    id: 'jee-mains',
    title: 'JEE Mains — 99.11 Percentile',
    type: 'academic',
    year: '2023',
  },
  {
    id: 'jee-advanced',
    title: 'Qualified JEE Advanced',
    type: 'academic',
    year: '2023',
  },
];

// ── Key Courses ───────────────────────────────────────────────

export const keyCourses: CourseCategory[] = [
  {
    id: 'cs',
    label: 'Computer Science',
    courses: [
      'Data Structures and Algorithms',
      'Object Oriented Programming',
      'Operating Systems',
      'Database Management Systems',
    ],
  },
  {
    id: 'math',
    label: 'Mathematics',
    courses: [
      'Probability and Statistics',
      'Linear Algebra',
      'Optimization Techniques',
    ],
  },
];
