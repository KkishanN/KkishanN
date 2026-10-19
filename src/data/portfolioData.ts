export interface Project {
  title: string;
  category: string;
  timeline: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  award?: string;
  badge?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kishan Nadageri",
    title: "Software Engineer & Master's Student",
    headline: "Full Stack Software Engineer with 3.5+ years of enterprise experience in .NET, Azure Cloud, and Distributed Systems, currently pursuing a Master's in Computer Engineering at Universität Paderborn.",
    email: "kishannadageri06@gmail.com",
    phone: "+49 015510608612",
    location: "Paderborn, Germany",
    github: "https://github.com/KkishanN",
    linkedin: "https://linkedin.com/in/kishan-nadageri",
    resumeUrl: "/kishan_nadageri_resume.pdf",
    status: "Open to Full-Time / Working Student Roles",
  },

  highlights: [
    { label: "Experience", value: "3.5+ Yrs", detail: "Enterprise scale at Accenture" },
    { label: "Education", value: "M.Sc. Student", detail: "Computer Engineering, Uni Paderborn" },
    { label: "Honors", value: "2x ACE Awards", detail: "Accenture technical delivery excellence" },
    { label: "Certifications", value: "3x Microsoft", detail: "AZ-900, MS-900, PL-900" }
  ],

  experiences: [
    {
      role: "Full Stack Engineering Senior Analyst",
      company: "Accenture",
      location: "Bangalore, India",
      period: "03/2022 – 02/2024",
      highlights: [
        "Spearheaded backend architecture and cloud integration for enterprise solutions with .NET Core and Microsoft Azure.",
        "Engineered serverless processing pipelines using Azure Functions for multi-modal audio/video translation and Teams notifications.",
        "Guided front-end teams on React UI integrations, conducted code reviews, and mentored 3 junior developers to uphold code quality.",
        "Won the Accenture ACE Award (06/2023) for delivery excellence on the Microsoft Viva Oracle Connector."
      ],
      technologies: ["C#", ".NET Core", "Microsoft Azure", "Azure Functions", "ReactJS", "REST APIs", "CI/CD"]
    },
    {
      role: "Full Stack Engineering Analyst",
      company: "Accenture",
      location: "Mumbai, India",
      period: "10/2020 – 02/2022",
      highlights: [
        "Developed and maintained high-throughput backend APIs for real-time meeting management and telehealth notification queues.",
        "Achieved sub-10ms state synchronization using Redis Distributed Cache and SignalR WebSockets for virtual visits.",
        "Streamed high-volume telemetry and participant data using Azure Event Hubs and Cosmos DB Change Feed triggers.",
        "Won the Accenture ACE Award (01/2023) for full-stack contributions to the CIBC @Home application."
      ],
      technologies: ["C#", "ASP.NET Core", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB", "SQL Server"]
    }
  ] as Experience[],

  projects: [
    {
      title: "Explainable AI (XAI) & Interpretable ML",
      category: "AI & Research Coursework",
      timeline: "2025 – Present",
      description: "Interpretable machine learning framework built as part of coursework at Universität Paderborn. Explores feature attribution, model interpretability, and graph convolutions (SGC) to evaluate neural network decision boundaries.",
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "Feature Engineering", "XAI"],
      github: "https://github.com/KkishanN/XAI_prj",
      badge: "Uni Paderborn"
    },
    {
      title: "Azure Brokered Messaging Architecture",
      category: "Cloud & Messaging",
      timeline: "Open Source",
      description: "Production-ready messaging patterns leveraging Azure Service Bus (Queues and Topics). Implements reliable asynchronous publishers, consumers, and a brokered console chat application in C#.",
      technologies: ["C#", ".NET", "Azure Service Bus", "Message Queues", "Pub/Sub"],
      github: "https://github.com/KkishanN/AzureServices-Basics-Csharp",
      badge: "GitHub Repo"
    },
    {
      title: "Microsoft Copilot Transcription & Translation",
      category: "Enterprise AI & Cloud",
      timeline: "11/2023 – 02/2024",
      description: "Event-driven serverless pipeline integrating media processing with Azure Cognitive Speech and Neural Translation, delivering automated post-meeting transcript summaries to Microsoft Teams channels.",
      technologies: [".NET", "Azure Functions", "Cognitive Services", "Blob Storage", "Teams API"],
      badge: "Accenture Client"
    },
    {
      title: "Telehealth Real-Time Consultation Engine",
      category: "Distributed Systems",
      timeline: "07/2021 – 03/2022",
      description: "Low-latency clinical visit platform providing sub-10ms room state synchronization across thousands of concurrent consultation rooms using Redis Distributed Cache, SignalR, and Event Hubs.",
      technologies: [".NET 6", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB"],
      badge: "Accenture Client"
    },
    {
      title: "Microsoft Viva Oracle Data Connector",
      category: "Enterprise Integration",
      timeline: "06/2023",
      description: "Fault-tolerant data bridge syncing on-premise Oracle DB with Microsoft Viva Learning and Moodle LMS, utilizing Polly circuit breaker patterns for uninterrupted data consistency.",
      technologies: [".NET Core", "Oracle DB", "Microsoft Viva", "Polly Resilience", "REST"],
      award: "ACE Award Winner",
      badge: "Accenture Client"
    },
    {
      title: "TensorTonic Deep Learning Implementations",
      category: "Algorithms & ML",
      timeline: "2026",
      description: "Algorithmic implementations of tensor transformations, autograd routines, and fundamental deep learning mechanics implemented from first principles in Python.",
      technologies: ["Python", "PyTorch", "Linear Algebra", "Algorithms"],
      github: "https://github.com/KkishanN/TensorTonic-Solutions",
      badge: "GitHub Repo"
    }
  ] as Project[],

  skillGroups: [
    {
      title: "Languages",
      skills: ["C#", "C++", "Python", "SQL", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend & Systems",
      skills: [".NET / ASP.NET Core", "RESTful APIs", "Microservices", "Object-Oriented Programming (OOP)", "Unit Testing"]
    },
    {
      title: "Cloud & Microsoft Azure",
      skills: ["Azure Functions", "Azure Service Bus", "Azure Event Hubs", "Azure Cosmos DB", "Azure App Services", "Azure Key Vault"]
    },
    {
      title: "Real-Time & Databases",
      skills: ["Redis Distributed Cache", "SignalR (WebSockets)", "Microsoft SQL Server", "Cosmos DB / NoSQL", "Event-Driven Pub/Sub"]
    },
    {
      title: "AI, Tools & Methods",
      skills: ["Explainable AI (XAI)", "PyTorch", "ReactJS", "Git & GitHub", "CI/CD", "Agile / Scrum"]
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "Universität Paderborn",
      location: "Paderborn, Germany",
      period: "04/2024 – Present",
      note: "Focusing on distributed systems, advanced software engineering, and machine learning."
    },
    {
      degree: "Bachelor of Engineering in Information Science",
      institution: "SDMCET",
      location: "Dharwad, India",
      period: "08/2016 – 09/2020",
      note: "Graduated with 8.59 / 10.0 CGPA."
    }
  ],

  certifications: [
    { code: "AZ-900", name: "Microsoft Certified: Azure Fundamentals" },
    { code: "MS-900", name: "Microsoft 365 Certified: Fundamentals" },
    { code: "PL-900", name: "Microsoft Certified: Power Platform Fundamentals" }
  ],

  languages: [
    { name: "English", level: "Full Professional" },
    { name: "German", level: "A1 Elementary" },
    { name: "Kannada", level: "Native / Bilingual" },
    { name: "Hindi", level: "Native / Bilingual" }
  ]
};
