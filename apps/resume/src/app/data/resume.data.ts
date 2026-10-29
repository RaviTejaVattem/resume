import type { Resume } from './resume.model';

export const resume = {
  name: 'Leela Ravi Teja Vattem',
  roles: ['Software Engineer', 'Angular Developer', 'Full-Stack Developer'],
  location: 'Bangalore, India',
  email: 'ravitejavattem@gmail.com',
  github: 'https://github.com/ravitejavattem',
  linkedin: 'https://www.linkedin.com/in/leela-ravi-teja-vattem-7860ab92',
  summary: 'Software Engineer with 7+ years of experience delivering enterprise web applications, RESTful APIs, and database-backed solutions for healthcare and financial services. Strong background in Angular, TypeScript, JavaScript, Node.js, Express.js, Java, SQL, REST APIs, Git, and CI/CD. Experienced in Agile/Scrum delivery, code review, cross-functional collaboration, and building scalable user interfaces for healthcare and payments platforms.',
  strengths: ['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'SQL', 'Agile', 'Code Review', 'Problem Solving'],
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
      technologies: ['Angular', 'TypeScript', 'Nx', 'NgRx', 'RxJS', 'PrimeNG', 'Node.js', 'Express', 'REST APIs', 'Java', 'PostgreSQL', 'GitLab', 'Agile'],
      highlights: [
        'Developed and maintained Angular features for an enterprise healthcare application supporting patient onboarding and treatment workflows.',
        'Built reusable UI components and modules using TypeScript, Nx, NgRx, PrimeNG, and RxJS.',
        'Contributed to Node.js/Express REST services, Java backend components, and PostgreSQL database access.',
        'Performed GitLab code reviews and helped team members adopt frontend best practices.',
        'Participated in Agile ceremonies including sprint planning, daily stand-ups, backlog refinement, demos, and program-increment planning.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fidelity Information Services',
      period: 'December 2017 – September 2019',
      technologies: ['Angular', 'TypeScript', 'Nx', 'NgRx', 'RxJS', 'Angular Material', 'Node.js', 'Express', 'REST APIs', 'Java', 'Oracle', 'CryptoJS'],
      highlights: [
        'Developed Angular features for a unified payments platform replacing 10+ legacy applications.',
        'Built Express/Node middleware for routing, CryptoJS encryption and decryption, and external REST API integration.',
        'Integrated Angular frontends with multiple backend systems using TypeScript, NgRx, Angular Material, and RxJS.',
      ],
    },
    {
      role: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: 'January 2015 – December 2017',
      technologies: ['Angular', 'Java', 'REST APIs', 'Sybase IQ', 'SQL'],
      highlights: [
        'Developed Angular modules for a mortgage-data application covering Home Price Index, real-estate, rental, and delinquency data.',
        'Implemented Java backend business logic and SQL queries against Sybase IQ for data from nine U.S. banks.',
      ],
    },
  ],
  education: [
    { institution: 'Jawaharlal Nehru Technological University Kakinada', qualification: 'B.Tech, Electronics and Communication Engineering', period: '2010 – 2014', result: '74.44%' },
  ],
  interests: [
    'Open-source software',
    'Cloud computing',
    'IoT',
    'Linux and operating-system internals',
    'Algorithms and compilers',
    'Coding challenges and hackathons',
  ],
} as const satisfies Resume;
