// lib/data.ts
import {
  type LucideIcon,
  Globe,
  Code2,
  Smartphone,
  Database,
  Users,
  ShoppingBag,
} from "lucide-react";

export interface ServiceItem {
  num: string;
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    num: "01",
    id: "website-development",
    title: "Website Development",
    icon: Globe,
    description:
      "Modern, responsive websites designed to strengthen your brand, engage customers, and support business growth.",
    capabilities: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Web Applications",
      "CMS",
      "Custom UI/UX",
    ],
  },
  {
    num: "02",
    id: "custom-software-development",
    title: "Custom Software Development",
    icon: Code2,
    description:
      "Purpose-built software designed around your workflows, requirements, and operational challenges.",
    capabilities: [
      "Business Applications",
      "Workflow Automation",
      "Management Systems",
      "SaaS Platforms",
      "API Development",
      "Integrations",
    ],
  },
  {
    num: "03",
    id: "mobile-app-development",
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "User-focused mobile applications designed for modern Android and iOS experiences.",
    capabilities: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "API Integration",
      "Authentication",
      "Push Notifications",
    ],
  },
  {
    num: "04",
    id: "erp-software",
    title: "ERP Software",
    icon: Database,
    description:
      "Integrated business systems that connect departments, workflows, operations, and data.",
    capabilities: [
      "Inventory",
      "Finance",
      "HR",
      "Sales",
      "Procurement",
      "Reporting",
    ],
  },
  {
    num: "05",
    id: "crm-software",
    title: "CRM Software",
    icon: Users,
    description:
      "Customer management systems that help businesses organize leads, relationships, sales, and communication.",
    capabilities: [
      "Lead Management",
      "Customer Management",
      "Sales Pipeline",
      "Follow-ups",
      "Reports",
      "Communication",
    ],
  },
  {
    num: "06",
    id: "ecommerce-development",
    title: "E-Commerce Development",
    icon: ShoppingBag,
    description:
      "Scalable online stores designed to create better shopping experiences and support business growth.",
    capabilities: [
      "Product Management",
      "Shopping Cart",
      "Payments",
      "Orders",
      "Customer Accounts",
      "Analytics",
    ],
  },
];

export interface PortfolioConcept {
  tag: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
}

export const PORTFOLIO_CONCEPTS: PortfolioConcept[] = [
  {
    tag: "DEMO PROJECT",
    title: "Modern E-Commerce Storefront",
    category: "E-Commerce Platform",
    desc: "A scalable commerce engine with payment gateway webhooks and dynamic catalog filtering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    tag: "CONCEPT PROJECT",
    title: "Enterprise Resource Hub",
    category: "Business Management ERP",
    desc: "Modular resource planning system coordinating inventory, procurements, and multi-department roles.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    tag: "SAMPLE PRODUCT",
    title: "Pipeline CRM Dashboard",
    category: "CRM Dashboard",
    desc: "High-density lead management platform with funnel visualization and automated stage transitions.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    tag: "DEMO PROJECT",
    title: "Cross-Platform Field Companion",
    category: "Mobile Application",
    desc: "Native-feel client application with offline cache sync and biometrics integration.",
    tech: ["Flutter", "Dart", "REST APIs"],
  },
  {
    tag: "CONCEPT PROJECT",
    title: "Venture Capitalist Portal",
    category: "Corporate Website",
    desc: "Minimalist brand showcase focused on sub-second load times and accessible interaction architecture.",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    tag: "SAMPLE PRODUCT",
    title: "Tenant Billing SaaS Orchestrator",
    category: "SaaS Platform",
    desc: "Multi-tenant software with usage meters, role-based controls, and automated subscription renewal.",
    tech: ["React", "Python", "Supabase"],
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "DISCOVER", desc: "Understand business goals, users, requirements, and challenges." },
  { num: "02", title: "PLAN", desc: "Define features, scope, architecture, and technical direction." },
  { num: "03", title: "DESIGN", desc: "Create user flows, interfaces, and product experiences." },
  { num: "04", title: "DEVELOP", desc: "Build the product using modern engineering practices." },
  { num: "05", title: "TEST", desc: "Validate functionality, usability, security, and performance." },
  { num: "06", title: "DEPLOY", desc: "Prepare the product for production and launch." },
  { num: "07", title: "SCALE", desc: "Maintain, improve, and evolve the product." },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: "What services does Technprinto provide?",
    a: "We specialize in custom web applications, mobile apps (Android & iOS), specialized custom software, enterprise ERPs, CRM systems, and e-commerce platforms.",
  },
  {
    q: "Can you build completely custom software?",
    a: "Yes. Every line of business software is built directly around your organization's unique operational requirements, data structures, and workflows.",
  },
  {
    q: "Do you develop Android and iOS applications?",
    a: "Yes, using modern cross-platform frameworks like Flutter and React Native as well as native APIs, ensuring single-codebase velocity with true native performance.",
  },
  {
    q: "How does a project start?",
    a: "We begin with a structured discovery call to clarify the functional scope, deliverables, and technical parameters before presenting a formal milestone blueprint.",
  },
];