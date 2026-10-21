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
    title: "Full Stack Software Engineer",
    headline: "Experienced Full Stack Engineer with 3+ years of expertise in architecting, developing, and deploying robust .NET solutions across the Microsoft Azure platform. Proven track record in leading backend development, optimizing cloud applications, and delivering high-impact enterprise projects at Accenture.",
    email: "kishannadageri06@gmail.com",
    // Encoded to prevent automated web crawlers from scraping phone directly
    phone: typeof atob !== "undefined" ? atob("KzkxLTg5MDQ1MjY2Njc=") : "+91-8904526667",
    location: "Paderborn, Germany",
    github: "https://github.com/KkishanN",
    linkedin: "https://linkedin.com/in/kishan-nadageri",
    resumeUrl: "./kishan_nadageri_resume.pdf",
    status: "Open to Software Engineering Opportunities",
    avatar: "./kishan.jpg",
  },

  highlights: [
    { label: "Experience", value: "3+ Yrs", detail: "Enterprise scale at Accenture" },
    { label: "Core Stack", value: ".NET & Azure", detail: "Cloud microservices & APIs" },
    { label: "Recognition", value: "2x ACE Awards", detail: "Accenture technical excellence" },
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
        "Earned two Accenture ACE Awards for delivery excellence on the Microsoft Viva Oracle Connector (06/2023) and CIBC @Home Application (01/2023)."
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
        "Implemented real-time state synchronization using Redis Distributed Cache and SignalR WebSockets for virtual clinical visits.",
        "Streamed high-volume telemetry and participant data using Azure Event Hubs and Cosmos DB Change Feed triggers.",
        "Collaborated across engineering squads on unit testing, peer code reviews, and database schema optimizations for MSK Telemedicine."
      ],
      technologies: ["C#", "ASP.NET Core", "Redis Cache", "SignalR", "Azure Event Hubs", "Cosmos DB", "SQL Server"]
    }
  ] as Experience[],

  // Segregated Work & Enterprise Projects (Accenture)
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
      description: "Real-time clinical consultation platform providing synchronized room state across concurrent consultation rooms using Redis Distributed Cache, SignalR, and Event Hubs.",
      highlights: [
        "Built bidirectional WebSocket channels with SignalR and Redis Backplane to maintain active room state and live session updates.",
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

  // Refined Research & Open-Source Projects (With Actual Project Titles & GitHub Links)
  personalProjects: [
    {
      id: "approximate-ml-lenet5",
      title: "Approximate Computing: LeNet-5 Pruning & Compression",
      projectType: "personal",
      clientOrContext: "Approximate Computing (AxC)",
      role: "Systems & ML Exploration",
      timeline: "2026",
      description: "Evaluated algorithmic approximation techniques on convolutional neural networks (LeNet-5 on MNIST), assessing the impact of structured weight pruning, PCA dimensionality reduction, and pixel variance filtering on accuracy and compute efficiency.",
      highlights: [
        "Weight Pruning: Implemented magnitude-based and uniform random pruning across all fully connected layers (10%–50%), evaluating pre- and post-retraining classification recovery.",
        "Sparsity Resilience: Demonstrated that magnitude pruning retains a 0.976 test F1-score at 50% parameter sparsity (vs. 0.988 baseline), significantly outperforming random pruning (0.938).",
        "PCA Data Compression: Applied PCA to flatten MNIST images, showing that truncating 20% of low-variance components preserves an F1-score of 0.983 with virtually zero degradation.",
        "Combined Pipeline: Integrated 20% PCA input compression with 30% magnitude weight pruning, achieving a ~44% parameter/FLOP reduction while maintaining a 0.979 test F1-score."
      ],
      technologies: ["Python", "PyTorch", "NumPy", "Scikit-Learn", "CNN / LeNet-5", "Model Pruning", "PCA"],
      github: "https://github.com/KkishanN/AxC/tree/main/lab1",
      badge: "Approximate ML"
    },
    {
      id: "approximate-fir-dse",
      title: "Approximate Computing: FIR Filter & Beam Search DSE",
      projectType: "personal",
      clientOrContext: "Approximate Computing (AxC)",
      role: "Hardware Architecture & Synthesis",
      timeline: "2026",
      description: "Designed an approximate 10-stage digital FIR filter in VHDL and developed an automated Beam Search Design Space Exploration (DSE) framework in Python to optimize circuit area under strict error and timing constraints.",
      highlights: [
        "Pipelined Architecture: Implemented a synthesizable 10-stage FIR filter in VHDL meeting a 1.0 ns (1.0 GHz) clock period constraint and latency ≤ 3 cycles.",
        "Parametric Approximations: Developed configurable 32-bit adders and multipliers with parameterized 1–8 bit MSB/LSB truncation, eliminating lower carry chains and partial product columns.",
        "Beam Search DSE (K=3): Built an automated exploration algorithm evaluating configurations across 10,000 uniform random inputs [0, 255] without repetition under a strict MSE ≤ 5.0% threshold.",
        "Pareto Optimization: Achieved 10.34% circuit area savings (12,176.0 μm² vs. 13,580.0 μm² baseline) with an ultra-low Normalized MSE of 0.000031%, synthesized via Synopsys Design Compiler."
      ],
      technologies: ["VHDL", "Python", "Synopsys DC", "Design Space Exploration (DSE)", "Approximate Computing", "DSP Filters", "Pareto Analysis"],
      github: "https://github.com/KkishanN/AxC/tree/main/lab2",
      badge: "Hardware & DSE"
    },
    {
      id: "xai-framework",
      title: "Explainable AI (XAI) & Interpretable ML",
      projectType: "personal",
      clientOrContext: "Interpretable Machine Learning",
      role: "Research & Development",
      timeline: "2025 – Present",
      description: "Interpretable machine learning framework exploring feature attribution, model interpretability, and graph convolutions (SGC) to evaluate neural network decision boundaries.",
      highlights: [
        "Implemented graph neural network baseline (Simple Graph Convolution) and feature engineering pipelines in PyTorch.",
        "Evaluated model explanation fidelity using attribution metrics and interpretable ML visualizations."
      ],
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "Feature Engineering", "XAI"],
      github: "https://github.com/KkishanN/XAI_prj",
      badge: "ML Research"
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
      title: "Research & Systems Tools",
      skills: ["Approximate Computing (AxC)", "Explainable AI (XAI)", "PyTorch", "CUDA & GPU Architecture", "CI/CD"]
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "Universität Paderborn",
      location: "Paderborn, Germany",
      period: "04/2024 – Present",
      note: "Focusing on Approximate Computing (AxC), Distributed Systems, High-Performance Architecture, and Explainable AI."
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
