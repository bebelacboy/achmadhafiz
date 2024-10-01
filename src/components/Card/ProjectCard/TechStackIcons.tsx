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
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si"
import Tooltip from "@/components/Tooltip"

type TechStackIconProps = {
  techs: string[]
} & React.ComponentPropsWithoutRef<'ul'>

export default function TechStackIcons({ techs, className }: TechStackIconProps) {
  return (
    <ul className={clsx('flex justify-around', className)}>
      {techs.map((tech) => {
        const currentTech = techIcons[tech];
        return (
          <li key={tech}>
            <Tooltip className="w-36" title={currentTech.name} text={currentTech.description}>
              <currentTech.icon className="h-8 w-8"/>
            </Tooltip>
          </li>)
      })}
    </ul>
  )
}

type TechIcon = {
  icon: IconType,
  name: string,
  description: string
}

type TechIcons = {
  [key: string]: TechIcon
}

const techIcons: TechIcons = {
  react: {
    icon: SiReact,
    name: "ReactJs",
    description: "Javascript library for frontend development"
  },
  flutter: {
    icon: SiFlutter,
    name: "Flutter",
    description: "Dart framework for cross platform app development"
  },
  mysql: {
    icon: SiMysql,
    name: "MySQL",
    description: "A relational DBMS by Oracle"
  },
  spring: {
    icon: SiSpring,
    name: "Spring",
    description: "Java framework for web development"
  },
  bootstrapcss: {
    icon: SiBootstrap,
    name: "Bootstrap",
    description: "CSS framework with components and utility classes"
  },
  postgresql: {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "An open-source relational DBMS"
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind",
    description: "CSS framework with utility classes"
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
    description: "A NoSQL document-based DBMS"
  },
  reactnative: {
    icon: SiReact,
    name: "React Native",
    description: "Javascript framework for cross platform app development"
  },
  django: {
    icon: SiDjango,
    name: "Django",
    description: "Python framework for web development"
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
    description: "Javascript library for state management in frontend app"
  },
  express: {
    icon: SiExpress,
    name: "Express",
    description: "Javascript (Node.js) framework for web development (mainly server/backend)"
  },
  graphql: {
    icon: SiGraphql,
    name: "GraphQL",
    description: "A query language that is capable for fetching data from separate sources in a single query"
  },
}