export const skills = {
  hardSkills: [
    {
      id: 1,
      title: 'Programming Languages', 
      skills: [
        {id: 1, name: 'javascript', image: '/skills/hard-skills/javascript.svg'},
        {id: 2, name: 'typescript', image: '/skills/hard-skills/typescript.svg'}
      ],
    },
    {
      id: 2,
      title: 'Frontend Development', 
      skills: [
        {id: 1, name: 'reactjs', image: '/skills/hard-skills/reactjs.svg'},
        {id: 2, name: 'nextjs', image: '/skills/hard-skills/nextjs.svg'},
        {id: 3, name: 'html', image: '/skills/hard-skills/html.svg'},
        {id: 4, name: 'css', image: '/skills/hard-skills/css.svg'},
        {id: 5, name: 'sass', image: '/skills/hard-skills/sass.svg'},
        {id: 6, name: 'tailwindcss', image: '/skills/hard-skills/tailwindcss.svg'},
        {id: 7, name: 'chakra-ui', image: '/skills/hard-skills/chakra-ui.svg'},
        {id: 8, name: 'material-ui', image: '/skills/hard-skills/material-ui.svg'},
      ],
    },
    {
      id: 3,
      title: 'Backend Development', 
      skills: [
        {id: 1, name: 'nodejs', image: '/skills/hard-skills/nodejs.svg'},
        {id: 2, name: 'expressjs', image: '/skills/hard-skills/expressjs.svg'},
      ],
    },
    {
      id: 4,
      title: 'Database Management', 
      skills: [
        {id: 1, name: 'mongodb', image: '/skills/hard-skills/mongodb.svg'},
        {id: 2, name: 'postgresql', image: '/skills/hard-skills/postgresql.svg'},
        {id: 3, name: 'redis', image: '/skills/hard-skills/redis.svg'},
      ],
    },
    {
      id: 5,
      title: 'Version Control', 
      skills: [
        {id: 1, name: 'git', image: '/skills/hard-skills/git.svg'},
        {id: 2, name: 'github', image: '/skills/hard-skills/github.svg'},
      ],
    },
    {
      id: 6,
      title: 'CI/CD', 
      skills: [
        {id: 1, name: 'github actions', image: '/skills/hard-skills/github.svg'},
        {id: 2, name: 'travis-ci', image: '/skills/hard-skills/travis-ci.svg'},
      ],
    },
    {
      id: 7,
      title: 'Testing', 
      skills: [
        {id: 1, name: 'jest', image: '/skills/hard-skills/jest.svg'},
        {id: 2, name: 'react-testing-library', image: '/skills/hard-skills/react-testing-library.svg'},
        {id: 3, name: 'mocha', image: '/skills/hard-skills/mocha.svg'},
        {id: 4, name: 'nyc', image: '/skills/hard-skills/nyc.svg'},
        {id: 5, name: 'chai', image: '/skills/hard-skills/chai.svg'},
      ],
    },
    {
      id: 8,
      title: 'Others', 
      skills: [
        {id: 1, name: 'redux', image: '/skills/hard-skills/redux.svg'},
        {id: 2, name: 'zod', image: '/skills/hard-skills/zod.svg'},
        {id: 3, name: 'firebase', image: '/skills/hard-skills/firebase.svg'},
        {id: 4, name: 'vercel', image: '/skills/hard-skills/vercel.svg'},
        {id: 5, name: 'aws', image: '/skills/hard-skills/aws.svg'},
      ],
    },
  ],
  softSkills: [
    {id: 1, name: 'problem-solving', image: '/skills/soft-skills/problem-solving.svg'},
    {id: 2, name: 'collaboration', image: '/skills/soft-skills/collaboration.svg'},
    {id: 3, name: 'communication', image: '/skills/soft-skills/communication.svg'},
  ]
}

export const services = [
  {
    id: 1,
    title: 'Build Software Applications for the Web',
    content: "With over 4 years of software development experience, I contribute to building robust, scalable, and user friendly applications that solves user's problems. Checkout the portfolio section of this site to see some of my projects.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
    `
  },
  {
    id: 2,
    title: 'Digital Marketing',
    content: "This is a new area. I try to increase brand awareness, drive traffic, generate leads, and ultimately, convert leads into customers or clients.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  `
  }
]

