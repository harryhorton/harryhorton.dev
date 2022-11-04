export type JobDetail = {
  content: string;
};

export type JobHistory = {
  name: string;
  from?: string;
  to?: string;
  description?: string;
  location?: string;
  remote?: boolean;
  details?: string[];
  role?: string;
  stack?: string[];
  type?: "salaried" | "contract" | "owner";
};

export const jobHistory: JobHistory[] = [
  {
    name: "Restaurant Brands International",
    type: "contract",
    from: "11/2019",
    to: "11/2022",
    role: "Software Engineer",
    remote: true,
    location: "Miami, FL",
    description:
      "Worked on cross brand application code for Burger King, Tim Horton's, and Popeyes.",
    stack: [
      "Typescript",
      "React",
      "React Native",
      "NodeJs",
      "Cypress",
      "Storybook",
      "AWS",
      "Sanity.io",
    ],
    details: [
      "Designed and developed Universal Component Library as part of a small team creating reusable components, themes, and tools to improve standardization and quality of cross-brand code for React Native and web.",
      "Took the lead on developing custom Cypress tooling to allow developers to more easily maintain e2e tests in a flaky cloud environment.",
      "Developer lead on WDIO/Appium, React Native testing, and QA team-focused tooling.",
      "Maintained various CircleCI workflows making additions and improvements to CI/CD pipelines.",
      "Worked with Sanity.io to move much of the application control and content into a CMS.",
      "Collaborated on initiatives for frontend improvement and standardization.",
      "Developed features using React, TypeScript, GraphQL, and an AWS serverless stack.",
      "Built single codebase features that worked across multiple brands, device types, and regions.",
      "Worked on apps that serve tens of millions of active international users",
    ],
  },
  {
    name: "(Company focused on many products associated with games)",
    type: "contract",
    role: "Software Engineer",
    stack: [
      "VueJs",
      "Nuxt",
      "NodeJs",
      "Heroku",
      "Facebook Instant Apps",
      "React",
      "Prismic",
    ],
    description: "Assisted with various projects focused on games.",
    from: "4/2022",
    to: "7/2022",
    details: [
      "Helped make improvements to features",
      "Rewrote Ads code with a focus on performance and analytics",
      "Focused on improving loading performance",
      "Evaluated move to next version of Nuxt comparing pros/cons of timing",
    ],
    remote: true,
  },
  {
    name: "GigWage",
    type: "contract",
    description:
      "Developed a client NPM package for a product focused on Contractor Payments",
    remote: true,
    from: "2/2022",
    to: "5/2022",
    role: "Software Engineer",
    stack: ["NodeJs", "Typescript", "REST"],
    details: [
      "Planned phased development plan for the project",
      "Developed NPM package to help their internal and external devs access their APIs",
    ],
  },
  {
    name: "Picket LTD",
    type: "contract",
    description:
      "Refactoring of a product that helped Australians find financial planners",
    location: "Australia",
    remote: true,
    from: "3/2021",
    to: "9/2021",
    stack: [
      "NodeJs",
      "NestJs",
      "Typescript",
      "React",
      "Firebase",
      "Heroku",
      "REST",
    ],
    role: "Software Engineer",
    details: [
      "Rewrote backend from Flow using a deprecated functional library to NestJs and Typescript",
      "Refactored the logic to make it more maintainable",
      "Fixed numerous bugs as a result of the rewrite",
    ],
  },
  {
    name: "Hive V.O.C.",
    type: "contract",
    role: "CTO",
    location: "St. Petersburg, FL",
    remote: true,
    description:
      "Assisted with managing the engineering side of a company focused on Restaurant staff education.",
    from: "3/2019",
    to: "6/2019",
    stack: ["Laravel", "Vue", "REST"],
    details: [
      "Responsible for managing remote developers on Hive University.",
      "Implemented or created plans for implementing support, project management, and analytics solutions.",
      "Used Adobe XD to redesign major sections of the University.",
      "Assisted with development issues.",
    ],
  },
  {
    name: "Callyo",
    type: "salaried",
    role: "Software Engineer",
    from: "4/2018",
    to: "11/2019",
    description: "Worked on intelligence and public safety applications.",
    stack: [
      "Typescript",
      "React",
      "Vue",
      "PHP",
      "Symfony",
      "NodeJs",
      "NextJs",
      "REST",
      "Websockets",
    ],
    location: "Undisclosed",
    remote: true,
    details: [
      "Lead developer on new i911 location product for streaming emergency location data, tracking, and sharing with emergency responders (NestJs, TypeScript, Vue).",
      "Developed new features and maintained special intelligence-related project. (React, TypeScript)",
      "Developed new (second) special intelligence project from the ground up. (Node, Vue)",
      "Worked heavily with highly secure encrypted data. (PHP)",
      "Leveraged a range of  AWS services for application development.",
      "Lead the charge for implementing Docker for improved local development, CI pipelines, and production services.",
      "Implemented testing (e2e and unit) and taught the team how to do the same on their projects (Puppeteer, Jest).",
      "Lead efforts and planning for implementing a common UI style guide and component library approach for design, and cross platform and framework components",
      "Worked with product owner to implement analytics and data related user outreach.",
      "Implemented Adobe Experience Design for using design to more effectively plan and prototype new features.",
    ],
  },
  {
    name: "The Symphony Agency",
    type: "salaried",
    role: "Developer 3",
    location: " St. Petersburg, FL",
    from: "11/2015",
    to: "04/2018",
    stack: [
      "WordPress",
      "Laravel",
      "NodeJS",
      "SCSS",
      "PHP",
      "JavaScript",
      "TypeScript",
      "VueJs",
      "jQuery",
      "Digital Ocean",
      "Docker",
      "REST",
    ],
    description:
      "Worked on a very small team of devs for a marketing and web development agency. Continued contracting for a bit after leaving.",
    details: [
      "Developed custom component system to ease WordPress content management and move control from devs to the rest of the team.",
      "Lead the drive in implementing Laravel for custom API and application development.",
      "Built Laravel API for integration with 3rd party applications.",
      "Improved performance of all sites to subsecond load times.",
      "Built Google OAuth plugin to assist company with login management.",
      "Developed many custom WordPress themes and plugins from the ground up.",
      "Developed custom NodeJs tooling to handle data migrations and mass content format conversions.",
      "Performed all site migrations, deployments, and DNS management.",
      "Implemented Atlassian Jira and Bitbucket into development and QA workflow.",
      "Built custom Docker image for rapid local development.",
      "Built SPA WordPress theme using VueJs",
      "Assisted in implementing a component based approach to design and development.",
      "Developed JS breakpoint library for handling screen size dependent JS layout functionality.",
      "Improved stack to include Webpack, es6, Vue, and Sass.",
      "Researched and implemented custom Google Tag Manager and Google Analytics events to improve client engagement tracking.",
      "Built e-commerce websites using WooCommerce and custom modifications.",
    ],
  },
  {
    name: "Accusoft",
    type: "salaried",
    role: "Tech Support Representative",
    location: "Tampa, FL",
    from: "01/2015",
    to: "11/2015",
    stack: ["PHP", "JavaScript", "NodeJs", "C#", ".NET", "Azure"],
    description:
      "Supported developers in integrating Accusoft imaging and document viewing SDKs and services into their products",
    details: [
      "Support developers and system administrators in installation of Accusoft products.",
      "Created code samples for NodeJS integrations",
      "Created a barcode application for use by the IT team using Accusoft's SDKs",
      "Responsible for supporting all Accusoft Cloud tickets",
      "Worked with management to set up new Zendesk as a ticketing replacement",
    ],
  },
  {
    name: "Titan Corps IT Solutions",
    role: "CTO/Co-founder",
    type: "owner",
    location: "Clearwater, FL",
    from: "08/2012",
    to: "12/2014",
    description:
      "Started a Managed Service Provider for managing local company networks.",
    details: [
      "Design, manage, and promote all technical services provided.",
      "Responsible for all company projects’ planning and service delivery.",
      "Responsible for quality control of ticket handling.",
      "Managed company finances and invoicing.",
      "Managed contractors assisting with various aspects of projects.",
    ],
  },
  {
    name: "(A dentist office staff training company)",
    role: "Web Developer",
    type: "salaried",
    from: "01/2013",
    to: "06/2014",
    location: "Clearwater, FL",
    stack: ["WordPress", "PHP", "Python", "Django"],
    details: [
      "Responsible for analysis, redesign, and development of web presence.",
      "Redesign new Wordpress theme and develop the new company website.",
      "Work with marketing team to progressively enhance company style and marketing strategy.",
    ],
  },
  {
    name: "Vitera Healthcare Solutions",
    type: "salaried",
    location: "Tampa, FL",
    from: "06/2012",
    to: "08/2012",
    details: [
      "Remote into hospital/practice servers to make various configuration changes and troubleshooting.",
      "Consolidate data from various CRMs and lists into SalesForce.",
      "Created automation script for moving data across systems.",
    ],
  },
  {
    name: "United States Marine Corps",
    type: "salaried",
    role: "LCpl Tactical Data/Network Specialist",
    from: "04/2010",
    to: "09/2011",
    description:
      "Serviced in the US Marine Corps working in Cyber with a focus on field operations.",
    details: [
      "Strong role in planning, preparation, and execution of field communication support exercises in Colombia, Guatemala, and Belize ranging from simple remote camps to full-scale Command Operations Center implementations.",
      "Set up secondary satellite communications on ship to maintain Internet connectivity due to loss of main satellite up-link, requiring constant adjustment and monitoring to ensure persistent connection.",
      "Responsible for setup and troubleshooting of networks and peripherals under tight time restraints in various environments.",
      "Worked in a fast-paced help desk environment, supporting over 500 users.",
      "Routinely constructed and configured Combat Operations Center totalling over $1.8 million in equipment ranging from fiber optics, servers, switches to radios, VOIP, and multimedia devices.",
    ],
  },
];