import { HiOutlineMail } from "react-icons/hi";
import {
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import appIcon from "./assets/icon-app.svg";
import webIcon from "./assets/icon-dev.svg";
import uiIcon from "./assets/icon-design.svg";
import backendIcon from "./assets/icon-backend.svg";

export const Name = "Manish Shakya";
export const Profession = "Full Stack Developer";
export const About =
  "I am a Full Stack Developer with a passion for building web applications. I love to learn new technologies and improve my skills. I have experience in both frontend and backend development, and I am always looking for new challenges.";
export const Skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Bootstrap",
];
export const SocialLinks = [
  {
    title: "LinkedIn",
    icon: IoLogoLinkedin,
    url: "https://www.linkedin.com/in/manish-shakya-7a763a232/",
  },
  {
    title: "Instagram",
    icon: IoLogoInstagram,
    url: "https://www.instagram.com/manish_tech_hacker/",
  },
  {
    title: "GitHub",
    icon: IoLogoGithub,
    url: "https://github.com/Manish-Shakya-64",
  },
];

export const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export const services = [
  {
    title: "Mobile Apps",
    description:
      "Professional development of applications for Android and ios.",
    icon: appIcon,
  },
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    icon: webIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "The most modern and high-quality design made at a professional level.",
    icon: uiIcon,
  },
  {
    title: "Backend Development",
    description:
      "High-performance backend services designed for scalability and seamless user experience.",
    icon: backendIcon,
  },
];

export const experiences = {
  name: "Experience",
  items: [
    {
      id: 1,
      position: "Software Intern",
      company: "Arastu Systems Pvt. Ltd.",
      duration: "Jan, 2025 — Present",
      durationLabel: "4 mos",
      location: "Ahmedabad, Gujarat, India",
      responsibilities: [
        "Learned about the basics of C# and .NET Framework.",
        "Learned about the basics of SQL Server and Entity Framework.",
        "Learned about the basics of ASP.NET MVC and ASP.NET Web API.",
        "Developed new features and transformed UI designs into fully functional user interfaces.",
        "Developed a web application for a client using ASP.NET MVC and ASP.NET Web API.",
      ],
    },
    {
      id: 2,
      position: "Full Stack Intern",
      company: "Syndell Technologies",
      duration: "May, 2023 — Aug, 2023",
      durationLabel: "4 mos",
      location: "Ahmedabad, Gujarat, India",
      responsibilities: [
        "Developed new features and implemented UI designs into code using React and Tailwind CSS.",
        "Designed and created custom e-form features including scrolling features and data entries.",
        "Integrated Google and Facebook sign-in for user authentication.",
        "Integrated APIs for seamless data communication and backend functionality.",
        "Collaborated with other developers and backend team to deliver features.",
        "Participated in team meetings to discuss new features and project updates.",
        "Ensured smooth functionality and user-friendly experiences throughout the app.",
        "Performed code review and deployed the app in Playstore and Appstore.",
      ],
    },
    {
      id: 1,
      position: "Summer Intern",
      company: "Arastu Systems Pvt. Ltd.",
      duration: "June, 2022 — July, 2022",
      durationLabel: "2 mos",
      location: "Ahmedabad, Gujarat, India",
      responsibilities: [
        "Learned about the basics of React and Node.",
        "Learned about the basics of MongoDB and MySQL.",
        "Learned about the basics of Git and GitHub.",
        "Developed new features and transformed UI designs into fully functional user interfaces.",
      ],
    },
  ],
};

export const education = {
  name: "Education",
  items: [
    {
      id: 1,
      position: "Government MCA College Maninagar (GTU)",
      company: "Master of Computer Applications",
      duration: "2023 — 2025",
      durationLabel: "8.5 CGPA",
      location: "Ahmedabad, Gujarat, India",
    },
    {
      id: 2,
      position: "Navgujarat College of Computer Applicatioons (GU)",
      company: "Bachelor of Computer Applications",
      duration: "2020 — 2023",
      durationLabel: "7.98 CGPA",
      location: "Ahmedabad, Gujarat, India",
    },
    {
      id: 3,
      position: "Vivekanand Hindi Hign School",
      company: "HSC",
      duration: "2018 — 2020",
      durationLabel: "78%",
      location: "Ahmedabad, Gujarat, India",
    },
    {
      id: 4,
      position: "Shivam Vidhyalaya",
      company: "SSC",
      duration: "2016 — 2018",
      durationLabel: "74%",
      location: "Ahmedabad, Gujarat, India",
    },
  ],
};