export const portfolio = [
  {
    id: 1,
    title: 'Nexaya Frontend Assessment',
    content: "A Nexaya frontend assessment task.",
    githubLink: 'https://github.com/emma50/nexaya-frontend-assessment',
    githubIcon: '/skills/hard-skills/github.svg',
    link: 'https://nexaya-frontend-assessment.vercel.app/login',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Private',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Nextjs'
      },
      {
        id: 4,
        name: 'Tailwindcss'
      },
    ]
  },
  {
    id: 2,
    title: 'Shopps',
    content: 'A standard e-commerce platform',
    githubLink: 'https://github.com/emma50/shopps',
    githubIcon: '/skills/hard-skills/github.svg',
    link: 'https://shopps.vercel.app/',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Nextjs'
      },
      {
        id: 4,
        name: 'NextAuth'
      },
      {
        id: 5,
        name: 'Sass'
      },
      {
        id: 6,
        name: 'Stripe'
      },
      {
        id: 7,
        name: 'Paypal'
      },
      {
        id: 8,
        name: 'MongoDB'
      },
      {
        id: 9,
        name: 'Vercel'
      }
    ]
  },
  {
    id: 3,
    title: 'Quick Credit API',
    content: 'quick-credit-api is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.',
    githubLink: 'https://github.com/emma50/quick-credit-api',
    githubIcon: '/skills/hard-skills/github.svg',
    link: '',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'Nodejs'
      },
      {
        id: 3,
        name: 'JWT'
      },
      {
        id: 4,
        name: 'Travisci'
      },
      {
        id: 5,
        name: 'Expressjs'
      },
      {
        id: 6,
        name: 'Postgresql'
      },
    ]
  },
  {
    id: 4,
    title: 'Expensify',
    content: 'An expense tracker',
    githubLink: 'https://github.com/emma50/expensify',
    githubIcon: '/skills/hard-skills/github.svg',
    link: '',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Firebase'
      },
    ]
  },
  {
    id: 5,
    title: 'Ticket booking',
    content: 'A mini ticket booking service.',
    githubLink: 'https://github.com/emma50/ticket-booking',
    githubIcon: '/skills/hard-skills/github.svg',
    link: '',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Typescript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Nextjs'
      },
      {
        id: 4,
        name: 'Nodejs'
      },
      {
        id: 5,
        name: 'Expressjs'
      },
      {
        id: 6,
        name: 'NATS streaming server'
      },
      {
        id: 7,
        name: 'MongoDB'
      },
      {
        id: 8,
        name: 'Github Actions'
      },
      {
        id: 9,
        name: 'Stripe',
      },
      {
        id: 10,
        name: 'Bull'
      },
      {
        id: 11,
        name: 'Docker'
      },
      {
        id: 12,
        name: 'Kubernetes'
      },
      {
        id: 13,
        name: 'Nginx'
      },
      {
        id: 14,
        name: 'Skaffold'
      },
      {
        id: 15,
        name: 'Microservice'
      },
      {
        id: 16,
        name: 'Redis'
      },
    ]
  },
  {
    id: 6,
    title: 'E-commerce',
    content: 'A is a simple e-commerce application programming interface.',
    githubLink: 'https://github.com/emma50/e-commerce',
    githubIcon: '/skills/hard-skills/github.svg',
    link: '',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'Babel'
      },
      {
        id: 3,
        name: 'Eslint'
      },
      {
        id: 4,
        name: 'MongoDB'
      },
      {
        id: 5,
        name: 'Mongoose'
      },
      {
        id: 6,
        name: 'Twilio'
      },
      {
        id: 7,
        name: 'Expressjs'
      },
      {
        id: 8,
        name: 'Nodemailer'
      },
      {
        id: 9,
        name: 'Airbnb'
      },
      {
        id: 10,
        name: 'Redis'
      },
    ]
  },
  {
    id: 7,
    title: 'Zuri plugin youtube music video',
    content: 'A youtube plugin music video for zuri application',
    githubLink: 'https://github.com/emma50/zc_plugin_youtube_music_video',
    githubIcon: '/skills/hard-skills/github.svg',
    link: '',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Private',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Redux'
      },
      {
        id: 4,
        name: 'Styled Components'
      },
    ]
  },
  {
    id: 8,
    title: 'Random Quote Machine',
    content: 'An application that randomly generates quote',
    githubLink: 'https://github.com/emma50/random-quote-machine',
    githubIcon: '/skills/hard-skills/github.svg',
    link: 'https://emma50.github.io/random-quote-machine/',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Public',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'css'
      },
      {
        id: 3,
        name: 'Font Awesome'
      },
    ]
  },
  {
    id: 9,
    title: 'Funconnect Hub',
    content: "Funconnect is an app that allow users seamlessly navigate recreational centres around them, plan a trip efficiently and create events for link-up with friends.",
    githubLink: '',
    githubIcon: '/skills/hard-skills/github.svg',
    link: 'https://main.d2uha1mup3vsuv.amplifyapp.com/',
    linkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  `,
    status: 'Private',
    stack: [
      {
        id: 1,
        name: 'Javascript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Nextjs'
      },
      {
        id: 4,
        name: 'Iron session'
      },
      {
        id: 5,
        name: 'Sass'
      },
      {
        id: 6,
        name: 'MongoDB'
      },
    ]
  },
]