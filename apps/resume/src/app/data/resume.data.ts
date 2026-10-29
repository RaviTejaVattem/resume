import type { Resume } from './resume.model';

export const resume = {
  name: 'Leela Ravi Teja Vattem',
  roles: ['Engineering Lead', 'Product-Minded Full-Stack Developer', 'Angular Specialist'],
  location: 'Bangalore, India',
  email: 'ravitejavattem@gmail.com',
  github: 'https://github.com/ravitejavattem',
  linkedin: 'https://www.linkedin.com/in/leela-ravi-teja-vattem-7860ab92',
  summary: 'Product-minded engineering lead with 7+ years of experience building reliable full-stack products for healthcare and financial services. Combines Angular and TypeScript expertise with Node.js, Java, and SQL to turn complex clinical and payments workflows into clear, dependable user experiences. Comfortable owning work from requirements and design through implementation, code review, and stakeholder demos.',
  strengths: ['Product ownership', 'UI leadership', 'Cross-functional collaboration', 'Stakeholder communication', 'Code quality', 'Agile delivery'],
  software: [
    { name: 'Angular', value: 90 },
    { name: 'Node.js / Express', value: 75 },
    { name: 'SQL', value: 80 },
    { name: 'Git / GitLab', value: 90 },
    { name: 'CI/CD', value: 65 },
    { name: 'Linux / Unix', value: 65 },
    { name: 'React', value: 55 },
    { name: 'Spring', value: 35 },
  ],
  languages: [
    { name: 'TypeScript / JavaScript', value: 90 },
    { name: 'HTML5 / CSS3', value: 75 },
    { name: 'Java', value: 65 },
    { name: 'Python', value: 50 },
  ],
  experience: [
    {
      role: 'Senior Technologist - I / UI Tech Lead',
      company: 'Philips Innovation Campus',
      period: 'September 2019 – Present',
      technologies: ['Angular', 'TypeScript', 'Nx', 'NgRx', 'RxJS', 'PrimeNG', 'Node.js', 'Express', 'REST APIs', 'Java', 'PostgreSQL', 'GitLab'],
      highlights: [
        'Lead UI development for a healthcare product supporting the complete patient journey, from onboarding to treatment completion.',
        'Translate clinical and product requirements into reusable Angular components, feature modules, and maintainable user experiences.',
        'Build features with TypeScript, Nx, NgRx, PrimeNG, and RxJS while contributing to Node/Express services, Java components, and PostgreSQL data access.',
        'Review GitLab merge requests, raise engineering standards, and communicate delivery progress through sprint demos.',
        'Partner with product and engineering stakeholders across Scrum of Scrums, backlog refinement, and program-increment planning.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fidelity Information Services',
      period: 'December 2017 – September 2019',
      technologies: ['Angular', 'TypeScript', 'Nx', 'NgRx', 'RxJS', 'Angular Material', 'Node.js', 'Express', 'REST APIs', 'Java', 'Oracle', 'CryptoJS'],
      highlights: [
        'Helped replace 10+ legacy payments applications with a unified user experience integrated across multiple backend systems.',
        'Delivered Angular experiences using TypeScript, Nx, NgRx, Angular Material, and RxJS for a large payments platform.',
        'Built Express/Node middleware for routing, CryptoJS encryption and decryption, and integration with external REST APIs.',
      ],
    },
    {
      role: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: 'January 2015 – December 2017',
      technologies: ['Angular', 'Java', 'REST APIs', 'Sybase IQ', 'SQL'],
      highlights: [
        'Delivered full-stack features for a mortgage-data product covering Home Price Index, real-estate, rental, and delinquency data from nine U.S. banks.',
        'Built Angular feature modules and implemented Java business logic and SQL access against Sybase IQ.',
      ],
    },
  ],
  education: [
    { institution: 'Jawaharlal Nehru Technological University Kakinada', qualification: 'B.Tech, Electronics and Communication Engineering', period: '2010 – 2014', result: '74.44%' },
  ],
  interests: [
    'Open-source contribution and emerging developer tools',
    'Cloud computing and IoT experimentation',
    'Operating-system internals, algorithms, and compiler projects',
    'Hackathons, coding challenges, and CreateAThons',
    'Cricket, table tennis, carom, and chess',
  ],
} as const satisfies Resume;
