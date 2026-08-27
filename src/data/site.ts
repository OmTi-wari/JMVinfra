import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";
import projectImage4 from "@/assets/project-4.jpg";

export const company = {
  shortName: "JMV",
  name: "Jai Maa Vindhyavasini Engineering Infra",
  legalName: "JAI MAA VINDHYAVASINI ENGINEERING INFRA",
  tagline: "Engineering • Construction • Infrastructure",
  phone: "+91 9821719339",
  phones: ["+91 9821719339", "+91 8169402089"],
  email: "jmvengineeringinfra@gmail.com",
  address: "Mumbai & Ahmedabad",
  offices: {
    ahmedabad: "B/ 03, Radhepark Society, B/S. Ajay Vibhag-5, Vastral Road, Ahmedabad-26",
    mumbai: "C/201, Krishna Gokul CO-OP. HSG Soc, Opp. BMC Parking, 90Feet Road, (Dattaji Salavemarg), Thakur Complex, Kandivali(E), Mumbai - 400101",
  },
  whatsapp: "+91 9321598200",
  instagramHandle: "@jmv_engineering_infra",
  instagramUrl: "https://instagram.com/jmv_engineering_infra",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "People", href: "/people" },
  { label: "Locations", href: "/locations" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "50+", label: "Projects" },
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Clients" },
  { value: "2", label: "Strategic Locations" },
];

export const services = [
  {
    id: "engineering",
    title: "Engineering Solutions",
    description:
      "Technical expertise and practical engineering solutions for project requirements.",
    icon: "compass",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Professional construction and execution focused on quality and durability.",
    icon: "wall",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Infrastructure development and execution designed for functionality and long-term performance.",
    icon: "bridge",
  },
  {
    id: "execution",
    title: "Project Execution",
    description: "Coordinated execution from planning through completion.",
    icon: "workflow",
  },
] as const;

export const projects = [
  {
    id: "project-01",
    name: "Project Placeholder 01",
    location: "Location to be added",
    type: "Industrial Structure",
    image: projectImage1,
    alt: "Steel framed industrial structure with exposed roof trusses",
  },
  {
    id: "project-02",
    name: "Project Placeholder 02",
    location: "Location to be added",
    type: "Road Infrastructure",
    image: projectImage2,
    alt: "Concrete highway overpass with structural piers",
  },
  {
    id: "project-03",
    name: "Project Placeholder 03",
    location: "Location to be added",
    type: "Commercial Building",
    image: projectImage3,
    alt: "Modern commercial building facade in concrete and glass",
  },
  {
    id: "project-04",
    name: "Project Placeholder 04",
    location: "Location to be added",
    type: "Utility Infrastructure",
    image: projectImage4,
    alt: "Aerial view of a utility treatment plant with circular concrete tanks",
  },
];

export const whyChooseUs = [
  {
    title: "Quality First",
    description: "A strong focus on quality and dependable execution.",
    icon: "check",
  },
  {
    title: "Engineering Driven",
    description: "Technical understanding combined with practical execution.",
    icon: "ruler",
  },
  {
    title: "Reliable Execution",
    description: "Structured planning and coordinated project delivery.",
    icon: "route",
  },
  {
    title: "Built to Last",
    description: "Infrastructure designed with long-term performance in mind.",
    icon: "shield",
  },
] as const;

export const contact = {
  phone: "+91 9821719339",
  phones: ["+91 9821719339", "+91 8169402089"],
  email: "jmvengineeringinfra@gmail.com",
  address: "Mumbai & Ahmedabad",
  mumbaiAddress: company.offices.mumbai,
  ahmedabadAddress: company.offices.ahmedabad,
  whatsapp: "+91 9321598200",
  instagramHandle: "@jmv_engineering_infra",
  instagramUrl: "https://instagram.com/jmv_engineering_infra",
};
