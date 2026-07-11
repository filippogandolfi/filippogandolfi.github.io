// One file to rule the CV. Edit here, the homepage re-renders.
// NOTE: your phone number is deliberately NOT published (bots scrape personal
// sites). Add it back here if you want it public: phone: '+39 ...'

export const profile = {
  name: 'Filippo Gandolfi',
  role: 'Test & Delivery Manager',
  subtitle: 'Robotics and Biomedical Engineer',
  location: 'London (UK) & Turin (IT)',
  emails: ['filippo.gandolfi95@gmail.com', 'f.gandolfi@reply.com'],
  linkedin: 'https://www.linkedin.com/in/filippo-gandolfi',
  intro: `I'm an engineer and Test & Delivery Manager, currently working for Concept Quality UK Reply. I lead testing initiatives and teams across retail, automotive, travel and banking — building automation frameworks, defining test strategies, and coordinating delivery across technical and business stakeholders. I'm comfortable at every altitude: aligning with stakeholders on priorities, coordinating testers day to day, and diving into the technical detail when the situation calls for it.

I studied Biomedical Engineering and then Robotic Engineering while working as a marketing manager, because I've always found it essential to know as much as possible about the world of work. I have big ambitions — I'm a dreamer but down-to-earth, and I know I have to work hard and make mistakes to reach my goals.

Ah, I was forgetting: I'm also a good goalkeeper.`,
};

export const experiences = [
  {
    period: '2021 — today',
    kind: 'full time',
    title: 'Quality Assurance Manager',
    org: 'Reply — Concept Quality UK',
    body: `Leading testing initiatives and teams across retail, automotive, travel and banking clients: building automation frameworks, defining test strategies and coordinating delivery across technical and business stakeholders. Managing international programmes for functional, UI/UX and performance validation, coordinating testers day to day, and driving new approaches integrating AI, ML and Computer Vision into our test automation stack.`,
    tags: ['Test & Delivery Management', 'Test Automation', 'QA', 'Stakeholder Management', 'AI/ML Research'],
  },
  {
    period: '2015 — 2020',
    kind: 'part time',
    title: 'Associate Marketing Manager',
    org: 'Syntonia SpA — Arval partner',
    body: `Managed the website, social media and all local marketing (digital and physical) for a long-term automotive rental company, liaising with digital agencies and the marketing office of the multinational we represented (Arval Lease Italia).`,
    tags: ['Adobe Suite', 'WordPress', 'Final Cut'],
  },
];

