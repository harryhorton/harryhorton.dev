import { Skill } from "../data/skills";
import { Bars } from "./bars";

export const stringsToSkills = (skills: string[]) =>
  skills.map((skill) => ({ name: skill }));

export const Skills = ({ skills }: { skills: Skill[] }) => (
  <ul className="flex flex-wrap">
    {skills
      .sort((a, b) =>
        !!a.star ? -1 : a.level && b.level ? b.level - a.level : 0
      )
      .map((skill) => (
        <li
          className={`bg-sky-600 rounded text-white print:text-black text-sm px-2 mr-2 mb-2 flex items-center`}
          key={skill.name}
        >
          {skill.name}{" "}
          {(skill.star && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 inline-block ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          )) ||
            (skill.level &&
              ((
                <Bars
                  className="w-3 h-3 inline-block ml-1"
                  level={skill.level}
                />
              ) ||
                null))}
        </li>
      ))}
  </ul>
);
