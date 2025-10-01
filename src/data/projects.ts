import { Project } from "@/types/project";

// Update paths to match your actual files under public/images/projects/*
// Thumbnails should be ~1200x675 .webp for best quality/size balance
export const projects: Project[] = [
  {
    title: "Conference Timer - Event Management System",
    description:
      "A sophisticated full-stack event management platform in its final stages of development, designed to streamline conference organization and attendance tracking. This enterprise-grade solution features real-time QR code-based attendance tracking, multi-role authentication, and comprehensive analytics dashboards. The system empowers organizers with automated attendance reporting, intuitive event management tools, and a responsive modern interface built with industry-standard technologies. This project showcases practical implementation of microservices architecture, secure authentication flows, and modern UI/UX principles.",
    images: [
      "/images/projects/springboot conference app/1.PNG",
      "/images/projects/springboot conference app/2.PNG",
      "/images/projects/springboot conference app/3.PNG",
      "/images/projects/springboot conference app/4.PNG",
      "/images/projects/springboot conference app/5.PNG",
      "/images/projects/springboot conference app/6.PNG",
      "/images/projects/springboot conference app/7.PNG",
      "/images/projects/springboot conference app/8.PNG",
      "/images/projects/springboot conference app/9.PNG",
    ],
    tech: [
      "Spring Boot 3",
      "JWT Auth",
      "PostgreSQL",
      "JPA/Hibernate",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Docker",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Simple Chat App",
    description: "Real-time chat using WebSockets (Socket.io)",
    images: ["/images/projects/socket chat/1.PNG"],
    tech: ["Node.js", "Socket.io", "Express"],
    github: "https://github.com/ahmeddsoffar/simple-chat-app-deployed",
  },
  {
    title: "Weather App",
    description: "Weather app using OpenWeatherMap API and React.js",
    images: [
      "/images/projects/weather app/1.PNG",
      "/images/projects/weather app/2.PNG",
    ],
    tech: ["React.js", "OpenWeatherMap API"],
    github: "https://github.com/ahmeddsoffar/weather-app",
  },
  {
    title: "node js graphQL",
    description: "node js graphQL with express and mongoose",
    images: ["/images/projects/nodejsgraphql/1.PNG"],
    tech: ["Node.js", "GraphQL", "Express"],
    github: "https://github.com/ahmeddsoffar/node-with-graphQL",
  },
  {
    title: "E-commerce Website (Laravel)",
    description:
      "A full-featured e-commerce platform built with Laravel, featuring product management, shopping cart functionality, user authentication, admin dashboard, and order management. Includes features like product categories, search, and a responsive design.",
    images: [
      "/images/projects/laravel ecommerce/1.PNG",
      "/images/projects/laravel ecommerce/2.PNG",
      "/images/projects/laravel ecommerce/3.PNG",
      "/images/projects/laravel ecommerce/4.PNG",
      "/images/projects/laravel ecommerce/6.PNG",
      "/images/projects/laravel ecommerce/7.PNG",
      "/images/projects/laravel ecommerce/8.PNG",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/ahmeddsoffar/laravel-ecommerce",
    demo: "",
  },
  {
    title: "Music player",
    description: "simple html css and js music player",
    images: ["/images/projects/music player/1.PNG"],
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ahmeddsoffar/Music-Player",
  },
  {
    title: "house rental website",
    description: "house rental website with html css and js",
    images: [
      "/images/projects/house rent/1.PNG",
      "/images/projects/house rent/2.PNG",
      "/images/projects/house rent/3.PNG",
      "/images/projects/house rent/4.PNG",
      "/images/projects/house rent/5.PNG",
    ],
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ahmeddsoffar/house-rent-project",
  },
  {
    title: "calculator",
    description: "calculator with html css and js",
    images: ["/images/projects/calc/1.PNG"],
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ahmeddsoffar/Calaculator",
  },
  {
    title: "book store website",
    description: "node js express and mongodb , react js",
    images: [
      "/images/projects/book store api/1.PNG",
      "/images/projects/book store api/2.PNG",
      "/images/projects/book store api/3.PNG",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React.js"],
    github: "https://github.com/ahmeddsoffar/bookstore-api-nodejs",
  },
];
