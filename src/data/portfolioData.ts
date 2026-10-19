export interface Project {
  id: string;
  title: string;
  timeline: string;
  company: string;
  summary: string;
  highlights: string[];
  architecture: {
    overview: string;
    components: string[];
    dataFlow: string[];
  };
  technologies: string[];
  featured: boolean;
  award?: string;
  category: 'cloud' | 'real-time' | 'ai' | 'enterprise';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  projects: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kishan Nadageri",
    role: "Full Stack Software Engineer",
    subRole: ".NET • Azure Cloud • Distributed Systems",
    email: "kishannadageri06@gmail.com",
    phone: "+49 015510608612",
    location: "Paderborn, Germany",
    linkedin: "https://linkedin.com/in/kishan-nadageri",
    github: "https://github.com",
    resumeUrl: "/kishan_nadageri_resume.pdf",
    statusBadge: "Open to Full-Time / Working Student Roles",
    bio: "Full Stack Software Engineer with 3.5+ years of production experience architecting scalable .NET and Microsoft Azure cloud solutions. Proven track record building low-latency APIs, event-driven pipelines, real-time SignalR/Redis systems, and enterprise AI integrations. Currently pursuing a Master's in Computer Engineering at Universität Paderborn.",
  },

  stats: [
    { label: "Production Experience", value: "3.5+ Yrs", desc: "Enterprise scale at Accenture" },
    { label: "Engineering Awards", value: "2x ACE", desc: "Client & delivery excellence" },
    { label: "Microsoft Certified", value: "3 Certs", desc: "AZ-900, MS-900, PL-900" },
    { label: "Core Backend Stack", value: ".NET / Azure", desc: "C#, Redis, Event Hubs, SQL" },
  ],

  experiences: [
    {
      id: "accenture-sr-analyst",
      role: "Full Stack Engineering Senior Analyst",
      company: "Accenture",
      location: "Bangalore, India",
      period: "03/2022 – 02/2024",
      type: "Full-Time (2 yrs)",
      summary: "Spearheaded backend architecture and cloud integration for enterprise solutions while guiding cross-functional teams and mentoring junior engineers.",
      bulletPoints: [
        "Guided and collaborated with front-end teams to enhance user interfaces, API contracts, and overall UX across enterprise applications.",
        "Led core development sprints, enforced code quality through comprehensive peer reviews, and mentored junior engineers on cloud best practices.",
        "Engineered serverless processing pipelines with Azure Functions for multi-modal audio/video translation and enterprise notifications.",
        "Spearheaded technical documentation, design patterns, and deployment configurations to establish knowledge sharing across teams.",
      ],
      technologies: ["C#", ".NET Core", "Microsoft Azure", "Azure Functions", "ReactJS", "REST APIs", "CI/CD", "Cognitive Services"],
      projects: ["Microsoft Copilot Transcription & Translation", "Avanade Enterprise Chat", "Microsoft Viva Oracle Connector", "CIBC @Home Application"]
    },
    {
      id: "accenture-analyst",
      role: "Full Stack Engineering Analyst",
      company: "Accenture",
      location: "Mumbai, India",
      period: "10/2020 – 02/2022",
      type: "Full-Time (1 yr 5 mos)",
      summary: "Engineered high-throughput backend APIs, optimized distributed database queries, and implemented low-latency real-time synchronization.",
      bulletPoints: [
        "Developed and maintained mission-critical backend APIs for real-time meeting management, notification queues, and telehealth services.",
        "Architected and optimized relational database schemas and Cosmos DB collections to minimize latency under high concurrent load.",
        "Implemented low-latency real-time state synchronization using Redis Distributed Cache and SignalR WebSockets.",
        "Created rigorous automated unit test suites and integration tests validating backend reliability, performance, and fault tolerance.",
        "Collaborated in daily agile standups, code reviews, distributed tracing, and production debugging sessions.",
      ],
      technologies: ["C#", "ASP.NET Core", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB", "SQL Server", "OOP", "Unit Testing"],
      projects: ["Telehealth Virtual Visits", "MSK Telemedicine Platform"]
    }
  ] as Experience[],

  projects: [
    {
      id: "copilot-transcription",
      title: "Microsoft Copilot Transcription & Translation",
      timeline: "11/2023 – 02/2024",
      company: "Accenture",
      category: "ai",
      featured: true,
      summary: "Event-driven AI pipeline orchestrating multi-modal audio/video speech extraction, neural translation, and automated Microsoft Teams notifications.",
      highlights: [
        "Architected serverless Azure Function Apps to ingest high-volume media files asynchronously with automated retry policies.",
        "Integrated Microsoft Teams webhooks and automated email triggers for instant post-meeting transcription summaries.",
        "Overcame cloud quota limitations by designing streaming batch processors and secure Azure Key Vault credential management.",
        "Delivered full end-to-end system under strict enterprise deadlines with zero downtime during client pilot.",
      ],
      architecture: {
        overview: "Asynchronous event-driven architecture decoupling media upload, speech processing, translation, and dispatch.",
        components: [
          "Azure Blob Storage (Media Landing Zone)",
          "Azure Functions (Blob & Queue Triggers)",
          "Speech & Cognitive Translation Services",
          "Teams Webhook Dispatcher & Notification Hub",
          "Azure Key Vault (Secrets Management)"
        ],
        dataFlow: [
          "1. Media file uploaded → Blob Created Event fired",
          "2. Azure Function triggers background worker queue",
          "3. Cognitive Speech Engine extracts timestamped transcript",
          "4. Neural Machine Translation translates to target languages",
          "5. Notification Hub formats adaptive cards & dispatches to Teams/Outlook"
        ]
      },
      technologies: [".NET", "C#", "Azure Functions", "Azure Cognitive Services", "Blob Storage", "Teams API", "Cloud Architecture"]
    },
    {
      id: "telehealth-virtual-visits",
      title: "Telehealth Virtual Visits & Real-Time Sync",
      timeline: "07/2021 – 03/2022",
      company: "Accenture",
      category: "real-time",
      featured: true,
      summary: "High-concurrency virtual clinical platform providing zero-latency room state synchronization, meeting queues, and automated clinician paging.",
      highlights: [
        "Implemented real-time bidirectional WebSocket channels via SignalR and Redis Backplane for instant room status updates.",
        "Processed real-time meeting telemetry and participant heartbeats using Azure Event Hubs and time-triggered serverless jobs.",
        "Leveraged Cosmos DB Change Feed to trigger event-driven state updates across clinical dashboards.",
        "Cut meeting notification latency by 65% and maintained 99.9% uptime during peak pandemic demand.",
      ],
      architecture: {
        overview: "Distributed pub/sub and distributed cache pattern powering sub-10ms consultation state updates across thousands of concurrent clinical rooms.",
        components: [
          ".NET 6 Microservices (REST & WebSocket Endpoints)",
          "Redis Distributed Cache (Session & Token Store)",
          "SignalR Hubs (Real-Time Bidirectional Streaming)",
          "Azure Event Hubs (High-Throughput Telemetry Ingestion)",
          "Cosmos DB with Change Feed Triggers"
        ],
        dataFlow: [
          "1. Clinician/Patient connects → WebSocket session established with SignalR",
          "2. Meeting state cached in Redis with distributed locks for session concurrency",
          "3. Telemetry streamed into Event Hubs for operational auditing & SLA tracking",
          "4. Cosmos DB Change Feed triggers serverless alert functions for clinical escalations"
        ]
      },
      technologies: [".NET 6", "C#", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB", "REST APIs", "Docker"]
    },
    {
      id: "viva-oracle-connector",
      title: "Microsoft Viva Oracle Connector",
      timeline: "06/2023",
      company: "Accenture",
      category: "enterprise",
      featured: true,
      award: "ACE Award (06/2023)",
      summary: "Enterprise data integration pipeline linking on-premise Oracle databases with the Microsoft Viva Employee Experience ecosystem.",
      highlights: [
        "Designed resilient ETL sync queues handling complex enterprise data mapping and schema synchronization.",
        "Supported cross-team LMS integration with Moodle, enabling automated learning tracking directly in Microsoft Teams.",
        "Mentored and guided 3 junior developers through backend implementation, testing standards, and pull requests.",
        "Honored with the prestigious Accenture ACE Award for delivery excellence and technical leadership.",
      ],
      architecture: {
        overview: "Secure enterprise gateway connecting legacy Oracle relational stores with modern Microsoft Graph and Viva APIs.",
        components: [
          "Secure Gateway Connector (.NET Core)",
          "Oracle Database Adapter & Connection Pool",
          "Microsoft Graph & Viva Integration APIs",
          "Moodle LMS Webhook Listener",
          "Resilient Retry & Circuit Breaker Logic (Polly)"
        ],
        dataFlow: [
          "1. Scheduled/Change-driven poll checks Oracle DB delta logs",
          "2. Data transformation layer sanitizes and formats employee records",
          "3. Synced via Microsoft Graph to Viva Learning & Insights cards",
          "4. Moodle completion events relayed back with transactional audit logs"
        ]
      },
      technologies: [".NET Core", "C#", "Oracle DB", "Microsoft Viva", "Microsoft Graph", "Moodle API", "Polly Resilience"]
    },
    {
      id: "cibc-athome",
      title: "CIBC @Home Banking Applications",
      timeline: "01/2023",
      company: "Accenture",
      category: "cloud",
      featured: true,
      award: "ACE Award (01/2023)",
      summary: "Financial services platform powering secure remote banking workflows with stringent security, auditability, and modern frontend responsiveness.",
      highlights: [
        "Developed high-security .NET backend microservices adhering to strict financial compliance and encryption standards.",
        "Contributed to responsive ReactJS frontend components, integrating complex financial data tables and verification workflows.",
        "Optimized SQL Server stored procedures and query execution plans for sub-second report generation.",
        "Received the Accenture ACE Award for outstanding cross-stack contribution and rapid turnaround.",
      ],
      architecture: {
        overview: "Multi-tier secure banking architecture with strict RBAC, data masking, and decoupled frontend/backend services.",
        components: [
          "ReactJS Frontend Single Page Application",
          ".NET Core Web API Gateway",
          "SQL Server Database with Transparent Data Encryption",
          "OAuth2 / Azure AD Authentication",
          "Application Insights (Distributed Tracing)"
        ],
        dataFlow: [
          "1. Authenticated user requests data through Azure AD token validation",
          "2. API Gateway applies policy enforcement and rate limiting",
          "3. Microservices query SQL Server with optimized indexing",
          "4. Data returned with field-level encryption for PII compliance"
        ]
      },
      technologies: [".NET Core", "ReactJS", "SQL Server", "Azure AD", "OAuth2", "C#", "Tailwind CSS"]
    },
    {
      id: "avanade-chat",
      title: "Avanade Enterprise Chat Platform",
      timeline: "08/2022 – 10/2023",
      company: "Accenture",
      category: "enterprise",
      featured: false,
      summary: "Enterprise-grade real-time collaboration and chat messaging system built for corporate compliance, fast search, and high-uptime communication.",
      highlights: [
        "Architected microservice messaging components using Azure Service Bus topics and subscriptions.",
        "Integrated full-text search indexing across conversation histories with strict access permissioning.",
        "Collaborated with frontend UI teams to build responsive chat components with optimistic message rendering.",
      ],
      architecture: {
        overview: "Message broker architecture ensuring at-least-once delivery, partitioned channels, and real-time distribution.",
        components: [
          "Azure Service Bus (Topic-based Pub/Sub)",
          ".NET Messaging Workers",
          "Redis Caching Layer",
          "React UI Components with WebSocket sync"
        ],
        dataFlow: [
          "1. Message sent via client WebSocket endpoint",
          "2. Published to Azure Service Bus topic",
          "3. Worker instances persist to storage and broadcast to channel subscribers"
        ]
      },
      technologies: ["C#", ".NET", "Azure Service Bus", "Redis", "ReactJS", "WebSockets"]
    }
  ] as Project[],

  skills: [
    {
      category: "Backend & Systems",
      icon: "Server",
      description: "High-performance server architecture, APIs, and cloud services",
      skills: [
        { name: "C# / .NET / ASP.NET Core", level: 95, tags: ["Production", "3.5+ Yrs"] },
        { name: "C++", level: 80, tags: ["Algorithms", "Systems"] },
        { name: "RESTful API Architecture", level: 92, tags: ["Microservices", "Design"] },
        { name: "Object-Oriented Programming (OOP)", level: 95, tags: ["Design Patterns", "SOLID"] },
        { name: "Unit & Integration Testing", level: 88, tags: ["xUnit", "Reliability"] },
      ]
    },
    {
      category: "Cloud & Microsoft Azure",
      icon: "Cloud",
      description: "Cloud-native services, serverless execution, and scalability",
      skills: [
        { name: "Azure Functions (Serverless)", level: 90, tags: ["Event-Driven", "Queues"] },
        { name: "Azure Event Hubs", level: 85, tags: ["Telemetry", "Streaming"] },
        { name: "Azure Cosmos DB", level: 85, tags: ["NoSQL", "Change Feed"] },
        { name: "Azure App Services & Key Vault", level: 90, tags: ["Cloud Hosting", "Security"] },
        { name: "Azure Service Bus", level: 85, tags: ["Enterprise Messaging"] },
      ]
    },
    {
      category: "Real-Time & Distributed Caching",
      icon: "Zap",
      description: "Sub-millisecond state updates, WebSockets, and distributed memory",
      skills: [
        { name: "Redis Distributed Cache", level: 90, tags: ["Sub-10ms", "Pub/Sub"] },
        { name: "SignalR (WebSockets)", level: 92, tags: ["Bidirectional", "Real-Time"] },
        { name: "Event-Driven Architecture", level: 88, tags: ["Decoupled", "Scalable"] },
        { name: "Distributed Locking & Concurrency", level: 82, tags: ["Race Prevention"] },
      ]
    },
    {
      category: "Databases & Data Storage",
      icon: "Database",
      description: "Relational and document storage modeling and query optimization",
      skills: [
        { name: "Microsoft SQL Server", level: 90, tags: ["Schema Design", "Indexing"] },
        { name: "SQL Query Optimization", level: 88, tags: ["Performance Tuning"] },
        { name: "Cosmos DB / NoSQL", level: 85, tags: ["Partitioning", "Scale"] },
        { name: "Data Modeling & Normalization", level: 90, tags: ["Architecture"] },
      ]
    },
    {
      category: "Frontend & Full Stack",
      icon: "Layout",
      description: "Modern component-driven web interfaces and user experience",
      skills: [
        { name: "ReactJS", level: 85, tags: ["Modern Hooks", "State"] },
        { name: "JavaScript / TypeScript", level: 88, tags: ["ES6+", "Typed"] },
        { name: "Tailwind CSS & Modern UI", level: 90, tags: ["Responsive", "Dark Mode"] },
        { name: "API Contract Integration", level: 92, tags: ["Axios / Fetch", "JSON"] },
      ]
    },
    {
      category: "Engineering Practices",
      icon: "GitBranch",
      description: "Code health, peer review, leadership, and agile delivery",
      skills: [
        { name: "Code Review & Mentorship", level: 92, tags: ["Led 3 Junior Devs"] },
        { name: "Git & Branching Strategies", level: 90, tags: ["GitFlow", "CI/CD"] },
        { name: "Agile / Scrum Delivery", level: 90, tags: ["Sprint Planning", "Jira"] },
        { name: "Technical Documentation", level: 90, tags: ["Architecture Specs"] },
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "Universität Paderborn",
      location: "Paderborn, North Rhine-Westphalia, Germany",
      period: "04/2024 – Present",
      status: "In Progress",
      description: "Focusing on advanced computer systems, software architecture, distributed computing, and high-performance algorithms.",
      tags: ["Advanced Systems", "Distributed Computing", "Software Engineering"]
    },
    {
      degree: "Bachelor of Engineering in Information Science Engineering",
      institution: "SDMCET (SDM College of Engineering & Technology)",
      location: "Dharwad, Karnataka, India",
      period: "08/2016 – 09/2020",
      status: "Completed",
      grade: "CGPA: 8.59 / 10.0",
      description: "Comprehensive foundation in computer science, data structures, algorithms, database management, and operating systems.",
      tags: ["Algorithms", "Data Structures", "Database Systems", "Operating Systems"]
    }
  ],

  certifications: [
    {
      code: "AZ-900",
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      badge: "Azure",
      color: "from-blue-500 to-cyan-400",
      description: "Validates foundational knowledge of cloud concepts, Azure architecture, compute, networking, storage, security, and governance."
    },
    {
      code: "MS-900",
      name: "Microsoft 365 Certified: Fundamentals",
      issuer: "Microsoft",
      badge: "M365",
      color: "from-purple-500 to-indigo-400",
      description: "Demonstrates understanding of cloud services options, Microsoft 365 SaaS solutions, security, compliance, and enterprise collaboration."
    },
    {
      code: "PL-900",
      name: "Microsoft Certified: Power Platform Fundamentals",
      issuer: "Microsoft",
      badge: "Power Platform",
      color: "from-amber-500 to-emerald-400",
      description: "Validates ability to build business value with Power Platform, automate processes, integrate data connectors, and build custom apps."
    }
  ],

  awards: [
    {
      title: "Accenture ACE Award — Microsoft Viva Oracle Connector",
      date: "June 2023",
      issuedBy: "Accenture",
      description: "Recognized for exceptional technical execution, cross-platform Moodle LMS integration, and outstanding leadership while mentoring 3 junior developers.",
      impact: "Zero-defect enterprise deployment with cross-team praise from leadership."
    },
    {
      title: "Accenture ACE Award — CIBC @Home Banking Application",
      date: "January 2023",
      issuedBy: "Accenture",
      description: "Awarded for rapid full-stack delivery, high-security backend microservices, and seamless React frontend components under tight deadlines.",
      impact: "Enabled remote banking operations with strict compliance adherence."
    }
  ],

  languages: [
    { name: "English", level: "Full Professional Proficiency", flag: "🇬🇧" },
    { name: "German", level: "A1 — Elementary (Actively Learning)", flag: "🇩🇪" },
    { name: "Kannada", level: "Native / Bilingual", flag: "🇮🇳" },
    { name: "Hindi", level: "Native / Bilingual", flag: "🇮🇳" }
  ],

  terminalCommands: [
    { command: "whoami", desc: "Display software engineer profile & bio summary" },
    { command: "skills", desc: "List core technical skills, cloud platforms & tools" },
    { command: "exp", desc: "Show enterprise career timeline and production roles" },
    { command: "projects", desc: "List high-impact production projects and architecture" },
    { command: "awards", desc: "Display ACE awards and industry recognitions" },
    { command: "certs", desc: "Show Microsoft certifications (AZ-900, MS-900, PL-900)" },
    { command: "arch", desc: "Inspect real-time distributed system architecture diagram" },
    { command: "contact", desc: "Output email, phone, location & LinkedIn links" },
    { command: "download-cv", desc: "Trigger instant download of Kishan's resume PDF" },
    { command: "clear", desc: "Clear the terminal output screen" },
    { command: "help", desc: "Show this list of available commands" }
  ]
};
