export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type ProjectItem = {
  slug: string;
  title: string;
  category: "Road" | "Airport" | "Railway" | "Urban Infra" | "PWD" | "BMC" | "AMC" | "Schools" | "Turnkey";
  serviceSlug: string;
  status: ProjectStatus;
  location: string;
  year: string;
  summary: string;
  metrics: string[];
  client: string;
  role: string;
  scopeOfExecution: string[];
  engineeringChallenges: string[];
  gallery: string[];
};

export const projectsData: ProjectItem[] = [
  {
    slug: "road-infrastructure",
    title: "Road Infrastructure Upgrades",
    category: "Road",
    serviceSlug: "road-construction",
    status: "Ongoing",
    location: "Mumbai Metropolitan Region",
    year: "2025",
    summary: "Major road strengthening and access works improving traffic flow and civic utility reliability.",
    metrics: ["5.4 km corridor", "Drainage upgrades", "Live execution"],
    client: "[Verified Client Name]",
    role: "[Verified JMV Role]",
    scopeOfExecution: ["[Verified Scope Detail]", "[Verified Scope Detail]", "[Verified Scope Detail]"],
    engineeringChallenges: ["[Verified Engineering Challenge]", "[Verified Engineering Challenge]"],
    gallery: ["/src/assets/project-1.jpg", "/src/assets/project-2.jpg"],
  },
  {
    slug: "airport-works",
    title: "Airport Works Package",
    category: "Airport",
    serviceSlug: "airport-epc",
    status: "Completed",
    location: "Western India",
    year: "2024",
    summary: "Civil works and supporting infrastructure for operational readiness and aviation logistics support.",
    metrics: ["Terminal support", "Utility integration", "Quality compliance"],
    client: "[Verified Client Name]",
    role: "[Verified JMV Role]",
    scopeOfExecution: ["[Verified Scope Detail]", "[Verified Scope Detail]", "[Verified Scope Detail]"],
    engineeringChallenges: ["[Verified Engineering Challenge]", "[Verified Engineering Challenge]"],
    gallery: ["/src/assets/project-2.jpg", "/src/assets/project-3.jpg"],
  },
  {
    slug: "railway-infra",
    title: "Railway Infrastructure Expansion",
    category: "Railway",
    serviceSlug: "railway-projects",
    status: "Upcoming",
    location: "Regional Corridor",
    year: "2026",
    summary: "Planned transit support packages designed for expansion and increased asset resilience.",
    metrics: ["Infrastructure planning", "Safety-first approach", "Stakeholder coordination"],
    client: "[Verified Client Name]",
    role: "[Verified JMV Role]",
    scopeOfExecution: ["[Verified Scope Detail]", "[Verified Scope Detail]", "[Verified Scope Detail]"],
    engineeringChallenges: ["[Verified Engineering Challenge]", "[Verified Engineering Challenge]"],
    gallery: ["/src/assets/project-3.jpg", "/src/assets/project-4.jpg"],
  },
  {
    slug: "urban-works",
    title: "Urban Civic Works",
    category: "Urban Infra",
    serviceSlug: "mmrd",
    status: "Ongoing",
    location: "Ahmedabad",
    year: "2025",
    summary: "Urban development execution supporting utilities, public corridors, and built environment performance.",
    metrics: ["Municipal coordination", "Public utility works", "Progress monitoring"],
    client: "[Verified Client Name]",
    role: "[Verified JMV Role]",
    scopeOfExecution: ["[Verified Scope Detail]", "[Verified Scope Detail]", "[Verified Scope Detail]"],
    engineeringChallenges: ["[Verified Engineering Challenge]", "[Verified Engineering Challenge]"],
    gallery: ["/src/assets/project-4.jpg", "/src/assets/project-1.jpg"],
  },
];
