import { Project } from "@/types/project";

// Update paths to match your actual files under public/images/projects/*
// Thumbnails should be ~1200x675 .webp for best quality/size balance
export const projects: Project[] = [
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
    title: "E-commerce Backend (laravel)",
    description:
      "E-commerce Backend System – A Laravel-based backend that manages products, shopping carts, and orders with full CRUD functionality. Includes role-based access control for admins, staff, and customers, plus reporting tools for sales and inventory tracking.",
    images: [""],
    tech: ["Node.js", "NestJS", "PostgreSQL", "Stripe"],
    github: "",
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
