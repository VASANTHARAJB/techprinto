// components/services/data.ts
import {
  Globe,
  Code2,
  Smartphone,
  Database,
  Users2,
  ShoppingCart,
  Layers,
  Sparkles,
  Server,
  Workflow,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortName: string;
  route: string;
  eyebrow: string;
  title: string;
  description: string;
  overview: string;
  capabilities: string[];
  features: string[];
  bestFor: string[];
  accent: string;
  icon: any;
}

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    name: "Website Development",
    shortName: "Web Development",
    route: "/services/website-development",
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "Websites That Turn Your Digital Presence Into Business Value.",
    description: "We design and develop modern, responsive websites that communicate your brand clearly, provide better user experiences, and support your business goals.",
    overview: "Modern websites designed around your brand, audience and business objectives.",
    capabilities: [
      "Corporate & Business Websites",
      "High-Converting Landing Pages",
      "Interactive Web Applications",
      "CMS & Custom Portals",
      "Product & Portfolio Showcases",
    ],
    features: [
      "Responsive Design",
      "SEO-Friendly Architecture",
      "Performance Optimization",
      "Security-Focused Build",
      "Analytics Integration",
    ],
    bestFor: ["Startups", "Growing Businesses", "Professional Services", "Corporate Brands"],
    accent: "#FF8A00",
    icon: Globe,
  },
  {
    id: "custom-software-development",
    number: "02",
    name: "Custom Software Development",
    shortName: "Custom Software",
    route: "/services/custom-software-development",
    eyebrow: "CUSTOM SOFTWARE DEVELOPMENT",
    title: "Software Designed Around the Way Your Business Works.",
    description: "Replace disconnected tools and manual processes with software designed around your workflows, requirements and business objectives.",
    overview: "Purpose-built software for organizations with unique workflows, operational requirements and digital product ideas.",
    capabilities: [
      "Business Management Systems",
      "Custom SaaS Platforms",
      "Internal Workflow Tools",
      "Automated Reporting Systems",
      "API-Driven Engines",
    ],
    features: [
      "Role-Based Access Control",
      "Workflow Automation",
      "Real-Time Dashboards",
      "Tamper-Proof Audit Logs",
      "Relational Database Design",
    ],
    bestFor: ["Unique Workflows", "Scaling Operations", "SaaS Founders", "Internal Teams"],
    accent: "#7C3AED",
    icon: Code2,
  },
  {
    id: "mobile-app-development",
    number: "03",
    name: "Mobile Application Development",
    shortName: "Mobile Apps",
    route: "/services/mobile-app-development",
    eyebrow: "MOBILE APPLICATION DEVELOPMENT",
    title: "From Mobile App Idea to Real Product.",
    description: "We design and develop mobile applications focused on usability, performance and reliable integration with your digital ecosystem.",
    overview: "Mobile applications designed to provide useful, intuitive and scalable experiences for customers and businesses.",
    capabilities: [
      "iOS & Android Applications",
      "Cross-Platform Engineering",
      "Customer-Facing Mobile Apps",
      "Booking & Service Engines",
      "E-Commerce Mobile Clients",
    ],
    features: [
      "Biometric Authentication",
      "Push Notifications (FCM)",
      "Offline SQLite Sync",
      "Hardware Integrations",
      "Store Submission Ready",
    ],
    bestFor: ["Mobile-First Startups", "Customer Services", "Field Operations", "Digital Products"],
    accent: "#FF2D8D",
    icon: Smartphone,
  },
  {
    id: "erp-software",
    number: "04",
    name: "ERP Software",
    shortName: "ERP",
    route: "/services/erp-software",
    eyebrow: "ERP SOFTWARE DEVELOPMENT",
    title: "Connect Your Business. Control Your Operations.",
    description: "Custom ERP systems can bring core business processes into a centralized platform designed around your organization's workflows.",
    overview: "Centralized business management systems designed around operational requirements and organizational workflows.",
    capabilities: [
      "Finance & Accounting",
      "Human Resources & Biometrics",
      "Inventory & Procurement",
      "Sales & Production Logistics",
      "Multi-Department Administration",
    ],
    features: [
      "Centralized Operations Data",
      "Custom Approval Hierarchies",
      "Automated Invoicing & WhatsApp Hooks",
      "Daily Automated Backups",
      "Granular Compliance Audits",
    ],
    bestFor: ["Manufacturing", "Wholesale & Retail", "Distribution Networks", "Multi-Branch Businesses"],
    accent: "#1677FF",
    icon: Database,
  },
  {
    id: "crm-software",
    number: "05",
    name: "CRM Software",
    shortName: "CRM",
    route: "/services/crm-software",
    eyebrow: "CRM SOFTWARE DEVELOPMENT",
    title: "Build Better Customer Relationships With Better Systems.",
    description: "Organize leads, customers, sales activities, follow-ups and customer information through a CRM designed around your business.",
    overview: "Customer relationship systems that organize sales activities, customer information and business communication.",
    capabilities: [
      "Lead Capture & Scoring",
      "Visual Sales Pipelines",
      "Follow-Up Task Automation",
      "Unified Customer Profiles",
      "Sales Activity Reports",
    ],
    features: [
      "Lead Tracking Funnels",
      "Task & Reminder Engines",
      "Multi-Channel Communication",
      "Customer History Timeline",
      "Team Role Permissions",
    ],
    bestFor: ["B2B Companies", "High-Volume Sales Teams", "Service Providers", "Client Agencies"],
    accent: "#00C2FF",
    icon: Users2,
  },
  {
    id: "ecommerce-development",
    number: "06",
    name: "E-Commerce Development",
    shortName: "E-Commerce",
    route: "/services/ecommerce-development",
    eyebrow: "E-COMMERCE DEVELOPMENT",
    title: "Build an E-Commerce Experience Designed to Sell.",
    description: "Create a modern online store that brings products, customers, payments, orders and business operations together.",
    overview: "Modern e-commerce platforms designed around customer experience, product management and business operations.",
    capabilities: [
      "Custom Online Storefronts",
      "B2B & B2C E-Commerce",
      "Multi-Category Catalogs",
      "Custom Checkout Experiences",
      "Merchant Operations Portals",
    ],
    features: [
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Discounts & Coupons Engine",
      "Customer Account Hubs",
      "Real-Time Sales Analytics",
    ],
    bestFor: ["Direct-To-Consumer Brands", "Retailers", "Wholesale Distributors", "Digital Goods Sellers"],
    accent: "#FF8A00",
    icon: ShoppingCart,
  },
];

