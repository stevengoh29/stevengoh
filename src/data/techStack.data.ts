import NestLogo from '../assets/images/projects/logo-nest.png'
import ExpressLogo from "../assets/images/projects/express.png";
import MongoLogo from "../assets/images/projects/mongodb.png";
import MysqlLogo from "../assets/images/projects/mysql.png";
import ExpoLogo from "../assets/images/projects/expo.png";
import SpringLogo from "../assets/images/projects/spring.png";
import SqlLogo from "../assets/images/projects/sqlserver.png";
import SQLiteLogo from "../assets/images/projects/sqlite.png";
import SentryLogo from "../assets/images/projects/sentry.png";
import OneSignalLogo from "../assets/images/projects/one-signal.png";

// Frontend logo
import { CssIcon, HtmlIcon, JavaScriptIcon, MuiIcon, NextJsIcon, ReactIcon, ReduxIcon, SassIcon, ShadcnUiIcon, TailwindCssIcon, TypeScriptIcon } from '../assets/icons/frontend'

// Backend Logo
import { ExpressIcon, FirebaseIcon, JavaIcon, MongodbIcon, MysqlIcon, NestJsIcon, NodeJsIcon, SpringIcon, SqlServerIcon } from '../assets/icons/backend'

import { GitIcon, GithubIcon, GitlabIcon, UbuntuIcon, VercelIcon, DockerIcon, KubernetesIcon, OpenshiftIcon } from '../assets/icons/others';


import { StaticImageData } from 'next/image';

type Logo = {
  source: StaticImageData; // Path to the logo source
  width: number;
  height: number;
  label: string;
};

// Define the structure for each category (e.g., Mobile, Frontend, Backend)
export type TechStackCategory = {
  [key: string]: Logo[];
};

// Define the type for the entire tech stack object
type TechStackLogoByCategory = {
  Mobile: Logo[];
  Frontend: Logo[];
  Backend: Logo[];
  Others: Logo[]
};

export const TECH_STACK_LOGO_BY_CATEGORY: TechStackLogoByCategory = {
  Mobile: [
    {
      source: ReactIcon,
      width: 96,
      height: 96,
      label: "React Native",
    },
    {
      source: ExpoLogo,
      width: 96,
      height: 96,
      label: "Expo",
    },
    {
      source: SQLiteLogo,
      width: 96,
      height: 96,
      label: "SQLite",
    },
    {
      source: SentryLogo,
      width: 96,
      height: 96,
      label: "Sentry",
    },
    {
      source: OneSignalLogo,
      width: 96,
      height: 96,
      label: "OneSignal",
    },
  ],
  Frontend: [
    {
      source: NextJsIcon,
      width: 96,
      height: 96,
      label: "NextJS",
    },
    {
      source: ReactIcon,
      width: 96,
      height: 96,
      label: "ReactJS",
    },
    {
      source: ReduxIcon,
      width: 96,
      height: 96,
      label: "Redux",
    },
    {
      source: TailwindCssIcon,
      width: 96,
      height: 96,
      label: "Tailwind",
    },
    {
      source: ShadcnUiIcon,
      width: 96,
      height: 96,
      label: "Shadcn UI",
    },
    {
      source: TypeScriptIcon,
      width: 96,
      height: 96,
      label: "Typescript",
    },
    {
      source: JavaScriptIcon,
      width: 96,
      height: 96,
      label: "Javascript",
    },
    {
      source: HtmlIcon,
      width: 96,
      height: 96,
      label: "HTML",
    },
    {
      source: CssIcon,
      width: 96,
      height: 96,
      label: "CSS",
    },
    {
      source: SassIcon,
      width: 96,
      height: 96,
      label: "Sass",
    },
  ],
  Backend: [
    {
      source: SpringIcon,
      width: 96,
      height: 96,
      label: "Spring",
    },
    {
      source: JavaIcon,
      width: 96,
      height: 96,
      label: "Java",
    },
    {
      source: NodeJsIcon,
      width: 96,
      height: 96,
      label: "NodeJs",
    },
    {
      source: NestJsIcon,
      width: 90,
      height: 90,
      label: "NestJs",
    },
    {
      source: ExpressIcon,
      width: 96,
      height: 96,
      label: "ExpressJs",
    },
    {
      source: MysqlIcon,
      width: 96,
      height: 96,
      label: "MySQL",
    },
    {
      source: SqlServerIcon,
      width: 120,
      height: 120,
      label: "Ms. SQL Server",
    },
    {
      source: MongodbIcon,
      width: 96,
      height: 96,
      label: "MongoDB",
    },
    {
      source: FirebaseIcon,
      width: 96,
      height: 96,
      label: "Firebase",
    },
  ],
  Others: [
    {
      source: GitIcon,
      width: 96,
      height: 96,
      label: "Git",
    },
    {
      source: GithubIcon,
      width: 96,
      height: 96,
      label: "GitHub",
    },
    {
      source: GitlabIcon,
      width: 96,
      height: 96,
      label: "GitLab",
    },
    {
      source: UbuntuIcon,
      width: 96,
      height: 96,
      label: "Ubuntu",
    },
    {
      source: VercelIcon,
      width: 96,
      height: 96,
      label: "Vercel",
    },
    {
      source: GitlabIcon,
      width: 96,
      height: 96,
      label: "GitLab CI/CD",
    },
    {
      source: DockerIcon,
      width: 96,
      height: 96,
      label: "Docker",
    },
    {
      source: OpenshiftIcon,
      width: 96,
      height: 96,
      label: "Openshift",
    },
    {
      source: KubernetesIcon,
      width: 96,
      height: 96,
      label: "Kubernetes",
    }
  ]
};
