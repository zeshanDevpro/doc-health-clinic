import { images } from "@/lib/images";
import type { ImageAnimationItem } from "@/types";

const clinicShowcaseItems: ImageAnimationItem[] = [
  {
    image: images.doctorConsultation,
    place: "G-8, Islamabad",
    title: "DOCTOR",
    title2: "CONSULT",
    description:
      "One-on-one consultations with FCPS-qualified physicians who listen carefully and explain every step of your care plan in plain language.",
  },
  {
    image: images.hospitalReception,
    place: "MedCare Clinic",
    title: "WELCOME",
    title2: "DESK",
    description:
      "A calm, modern reception area where our team greets you warmly and ensures a smooth check-in — in English and Urdu.",
  },
  {
    image: images.medicalEquipment,
    place: "Diagnostic Wing",
    title: "MODERN",
    title2: "EQUIP",
    description:
      "State-of-the-art diagnostic and treatment technology for faster, more accurate results — all under one roof in Islamabad.",
  },
  {
    image: images.mri,
    place: "Imaging Centre",
    title: "ADVANCED",
    title2: "MRI",
    description:
      "On-site MRI and imaging services with same-day reporting so your specialist can act on results without delay.",
  },
  {
    image: images.laboratory,
    place: "Diagnostic Lab",
    title: "FAST",
    title2: "LABS",
    description:
      "Comprehensive blood work, pathology, and screening panels with results delivered directly to your doctor within hours.",
  },
  {
    image: images.nurses,
    place: "Patient Care",
    title: "NURSING",
    title2: "CARE",
    description:
      "Compassionate nursing staff providing attentive support before, during, and after every procedure and visit.",
  },
  {
    image: images.pediatrics,
    place: "Paediatrics Dept.",
    title: "CHILD",
    title2: "HEALTH",
    description:
      "Gentle paediatric care for infants and children — vaccinations, growth monitoring, and child-friendly consultations.",
  },
  {
    image: images.dentist,
    place: "Dental Suite",
    title: "DENTAL",
    title2: "CARE",
    description:
      "Complete dental services from routine cleanings to cosmetic procedures — keeping your family's smiles healthy.",
  },
  {
    image: images.waitingRoom,
    place: "Outpatient Dept.",
    title: "COMFORT",
    title2: "WAIT",
    description:
      "Spacious, hygienic waiting areas designed for your comfort while you wait for your appointment or test results.",
  },
  {
    image: images.medicalTeam,
    place: "Specialist Team",
    title: "EXPERT",
    title2: "TEAM",
    description:
      "Board-certified specialists across 15+ departments — cardiology, orthopaedics, neurology, dermatology, and more.",
  },
  {
    image: images.aboutClinic,
    place: "Emergency Unit",
    title: "24/7",
    title2: "EMERG",
    description:
      "Round-the-clock emergency support with rapid triage and on-call specialists at our G-8 clinic.",
  },
  {
    image: images.heroDoctors,
    place: "Cardiology",
    title: "HEART",
    title2: "CARE",
    description:
      "Advanced cardiovascular diagnostics, ECG monitoring, and personalised treatment plans for long-term heart health.",
  },
];

export const homeAnimationItems: ImageAnimationItem[] = clinicShowcaseItems;
