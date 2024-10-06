import clsx from "clsx"
import { IconType } from "react-icons"
import {
  SiBootstrap,
  SiDjango,
  SiExpress,
  SiFlutter,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si"
import Tooltip from "@/components/Tooltip"

type TechStackIconProps = {
  techs: string[],
  colorful?: boolean
} & React.ComponentPropsWithoutRef<'ul'>

export default function TechStackIcons({ techs, colorful, className }: TechStackIconProps) {
  return (
    <ul className={clsx('flex justify-around', className)}>
      {techs.map((tech) => {
        const currentTech = techIcons[tech];
        return (
          <li key={tech}>
            <Tooltip className="w-36" title={currentTech.name} text={currentTech.description}>
              <currentTech.icon className={clsx("h-8 w-8", colorful && currentTech.textColor)}/>
            </Tooltip>
          </li>)
      })}
    </ul>
  )
}

type TechIcon = {
  icon: IconType,
  name: string,
  description: string,
  textColor: string,
}

type TechIcons = {
  [key: string]: TechIcon
}

const techIcons: TechIcons = {
  react: {
    icon: SiReact,
    name: "ReactJs",
    description: "Javascript library for frontend development",
    textColor: "text-blue-600"
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "NextJs",
    description: "Javascript fullstack web framework that runs on top of ReactJs",
    textColor: "text-gray-500"
  },
  flutter: {
    icon: SiFlutter,
    name: "Flutter",
    description: "Dart framework for cross platform app development",
    textColor: "text-blue-400"
  },
  mysql: {
    icon: SiMysql,
    name: "MySQL",
    description: "A relational DBMS by Oracle",
    textColor: "text-orange-400"
  },
  spring: {
    icon: SiSpring,
    name: "Spring",
    description: "Java framework for web development",
    textColor: "text-green-500"
  },
  bootstrapcss: {
    icon: SiBootstrap,
    name: "Bootstrap",
    description: "CSS framework with components and utility classes",
    textColor: "text-purple-500"
  },
  postgresql: {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "An open-source relational DBMS",
    textColor: "text-blue-400"
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind",
    description: "CSS framework with utility classes",
    textColor: "text-cyan-400"
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
    description: "A NoSQL document-based DBMS",
    textColor: "text-green-400"
  },
  reactnative: {
    icon: SiReact,
    name: "React Native",
    description: "Javascript framework for cross platform app development",
    textColor: "text-blue-600"
  },
  django: {
    icon: SiDjango,
    name: "Django",
    description: "Python framework for web development",
    textColor: "text-green-600"
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
    description: "Javascript library for state management in frontend app",
    textColor: "text-pink-500"
  },
  express: {
    icon: SiExpress,
    name: "Express",
    description: "Javascript (Node.js) framework for web development (mainly server/backend)",
    textColor: "text-gray-400"
  },
  graphql: {
    icon: SiGraphql,
    name: "GraphQL",
    description: "A query language that is capable for fetching data from separate sources in a single query",
    textColor: "text-pink-600"
  },
}