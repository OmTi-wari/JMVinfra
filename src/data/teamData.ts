import santoshImage from "@/assets/santosh.jpeg";
import pushpaImage from "@/assets/Pushpa.png";

export interface PartnerProfile {
  name: string;
  designation: string;
  credentials: string;
  focus: string;
  image: string;
}

export interface LeadershipMember {
  name: string;
  designation: string;
  credentials: string;
  focus: string;
  image: string;
}

export const partnerProfiles: PartnerProfile[] = [
  {
    name: "Santosh Omprakash Pandey",
    designation: "Partner & Executive Director",
    credentials: "B.E. (Civil), PGDM",
    focus:
      "Engineering Direction, Project Planning, Turnkey EPC Execution & Strategic Operations.",
    image: santoshImage,
  },
  {
    name: "Pushpa Omprakash Pandey",
    designation: "Partner & Administrative Director",
    credentials: "Executive Partner",
    focus:
      "Corporate Planning, Financial Governance, Stakeholder Management & Operational Strategy.",
    image: pushpaImage,
  },
];

export const leadershipMembers: LeadershipMember[] = [
  {
    name: "Chief Project Engineer - Infrastructure",
    designation: "Infrastructure Strategy",
    credentials: "Project Engineering",
    focus: "Roadways, rail systems, and integrated execution coordination.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Head of Safety & Quality Control",
    designation: "Safety & Assurance",
    credentials: "Compliance Leadership",
    focus: "Quality control, site audits, safety systems, and process compliance.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Senior Site Operations Manager",
    designation: "Field Execution",
    credentials: "Operations Control",
    focus: "Mobilization planning, resource deployment, and site productivity.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
];
