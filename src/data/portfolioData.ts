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
    headline: "Full Stack Software Engineer with 3.5+ years of enterprise experience in .NET, Microsoft Azure Cloud, and Distributed Real-Time Systems, complemented by graduate research in Approximate Computing (AxC) and Symbolic Hardware Acceleration.",
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
      id: "spatial-interaction-reducer",
      title: "Silicon for Symbolic Computation: Spatial Interaction Reducer",
      projectType: "personal",
      clientOrContext: "Hardware Architecture & Simulation",
      role: "Hardware Architecture & Simulation",
      timeline: "2026",
      description: "Cycle-accurate hardware simulator and FPGA architecture for Interaction Calculus graph reduction, alongside an approximate DSP filter design space exploration (DSE) framework in VHDL and Python.",
      highlights: [
        "Implemented cycle-accurate software simulator in C++ modeling 8 parallel spatial rule-blocks (APP-LAM, DUP-SUP, APP-SUP, DUP-LAM, ERA, NUM/SUC).",
        "Engineered 8-bank interleaved on-chip BRAM memory system with conflict arbitration and free-list recycling for floating duplication nodes.",
        "Achieved 80.01 MInt/s throughput at 250 MHz clock on Depth-14 bitonic reduction net, delivering 2.26× higher energy efficiency than CPU baselines (184.98 J/GInt vs 418 J/GInt).",
        "Developed Beam Search DSE framework for approximate 10-stage FIR filters, achieving 10.34% hardware area savings under strict MSE ≤ 5.0% error constraint on 10,000 samples."
      ],
      technologies: ["C++17", "VHDL", "FPGA Architecture", "BRAM Banking", "Cycle-Accurate Sim", "Spatial Dataflow", "Design Space Exploration"],
      github: "https://github.com/KkishanN/AxC/tree/main/lab2",
      badge: "Hardware & Systems"
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
