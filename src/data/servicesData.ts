export type ServiceItem = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  summary: string;
  highlights: string[];
  scopeOfWork: string[];
  technicalExecution: string[];
  equipmentDeployment: string[];
};

export const servicesData: ServiceItem[] = [
  {
    slug: "road-construction",
    title: "Road Construction",
    category: "Infrastructure",
    shortDescription: "Highways, arterial roads, and resilient pavement systems.",
    summary:
      "JMV develops durable road networks with planning precision, quality control, and efficient execution for public and private infrastructure demands.",
    highlights: [
      "Flexible pavement and rigid pavement works",
      "Drainage and utility integration",
      "Site execution with quality inspection",
    ],
    scopeOfWork: ["Site preparation and earthworks", "Pavement construction", "Drainage and utility coordination"],
    technicalExecution: ["Method statements and quality checkpoints", "Layer-wise testing and inspection", "Traffic and stakeholder coordination"],
    equipmentDeployment: ["[Verified Plant and Equipment]", "[Verified Survey Equipment]", "[Verified Testing Equipment]"],
  },
  {
    slug: "airport-epc",
    title: "Airport EPC",
    category: "Aviation",
    shortDescription: "End-to-end airport infrastructure project delivery.",
    summary:
      "From conceptual planning to commissioning, we support airport infrastructure requirements with disciplined coordination and execution strategy.",
    highlights: [
      "Runway and apron supporting works",
      "Terminal utility and ground infrastructure",
      "Multi-disciplinary execution coordination",
    ],
    scopeOfWork: ["Airside civil works", "Terminal support infrastructure", "Utility and access coordination"],
    technicalExecution: ["Phased execution around operational constraints", "Interface coordination with specialist contractors", "Inspection and handover documentation"],
    equipmentDeployment: ["[Verified Airside Equipment]", "[Verified Earthmoving Fleet]", "[Verified Survey Equipment]"],
  },
  {
    slug: "railway-projects",
    title: "Railway Projects",
    category: "Transit",
    shortDescription: "Rail corridor and allied infrastructure delivery.",
    summary:
      "Our team contributes to railway infrastructure through project readiness, civil works, and seamless coordination with stakeholders.",
    highlights: [
      "Trackside and civil support packages",
      "Station and utility infrastructure",
      "Safety-focused execution practices",
    ],
    scopeOfWork: ["Trackside civil support", "Station and access works", "Drainage and utility packages"],
    technicalExecution: ["Possession and access planning", "Work-zone safety coordination", "Progress inspection and reporting"],
    equipmentDeployment: ["[Verified Rail-Compatible Equipment]", "[Verified Lifting Equipment]", "[Verified Testing Equipment]"],
  },
  {
    slug: "mmrd",
    title: "MMRD",
    category: "Urban Infrastructure",
    shortDescription: "Municipal and regional infrastructure delivery support.",
    summary:
      "We support civic and urban development programs with practical construction solutions focused on reliability and service continuity.",
    highlights: [
      "Urban utility and civil works",
      "Public infrastructure compliance",
      "Efficient scheduling and execution",
    ],
    scopeOfWork: ["Municipal civil works", "Utility corridor coordination", "Public-realm improvements"],
    technicalExecution: ["Stakeholder and permit coordination", "Staged execution in live environments", "Quality and progress controls"],
    equipmentDeployment: ["[Verified Urban Works Fleet]", "[Verified Survey Equipment]", "[Verified Safety Systems]"],
  },
  {
    slug: "pwd-projects",
    title: "PWD Projects",
    category: "Public Works",
    shortDescription: "Public works infrastructure and civil execution.",
    summary:
      "Our infrastructure work is aligned to public utility and government project standards with accountability and durability in mind.",
    highlights: [
      "Road and drainage works",
      "Structural and utility packages",
      "Compliance-driven delivery",
    ],
    scopeOfWork: ["Public road and drainage works", "Structural packages", "Utility integration"],
    technicalExecution: ["Specification-led construction", "Inspection and test planning", "Documentation for authority review"],
    equipmentDeployment: ["[Verified Civil Works Fleet]", "[Verified Testing Equipment]", "[Verified Safety Systems]"],
  },
  {
    slug: "bmc-projects",
    title: "BMC Projects",
    category: "Municipal Works",
    shortDescription: "Municipal civil and urban service execution.",
    summary:
      "JMV supports municipal infrastructure requirements through execution planning, civil works, and responsive project management.",
    highlights: [
      "Civic infrastructure delivery",
      "Urban surface and service works",
      "Operational continuity and maintenance planning",
    ],
    scopeOfWork: ["Municipal surface works", "Civic service infrastructure", "Maintenance planning"],
    technicalExecution: ["Live-site sequencing", "Daily progress controls", "Handover and maintenance records"],
    equipmentDeployment: ["[Verified Municipal Fleet]", "[Verified Survey Equipment]", "[Verified Maintenance Equipment]"],
  },
  {
    slug: "amc-projects",
    title: "AMC Projects",
    category: "Maintenance",
    shortDescription: "Annual maintenance and upkeep support for infrastructure assets.",
    summary:
      "We provide structured maintenance support to protect the life and performance of built infrastructure across sectors.",
    highlights: [
      "Preventive maintenance planning",
      "Asset and facility upkeep support",
      "Operational continuity programs",
    ],
    scopeOfWork: ["Condition assessment", "Preventive maintenance", "Repair and upkeep packages"],
    technicalExecution: ["Asset inspection schedules", "Planned work orders", "Closeout reporting and review"],
    equipmentDeployment: ["[Verified Maintenance Fleet]", "[Verified Inspection Equipment]", "[Verified Safety Systems]"],
  },
  {
    slug: "school-projects",
    title: "School Projects",
    category: "Institutional",
    shortDescription: "Institutional civil development for education infrastructure.",
    summary:
      "We deliver school and institutional infrastructure that balances cost efficiency, safety, and functional usability.",
    highlights: [
      "Campus and classroom infrastructure",
      "Site and utility coordination",
      "Safety-centric construction planning",
    ],
    scopeOfWork: ["Campus civil works", "Building and utility support", "External development works"],
    technicalExecution: ["Phased construction planning", "Safety and quality inspections", "Stakeholder coordination around occupied sites"],
    equipmentDeployment: ["[Verified Construction Fleet]", "[Verified Survey Equipment]", "[Verified Safety Systems]"],
  },
  {
    slug: "turnkey-solutions",
    title: "Turnkey Solutions",
    category: "Integrated Delivery",
    shortDescription: "Single-point responsibility for complete project execution.",
    summary:
      "Our turnkey construction model reduces project complexity by integrating design coordination, procurement, execution, and handover.",
    highlights: [
      "End-to-end execution management",
      "Integrated contractor coordination",
      "Timely project closeout and handover",
    ],
    scopeOfWork: ["Design coordination", "Procurement and construction", "Testing, commissioning and handover"],
    technicalExecution: ["Single-point program controls", "Interface and risk management", "Integrated quality and closeout process"],
    equipmentDeployment: ["[Verified Project Fleet]", "[Verified Specialist Equipment]", "[Verified Testing Equipment]"],
  },
];
