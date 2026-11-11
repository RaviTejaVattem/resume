import type { Resume } from './resume.model';

export const resume = {
  name: 'Leela Ravi Teja Vattem',
  title: 'Lead Engineer',
  roles: ['Frontend engineering', 'Web platforms', 'Team leadership'],
  location: 'London, United Kingdom',
  email: 'leelaravitejav@gmail.com',
  github: 'https://github.com/ravitejavattem',
  linkedin: 'https://www.linkedin.com/in/leela-ravi-teja-vattem-7860ab92',
  careerStart: '2015-01-01',
  summary: 'Lead Engineer with {years}+ years of experience delivering enterprise web applications, with deep expertise in Angular and TypeScript and the flexibility to work across the stack. Leads a team of four on the Direct Line Group insurance websites (now part of Aviva) and works with backend teams on API contracts and integration issues. Previously led UI development for a clinical patient-workflow product. Earlier full-stack experience with Node.js and Java. Focused on maintainable architecture, strongly typed, well-tested code and dependable delivery.',
  strengths: ['Technical leadership', 'Mentoring', 'Code review', 'Quality engineering'],
  skills: [
    { name: 'Frontend', items: ['Angular', 'Signals', 'Strictly typed forms', 'NgRx', 'RxJS', 'Svelte', 'React', 'HTML5/CSS3'] },
    { name: 'Backend (working knowledge)', items: ['NestJS', 'Node.js', 'Express', 'REST APIs', 'SQL', 'PostgreSQL', 'Spring', 'Python'] },
    { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Java'] },
    { name: 'Tooling & integrations', items: ['Git', 'Nx', 'CI/CD', 'Tealium', 'Worldpay', 'Guidewire Edge APIs', 'Linux/Unix'] },
  ],
  experience: [
    {
      role: 'Lead Engineer',
      company: 'Aviva PLC (Direct Line Group)',
      period: 'December 2022 – Present',
      technologies: ['Angular 14–20', 'TypeScript', 'Signals', 'Typed forms', 'NgRx', 'Tealium', 'Worldpay', 'NestJS', 'Guidewire Edge APIs'],
      highlights: [
        'Lead front-end engineering for the Direct Line Group insurance websites, now part of Aviva, with end-to-end ownership of the customer-facing application and delivery of hundreds of features, enhancements and defect fixes on a two-month release cycle.',
        'Lead a team of four engineers, mentoring and coaching two of them on code quality, and run architecture and feature review sessions that weigh the trade-offs of competing approaches.',
        'Work on the Angular front end that consumes Guidewire Edge APIs for the Guidewire Quote & Buy Portal, with a solid understanding of the quote and policy lifecycle and the APIs the front end uses.',
        'Deliver the new business, amendments and renewals applications across three insurance brands and partner brands including NatWest, whitelabelled so each brand can be tailored independently.',
        'Drive engineering quality through CI gates: pull requests fail below 80% test coverage or with formatting violations, and JFrog scanning checks for security issues. Coverage is now around 94%.',
        'Delivered the year-long upgrade from Angular 14 to Angular 20 with no production incidents, moving from 14 to 18 in one step and then version by version. It also shortened build times with esbuild.',
        'Introduced strictly typed forms and signals, adding types across the application and migrating feature by feature to avoid a big-bang rewrite.',
        'Own the Tealium analytics data layer, working with the analytics team to track and reduce error rates, and built the payments journey with Worldpay JS.',
        'Serve as the primary technical liaison to multiple backend teams, agreeing API contracts and resolving day-to-day integration issues.',
      ],
    },
    {
      role: 'Senior Technologist - I',
      company: 'Philips Innovation Campus',
      period: 'September 2019 – December 2022',
      technologies: ['Angular 10', 'NgRx', 'Nx', 'RxJS', 'Node.js', 'Express', 'REST', 'Java', 'PostgreSQL'],
      highlights: [
        'Led UI development for an application covering the patient workflow from onboarding to treatment completion.',
        'Designed and delivered features with Angular 10, TypeScript, Nx, NgRx and RxJS, building the UI components and modules for client requirements.',
        'Contributed to backend REST services and the database layer.',
        'Reviewed code in GitLab and coached the team on best practices.',
        'Worked in an Agile team within a Scrum of Scrums, with two-week sprints and programme-increment planning, and presented sprint demos to the product team.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fidelity Information Services',
      period: 'December 2017 – September 2019',
      technologies: ['Angular 6', 'NgRx', 'Nx', 'RxJS', 'Node.js', 'Express', 'REST', 'Java', 'Oracle DB'],
      highlights: [
        'Full-stack developer on the largest FIS Payments programme (5+ years), replacing 10+ existing applications with a single unified UI integrating many backends.',
        'Designed and developed features with Angular 6, TypeScript, Nx, NgRx, Angular Material and RxJS.',
        'Worked on the Express middle layer: routing, encryption and decryption with CryptoJS, and calls to external REST APIs.',
      ],
    },
    {
      role: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: 'January 2015 – December 2017',
      technologies: ['Angular 2', 'Java', 'REST APIs', 'Sybase IQ'],
      highlights: [
        'Full-stack developer on a mortgage application maintaining Home Price Index, real estate, rental and delinquency data from 9 US banks.',
        'Developed and integrated Angular feature modules from business requirements.',
        'Implemented Java business logic that queries a Sybase database.',
      ],
    },
  ],
  projects: [
    {
      name: 'Angular Karma Test Extension for VS Code',
      summary: 'Open source · 500+ installs',
      highlights: [
        'Built a VS Code extension to discover, run, debug and check coverage for Angular tests, using the VS Code Testing API. It parses spec files with the TypeScript parser, runs tests on a persistent Karma server with a custom reporter streaming results over socket.io, and loads Istanbul coverage into the editor.',
        'Wrote a technical blog post on dev.to explaining the VS Code Testing API and how the extension is built.',
      ],
      links: [
        { label: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=ravitejavattem.angular-testing' },
        { label: 'GitHub', url: 'https://github.com/RaviTejaVattem/vscode-testing-extension' },
        { label: 'Blog post', url: 'https://dev.to/ravitejavattem/custom-angular-and-karma-test-extension-for-vs-code-3b3b' },
      ],
    },
  ],
  education: [
    { institution: 'Jawaharlal Nehru Technological University Kakinada', qualification: 'Electronics and Communication Engineering, B.Tech', period: 'April 2010 – March 2014' },
  ],
  interests: [
    'IoT projects and Linux kernel internals',
    'Cloud computing and software security',
    'Cricket, table tennis, carom and chess',
  ],
} as const satisfies Resume;