export const BUSINESS_PROBLEMS = [
  {
    problem: "Need a stronger digital presence?",
    solution: "Website Development",
    targetRoute: "/services/website-development",
    tag: "Brand & Leads",
  },
  {
    problem: "Manual business processes?",
    solution: "Custom Software or ERP",
    targetRoute: "/services/custom-software-development",
    tag: "Automation",
  },
  {
    problem: "Need better customer management?",
    solution: "CRM Software",
    targetRoute: "/services/crm-software",
    tag: "Sales Pipeline",
  },
  {
    problem: "Need a mobile product?",
    solution: "Mobile Application",
    targetRoute: "/services/mobile-app-development",
    tag: "iOS & Android",
  },
  {
    problem: "Want to sell online?",
    solution: "E-Commerce Development",
    targetRoute: "/services/ecommerce-development",
    tag: "Online Store",
  },
  {
    problem: "Disconnected business systems?",
    solution: "ERP or Custom Software",
    targetRoute: "/services/erp-software",
    tag: "Unified Data",
  },
];

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3 / Tailwind"],
  backend: ["Node.js", "Express", "Python", "PHP", "REST APIs", "GraphQL"],
  mobile: ["Flutter", "Dart", "React Native", "SQLite", "Firebase FCM"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis Cache"],
  infrastructure: ["Linux VPS", "Nginx", "Docker", "GitHub Actions CI/CD", "Cloudflare"],
};

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand goals, users, requirements and business challenges.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define scope, features, architecture and technical direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create user flows, interfaces and product experiences.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build the product using modern engineering practices.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate functionality, usability, performance and reliability.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Prepare the product for production and secure deployment.",
  },
  {
    number: "07",
    title: "Improve",
    description: "Maintain, optimize and evolve the product over time.",
  },
];

export const WHY_US_ITEMS = [
  {
    title: "Built Around Your Requirements",
    description: "Technology designed around your unique business requirements without forcing rigid pre-made templates.",
  },
  {
    title: "Modern Engineering",
    description: "Modern development practices focused on clean architectures, sub-second latency, and maintainability.",
  },
  {
    title: "Business-Focused",
    description: "Technology decisions aligned strictly with real business ROI and operational efficiency.",
  },
  {
    title: "Scalable Architecture",
    description: "Modular database and API design constructed to evolve seamlessly as your user volume grows.",
  },
  {
    title: "Transparent Collaboration",
    description: "Clear communication, milestone-based reviews, and complete visibility into the development lifecycle.",
  },
  {
    title: "Long-Term Reliability",
    description: "Structured support, optimization, and technology evolution beyond initial product release.",
  },
];

export const COMPARISON_ITEMS = [
  {
    need: "A professional online presence & brand credibility",
    service: "Website Development",
    route: "/services/website-development",
  },
  {
    need: "A specialized business application for unique operations",
    service: "Custom Software",
    route: "/services/custom-software-development",
  },
  {
    need: "A mobile product accessible on customer smartphones",
    service: "Mobile Application",
    route: "/services/mobile-app-development",
  },
  {
    need: "One centralized system to run all company operations",
    service: "ERP Software",
    route: "/services/erp-software",
  },
  {
    need: "Organized pipeline for leads, sales, and customer history",
    service: "CRM Software",
    route: "/services/crm-software",
  },
  {
    need: "An online store to accept orders and manage products",
    service: "E-Commerce",
    route: "/services/ecommerce-development",
  },
];

export const FAQS = [
  {
    question: "What services does Technprinto provide?",
    answer: "Technprinto develops websites, custom software, mobile applications, ERP systems, CRM platforms and e-commerce solutions tailored to business requirements.",
  },
  {
    question: "Can you build completely custom software?",
    answer: "Yes. Software can be designed around specific business workflows, users, database models, and internal tool integrations.",
  },
  {
    question: "Do you develop Android and iOS applications?",
    answer: "Yes. We engineer production-grade mobile applications using unified cross-platform frameworks like Flutter or native approaches depending on product specifications.",
  },
  {
    question: "Can you integrate third-party services?",
    answer: "Yes. Applications are integrated with payment gateways, SMS/WhatsApp webhooks, authentication providers, and external REST/GraphQL APIs.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Post-launch maintenance, performance optimization, and ongoing technical support can be structured according to project milestones.",
  },
  {
    question: "How do I start a project?",
    answer: "Submit a project enquiry with your requirements. We review your objectives, define the technical scope, and establish an actionable development roadmap.",
  },
];