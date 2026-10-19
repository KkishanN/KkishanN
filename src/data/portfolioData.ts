export interface Project {
  id: string;
  title: string;
  projectType: 'work' | 'personal';
  clientOrContext: string;
  role?: string;
  timeline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  award?: string;
  badge: string;
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
    title: "Software Engineer",
    headline: "Full Stack Software Engineer with 3.5+ years of enterprise experience in .NET, Microsoft Azure Cloud, and Distributed Real-Time Systems, complemented by academic projects in Explainable AI and PyTorch.",
    email: "kishannadageri06@gmail.com",
    phone: "+91-8904526667",
    location: "India",
    github: "https://github.com/KkishanN",
    linkedin: "https://linkedin.com/in/kishan-nadageri",
    resumeUrl: "/kishan_nadageri_resume.pdf",
    status: "Open to Software Engineering Opportunities",
  },

  highlights: [
    { label: "Experience", value: "3.5+ Yrs", detail: "Enterprise scale at Accenture" },
    { label: "Education", value: "M.Sc. Candidate", detail: "Computer Engineering, Uni Paderborn" },
    { label: "Recognition", value: "2x ACE Awards", detail: "Delivery & technical excellence" },
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
        "Awarded the Accenture ACE Award (06/2023) for delivery excellence on the Microsoft Viva Oracle Connector."
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
        "Awarded the Accenture ACE Award (01/2023) for full-stack contributions to the CIBC @Home application."
      ],
      technologies: ["C#", "ASP.NET Core", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB", "SQL Server"]
    }
  ] as Experience[],

  // Segregated Work & Enterprise Projects
  workProjects: [
    {
      id: "copilot-transcription",
      title: "Microsoft Copilot Transcription & Translation",
      projectType: "work",
      clientOrContext: "Accenture Enterprise Project",
      role: "Backend & Cloud Engineer",
      timeline: "11/2023 – 02/2024",
      description: "Event-driven serverless pipeline integrating media processing with Azure Cognitive Speech and Neural Translation, delivering automated post-meeting transcript summaries to Microsoft Teams channels.",
      highlights: [
        "Architected serverless Azure Function Apps to ingest high-volume media files asynchronously with automated retry policies.",
        "Eliminated manual transcription bottlenecks through automated webhooks and Adaptive Card generation in Teams."
      ],
      technologies: [".NET", "C#", "Azure Functions", "Cognitive Services", "Blob Storage", "Teams API"],
      badge: "Enterprise Production"
    },
    {
      id: "telehealth-visits",
      title: "Telehealth Real-Time Clinical Visits",
      projectType: "work",
      clientOrContext: "Accenture Healthcare Client",
      role: "Full Stack Engineer",
      timeline: "07/2021 – 03/2022",
      description: "Low-latency clinical consultation platform providing sub-10ms room state synchronization across thousands of concurrent consultation rooms using Redis Distributed Cache, SignalR, and Event Hubs.",
      highlights: [
        "Built bidirectional WebSocket channels with SignalR and Redis Backplane to maintain active room state with sub-10ms latency.",
        "Ingested real-time meeting telemetry and connection logs into Azure Event Hubs for operational auditing."
      ],
      technologies: [".NET 6", "C#", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB"],
      badge: "Real-Time Systems"
    },
    {
      id: "viva-oracle",
      title: "Microsoft Viva Oracle Data Connector",
      projectType: "work",
      clientOrContext: "Accenture Enterprise Client",
      role: "Module Lead & Backend Engineer",
      timeline: "06/2023",
      description: "Fault-tolerant data bridge syncing on-premise Oracle DB with Microsoft Viva Learning and Moodle LMS, utilizing Polly circuit breaker patterns for uninterrupted data consistency.",
      highlights: [
        "Designed resilient ETL sync queues handling complex enterprise data mapping and schema synchronization.",
        "Mentored and guided 3 junior developers through backend implementation, unit testing, and production deployment."
      ],
      technologies: [".NET Core", "C#", "Oracle DB", "Microsoft Viva", "Polly Resilience", "REST"],
      award: "ACE Award Winner (06/2023)",
      badge: "ACE Award Winner"
    },
    {
      id: "cibc-athome",
      title: "CIBC @Home Banking Applications",
      projectType: "work",
      clientOrContext: "Accenture Financial Services Client",
      role: "Full Stack Engineer",
      timeline: "01/2023",
      description: "Financial services platform powering secure remote banking workflows with stringent security, auditability, and modern React frontend responsiveness.",
      highlights: [
        "Developed secure .NET backend microservices adhering to strict financial compliance and encryption standards.",
        "Optimized SQL Server stored procedures and query execution plans for sub-second report generation."
      ],
      technologies: [".NET Core", "ReactJS", "SQL Server", "Azure AD", "OAuth2", "C#"],
      award: "ACE Award Winner (01/2023)",
      badge: "ACE Award Winner"
    }
  ] as Project[],

  // Segregated Personal & Open-Source Projects (GitHub)
  personalProjects: [
    {
      id: "xai-framework",
      title: "Explainable AI (XAI) & Interpretable ML",
      projectType: "personal",
      clientOrContext: "Universität Paderborn Coursework",
      role: "Graduate Researcher & Developer",
      timeline: "2025 – Present",
      description: "Interpretable machine learning framework developed at Universität Paderborn. Explores feature attribution, model interpretability, and graph convolutions (SGC) to evaluate neural network decision boundaries.",
      highlights: [
        "Implemented graph neural network baseline (Simple Graph Convolution) and feature engineering pipelines in PyTorch.",
        "Evaluated model explanation fidelity using attribution metrics and interpretable ML visualizations."
      ],
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "Feature Engineering", "XAI"],
      github: "https://github.com/KkishanN/XAI_prj",
      badge: "Graduate Project"
    },
    {
      id: "azure-messaging",
      title: "Azure Brokered Messaging Architecture",
      projectType: "personal",
      clientOrContext: "Open Source / GitHub",
      role: "Personal Project",
      timeline: "Open Source",
      description: "Production-ready messaging patterns leveraging Azure Service Bus (Queues and Topics). Implements reliable asynchronous publishers, consumers, and a brokered console chat application in C#.",
      highlights: [
        "Implemented publisher/subscriber messaging with topic filtering, dead-letter queues, and message batching.",
        "Built a multi-user brokered console chat application verifying real-time queue delivery guarantees."
      ],
      technologies: ["C#", ".NET", "Azure Service Bus", "Message Queues", "Pub/Sub"],
      github: "https://github.com/KkishanN/AzureServices-Basics-Csharp",
      badge: "Open Source"
    },
    {
      id: "tensortonic-dl",
      title: "TensorTonic Deep Learning Implementations",
      projectType: "personal",
      clientOrContext: "Open Source / GitHub",
      role: "Personal Project",
      timeline: "2026",
      description: "Algorithmic implementations of tensor transformations, autograd routines, and fundamental deep learning mechanics implemented from first principles in Python.",
      highlights: [
        "Authored mathematical routines for matrix factorizations, backpropagation derivatives, and layer activations.",
        "Benchmarked tensor transformation speed and numerical stability across optimization routines."
      ],
      technologies: ["Python", "PyTorch", "Linear Algebra", "Algorithms"],
      github: "https://github.com/KkishanN/TensorTonic-Solutions",
      badge: "Algorithms & ML"
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
      note: "Focusing on distributed systems, software architecture, and explainable machine learning."
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
