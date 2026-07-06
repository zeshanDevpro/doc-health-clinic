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
  /** `split` = text + optional side banner. `background` = full-bleed bg image only. */
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
