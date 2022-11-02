export type Skill = {
  name: string;
  level?: 1 | 2 | 3;
  star?: boolean;
  type?:
    | "language"
    | "tool"
    | "concept"
    | "protocol"
    | "platform"
    | "framework";
};

export const languages: Skill[] = [
  {
    name: "Typescript",
    level: 3,
    type: "language",
    star: true,
  },
  {
    name: "Javascript",
    level: 3,
    type: "language",
    star: true,
  },
  {
    name: "PHP",
    level: 2,
    type: "language",
  },
  {
    name: "C#",
    level: 1,
    type: "language",
  },
];

export const platforms: Skill[] = [
  {
    name: "NodeJs",
    level: 3,
    type: "platform",
    star: true,
  },
  {
    name: "Firebase",
    level: 2,
    type: "tool",
  },
  {
    name: "AWS",
    level: 1,
    type: "tool",
  },
  {
    name: "Digital Ocean",
    level: 1,
    type: "tool",
  },
  {
    name: "Web",
    level: 3,
    type: "platform",
    star: true,
  },
  {
    name: "Mobile (RN)",
    level: 2,
    type: "platform",
    star: true,
  },
  {
    name: "Mobile (web)",
    level: 3,
    type: "platform",
    star: true,
  },
  {
    name: "Unity3d",
    level: 1,
    type: "platform",
  },
];

export const frameworks: Skill[] = [
  {
    name: "ReactJs",
    level: 3,
    type: "framework",
    star: true,
  },
  {
    name: "VueJs",
    level: 3,
    type: "framework",
    star: true,
  },
  {
    name: "NestJs",
    level: 3,
    type: "framework",
    star: true,
  },
  {
    name: "NextJs",
    level: 2,
    type: "framework",
  },
  {
    name: "Nuxt",
    level: 2,
    type: "framework",
  },
  {
    name: "Laravel",
    level: 2,
    type: "framework",
  },
];

export const tools: Skill[] = [
  {
    name: "React Native",
    level: 2,
    type: "tool",
  },
  {
    name: "Storybook",
    level: 3,
    type: "tool",
  },
  {
    name: "Cypress",
    level: 3,
    type: "tool",
  },
  {
    name: "Jest",
    level: 3,
    type: "tool",
  },
  {
    name: "Mocha",
    level: 3,
    type: "tool",
  },
  {
    name: "CircleCI",
    level: 2,
    type: "tool",
  },
  {
    name: "Github Actions",
    level: 2,
    type: "tool",
  },
  {
    name: "Sanity.io",
    level: 2,
    type: "tool",
  },
  {
    name: "Prismic",
    level: 1,
    type: "tool",
  },
  {
    name: "WordPress",
    level: 3,
    type: "tool",
  },
  {
    name: "LaunchDarkly",
    level: 2,
    type: "tool",
  },
  {
    name: "Prisma",
    level: 2,
    type: "tool",
  },
  {
    name: "TypeORM",
    level: 2,
    type: "tool",
  },
  {
    name: "D3",
    level: 1,
    type: "tool",
  },
  {
    name: "ThreeJS",
    level: 2,
    type: "tool",
  },
];

export const protocols: Skill[] = [
  {
    name: "REST",
    level: 3,
    type: "protocol",
  },
  {
    name: "GraphQL",
    level: 2,
    type: "protocol",
  },
  {
    name: "Websockets",
    level: 2,
    type: "protocol",
  },
  {
    name: "IPFS",
    level: 1,
    type: "tool",
  },
];

export const databases: Skill[] = [
  {
    name: "Postgres",
    level: 2,
    type: "protocol",
  },
  {
    name: "MySQL",
    level: 2,
    type: "protocol",
  },
  {
    name: "Mongo",
    level: 2,
    type: "protocol",
  },
  {
    name: "Sqlite",
    level: 2,
    type: "protocol",
  },
  {
    name: "Firestore",
    level: 2,
    type: "protocol",
  },
  {
    name: "Dynamo",
    level: 2,
    type: "protocol",
  },
];

export const concepts: Skill[] = [];

export const skills: Skill[] = [
  ...languages,
  ...platforms,
  ...frameworks,
  ...databases,
  ...tools,
  ...protocols,
  ...concepts,
  {
    name: "Sweating during DB migrations",
    level: 3,
    type: "concept",
  },
];
