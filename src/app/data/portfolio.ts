import { PortfolioData } from '../services/data';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Manthan Ank",
    title: "Full Stack Developer",
    email: "manthan.ank46@gmail.com",
    phone: "+91 XXX XXX XXXX",
    location: "Karnataka, India",
    bio: "Passionate full-stack developer with expertise in Angular, Node.js, and modern web technologies. I love building scalable applications and solving complex problems.",
    roles: [
      "Frontend Developer 💻",
      "UI/UX Enthusiast 🎨",
      "Angular Developer 🅰️",
      "Problem Solver 🧩",
      "Creative Coder ✨"
    ]
  },
  navigation: {
    menuItems: [
      { path: "/", label: "Home", icon: "fas fa-home" },
      { path: "/about", label: "About", icon: "fas fa-user" },
      { path: "/projects", label: "Projects", icon: "fas fa-code" },
      { path: "/uses", label: "Uses", icon: "fas fa-tools" },
      { path: "/contact", label: "Contact", icon: "fas fa-envelope" }
    ]
  },
  projects: {
    categories: [
      { id: "all", name: "All Projects" },
      { id: "featured", name: "Featured" },
      { id: "fullstack", name: "Full Stack" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" }
    ],
    items: [
      {
        id: 1,
        title: "Advanced URL Shortener",
        description: "Enterprise-grade URL shortening service with comprehensive analytics and custom branding.",
        fullDescription: "A comprehensive URL shortener application built with Angular and Node.js featuring custom short URLs, detailed click analytics, QR code generation, user authentication, bulk URL processing, and API integration for third-party services.",
        image: "images/projects/url-shortener-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Chart.js"],
        githubUrl: "https://github.com/manthanank/url-shortener-app",
        liveUrl: "https://url-shortener-demo.manthanank.com",
        featured: true,
        category: "fullstack"
      },
      {
        id: 2,
        title: "Smart Expense Tracker",
        description: "AI-powered expense tracking with intelligent categorization and budget insights.",
        fullDescription: "An intelligent expense tracking application with machine learning-based categorization, budget forecasting, receipt scanning using OCR, financial goal setting, and detailed spending analytics with interactive charts and reports.",
        image: "images/projects/expense-tracker-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "Chart.js", "PWA", "TensorFlow.js"],
        githubUrl: "https://github.com/manthanank/expense-tracker-app",
        liveUrl: "https://expense-tracker.manthanank.com",
        featured: true,
        category: "fullstack"
      },
      {
        id: 3,
        title: "Collaborative Notes Platform",
        description: "Real-time collaborative note-taking with advanced organization and sharing features.",
        fullDescription: "A modern note-taking platform with real-time collaboration, markdown support, hierarchical organization with folders and tags, version history, advanced search with filters, and team workspace management.",
        image: "images/projects/notes-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io", "Markdown", "JWT"],
        githubUrl: "https://github.com/manthanank/collaborative-notes-app",
        liveUrl: "https://notes.manthanank.com",
        featured: false,
        category: "frontend"
      },
      {
        id: 4,
        title: "Project Management Suite",
        description: "Comprehensive project management with agile workflows and team collaboration tools.",
        fullDescription: "A complete project management solution featuring Kanban and Scrum boards, time tracking with detailed reports, team collaboration tools, file attachments, milestone tracking, and automated progress reporting with stakeholder notifications.",
        image: "images/projects/task-management-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Multer", "Redis"],
        githubUrl: "https://github.com/manthanank/project-management-suite",
        liveUrl: "https://pm.manthanank.com",
        featured: true,
        category: "fullstack"
      },
      {
        id: 5,
        title: "Social Media Hub",
        description: "Modern social platform with multimedia sharing and community features.",
        fullDescription: "A comprehensive social media application with image/video uploads, real-time messaging, story features, community groups, content moderation, advanced privacy controls, and social analytics dashboard.",
        image: "images/projects/upload-post-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "Multer", "Cloudinary", "Socket.io", "Redis"],
        githubUrl: "https://github.com/manthanank/social-media-hub",
        liveUrl: "https://social.manthanank.com",
        featured: false,
        category: "fullstack"
      }
    ]
  },
  skills: {
    frontend: [
      { name: "Angular", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Bootstrap", level: 4 }
    ],
    backend: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "REST APIs", level: 4 },
      { name: "Firebase", level: 3 }
    ],
    tools: [
      { name: "Git", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Docker", level: 3 },
      { name: "AWS", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Postman", level: 4 }
    ]
  },
  timeline: [
    {
      title: "Software Engineer",
      company: "Blackcoffer",
      year: "2023 - Present",
      description: "Working on full-stack development projects, building scalable web applications and contributing to various client projects using modern technologies.",
      icon: "fas fa-laptop-code",
      iconColor: "text-blue-600"
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      year: "2022 - 2023",
      description: "Started my professional journey as a freelance developer, working on various web development projects and building my portfolio.",
      icon: "fas fa-user-tie",
      iconColor: "text-green-600"
    },
    {
      title: "Bachelor of Engineering",
      company: "Sahyadri College of Engineering & Management",
      year: "2019 - 2023",
      description: "Completed my Bachelor's degree in Computer Science, where I discovered my passion for programming and software development.",
      icon: "fas fa-graduation-cap",
      iconColor: "text-purple-600"
    },
    {
      title: "Started Coding Journey",
      company: "Self-Learning",
      year: "2021",
      description: "Began my coding journey with web development fundamentals, starting with HTML, CSS, and JavaScript.",
      icon: "fas fa-rocket",
      iconColor: "text-orange-600"
    }
  ],
  uses: {
    categories: [
      { id: "all", name: "All", icon: "fa-solid fa-grip" },
      { id: "hardware", name: "Hardware", icon: "fa-solid fa-desktop" },
      { id: "software", name: "Software", icon: "fa-solid fa-code" },
      { id: "tools", name: "Tools", icon: "fa-solid fa-wrench" },
      { id: "productivity", name: "Productivity", icon: "fa-solid fa-rocket" }
    ],
    items: [
      {
        id: "laptop",
        name: "Dell XPS 15",
        description: "Intel Core i7 processor with 16GB RAM and dedicated NVIDIA graphics - My primary development machine for all coding projects and design work.",
        category: "hardware",
        image: "/images/laptop.png",
        link: "https://dell.com",
        tags: ["development", "portable", "powerful", "graphics"]
      },
      {
        id: "monitor",
        name: "LG UltraWide 34\"",
        description: "34-inch 4K UltraWide monitor with USB-C connectivity - Perfect for multitasking with multiple code windows, browser tabs, and design tools.",
        category: "hardware",
        image: "/images/monitor.png",
        link: "https://lg.com",
        tags: ["4K", "ultrawide", "productivity", "usb-c"]
      },
      {
        id: "keyboard",
        name: "Logitech MX Keys",
        description: "Wireless illuminated keyboard with smart backlighting and multi-device support - Essential for comfortable coding sessions.",
        category: "hardware",
        image: "/images/keyboard-mouse.png",
        link: "https://logitech.com",
        tags: ["wireless", "backlit", "ergonomic", "multi-device"]
      },
      {
        id: "headphones",
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise-cancelling headphones with 30-hour battery life - Perfect for focused coding sessions and virtual meetings.",
        category: "hardware",
        image: "/images/headphone.png",
        link: "https://sony.com",
        tags: ["noise-cancelling", "wireless", "focus", "long-battery"]
      },
      {
        id: "vscode",
        name: "Visual Studio Code",
        description: "My primary code editor with extensions like Angular Language Service, GitLens, and Prettier for enhanced productivity.",
        category: "software",
        tags: ["editor", "extensions", "debugging", "git-integration"]
      },
      {
        id: "angular",
        name: "Angular Framework",
        description: "Powerful TypeScript framework that I use daily for building scalable, maintainable web applications with modern architecture.",
        category: "software",
        tags: ["framework", "typescript", "spa", "reactive"]
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        description: "Utility-first CSS framework that accelerates my UI development with its comprehensive class system and responsive design utilities.",
        category: "software",
        tags: ["css", "utility", "responsive", "components"]
      },
      {
        id: "nodejs",
        name: "Node.js & Express",
        description: "JavaScript runtime and web framework for building fast, scalable backend APIs and microservices.",
        category: "software",
        tags: ["backend", "javascript", "api", "microservices"]
      },
      {
        id: "git",
        name: "Git & GitHub",
        description: "Essential version control system and collaboration platform for managing all my projects with proper branching strategies.",
        category: "tools",
        tags: ["version-control", "collaboration", "ci-cd", "open-source"]
      },
      {
        id: "figma",
        name: "Figma",
        description: "Collaborative design tool for creating UI/UX mockups, prototypes, and design systems before development begins.",
        category: "tools",
        tags: ["design", "prototyping", "collaboration", "ui-ux"]
      },
      {
        id: "notion",
        name: "Notion",
        description: "All-in-one workspace for project documentation, note-taking, task management, and team knowledge sharing.",
        category: "productivity",
        tags: ["notes", "organization", "planning", "documentation"]
      },
      {
        id: "postman",
        name: "Postman",
        description: "Comprehensive API development platform for building, testing, and documenting REST APIs with automated testing capabilities.",
        category: "tools",
        tags: ["api", "testing", "development", "automation"]
      },
      {
        id: "chrome",
        name: "Chrome DevTools",
        description: "Essential browser development tools for debugging JavaScript, analyzing performance, and optimizing web applications.",
        category: "tools",
        tags: ["debugging", "performance", "browser", "optimization"]
      },
      {
        id: "mongodb",
        name: "MongoDB Compass",
        description: "Visual database management tool for MongoDB with query optimization and data visualization capabilities.",
        category: "tools",
        tags: ["database", "mongodb", "visualization", "queries"]
      },
      {
        id: "docker",
        name: "Docker Desktop",
        description: "Containerization platform for consistent development environments and streamlined application deployment.",
        category: "tools",
        tags: ["containerization", "deployment", "devops", "consistency"]
      }
    ]
  },
  contact: {
    methods: [
      {
        icon: "M3 8l7.89 4.26c.3.16.69.16 1.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "Email",
        value: "manthan.ank46@gmail.com",
        link: "mailto:manthan.ank46@gmail.com"
      },
      {
        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        title: "Phone",
        value: "+91 XXX XXX XXXX",
        link: "tel:+91XXXXXXXXXX"
      },
      {
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Location",
        value: "Karnataka, India",
        link: "#"
      }
    ],
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/manthanank",
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      },
      {
        name: "GitHub",
        url: "https://github.com/manthanank",
        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      },
      {
        name: "X (Twitter)",
        url: "https://twitter.com/manthanank",
        icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      }
    ]
  },
  settings: {
    typingAnimation: {
      typeSpeed: 100,
      deleteSpeed: 50,
      pauseTime: 1500
    }
  }
};
