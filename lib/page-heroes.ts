import { images } from "@/lib/images";

export const pageHeroContent = {
  about: {
    headingLine1: "About MedCare",
    headingLine2: "Health Clinic",
    description:
      "A trusted medical centre in G-8, Islamabad delivering compassionate, affordable healthcare for Pakistani families — backed by experienced specialists and modern facilities.",
    backgroundImage: images.heroAbout,
    badge: "Your Health, Our Priority",
  },
  services: {
    headingLine1: "Medical Services",
    headingLine2: "We Provide",
    description:
      "From general practice to specialised departments — comprehensive care under one roof, designed for the needs of patients across Pakistan.",
    backgroundImage: images.heroServices,
    badge: "12 Departments",
  },
  doctors: {
    headingLine1: "Meet Our",
    headingLine2: "Specialist Doctors",
    description:
      "FCPS and MRCP-qualified physicians with training from Pakistan's leading medical institutions — dedicated to your health and recovery.",
    backgroundImage: images.heroDoctors,
    badge: "Expert Team",
  },
  whyChooseUs: {
    headingLine1: "Why Choose",
    headingLine2: "MedCare?",
    description:
      "Thousands of families across Islamabad and the capital region trust us for honest care, transparent fees, and treatment you can afford.",
    backgroundImage: images.heroWhyChooseUs,
    badge: "Trusted Care",
  },
  healthTips: {
    headingLine1: "Health Tips &",
    headingLine2: "Wellness Advice",
    description:
      "Practical health guidance from our medical team — written for Pakistani families, climates, and lifestyles.",
    backgroundImage: images.heroHealthTips,
    badge: "Expert Advice",
  },
  contact: {
    headingLine1: "Contact &",
    headingLine2: "Book Appointment",
    description:
      "Visit us in G-8 Markaz, Islamabad — WhatsApp, email, or book your appointment online. Our team responds promptly in English and Urdu.",
    backgroundImage: images.heroContact,
    badge: "We're Here to Help",
  },
} as const;
