import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Compass,
  Handshake,
  Heart,
  ListChecks,
  MapPin,
  MessagesSquare,
  Search,
  Sparkles,
  Video,
} from "lucide-react";

/** Every word of copy on the page lives here or in the component that owns it. */

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceCard {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  items: readonly string[];
  cta: { label: string; href: string };
}

export const services: readonly Service[] = [
  {
    id: "creator-discovery",
    index: "01",
    title: "Creator Discovery",
    description:
      "Find creators based on audience, niche, content and campaign requirements.",
    icon: Search,
  },
  {
    id: "campaign-strategy",
    index: "02",
    title: "Campaign Strategy",
    description: "Design creator campaigns around clear business objectives.",
    icon: Compass,
  },
  {
    id: "creator-outreach",
    index: "03",
    title: "Creator Outreach",
    description: "Handle communication and collaboration coordination.",
    icon: MessagesSquare,
  },
  {
    id: "content-campaigns",
    index: "04",
    title: "Content Campaigns",
    description: "Coordinate creator content from brief to publishing.",
    icon: Video,
  },
  {
    id: "campaign-management",
    index: "05",
    title: "Campaign Management",
    description: "Keep campaigns organized and moving smoothly.",
    icon: ListChecks,
  },
  {
    id: "performance",
    index: "06",
    title: "Performance",
    description: "Track campaign outcomes and learn what works.",
    icon: Activity,
  },
] as const;

export const processSteps: readonly ProcessStep[] = [
  {
    index: "01",
    title: "Tell us your goal.",
    description: "Share what you're trying to achieve.",
  },
  {
    index: "02",
    title: "We find the right creators.",
    description: "Identify creators that fit the campaign.",
  },
  {
    index: "03",
    title: "We coordinate the collaboration.",
    description: "Handle communication and campaign coordination.",
  },
  {
    index: "04",
    title: "You launch and grow.",
    description: "Bring the campaign to life and learn from the results.",
  },
] as const;

export const pillars: readonly Pillar[] = [
  {
    title: "Personal Attention",
    description:
      "Every collaboration starts with understanding the actual goal.",
    icon: Handshake,
  },
  {
    title: "Creator-First Relationships",
    description:
      "We care about meaningful creator-brand partnerships, not just transactions.",
    icon: Heart,
  },
  {
    title: "Regional Understanding",
    description: "We understand local creators, communities and audiences.",
    icon: MapPin,
  },
  {
    title: "Smarter Execution",
    description:
      "Technology and AI can help make creator campaigns faster and more efficient.",
    icon: Sparkles,
  },
] as const;

export const audienceCards: readonly AudienceCard[] = [
  {
    id: "brands",
    eyebrow: "For Brands",
    title: "For Brands",
    headline: "Find the right creators for your campaign.",
    items: [
      "Creator discovery",
      "Campaign strategy",
      "Creator outreach",
      "Collaboration management",
      "Content coordination",
      "Campaign reporting",
    ],
    cta: { label: "Start a Brand Campaign", href: "#contact" },
  },
  {
    id: "creators",
    eyebrow: "For Creators",
    title: "For Creators",
    headline: "Find brands that fit your audience and content.",
    items: [
      "Brand opportunities",
      "Campaign discovery",
      "Collaboration support",
      "Professional opportunities",
      "Long-term partnerships",
    ],
    cta: { label: "Join Korvio", href: "#contact" },
  },
] as const;

/** The seven stages of the Korvio ecosystem section. */
export interface EcosystemStage {
  label: string;
  caption: string;
  /** The Korvio node is rendered larger and carries the logo mark. */
  isHub?: boolean;
}

export const ecosystemStages: readonly EcosystemStage[] = [
  { label: "Brands", caption: "A goal worth reaching" },
  { label: "Campaigns", caption: "Shaped around that goal" },
  { label: "Korvio", caption: "The connection layer", isHub: true },
  { label: "Creators", caption: "Chosen for real fit" },
  { label: "Content", caption: "Made to be watched" },
  { label: "Audiences", caption: "People who care" },
  { label: "Results", caption: "What we learn from" },
] as const;
