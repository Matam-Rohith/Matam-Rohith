export interface ProjectItem {
  id: string;
  title: string;
  repoName: string;
  description: string;
  detailedOverview: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'aiml' | 'analytics' | 'systems' | 'utilities';
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  language: string;
  languageColor: string;
  highlights: string[];
  stars?: number;
  updatedAt?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    badgeColor: string;
    experience: string;
  }[];
}

export const PROFILE_INFO = {
  name: "Matam Rohith",
  title: "Software Engineer & AI/ML Developer",
  role: "Full Stack & Applied AI",
  location: "Hyderabad, Telangana, India",
  education: "B.Tech in Computer Science and Engineering",
  university: "SR University (2022 – 2026)",
  email: "matamrohith12614@gmail.com",
  github: "https://github.com/Matam-Rohith",
  linkedin: "https://www.linkedin.com/in/matam-rohith-1418ab1b4/",
  portfolio: "https://rohith-portfolio-six.vercel.app/",
  resume: "https://drive.google.com/file/d/1vgDO3YO2rEnL5xV7ZVZlFvnhe7Leh7T4/view",
  leetcode: "https://leetcode.com/u/matam_rohith/",
  bannerUrl: "https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Matam%20Rohith&fontSize=60&fontColor=ffffff&fontAlignY=35&desc=Full%20Stack%20Developer%20%7C%20AI%2FML%20Enthusiast&descAlignY=58&descSize=20",
  footerBannerUrl: "https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&fontSize=24&fontColor=ffffff",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", badgeColor: "#3776AB", experience: "Primary / Advanced" },
      { name: "TypeScript", badgeColor: "#3178C6", experience: "Production" },
      { name: "JavaScript (ES6+)", badgeColor: "#F7DF1E", experience: "Advanced" },
      { name: "Java", badgeColor: "#ED8B00", experience: "Object-Oriented" },
      { name: "C#", badgeColor: "#512BD4", experience: ".NET Core" },
      { name: "SQL", badgeColor: "#4169E1", experience: "Complex Queries" },
      { name: "C", badgeColor: "#00599C", experience: "Foundational" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React 18", badgeColor: "#61DAFB", experience: "Advanced" },
      { name: "Next.js", badgeColor: "#FFFFFF", experience: "App Router / SSR" },
      { name: "Tailwind CSS", badgeColor: "#06B6D4", experience: "Modern UI / Responsive" },
      { name: "HTML5 & Modern CSS3", badgeColor: "#E34F26", experience: "Semantic & Accessible" },
      { name: "Recharts & Chart.js", badgeColor: "#22C55E", experience: "Data Visualization" },
      { name: "AngularJS", badgeColor: "#E23237", experience: "Legacy MVC" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    skills: [
      { name: "Node.js & Express", badgeColor: "#339933", experience: "REST APIs" },
      { name: "Flask & FastAPI", badgeColor: "#009688", experience: "Python Microservices" },
      { name: "ASP.NET Core 8", badgeColor: "#512BD4", experience: "Web API & EF Core" },
      { name: "PostgreSQL", badgeColor: "#4169E1", experience: "Relational Modeling" },
      { name: "MongoDB", badgeColor: "#47A248", experience: "NoSQL Collections" },
      { name: "SQLite", badgeColor: "#003B57", experience: "Embedded DB" },
    ],
  },
  {
    id: "aiml",
    name: "AI, Machine Learning & Vision",
    skills: [
      { name: "scikit-learn", badgeColor: "#F7931E", experience: "Classifiers & Regressors" },
      { name: "OpenCV", badgeColor: "#5C3EE8", experience: "Computer Vision" },
      { name: "MediaPipe", badgeColor: "#00C7B7", experience: "Real-time Hand Tracking" },
      { name: "Pandas & NumPy", badgeColor: "#150458", experience: "Data Wrangling & Tensor Ops" },
      { name: "TF-IDF & NLTK", badgeColor: "#8B5CF6", experience: "NLP Pipelines" },
      { name: "Jupyter Notebooks", badgeColor: "#F37626", experience: "EDA & Modeling" },
    ],
  },
  {
    id: "tools",
    name: "DevOps, Tools & Analytics",
    skills: [
      { name: "Git & GitHub", badgeColor: "#F05032", experience: "Version Control & Actions" },
      { name: "Docker", badgeColor: "#2496ED", experience: "Containerization" },
      { name: "Vercel & Render", badgeColor: "#000000", experience: "Cloud Deployment" },
      { name: "Power BI & Tableau", badgeColor: "#F2C811", experience: "BI Dashboards" },
      { name: "Postman & Swagger", badgeColor: "#FF6C37", experience: "API Testing & Docs" },
      { name: "Linux / Bash", badgeColor: "#FCC624", experience: "CLI & Automation" },
    ],
  },
];

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "gesture-vision",
    title: "GestureVision",
    repoName: "GestureVision",
    description: "Real-time AI camera application that controls visual camera filters using hand gestures detected with MediaPipe.",
    detailedOverview: "GestureVision is an interactive computer vision application that tracks hand landmarks in real time through a standard webcam. It recognizes custom gestures to toggle visual filters, adjust color channels, and trigger frame effects without keyboard or mouse input.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    category: "aiml",
    language: "Python",
    languageColor: "#3776AB",
    githubUrl: "https://github.com/Matam-Rohith/GestureVision",
    featured: true,
    highlights: [
      "Real-time 21-point hand landmark tracking via Google MediaPipe",
      "Dynamic gesture classification mapped to live camera filters",
      "Zero-latency frame processing with OpenCV video capture pipeline",
      "Modular filter engine (Edge Detection, Inversion, Sepia, Hue shift)"
    ]
  },
  {
    id: "serviceops-itil",
    title: "ServiceOps - ITIL Support Platform",
    repoName: "ServiceOps---ITIL-Service-Management-Support-Platform",
    description: "ITIL service management and technical support platform with incident handling, change control, and SLA monitoring.",
    detailedOverview: "Built according to ITIL operational guidelines, ServiceOps provides corporate IT departments with incident ticketing, problem tracking, change management approval chains, service catalog browsing, and SLA performance dashboards.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Cloud Run"],
    category: "fullstack",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/ServiceOps---ITIL-Service-Management-Support-Platform",
    demoUrl: "https://serviceops-itil-service-management-support-platfo-189251894547.asia-southeast1.run.app/",
    featured: true,
    highlights: [
      "Enterprise ITIL service workflows (Incident, Problem & Change Management)",
      "Automated SLA countdown and breach alert system",
      "Role-based authorization for Agents, IT Managers, and End Users",
      "Live deployment on Google Cloud Run"
    ]
  },
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    repoName: "sales-performance-dashboard",
    description: "Business analytics dashboard with Superstore & Kaggle sales data, DAX measures, KPIs, and interactive filters.",
    detailedOverview: "A business intelligence and analytics suite translating raw transaction datasets into executive sales KPIs, regional profitability distributions, customer segment trends, and product return ratios.",
    tech: ["TypeScript", "Power BI", "Excel", "Data Analytics"],
    category: "analytics",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/sales-performance-dashboard",
    demoUrl: "https://sales-performance-dashboard-tawny.vercel.app",
    featured: true,
    highlights: [
      "Executive KPI metrics (Gross Revenue, Profit Margin, Discount Impact)",
      "Interactive multi-dimensional slice & dice filters",
      "DAX calculated columns and measure aggregates",
      "Production deployment on Vercel"
    ]
  },
  {
    id: "req-management",
    title: "Requirements Management Portal",
    repoName: "requirements-management-portal",
    description: "Production-ready requirements tracking portal with priority levels, status filtering, live charts, and role-based access.",
    detailedOverview: "Full-lifecycle software engineering requirements portal. Tracks product backlog items, user stories, and acceptance criteria with priority matrices, status kanban views, Recharts visual metrics, and Admin/Viewer roles.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    category: "fullstack",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/requirements-management-portal",
    demoUrl: "https://requirements-management-portal.vercel.app",
    featured: true,
    highlights: [
      "Role-based access control with Admin and Viewer privileges",
      "Interactive data visualizations powered by Recharts",
      "Fast instant search, priority filtering, and status tagging",
      "Production deployment on Vercel"
    ]
  },
  {
    id: "log-analyzer",
    title: "Log Analyzer & Incident Detector",
    repoName: "log-analyzer-incident-detector",
    description: "SOC-style enterprise dashboard for ingesting logs, detecting anomalies, and visualizing security telemetry.",
    detailedOverview: "Security Operations Center (SOC) dashboard. Features log ingestion simulation, threat level heuristics, suspicious IP flagging, and time-series security incident charts.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "shadcn/ui"],
    category: "fullstack",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/log-analyzer-incident-detector",
    demoUrl: "https://log-analyzer-incident-detector.vercel.app",
    featured: true,
    highlights: [
      "SOC-style dark UI with anomaly severity thresholds",
      "Live time-bucketed event frequency graphs",
      "Suspicious IP and repeated auth failure identification",
      "Zero backend overhead — high-performance client state"
    ]
  },
  {
    id: "it-helpdesk",
    title: "IT Helpdesk Portal",
    repoName: "it-helpdesk-portal",
    description: "IT support ticket management system with ticket creation, priority queues, and technician dashboard.",
    detailedOverview: "Helpdesk platform streamlining issue resolution. Technicians manage ticket queues, update assignment statuses, attach resolution notes, and track team response times.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/it-helpdesk-portal",
    demoUrl: "https://it-helpdesk-portal-woad.vercel.app",
    featured: true,
    highlights: [
      "Structured ticket triage categorized by Hardware, Software & Network",
      "Priority matrix with SLA resolution indicators",
      "Responsive agent queue view optimized for rapid updates",
      "Deployed to Vercel"
    ]
  },
  {
    id: "enterprise-monitoring",
    title: "Enterprise Monitoring System",
    repoName: "enterprise-monitoring-system",
    description: "Application monitoring and incident management suite with real-time health checks, alerting, and service metrics.",
    detailedOverview: "A monitoring platform providing visibility into microservice uptime, HTTP endpoint status, latency percentiles, and incident escalation notifications.",
    tech: ["React", "Node.js", "JavaScript", "Express"],
    category: "systems",
    language: "HTML / JS",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/enterprise-monitoring-system",
    demoUrl: "https://client-six-nu-13.vercel.app",
    featured: true,
    highlights: [
      "Live service pulse checks and uptime monitoring",
      "Configurable latency threshold alerts",
      "Simulated health polling engine built with Node.js",
      "Vercel cloud production hosting"
    ]
  },
  {
    id: "library-mgmt",
    title: "Library Management System",
    repoName: "LibraryManagementSystem",
    description: "Enterprise ASP.NET Core 8 Web API with JWT auth, EF Core, SQL Server, and full book/loan operations.",
    detailedOverview: "Enterprise-grade library management backend built with ASP.NET Core 8 Web API. Includes Entity Framework Core, SQL Server, JWT Bearer authentication, Swagger API documentation, reservation queues, and CI/CD pipelines.",
    tech: ["C#", "ASP.NET Core 8", "EF Core", "SQL Server", "Swagger"],
    category: "fullstack",
    language: "C#",
    languageColor: "#512BD4",
    githubUrl: "https://github.com/Matam-Rohith/LibraryManagementSystem",
    demoUrl: "https://library-ten-taupe-32.vercel.app/",
    featured: true,
    highlights: [
      "ASP.NET Core 8 RESTful Web API architecture",
      "JWT authentication and role-based permissions",
      "Entity Framework Core with SQL Server relational constraints",
      "Automated GitHub Actions CI/CD pipeline"
    ]
  },
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Sales & Customer Analytics",
    repoName: "ecommerce-sales-customer-analytics",
    description: "Analytics platform featuring RFM customer segmentation, sales trend forecasting, and customer retention metrics.",
    detailedOverview: "End-to-end retail data analytics pipeline. Computes Recency, Frequency, Monetary (RFM) customer segmentation, tracks cohort retention over time, and visualizes revenue trends.",
    tech: ["Python", "SQL", "HTML", "Chart.js"],
    category: "analytics",
    language: "HTML / Python",
    languageColor: "#E34F26",
    githubUrl: "https://github.com/Matam-Rohith/ecommerce-sales-customer-analytics",
    demoUrl: "https://matam-rohith.github.io/ecommerce-sales-customer-analytics/dashboard/index.html",
    featured: false,
    highlights: [
      "RFM customer scoring and demographic segmentation",
      "Cohort retention matrix and churn probability modeling",
      "Complex SQL analytical queries with window functions",
      "Interactive dashboard hosted on GitHub Pages"
    ]
  },
  {
    id: "icc-t20-analytics",
    title: "ICC T20 World Cup Analytics",
    repoName: "icc-t20-worldcup-analytics",
    description: "Tournament analytics platform visualizing match statistics, team comparisons, and player performances.",
    detailedOverview: "Cricket analytics application covering all match results from the ICC T20 World Cup 2024. Delivers match breakdown charts, strike rate progressions, and team head-to-head records.",
    tech: ["Node.js", "Express", "Chart.js", "Bootstrap"],
    category: "analytics",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/icc-t20-worldcup-analytics",
    demoUrl: "https://icc-t20-worldcup-analytics.onrender.com/",
    featured: false,
    highlights: [
      "Comprehensive ICC T20 World Cup 2024 dataset",
      "Interactive Chart.js visual graphics and player radar charts",
      "Node.js backend deployed to Render",
      "Responsive design with Bootstrap"
    ]
  },
  {
    id: "sms-spam-detector",
    title: "SMS Spam Detector",
    repoName: "SMS-spam--detection-",
    description: "Natural Language Processing classifier achieving 97%+ accuracy using TF-IDF and Naive Bayes on SMS corpora.",
    detailedOverview: "Machine learning NLP classification service. Evaluates SMS text content through tokenization, stopword filtering, and TF-IDF feature extraction before passing through a Multinomial Naive Bayes model.",
    tech: ["Python", "scikit-learn", "NLTK", "Streamlit"],
    category: "aiml",
    language: "Python",
    languageColor: "#3776AB",
    githubUrl: "https://github.com/Matam-Rohith/SMS-spam--detection-",
    demoUrl: "https://mamfegbtbyckxtr4ncu3nq.streamlit.app/",
    featured: true,
    highlights: [
      "97%+ test set classification accuracy",
      "TF-IDF vectorizer + Multinomial Naive Bayes pipeline",
      "Live interactive web app powered by Streamlit Cloud",
      "Confidence percentage and probability feedback"
    ]
  },
  {
    id: "cancer-prediction",
    title: "Breast Cancer Diagnostic Classifier",
    repoName: "Cancer_Prediction",
    description: "Machine learning classifier inferring tumor malignancy from 30 cellular nucleus characteristics.",
    detailedOverview: "Clinical diagnostic classification model trained on the Wisconsin Breast Cancer Dataset. Allows medical professionals and students to input 30 cell parameters to generate instant Benign or Malignant predictions with confidence scores.",
    tech: ["Python", "scikit-learn", "NumPy", "Jupyter"],
    category: "aiml",
    language: "Python / Jupyter",
    languageColor: "#DA5B0B",
    githubUrl: "https://github.com/Matam-Rohith/Cancer_Prediction",
    demoUrl: "https://matam-rohith.github.io/Cancer_Prediction/",
    featured: false,
    highlights: [
      "Trained on 30 cell morphology and texture features",
      "High sensitivity and specificity on validation sets",
      "Web interface for interactive attribute input",
      "Hosted on GitHub Pages"
    ]
  },
  {
    id: "url-shortener",
    title: "High-Throughput URL Shortener",
    repoName: "URL_Shortener",
    description: "Full-stack URL shortening service with custom vanity aliases, click analytics, and SQLite persistence.",
    detailedOverview: "Fast redirection API built with Node.js and SQLite. Features custom slug reservation, timestamped click tracking, referrer header analysis, and clean RESTful design.",
    tech: ["Node.js", "Express", "SQLite", "HTML5"],
    category: "fullstack",
    language: "JavaScript / HTML",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/URL_Shortener",
    demoUrl: "https://url-shortener-na16.onrender.com/",
    featured: false,
    highlights: [
      "Custom vanity URL aliases and short hash generation",
      "Click-through logging with browser & referrer tracking",
      "Indexed SQLite database for rapid redirects",
      "Render cloud deployment"
    ]
  },
  {
    id: "talentflow-hrm",
    title: "TalentFlow HRM",
    repoName: "TalentFlow-HRM",
    description: "Human Resource Management System with employee directory, attendance tracking, and payroll computation.",
    detailedOverview: "Human resources portal supporting HR operations: employee onboarding records, attendance logging, leave approval workflows, and automated monthly salary calculations.",
    tech: ["JavaScript", "Node.js", "CSS3", "HTML5"],
    category: "systems",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/TalentFlow-HRM",
    demoUrl: "https://matam-rohith.github.io/TalentFlow-HRM/",
    featured: false,
    highlights: [
      "Employee directory and records management",
      "Daily attendance logs and leave request tracking",
      "Automated monthly salary calculation preview",
      "GitHub Pages deployment"
    ]
  },
  {
    id: "student-dashboard",
    title: "Student Academic Dashboard",
    repoName: "student-dashboard",
    description: "GPA calculator, attendance threshold tracker, and class timetable manager with browser persistence.",
    detailedOverview: "Academic utility application built for engineering students to monitor degree progression. Computes semester SGPA and cumulative CGPA, tracks attendance against university minimums (75%), and manages class timetables.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    category: "utilities",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/student-dashboard",
    demoUrl: "https://matam-rohith.github.io/student-dashboard/",
    featured: false,
    highlights: [
      "Semester SGPA and overall CGPA calculation",
      "Attendance shortage warning threshold system",
      "Interactive weekly schedule organizer",
      "Zero server latency — 100% localStorage persistence"
    ]
  },
  {
    id: "notes-app",
    title: "Markdown Notes App",
    repoName: "notes-app",
    description: "Type-safe personal notes application with tagging, quick search, and markdown preview.",
    detailedOverview: "Modern note-taking workspace built with strict TypeScript. Supports categorized note tags, instant fuzzy search, pinned notes, and responsive dark-mode layout.",
    tech: ["TypeScript", "HTML5", "CSS3"],
    category: "frontend",
    language: "TypeScript",
    languageColor: "#3178C6",
    githubUrl: "https://github.com/Matam-Rohith/notes-app",
    demoUrl: "https://notes-app-zeta-ruddy.vercel.app/",
    featured: false,
    highlights: [
      "Strict type safety with TypeScript",
      "Tag-based organization and instant search",
      "Pinned notes and clean preview",
      "Deployed to Vercel"
    ]
  },
  {
    id: "github-activity-generator",
    title: "GitHub Activity Generator",
    repoName: "github-activity-generator",
    description: "Automated developer utility script for scheduling git commits and managing repository contribution patterns.",
    detailedOverview: "A developer scripting utility designed to programmatically create backdated commits or automate activity logging for personal workflow experimentation and git automation.",
    tech: ["Python", "Git", "Bash"],
    category: "utilities",
    language: "Python",
    languageColor: "#3776AB",
    githubUrl: "https://github.com/Matam-Rohith/github-activity-generator",
    featured: false,
    highlights: [
      "Git commit automation script",
      "Configurable date range and frequency controls",
      "Apache 2.0 open source license",
      "Clean CLI execution"
    ]
  },
  {
    id: "budget-tracker",
    title: "Personal Budget Tracker",
    repoName: "personal_budget_tracker",
    description: "Finance management web app built with AngularJS featuring category tracking and visual budget alerts.",
    detailedOverview: "Personal accounting ledger developed with AngularJS. Categorizes expenses into custom buckets, triggers budget overrun warnings, and computes net savings ratios.",
    tech: ["AngularJS", "JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/personal_budget_tracker",
    demoUrl: "https://matam-rohith.github.io/personal_budget_tracker/",
    featured: false,
    highlights: [
      "Two-way data binding with AngularJS",
      "Category-specific spending allocation",
      "Dynamic balance and warning alerts",
      "Deployed to GitHub Pages"
    ]
  },
  {
    id: "bank-mgmt-system",
    title: "Bank Management System",
    repoName: "Bank-Management-system",
    description: "Object-oriented banking core in Java supporting accounts, balance transfers, and transaction logs.",
    detailedOverview: "Console banking engine adhering to core OOP principles. Implements customer account creation, interest calculation, transactional balance transfers with error handling, and transaction statement logging.",
    tech: ["Java", "OOP", "Data Structures"],
    category: "systems",
    language: "Java",
    languageColor: "#ED8B00",
    githubUrl: "https://github.com/Matam-Rohith/Bank-Management-system",
    featured: false,
    highlights: [
      "Encapsulation, inheritance, and polymorphism patterns",
      "Transaction validation and ledger consistency checks",
      "Robust input validation and account auditing",
      "Open source repository on GitHub"
    ]
  },
  {
    id: "affordmed-assessment",
    title: "Affordmed Microservices Assessment",
    repoName: "2203A51815_Affordmed-Assessment",
    description: "Microservices architecture assessment implementing high-performance REST APIs and real-time computation.",
    detailedOverview: "Technical engineering evaluation repository implementing modular microservice APIs with authentication, payload validation, and service-to-service communication.",
    tech: ["JavaScript", "Node.js", "Express", "REST APIs"],
    category: "systems",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    githubUrl: "https://github.com/Matam-Rohith/2203A51815_Affordmed-Assessment",
    featured: false,
    highlights: [
      "RESTful service contract implementations",
      "Data ingestion and aggregation endpoints",
      "Structured error responses and request validation",
      "Academic ID: 2203A51815"
    ]
  },
  {
    id: "task-manager",
    title: "Priority Task Manager",
    repoName: "Task_Management",
    description: "Client-side productivity task board with priority sorting, status states, and localStorage persistence.",
    detailedOverview: "Lightweight task board for managing personal sprints. Features priority color-coding (Urgent, High, Normal, Low), instant completion checkboxes, and zero-latency local caching.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "utilities",
    language: "JavaScript / CSS",
    languageColor: "#563D7C",
    githubUrl: "https://github.com/Matam-Rohith/Task_Management",
    demoUrl: "https://matam-rohith.github.io/Task_Management/",
    featured: false,
    highlights: [
      "Priority triage system with visual indicators",
      "Instant state updates saved to localStorage",
      "Zero dependencies — vanilla web standards",
      "GitHub Pages deployment"
    ]
  },
  {
    id: "web-tech-2025",
    title: "Web Technology Engineering Suite",
    repoName: "Web-technology-2025",
    description: "Modern web standards, responsive design implementations, and DOM manipulation lab exercises.",
    detailedOverview: "A comprehensive engineering laboratory repository exploring HTML5 semantic layouts, CSS Grid & Flexbox mechanics, asynchronous JavaScript, and REST client integrations.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM APIs"],
    category: "utilities",
    language: "HTML",
    languageColor: "#E34F26",
    githubUrl: "https://github.com/Matam-Rohith/Web-technology-2025",
    featured: false,
    highlights: [
      "Semantic HTML5 layouts and accessible markup",
      "CSS Grid & Flexbox responsive implementations",
      "Asynchronous fetch and API consumer scripts",
      "Curriculum engineering project"
    ]
  },
  {
    id: "calculator",
    title: "Web Calculator",
    repoName: "Calculator-Project",
    description: "Interactive arithmetic calculator with modulus, exponentiation, operation history, and key bindings.",
    detailedOverview: "Web calculator supporting standard arithmetic, operator precedence, exponentiation, decimal precision handling, and responsive keypad bindings.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "utilities",
    language: "JavaScript / HTML",
    languageColor: "#E34F26",
    githubUrl: "https://github.com/Matam-Rohith/Calculator-Project",
    demoUrl: "https://matam-rohith.github.io/Calculator-Project/",
    featured: false,
    highlights: [
      "Complete arithmetic and precedence evaluation",
      "Touch-friendly button grid with active hover states",
      "Vanilla JavaScript implementation",
      "Deployed to GitHub Pages"
    ]
  },
  {
    id: "nlp-labs",
    title: "Natural Language Processing Labs",
    repoName: "NLP",
    description: "NLP experimental notebooks covering tokenization, lemmatization, sentiment analysis, and Word2Vec.",
    detailedOverview: "University laboratory implementations in Natural Language Processing. Experiments include text cleaning, NLTK tokenization, stopword filtering, n-gram extraction, and sentiment classification.",
    tech: ["Python", "Jupyter", "NLTK", "scikit-learn"],
    category: "aiml",
    language: "Jupyter Notebook",
    languageColor: "#DA5B0B",
    githubUrl: "https://github.com/Matam-Rohith/NLP",
    featured: false,
    highlights: [
      "Tokenization, stemming, and lemmatization experiments",
      "Sentiment classification models on benchmark text",
      "Exploratory vocabulary analysis",
      "Published Jupyter Notebooks on GitHub"
    ]
  },
  {
    id: "aiml-labs",
    title: "AIML Engineering Labs",
    repoName: "AIML-LABS",
    description: "Foundational machine learning algorithms implemented in Python: regression, decision trees, KNN, and clustering.",
    detailedOverview: "Comprehensive university lab curriculum implementing essential ML algorithms. Includes linear regression, logistic regression, decision trees, Random Forests, KNN, and K-Means clustering.",
    tech: ["Python", "Jupyter", "scikit-learn", "NumPy", "Matplotlib"],
    category: "aiml",
    language: "Jupyter Notebook",
    languageColor: "#DA5B0B",
    githubUrl: "https://github.com/Matam-Rohith/AIML-LABS",
    featured: false,
    highlights: [
      "From-scratch implementations of fundamental ML algorithms",
      "Comparative performance benchmarking across standard datasets",
      "Confusion matrices and classification reports",
      "Published notebooks on GitHub"
    ]
  }
];