export const projectGroups = [
  {
    period: '2023 — today',
    heading: 'R&D at Reply — Concept Quality UK',
    items: [
      {
        name: 'TESS — Generative AI platform for test automation',
        body: 'Leading design and development of an AI-driven end-to-end test automation platform with AI agents (Designer, Healer, Analyst, Coder) covering functional, UI, API and microservices testing. Defining product vision and coordinating cross-functional teams.',
        tags: ['AI Agents', 'Generative AI', 'Test Automation'],
      },
      {
        name: 'uFactory Swift Pro Arm (Ferrari)',
        body: 'A 3-DOF robotic arm performing real touch actions on touchscreens and keyboards, driven via Python SDK and ROS.',
        tags: ['Python', 'ROS'],
      },
      {
        name: 'Autonomous Driving AI POC',
        body: "Proof-of-concept on TurtleBot3 Waffle with AI visual algorithms, alongside the University of Toronto's Self-Driving Cars Specialization.",
        tags: ['Python', 'ROS', 'AI'],
      },
    ],
  },
  {
    period: '2023 — today',
    heading: 'Test & Delivery Management',
    items: [
      {
        name: 'Costco International',
        body: 'Leading test automation for the mobile domain: maintaining and enhancing the Reply framework across Android, iOS and WeChat — 150+ scripts per country, 11 countries, 5 environments. Designed a new performance UI testing framework measuring end-to-end screen transition times.',
        tags: ['Java', 'Appium', 'OpenCV', 'Cucumber'],
      },
      {
        name: 'easyJet holidays — Contact Centre',
        body: 'Test Manager for a cloud-native Amazon Connect solution for the Holiday Operations Centre: test strategy, stakeholder alignment and the full testing lifecycle, with automation covering Lambda behaviours, API contracts and end-to-end agent workflows.',
        tags: ['Amazon Connect', 'AWS Lambda', 'REST/JSON'],
      },
    ],
  },
  {
    period: '2022 — 2023',
    heading: 'Test automation: PM & Senior TA Engineer',
    items: [
      {
        name: 'University of Surrey',
        body: 'New automation framework for APIs and Azure Logic Apps, with full CI/CD traceability from user stories to tests and defects.',
        tags: ['Azure DevOps', 'Logic Apps', 'API Testing'],
      },
      {
        name: "Domino's Pizza",
        body: 'Led the test automation workstream during backend migration: refactored the Cypress regression suite, introduced API-level checks and WireMock service stubbing.',
        tags: ['Cypress', 'JavaScript', 'WireMock'],
      },
      {
        name: 'Monsoon & Accessorize',
        body: 'PM for a no-regression suite over monsoon.co.uk and accessorize.uk using Computer Vision to lower maintenance — ~300 use cases across 3 countries.',
        tags: ['Cucumber', 'Selenium', 'Appium', 'Visual Framework'],
      },
      {
        name: 'GP Recycling & Vorwerk',
        body: 'Led TA for a paper distribution platform (~600 TOSCA test cases) and supported the architecture validating a global e-commerce platform, migrating from Waterfall/TOSCA to Agile/Selenium with an international team.',
        tags: ['TOSCA', 'Selenium', 'Jira'],
      },
    ],
  },
  {
    period: '2021 — 2022',
    heading: 'Visual & AI test engineering',
    items: [
      {
        name: 'Ferrari performance testing',
        body: "Visual framework (OpenCV, Python, Flask) capturing and analysing the Roma infotainment's screens via external cameras — KNN architecture synchronised with CAN messages, touchscreen performance at 60/240 fps.",
        tags: ['OpenCV', 'Python', 'Flask', 'CAN'],
      },
      {
        name: 'Stellantis infotainment & network testing',
        body: 'Tests and CANalyzer simulations on real benches for TBM ECU functionality (FOTA/AOTA, remote diagnostics, ASSIST/SOS, in-vehicle Alexa), extending the visual framework with Cucumber, Selenium and Appium.',
        tags: ['CAN/CAPL', 'Java', 'Selenium', 'Appium'],
      },
      {
        name: 'AI for Intesa Sanpaolo',
        body: 'Graph Neural Networks selecting the most relevant use cases per no-regression run, NLP sentiment analysis, and KNN-based smoke test selection. Adapted the Visual Framework to the whole device farm with a Java/Cucumber architecture testers can use without deep framework knowledge.',
        tags: ['Python', 'GNN', 'NLP', 'Java'],
      },
      {
        name: 'Banca Mediolanum surveys',
        body: 'Python architecture automating a customer profiling survey: reading Excel results, cross-checking via API, and generating the most relevant combinations across 40 questions.',
        tags: ['Python', 'API'],
      },
    ],
  },
];

export const education = [
  {
    period: '2018 — 2020',
    title: "Master's Degree in Robotics Engineering",
    org: 'DIBRIS — University of Genoa',
    note: '110/110',
    body: 'International EU-supported course in advanced and intelligent robotics: mathematical modeling, control engineering, computer engineering, mechanical design. Thesis: an immersive, open-source, wheelchair-accessible driving simulator for people with Spinal Cord Injury, built on CARLA with Unreal Engine and Python, in collaboration with the University of Southern Denmark and the Spinal Unit at Pietra Ligure Hospital.',
  },
  {
    period: '2014 — 2018',
    title: "Bachelor's Degree in Biomedical Engineering",
    org: 'DIBRIS — University of Genoa',
    body: 'Engineering foundations plus medical field basics: electronics, computer science, telecommunications, automatic controls and bio-engineering.',
  },
  {
    period: '2021',
    title: 'Self-Driving Cars Specialization',
    org: 'University of Toronto — Coursera',
    body: 'Architecture and components of a self-driving car software stack, with hands-on work in CARLA and Python.',
  },
];

export const extras = {
  languages: [
    { lang: 'Italian', level: 'native' },
    { lang: 'English', level: 'upper-intermediate (B2)' },
  ],
  // Cards with an `href` become clickable and link to a page or diary post.
  cards: [
    {
      title: 'Curling timer',
      body: `Joined the curling world as a Timer in 2025 at the University Winter Games in Turin — then in 2026 as official timekeeper at the Milano-Cortina Olympic Games!`,
      href: '/blog/2026-02-22-milano-cortina-timekeeper/',
      linkLabel: 'read the story',
    },
    {
      title: 'On stage',
      body: `Between 2016 and 2021 I was a Scientific Animator at the "Festival della Scienza" in Genoa — which taught me how to explain science to a live audience without putting them to sleep.`,
    },
    {
      title: 'Between the posts',
      body: `Fanatic of technology and all electronic devices. Football since childhood: former Pro-Team, now defending amateur-league goals with pride.`,
    },
  ],
};
