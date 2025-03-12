import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "The Hindu Senior Secondary School",
    location: "Chennai, India",
    description: "I completed my High School Graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2023",
  },
  {
    title: "SRM Easwari Engineering College",
    location: "Chennai, India",
    description:
      "I am currently completing my UnderGraduate Studies in the field of Computer Science and Engineering",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2027",
  },
  {
    title: "BLockchain Research Intern",
    location: "Chennai, India",
    description:
      "I'm now a Blockchain Research Intern. Leading a team of Blockchain Interns",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Rust",
  "Solidity",
  "Ether/Web3.js",
  "C",
  "C++",
  "Java",
  "SQL",
  "AWS",
  "EC2",
  "ZenML",
  "Docker",
  "Nginx",
  "Linux",
  "GitHub",
  "Vercel",
] as const;
