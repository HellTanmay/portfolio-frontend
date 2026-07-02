import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Languages & Tools",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];