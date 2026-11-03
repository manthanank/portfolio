import { PortfolioData } from '../services/data';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Manthan Ankolekar",
    title: "Full-Stack Software Engineer",
    email: "manthan.ank46@gmail.com",
    location: "Karnataka, India",
    bio: "Full-stack software engineer with 3.5+ years of experience building scalable web applications, microservices and AI-driven workflows. I work mostly in Next.js, Angular, Node.js and Python on cloud-native infrastructure. My recent work covers integrations with dealer management systems, LLM vision pipelines and high-throughput SaaS dashboards.",
    resumeUrl: "https://drive.google.com/",
    calendlyUrl: "https://calendly.com/manthanank",
    roles: [
      "Full-Stack Software Engineer 💻",
      "Next.js Developer ▲",
      "Angular Developer 🅰️",
      "Node.js & Python Developer 🔧",
      "Problem Solver 🧩"
    ]
  },
  navigation: {
    menuItems: [
      { path: "/", label: "Home", icon: "fas fa-home" },
      { path: "/about", label: "About", icon: "fas fa-user" },
      { path: "/projects", label: "Projects", icon: "fas fa-code" },
      { path: "/notes", label: "Notes", icon: "fas fa-pen" },
      { path: "/uses", label: "Uses", icon: "fas fa-tools" },
      { path: "/hire-me", label: "Hire Me", icon: "fas fa-briefcase" },
      { path: "/now", label: "Now", icon: "fas fa-bolt" },
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
        slug: "advanced-url-shortener",
        title: "URL Shortener",
        description: "URL shortening service with click analytics, custom expiration and an admin dashboard.",
        fullDescription: "A full-stack URL shortener built with Angular and Node.js. It creates short links, redirects with click tracking, shows click statistics on an analytics dashboard, supports bulk URL management and custom expiration dates, and protects the API with rate limiting, input validation and security headers.",
        image: "images/projects/url-shortener-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/manthanank/url-shortener-app",
        liveUrl: "https://shortener-url-app.vercel.app",
        featured: true,
        category: "fullstack",
        caseStudy: {
          problem: "Long links are hard to share and give no feedback on how often they are used.",
          approach: [
            "Designed the URL lifecycle: create, validate, redirect, track",
            "Recorded clicks on redirect and surfaced them in an analytics dashboard",
            "Added bulk URL management, custom expiration and export"
          ],
          architecture: [
            "Angular frontend with Tailwind CSS 4, lazy-loaded routes and dark/light themes",
            "Node.js + Express API for creation, redirects and tracking",
            "MongoDB for links and click statistics"
          ],
          decisions: [
            { title: "Protect the public API", description: "Added rate limiting, input validation, Helmet security headers and CORS rules because the shortening endpoint is open to anyone." }
          ],
          role: ["Full-stack development", "API design", "UI + analytics"],
          highlights: ["Click analytics", "Bulk operations", "Custom expiration", "Rate limiting"],
          links: [
            { label: "Live demo", url: "https://shortener-url-app.vercel.app" },
            { label: "GitHub", url: "https://github.com/manthanank/url-shortener-app" }
          ]
        }
      },
      {
        id: 2,
        slug: "smart-expense-tracker",
        title: "Expense Tracker",
        description: "Expense tracker with charts, filters and AI spending insights from the Gemini API.",
        fullDescription: "A full-stack expense tracker built with Angular, Express and MongoDB. Users sign in with JWT, add, edit and filter expenses by date range and category, see totals and charts, and get spending analysis and budget recommendations generated with the Google Gemini API.",
        image: "images/projects/expense-tracker-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "Tailwind CSS", "NGX Charts", "Gemini API"],
        githubUrl: "https://github.com/manthanank/expense-tracker-app",
        liveUrl: "https://expense-tracker-app-manthanank.vercel.app",
        featured: true,
        category: "fullstack",
        caseStudy: {
          problem: "Manual expense tracking is tedious, and a plain list of transactions says little about spending habits.",
          approach: [
            "Kept the add, edit and filter flows short",
            "Calculated totals and charted spending by category and date",
            "Generated spending analysis and budget recommendations with Gemini"
          ],
          architecture: [
            "Angular 19 app with Tailwind CSS and NGX Charts",
            "Node.js + Express API with routes for auth, expenses, insights and admin",
            "MongoDB + Mongoose models, Nodemailer for password reset, Swagger API docs"
          ],
          role: ["Frontend + backend", "Data modeling", "AI insights integration"],
          links: [
            { label: "Live demo", url: "https://expense-tracker-app-manthanank.vercel.app" },
            { label: "GitHub", url: "https://github.com/manthanank/expense-tracker-app" }
          ]
        }
      },
      {
        id: 3,
        slug: "collaborative-notes-platform",
        title: "Notes App",
        description: "Full-stack notes app with authentication and search.",
        fullDescription: "A full-stack notes application built with Angular, Node.js, Express and MongoDB. Users sign up and log in with JWT, create, edit and delete notes, search them by title or content, and reset their password by email.",
        image: "images/projects/notes-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
        githubUrl: "https://github.com/manthanank/notes-app",
        liveUrl: "https://notes-app-manthanank.vercel.app",
        featured: false,
        category: "fullstack",
        caseStudy: {
          architecture: [
            "Angular client styled with Tailwind CSS",
            "Node.js + Express REST API with JWT authentication",
            "MongoDB + Mongoose for users and notes, Nodemailer for password reset"
          ],
          highlights: ["JWT auth", "Search by title or content", "Password reset by email"],
          links: [
            { label: "Live demo", url: "https://notes-app-manthanank.vercel.app" },
            { label: "GitHub", url: "https://github.com/manthanank/notes-app" }
          ]
        }
      },
      {
        id: 4,
        slug: "project-management-suite",
        title: "Task Management App",
        description: "Multi-tenant task manager with organizations, roles and Gemini-powered helpers.",
        fullDescription: "A full-stack task manager built with Angular, Express and MongoDB. It supports organizations with member management, role-based access control (user, admin, super), task assignment, filtering by status and priority, subtasks, a per-task activity log and a statistics dashboard. Gemini helpers suggest subtasks and priorities, improve descriptions, summarize tasks and power an assistant chat.",
        image: "images/projects/task-management-app.png",
        technologies: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Gemini API"],
        githubUrl: "https://github.com/manthanank/task-management-app",
        liveUrl: "https://task-management-app-manthanank.vercel.app/",
        featured: true,
        category: "fullstack",
        caseStudy: {
          problem: "Teams need to assign and track work across members without everyone seeing or editing everything.",
          approach: [
            "Organization-based multi-tenancy with member management",
            "Role-based access control with user, admin and super roles",
            "Gemini helpers for subtasks, priorities, descriptions and summaries"
          ],
          architecture: [
            "Angular 19 frontend with Tailwind CSS and RxJS",
            "Node.js + Express API with JWT, Helmet, rate limiting and Swagger docs",
            "MongoDB + Mongoose for organizations, tasks and activity logs"
          ],
          highlights: ["Multi-tenancy", "RBAC", "Activity log", "AI helpers"],
          links: [
            { label: "Live demo", url: "https://task-management-app-manthanank.vercel.app/" },
            { label: "GitHub", url: "https://github.com/manthanank/task-management-app" }
          ]
        }
      },
      {
        id: 5,
        slug: "social-media-hub",
        title: "Social Media App",
        description: "Social media app built with Angular and a Node.js backend.",
        fullDescription: "A social media application with an Angular frontend styled with Tailwind CSS and a Node.js backend.",
        image: "images/projects/upload-post-app.png",
        technologies: ["Angular", "Node.js", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/manthanank/social-media-app",
        liveUrl: "https://social-media-app-manthanank.vercel.app",
        featured: false,
        category: "fullstack"
      }
    ]
  },
  workProjects: [
    {
      id: 6,
      title: "Dealer Management & Vehicle Reconditioning Software",
      company: "Tech Driven Agency",
      duration: "Feb 2025 - Oct 2026",
      description: "Full-stack dealer management and AI-driven vehicle reconditioning software for car dealerships, built as scalable microservices.",
      highlights: [
        "Built dealer management applications with Next.js and Python Flask",
        "Automated vehicle photo condition scoring, damage detection and listing generation with LLM APIs",
        "Two-way write-backs to major dealer management systems through HMAC-signed, retry-resilient REST APIs",
        "Real-time Kanban tracking boards with bottleneck flags, time-to-line forecasting and SMS-triggered stage transitions",
        "Containerized services with Docker and PostgreSQL for cloud and on-premise deployments"
      ],
      technologies: ["Next.js", "Python", "Flask", "PostgreSQL", "Docker", "LLM APIs", "REST APIs"],
      icon: "fas fa-car"
    },
    {
      id: 1,
      title: "Patient Discharge and Call Monitoring Web App",
      company: "BlackCoffer",
      duration: "Work Project",
      description: "Multi-role hospital management system for patient discharge and call monitoring. Implemented new features and handled ongoing maintenance.",
      highlights: [
        "Built frontend with Angular, backend with Node.js, database with MySQL",
        "Added real-time alerts with Socket.IO",
        "Deployed to AWS"
      ],
      technologies: ["Angular", "Node.js", "MySQL", "Socket.IO", "AWS"],
      icon: "fas fa-hospital"
    },
    {
      id: 2,
      title: "API Admin & Client Dashboard",
      company: "BlackCoffer",
      duration: "Work Project",
      description: "Admin and client dashboards built from the ground up in Angular, with role-based access control.",
      highlights: [
        "Built dashboards from scratch using Angular",
        "Integrated 150+ REST APIs into the frontend",
        "Implemented role-based access control"
      ],
      technologies: ["Angular", "TypeScript", "REST APIs", "RBAC"],
      icon: "fas fa-tachometer-alt"
    },
    {
      id: 3,
      title: "Brain Tumor Detection Using MRI Images",
      company: "Final Year Project",
      duration: "Academic Project",
      description: "Developed front-end for image detection and classification system using Flask and machine learning techniques.",
      highlights: [
        "Worked on frontend of image detection/classification project",
        "Used Flask for web framework",
        "Implemented testing and training methods",
        "Utilized databases for model training"
      ],
      technologies: ["Python", "Flask", "Machine Learning", "Image Processing"],
      icon: "fas fa-brain"
    },
    {
      id: 4,
      title: "Complaint Management System",
      company: "Web Development Project",
      duration: "Academic Project",
      description: "Created a web application for registering and storing complaints in a database.",
      highlights: [
        "Built web page for complaint registration",
        "Implemented database storage with MySQL",
        "Used PHP for backend development"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      icon: "fas fa-clipboard-list"
    },
    {
      id: 5,
      title: "Census Management System",
      company: "DBMS Project",
      duration: "Academic Project",
      description: "Designed, developed, and implemented a project to store and manage census data in a database.",
      highlights: [
        "Designed database schema for census data",
        "Developed data management interfaces",
        "Conducted thorough testing for optimal performance"
      ],
      technologies: ["Database Design", "SQL", "Data Management"],
      icon: "fas fa-database"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science & Engineering",
      institution: "Sahyadri College of Engineering & Management",
      location: "Mangalore, Karnataka, India",
      year: "Aug 2016 - Aug 2020",
      description: "Completed a Bachelor's degree in Computer Science & Engineering with a focus on software development, algorithms, and computer science fundamentals.",
      achievements: [
        "Developed Brain Tumor Detection project as final year project",
        "Completed various web development and database projects",
        "Gained strong foundation in programming and software engineering"
      ],
      icon: "fas fa-graduation-cap"
    }
  ],
  skills: {
    groups: [
      { name: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
      { name: "Frontend", items: ["Next.js", "React", "Angular", "RxJS", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Express.js", "Flask", "RabbitMQ", "WebSockets"] },
      { name: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Redis"] },
      { name: "AI", items: ["Anthropic Claude API", "OpenAI", "LLMs"] },
      { name: "Tools", items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Postman"] },
      { name: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "CI/CD", "Microsoft Azure"] }
    ]
  },
  timeline: [
    {
      title: "Software Developer",
      company: "Tech Driven Agency · Remote",
      year: "Feb 2025 - Oct 2026",
      description: "Built full-stack dealer management applications for car dealerships with Next.js and Python Flask, structured as scalable microservices. Developed features for an AI-driven vehicle reconditioning platform: automated vehicle photo condition scoring, damage detection and listing generation with LLM APIs. Built secure two-way write-backs to major dealer management systems through HMAC-signed, retry-resilient REST APIs. Created real-time Kanban tracking boards with bottleneck flags, time-to-line forecasting and SMS-triggered stage transitions. Containerized services with Docker and PostgreSQL for cloud and on-premise deployments, working in Agile sprints.",
      icon: "fas fa-car",
      iconColor: "text-blue-600"
    },
    {
      title: "Software Developer",
      company: "Senwell Group Pvt Ltd · Pune, India",
      year: "Oct 2024 - Jan 2025",
      description: "Built high-concurrency Angular applications for enterprise recruitment and traffic management platforms. Designed modular, reusable UI components and integrated REST APIs. Took part in code reviews and performance tuning, and mentored junior developers.",
      icon: "fas fa-code",
      iconColor: "text-indigo-600"
    },
    {
      title: "Software Engineer",
      company: "BlackCoffer · Remote",
      year: "Feb 2023 - Aug 2024",
      description: "Built an API Admin & Client Dashboard in Angular covering 150+ REST APIs with role-based access control. Built a multi-role hospital management system (patient discharge and call monitoring) with Angular, Node.js and MySQL on AWS. Added real-time alerts with Socket.IO. Cut build size by 50% and set up CI/CD pipelines.",
      icon: "fas fa-briefcase",
      iconColor: "text-green-600"
    },
    {
      title: "Full Stack Developer Intern",
      company: "AppiVa Software Pvt Ltd · Remote",
      year: "Jul 2022 - Dec 2022",
      description: "Built features across Angular, Node.js and Python applications backed by Firebase. Deployed applications to AWS. Fixed production bugs and optimised queries.",
      icon: "fas fa-user-graduate",
      iconColor: "text-yellow-600"
    },
    {
      title: "Angular Developer Intern",
      company: "Faclon Labs Pvt Ltd · Mumbai (Remote)",
      year: "Nov 2021 - Apr 2022",
      description: "Built admin panels for an IoT platform in Angular. Built telemetry dashboards with RxJS.",
      icon: "fab fa-angular",
      iconColor: "text-red-600"
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
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Location",
        value: "Karnataka, India",
        link: "#"
      }
    ],
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manthan-ankolekar-597b07a8/",
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      },
      {
        name: "GitHub",
        url: "https://github.com/manthanank",
        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      },
      {
        name: "X (Twitter)",
        url: "https://x.com/manthan_ank",
        icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      }
    ]
  },
  hireMe: {
    headline: "I build scalable full-stack products with Next.js, Angular, Node.js and Python.",
    targetRoles: ["Full-Stack Software Engineer", "Next.js / React Engineer", "Angular Engineer", "Node.js / Python Backend Engineer"],
    availability: "Open to full-time roles and freelance projects, remote or on-site.",
    locationPreference: "Karnataka, India / Remote or on-site",
    strengths: [
      "Full-stack web apps with Next.js, Angular and Node.js",
      "Python Flask microservices and REST API integrations",
      "AI-driven workflows with LLM APIs",
      "Docker, PostgreSQL and cloud deployments"
    ],
    highlights: [
      { label: "Experience", value: "3.5+ years" },
      { label: "Focus", value: "Next.js, Angular, Node.js, Python" },
      { label: "Availability", value: "Full-time or freelance" }
    ],
    recruiterSummary: {
      experience: "3.5+ years",
      stack: "Next.js, React, Angular, TypeScript, Node.js, Python Flask, PostgreSQL, Docker, AWS",
      location: "Karnataka, India / Remote or on-site",
      noticePeriod: "Available now",
      preferredRoles: ["Full-Stack Software Engineer", "Next.js Developer", "Angular Developer", "Backend Engineer (Node.js / Python)"]
    }
  },
  now: {
    intro: "A quick snapshot of what I’m focused on lately.",
    openTo: ["Full-time roles", "Freelance projects", "Remote or on-site work"],
    learning: ["System design", "LLM-powered product features", "Better testing practices"],
    building: ["Open learning guides in TheLearningHubOrg", "Small full-stack side projects", "Technical articles on Dev.to"],
    recently: ["Finished at Tech Driven Agency at the end of October 2026", "Building dealer management and vehicle reconditioning software with Next.js and Python"],
    updatedAt: "2026-11-03"
  },
  blog: {
    posts: [
      {
        slug: "tailwind-css-4-in-angular-19",
        title: "Setting Up Tailwind CSS 4.0 in Angular v19.1: A Step-by-Step Guide",
        summary: "A step-by-step guide to setting up Tailwind CSS 4.0 in an Angular v19.1 project.",
        category: "Angular",
        publishedAt: "2025-01-24",
        readTime: "2 min read",
        tags: ["Angular", "Tailwind CSS", "Web Dev"],
        url: "https://dev.to/manthanank/setting-up-tailwind-css-40-in-angular-v191-a-step-by-step-guide-258m",
        content: [
          "This guide walks through adding Tailwind CSS 4.0 to an Angular v19.1 project, from installation to configuration.",
          "The full article, with every command and config file, is on Dev.to."
        ]
      },
      {
        slug: "crud-app-nodejs-express-mysql",
        title: "Building a CRUD Application with Node.js, Express, and MySQL",
        summary: "Creating a simple Create, Read, Update, Delete application with Node.js, Express and MySQL.",
        category: "Backend",
        publishedAt: "2024-06-06",
        readTime: "3 min read",
        tags: ["Node.js", "Express", "MySQL"],
        url: "https://dev.to/manthanank/building-a-crud-application-with-nodejs-express-and-mysql-4d2m",
        content: [
          "A walkthrough of building a CRUD (Create, Read, Update, Delete) REST API with Node.js, Express and a MySQL database.",
          "The full article, with the code for each step, is on Dev.to."
        ]
      },
      {
        slug: "otp-verification-html-css-javascript",
        title: "Building an OTP Verification System using HTML, CSS, and JavaScript",
        summary: "Building a one-time password verification flow for user authentication with plain HTML, CSS and JavaScript.",
        category: "Frontend",
        publishedAt: "2024-02-15",
        readTime: "4 min read",
        tags: ["JavaScript", "HTML", "CSS"],
        url: "https://dev.to/manthanank/building-an-otp-verification-system-using-html-css-and-javascript-2dlk",
        content: [
          "A walkthrough of building an OTP (one-time password) verification screen with plain HTML, CSS and JavaScript.",
          "The full article, with the code for each step, is on Dev.to."
        ]
      },
      {
        slug: "nginx-cheatsheet",
        title: "NGINX Cheatsheet: A Quick Reference Guide",
        summary: "A quick reference for NGINX, the web server used to serve static content and act as a reverse proxy.",
        category: "DevOps",
        publishedAt: "2024-01-29",
        readTime: "2 min read",
        tags: ["NGINX", "Web Dev", "Node.js"],
        url: "https://dev.to/manthanank/nginx-cheatsheet-a-quick-reference-guide-o0m",
        content: [
          "A cheatsheet of common NGINX commands and configuration snippets for serving static content and reverse proxying.",
          "The full cheatsheet is on Dev.to."
        ]
      },
      {
        slug: "real-time-chat-nodejs-mongodb-express",
        title: "Building a real-time chat application using Node.js, MongoDB, and Express",
        summary: "Building a real-time chat application with Node.js, MongoDB and Express.",
        category: "Backend",
        publishedAt: "2023-07-24",
        readTime: "3 min read",
        tags: ["Node.js", "MongoDB", "Express"],
        url: "https://dev.to/manthanank/building-a-real-time-chat-application-using-nodejs-mongodb-and-express-3bhp",
        content: [
          "A walkthrough of building a real-time chat application backed by Node.js, Express and MongoDB.",
          "The full article, with the code for each step, is on Dev.to."
        ]
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
