export const projects = [
  {
    title: "Tourist",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/1.png",
    tags: ["HTML", "CSS", "SASS", "Animations"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "Tourist React App",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "DesignMall App",
    description:
      "DesignMall is an online fashion destination with an impressive variety of hundreds of thousands of products from more than 1000 brands of clothing, footwear and accessories for women, men and kids. ... Since 2021, DesignMall is part of Aldim Invest Group.",
    image: "/images/3.png",
    tags: ["Vue", "SSR/Nuxt", "Node", "VueMaterial"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "SonikPocket",
    description:
      "The Sonik Pocket platform integrates online and offline learning materials to help children between the ages of 5-12 understand the real value of money. On the platform, children are introduced to financial principles from an early age, preparing them for later life. We use pocket money as an incentive to encourage children to complete missions...",
    image: "/images/4.png",
    tags: ["Vue", "Vuex", "Cypress", "Figma"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "School of Visual Arts",
    description:
      "Visual Arts Press - As the design studio for the School of Visual Arts, the Press produces the College’s printed publications, websites, environmental graphics and promotional products while maintaining a unified branded identity.",
    image: "/images/5.png",
    tags: ["Vue", "Vuex", "Cypress", "Figma"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 4,
  },
  {
    title: "Football Manager App",
    description:
      "Visual Arts Press - As the design studio for the School of Visual Arts, the Press produces the College’s printed publications, websites, environmental graphics and promotional products while maintaining a unified branded identity.",
    image: "/images/6.png",
    tags: ["Vue", "Vuex", "Cypress", "Figma"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2018, text: "Started my journey" },
  { year: 2019, text: "First Job as Front-End Developer at D>Soft" },
  { year: 2020, text: "Worked as Front-End Developer at LLC" },
  { year: 2021, text: "Promoted to Full-Stack Developer at LLC" },
  { year: 2022, text: "Front-End Developer at TriSoft" },
];

import { RiToolsFill } from "react-icons/ri";
import {
  AiOutlineHtml5,
  AiOutlineFontSize,
  AiOutlineReload,
} from "react-icons/ai";
import {
  DiCss3Full,
  DiJavascript1,
  DiNodejsSmall,
  DiMootoolsBadge,
} from "react-icons/di";
import { GiConcentrationOrb, GiPhotoCamera } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { BiBulb, BiFileFind } from "react-icons/bi";

export const Resources = [
  {
    id: "tools",
    sectionTitle: "DEVELOPMENT TOOLS",
    sectionIcon: RiToolsFill,
    elements: [
      {
        image: "/images/vscode.png",
        title: "Visual Studio Code",
        link: "https://code.visualstudio.com/",
        description:
          "The best text editor in the world. See next resource for my current setup.",
      },
      {
        image: "/images/vscode.png",
        title: "My Visual Studio Code Setup",
        link: "https://github.com/FlorinInfo/my-vscode-setup",
        description:
          "Check out what theme, extensions and settings I currently use in VSCode.",
      },
      {
        image: "/images/emmet.png",
        title: "Emmet Cheat Sheet",
        link: "https://docs.emmet.io/cheat-sheet/",
        description:
          "Emmet is an essential tool for writing HTML.This is a very handy cheat sheet to get started.",
      },
    ],
  },
  {
    id: "html",
    sectionTitle: "HTML5 RESOURCES",
    sectionIcon: AiOutlineHtml5,
    elements: [
      {
        image: "/images/mdn.png",
        title: "HTML5 Reference by MDN",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        description:
          "You don't need to know every HTML element. I just use this excellent reference all the time.",
      },
      {
        image: "/images/css-tricks-3.png",
        title: "HTML Entity Reference by CSS-Tricks",
        link: "https://css-tricks.com/snippets/html/glyphs/",
        description:
          "Super useful reference, gives you HTML entity name, numeric code, hex code and ISO code.",
      },
    ],
  },
  {
    id: "css",
    sectionTitle: "CSS RESOURCES",
    sectionIcon: DiCss3Full,
    elements: [
      {
        image: "/images/codrops.png",
        title: "CSS3 Reference by Codrops",
        link: "https://tympanus.net/codrops/css_reference/",
        description:
          "An excellent CSS reference from Codrops. Make sure to check this one out, too.",
      },
      {
        image: "/images/caniuse.png",
        title: "Can I Use?",
        link: "https://caniuse.com/",
        description:
          "Up-to-date browser support tables for front-end technologies on desktop and mobile browsers.",
      },
      {
        image: "/images/clippy.png",
        title: "Clippy",
        link: "https://bennettfeely.com/clippy/",
        description:
          "A small tool to help you using the new and powerful clip-path property.",
      },
      {
        image: "/images/easings.png",
        title: "CSS easing functions",
        link: "https://easings.net/",
        description:
          "An amazing collection of easing functions bo be used in CSS transitions and animations.",
      },
    ],
  },
  {
    id: "javascript",
    sectionTitle: "JAVASCRIPT RESOURCES",
    sectionIcon: DiJavascript1,
    elements: [
      {
        image: "/images/es6-compat.png",
        title: "ES6+ Browser Compatibility Table",
        link: "https://kangax.github.io/compat-table/es6/",
        description:
          "Check out all the new ES6+ features supported and their browser support.",
      },
      {
        image: "/images/keycodes.jpg",
        title: "JavaScript KeyCodes Reference",
        link: "http://keycodes.atjayjo.com/",
        description:
          "Get keyboard codes, unicodes and keycodes. Vital reference for keypress event handling.",
      },
      {
        image: "/images/js-patterns.png",
        title: "JavaScript Design Patterns",
        link: "https://www.patterns.dev/posts/classic-design-patterns/",
        description:
          "For more advanced developers: learn all common JavaScript design patterns. Perfect reference.",
      },
    ],
  },
  {
    sectionTitle: "FONTS AND TYPOGRAPHY TOOLS",
    sectionIcon: AiOutlineFontSize,
    elements: [
      {
        image: "/images/googlefonts.png",
        title: "Google Fonts",
        link: "https://fonts.google.com/",
        description:
          "The #1 resource for free and easy-to-use webfonts. Has a huge library of fonts.",
      },
      {
        image: "/images/creativebloq.jpeg",
        title: "The 100 best free fonts by Creative Bloq",
        link: "https://www.creativebloq.com/graphic-design-tips/best-free-fonts-for-designers-1233380",
        description:
          "List of free fonts, from vintage-inspired typefaces to slab serifs, for a range of projects.",
      },
      {
        image: "/images/typeguide.svg",
        title: "A Pocket Guide to Typography",
        link: "http://www.typogui.de/",
        description:
          "Amazing resource to learn about typography. Learn typography basics in less than 30 minutes.",
      },
    ],
  },
  {
    sectionTitle: "IMAGES AND VIDEOS",
    sectionIcon: GiPhotoCamera,
    elements: [
      {
        image: "/images/unsplash.png",
        title: "Unsplash",
        link: "https://unsplash.com/",
        description:
          "My #1 resource for free high-resolution photos. There are more photos here than you can imagine!",
      },
      {
        image: "/images/pexels.png",
        title: "Pexels",
        link: "https://www.pexels.com/ro-ro/",
        description:
          "Another great resource for free stock photos and videos, created by photographers around the world.",
      },
      {
        image: "/images/isorepublic.png",
        title: "ISO Republic",
        link: "https://isorepublic.com/",
        description:
          "Free and premium stock photos for your website. Easily searchable by topic.",
      },
      {
        image: "/images/pixaby.png",
        title: "Pixaby",
        link: "https://pixabay.com/",
        description:
          "Over 2M free stock photos, vectors and art illustrations you can use anywhere.",
      },
      {
        image: "/images/undraw.png",
        title: "unDraw",
        link: "https://undraw.co/illustrations",
        description:
          "Hundreds of free and open-source illustrations for your websites, and colors are even customizable.",
      },
      {
        image: "/images/coverr.png",
        title: "Coverr",
        link: "https://coverr.co/",
        description:
          "Best resource for beautiful and free videos about every imaginable topic, easily searchable.",
      },
    ],
  },
  {
    sectionTitle: "BEST ICONS AND TOOLS",
    sectionIcon: IoIosSend,
    elements: [
      {
        image: "/images/ionicons.png",
        title: "Ionicons",
        link: "https://ionic.io/ionicons",
        description:
          "A beautiful and round icon set, very easy to use, and 100% free even for commercial usage.",
      },
      {
        image: "/images/heroicons.png",
        title: "Hero Icons",
        link: "https://heroicons.com/",
        description:
          "A 230-pieces icon set, available in outline and solid styles, best used at 24x24 px.",
      },
      {
        image: "/images/phosphoricons.png",
        title: "Phosphor Icons",
        link: "https://phosphoricons.com/",
        description:
          "Another beautiful, more boxy SVG icon set. Customizable thickness and color.",
      },
      {
        image: "/images/Icons8.png",
        title: "Line Awesome",
        link: "https://icons8.com/line-awesome",
        description:
          "A very simple alternative for Font Awesome.",
      },
      {
        image: "/images/flaticon.png",
        title: "Flaticon",
        link: "https://www.flaticon.com/",
        description:
          "Access +6.7M vector icons & stickers",
      },
    ],
  },
  {
    sectionTitle: "FIND DESIGN INSPIRATION",
    sectionIcon: BiBulb,
    elements: [
      {
        image: "/images/dribbble.png",
        title: "Dribbble",
        link: "https://dribbble.com/",
        description:
          "Most well-known destination to find design inspiration, not just web design.",
      },
      {
        image: "/images/awwwards.png",
        title: "Awwwards",
        link: "https://www.awwwards.com/websites/",
        description:
          "The awards of design, creativity and innovation on the internet. This one features more creative designs.",
      },
      {
        image: "/images/screenlane.png",
        title: "Screelane",
        link: "https://screenlane.com/",
        description:
          "Inspiration for individual elements and components. Another of my go-to resources!",
      },
    ],
  },
];
