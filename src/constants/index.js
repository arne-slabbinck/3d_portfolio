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
    meta,
    starbucks,
    tesla,
    shopify,
    drupal,
    mct,
    mctblack,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      // title: "React.js Developer",
      title: "Multimedia & Communication Technology",
      company_name: "HOWEST Hogeschool Kortrijk",
      icon: mctblack,
      // iconBg: "#383E56",
      iconBg: "#ffffff",
      // date: "March 2020 - April 2021",
      date: "Sep 2008 - June 2011",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      // title: "React Native Developer",
      title: "Backend Developer",
      company_name: "VDAB",
      icon: html,
      // iconBg: "#E6DEDD",
      iconBg: "#383E56",
      // date: "Jan 2021 - Feb 2022",
      date: "Sep 2013 - June 2015",
      points: [
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      // title: "Web Developer",
      title: "Drupal Developer",
      company_name: "Duo",
      icon: drupal,
      iconBg: "#383E56",
      date: "Sep 2015 - Nov 2017",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Online Courses",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Arne proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "PornHub",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Arne does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Chaturbate",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Arne optimized our website, our traffic increased by more than 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "OnlyFans",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  