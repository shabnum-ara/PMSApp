// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import Canva from "./assets/images/Skills/canva.png";
import Html from "./assets/images/Skills/Html.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

//import project2 from "./assets/images/projects/img4.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person4 from "./assets/images/Hireme/person4.png";

import image from '@rollup/plugin-image';

export default {
  plugins: [
    image(),
    // other plugins
  ],
};


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web/UI Designer",
    firstName: "SHABNUM",
    LastName: "ARA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in customer Service",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Design, Prototype, Collaborate",
        logo: figma,
      },
      {
        name: "Canva",
        para: "Visualize, Edit, Innovate",
        logo: Canva,
      },
      {
        name: "JavaScript",
        para: "Dynamic, Interactive, Functional",
        logo: js,
      },
      {
        name: "React js",
        para: "Backend, Scalable, Fast",
        logo: reactjs,
      },
      {
        name: "CSS",
        para: "Style, Layout, Responsiveness",
        logo: css,
      },
      {
        name: "HTML",
        para: "Structure, Semantics, Accessibility",
        logo: Html,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      // {
      //   title: "Email Newsletter",
      //   image: project2,
      // },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },

  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENTS SAY",
    testimonials_content: [
      {
        review:
          "“In working with shabnum on web development and UI design, she helped bring our ideas to life with intuitive, visually engaging websites that enhanced user experience and contributed to our business success”",
        img: avatar1,
        name: "saira",
      },
      {
        review:
          "“By collaborating with shabnum on web development and UI design, they transformed our concepts into sleek, functional websites that significantly improved user engagement and satisfaction”",
        img: avatar2,
        name: "Faisal",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person4,
    para: "In publishing and graphic design",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "araashabnum@gmail.com",
        icon: GrMail,
        link: "mailto:araashabnum@gmail.com",
      },
      {
        text: "+916006920342",
        icon: MdCall,
        link: "https://wa.me/+1916006920342",
      },
      {
        text: "shabnumara",
        icon: BsInstagram,
        link: "https://www.instagram.com/ara__shabnum/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
