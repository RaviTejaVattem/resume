import type { Resume } from './resume.model';

export const resume = {
  name: 'Leela Ravi Teja Vattem',
  roles: ['Senior Full-Stack Engineer', 'Angular Specialist', 'Open-source Contributor'],
  location: 'Bangalore, India',
  email: 'ravitejavattem@gmail.com',
  github: 'https://github.com/ravitejavattem',
  linkedin: 'https://www.linkedin.com/in/leela-ravi-teja-vattem-7860ab92',
  summary: 'Senior Full-Stack Engineer with 7+ years of experience designing, building, and leading enterprise web applications and RESTful services across healthcare and financial services. Specializes in Angular, TypeScript, Node.js/Express, Java, and SQL, with hands-on experience across UI architecture, API integration, relational databases, and Agile delivery. Translates complex clinical and payments workflows into reliable, maintainable user experiences.',
  strengths: ['UI architecture', 'Full-stack delivery', 'API integration', 'Code review', 'Agile collaboration', 'Stakeholder communication'],
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
        'Lead UI development for a healthcare application supporting the patient journey from onboarding through treatment completion.',
        'Design and build Angular features using TypeScript, Nx, NgRx state management, PrimeNG, and RxJS.',
        'Develop reusable UI components and feature modules aligned with clinical workflow and product requirements.',
        'Contribute to Express/Node REST services, Java backend components, and PostgreSQL data access.',
        'Review GitLab merge requests, promote frontend standards, and demonstrate completed increments to product stakeholders.',
        'Deliver in a Scrum of Scrums environment across sprint planning, daily stand-ups, backlog refinement, and program-increment planning.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fidelity Information Services',
      period: 'December 2017 – September 2019',
      technologies: ['Angular', 'TypeScript', 'Nx', 'NgRx', 'RxJS', 'Angular Material', 'Node.js', 'Express', 'REST APIs', 'Java', 'Oracle', 'CryptoJS'],
      highlights: [
        'Full-stack developer on a major FIS Payments initiative to replace 10+ legacy applications with one unified user experience.',
        'Built Angular features with TypeScript, Nx, NgRx, Angular Material, and RxJS for a multi-backend payments platform.',
        'Developed Express/Node middleware for routing, CryptoJS encryption and decryption, and integration with external REST APIs.',
        'Collaborated across backend systems to deliver a consistent, scalable user experience.',
      ],
    },
    {
      role: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: 'January 2015 – December 2017',
      technologies: ['Angular', 'Java', 'REST APIs', 'Sybase IQ', 'SQL'],
      highlights: [
        'Full-stack developer for a mortgage-data application maintaining Home Price Index, real-estate, rental, and delinquency data from nine U.S. banks.',
        'Developed and integrated Angular feature modules based on evolving business requirements.',
        'Implemented Java backend business logic and SQL queries against Sybase IQ.',
      ],
    },
  ],
  education: [
    { institution: 'Jawaharlal Nehru Technological University Kakinada', qualification: 'B.Tech, Electronics and Communication Engineering', period: '2010 – 2014', result: '74.44%' },
  ],
  interests: [
    'Open-source contribution and exploration of emerging developer tools',
    'IoT projects, cloud computing, and applied software experimentation',
    'Linux internals, operating systems, algorithms, and small compiler projects',
    'Coding challenges, hackathons, and CreateAThons',
    'Cricket, table tennis, carom, and chess',
  ],
} as const satisfies Resume;
