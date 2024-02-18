import { Html } from "@react-three/drei";
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
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "HTML",
      company_name: "HTML5",
      icon: html,
      iconBg: "#383E56",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Have experience creating the structure of web pages using HTML.",
        "Familiarity with essential HTML tags and attributes for content organization.",
        "Implementing responsive design and ensuring browser compatibility.",
        "Started incorporating semantic HTML for better accessibility and SEO.",
      ],
    },
    {
      title: "CSS",
      company_name: "CSS3",
      icon: css,
      iconBg: "#383E56",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Applied basic styling to HTML elements using CSS.",
        "Used class and ID selectors for targeted styling.",
        "Implementing responsive design and ensuring browser compatibility.",
        "Skilled in implementing responsive design principles using media queries.",
      ],
    },
    {
      title: "JavaScript",
      company_name: "JavaScript",
      icon: javascript,
      iconBg: "#383E56",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Proficient in manipulating the Document Object Model (DOM) to dynamically update web content.",
        "Experienced in creating, appending, and modifying HTML elements using JavaScript.",
        "Experienced in handling asynchronous operations for efficient data loading.",
        "Capable of handling user interactions and responding to events with event listeners.",
      ],
    },
    {
      title: "React",
      company_name: "React.Js",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Proficient in building modular and reusable components with React.",
        "Experienced in passing props and managing state to create dynamic and interactive UIs.",
        "Skilled in managing component state using React's built-in state and setState.",
        "Knowledgeable about React component lifecycle methods and their applications.",
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
      name: "Travel Website",
      description:
        "A captivating travel website crafted with HTML, CSS, and Bootstrap, offering a seamless user experience with responsive design, engaging visuals, and intuitive navigation for exploring exciting destinations.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lambhorghini Clone",
      description:
        "An impressive Lamborghini-inspired clone website meticulously designed using HTML, CSS, and Bootstrap, showcasing the iconic car's elegance through sleek layouts, dynamic animations, and a visually striking user interface.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Steve Jobs Portfolio",
      description:
        "A tribute to Steve Jobs' legacy, this HTML, CSS, and Bootstrap portfolio elegantly captures his visionary spirit with a clean design, minimalist aesthetics, and a focus on showcasing his impactful achievements and innovations.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };