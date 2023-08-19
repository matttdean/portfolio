import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { Fa500Px, FaCode, FaCodeBranch, FaMousePointer, FaPaintBrush, FaPen, FaPenAlt, FaPenFancy, FaPenNib, FaPencilAlt, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wrantDark from "@/public/wrantDark.png";
import tasker from "@/public/tasker.png";
import websites from "@/public/websites.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Samford University",
    location: "Birmingham, AL",
    description:
      "BFA Graphic Design",
    icon: React.createElement(LuGraduationCap),
    date: "2010-2014",
  },
  {
    title: "The Thomas Agency",
    location: "Dallas, TX",
    description:
      "Designed various projects including, posters, logos, flyers, and advertisements as well as maintained multiple clients.",
    icon: React.createElement(FaPencilAlt),
    date: "2015",
  },
  {
    title: "Health Union",
    location: "Remote",
    description:
      "Here I was able to work with various teams throughout the company to create interactive products that enriched our users while satisfying the needs of our clients. When building products, I was able to work closely with the tech team and grow as a developer through code reviews.",
    icon: React.createElement(FaCodeBranch),
    date: "2016-2023",
  },
  {
    title: "This Could be You",
    location: "Anywhere",
    description:
      "I'm a Front-End Developer & Designer in Greenville, SC. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023+",
  },
] as const;

export const projectsData = [
  {
    title: "wrant",
    description:
      "A writing app that utilizes the Lexical text-editor framework and supports markdown.",
    tags: ["React", "Next.js", "Tailwind", "Appwrite", "Lexical"],
    imageUrl: wrantDark,
    link: "/wrant",
  },
  {
    title: "Tasker",
    description:
      "A todo app with drag and drop functionality and GPT-3.5 integration.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GPT-3.5","Zustand"],
    imageUrl: tasker,
    link: "/tasker",
  },
  {
    title: "Websites",
    description:
      "A collection of websites I've designed, developed, or both.",
    tags: ["HTML", "CSS", "JavaScript", "Web Design", "Ilustration"],
    imageUrl: websites,
    link: "/websites",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "MongoDB",
  "Redux",
  "UI/UX",
  "Shopify",
  "Express",
  "Responsive Web Design",
  "Illustration",
  "Animation",
  "Framer Motion",
] as const;