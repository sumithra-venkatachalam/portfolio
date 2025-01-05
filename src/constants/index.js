import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  foodieapp,
  quizapp,
  expenseapp,
  threejs,
  vuram,
  workhall,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "UI/UX",
    icon: mobile,
  },
  {
    title: "Testing/Debugging",
    icon: backend,
  },
  {
    title: "Responsive Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Associate Technical Consultant(Intern)",
    company_name: "WNS Vuram, Chennai",
    icon: vuram,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "Assist in the design, development, and deployment of applications on the Appian platform, focusing on departmental presale notices and loan request management systems.",
      "Document best practices and lessons learned to facilitate knowledge sharing.",
    ],
  },
  {
    title: "Associate Quality Engineer",
    company_name: "Workhall, Chennai",
    icon: workhall,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Develop and execute test cases, and test plans based on requirements.",
      "Work closely with cross-functional teams, including developers, product managers, and UX designers, to ensure quality throughout the software development lifecycle.",
      "Stay updated on quality assurance trends and tools to enhance skill sets.",
      "Collaborate with development teams to reproduce issues and verify fixes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Foodie App",
    description:
      "Created a comprehensive restaurant app that enables users to discover, review, and order from local dining establishments effortlessly",
    tags: [
      {
        name: "html & css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: foodieapp,
    source_code_link: "https://github.com/sumithra-venkatachalam/foodie-app/",
    project_link: "https://sumithra-venkatachalam.github.io/foodie-app/"
  },
  {
    name: "Quiz App",
    description:
      "Designed an engaging quiz app that allows users to test their knowledge across various subjects with interactive and dynamic quizzes.",
    tags: [
      {
        name: "html & css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://github.com/sumithra-venkatachalam/quiz-app/",
    project_link: "https://sumithra-venkatachalam.github.io/quiz-app/"
  },
  {
    name: "Expense Tracker",
    description:
      "Built an intuitive expense tracker app that helps users manage their finances by tracking spending habits and generating insightful reports.",
    tags: [
      {
        name: "html & css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: expenseapp,
    source_code_link: "https://github.com/sumithra-venkatachalam/expense-tracker/",
    project_link: "https://sumithra-venkatachalam.github.io/expense-tracker/"
  },
];

export { services, technologies, experiences, testimonials, projects };
