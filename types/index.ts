export type SolutionCta = {
  label: string;
  action: "proposal" | "consultation" | "link";
  href?: string;
};

export type PageHeroTheme = {
  accentFrom?: string;
  accentVia?: string;
  accentTo?: string;
  overlayClass?: string;
  badge?: string;
};

export type PageHeroProps = {
  headingLine1: string;
  headingLine2?: string;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  waveImage?: string;
  bannerImage?: string;
  bannerAlt?: string;
  subheading?: string;
  buttons?: SolutionCta[];
  onProposal?: () => void;
  onConsultation?: () => void;
  showGlobeOverlay?: boolean;
  floatingImage?: string;
  theme?: PageHeroTheme;
  variant?: "split" | "background";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type TeamGroupPhoto = {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  description?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  rating?: number;
};

export type MedicalService = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  experience: number;
  bio: string;
  image: string;
};

export type WhyChooseFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type HealthTip = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
};

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
  textValue?: string;
};

export type ImageAnimationItem = {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
};

export type ImageAnimationLayoutMetrics = {
  width: number;
  height: number;
  cardWidth: number;
  cardHeight: number;
  gap: number;
  offsetTop: number;
  offsetLeft: number;
  thumbnailOffset: number;
  detailsTop: number;
  detailsLeft: number;
  detailsWidth: number;
};
