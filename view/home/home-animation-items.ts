import { images } from "@/lib/images";
import type { ImageAnimationItem } from "@/types";

/**
 * Each slide uses a distinct image — titles and descriptions match what is shown.
 * Image reference:
 * - aboutClinic: modern medical facility interior
 * - doctorConsultation: specialist physician with stethoscope
 * - checkup: clinical examination / general practice
 * - medicalTeam: group of healthcare professionals
 * - hospitalReception: hospital bed & inpatient care setting
 * - pediatrics: compassionate family / child healthcare
 * - heartHealth: cardiovascular / heart health focus
 * - laboratory: preventive health & wellness screening
 */
const clinicShowcaseItems: ImageAnimationItem[] = [
  {
    image: images.aboutClinic,
    place: "G-8 Markaz, Islamabad",
    title: "OUR",
    title2: "CLINIC",
    description:
      "A modern, fully equipped medical centre in the heart of G-8 — designed for comfort, hygiene, and world-class outpatient care.",
  },
  {
    image: images.doctorConsultation,
    place: "Consultation Rooms",
    title: "SPECIALIST",
    title2: "DOCTOR",
    description:
      "FCPS-qualified physicians ready to listen, diagnose, and build a personalised treatment plan tailored to your needs.",
  },
  {
    image: images.checkup,
    place: "General Medicine",
    title: "HEALTH",
    title2: "CHECKUP",
    description:
      "Thorough physical examinations and routine screenings to catch health issues early and keep your family well year-round.",
  },
  {
    image: images.medicalTeam,
    place: "MedCare Team",
    title: "EXPERT",
    title2: "TEAM",
    description:
      "A dedicated team of doctors, nurses, and support staff working together across every department under one roof.",
  },
  {
    image: images.hospitalReception,
    place: "Inpatient Wing",
    title: "INPATIENT",
    title2: "CARE",
    description:
      "Clean, well-equipped patient rooms and beds with round-the-clock nursing support for recovery and observation.",
  },
  {
    image: images.pediatrics,
    place: "Paediatrics Dept.",
    title: "CHILD &",
    title2: "FAMILY",
    description:
      "Warm, child-friendly care including vaccinations, growth checks, and gentle consultations for every age group.",
  },
  {
    image: images.heartHealth,
    place: "Cardiology Unit",
    title: "HEART",
    title2: "CARE",
    description:
      "Cardiovascular assessments, ECG monitoring, and expert guidance to protect your heart and manage hypertension.",
  },
  {
    image: images.laboratory,
    place: "Preventive Health",
    title: "WELLNESS",
    title2: "SCREEN",
    description:
      "Preventive screenings and lifestyle counselling to help you stay ahead of diabetes, nutrition, and chronic conditions.",
  },
];

export const homeAnimationItems: ImageAnimationItem[] = clinicShowcaseItems;
