import type {
  Doctor,
  FaqItem,
  HealthTip,
  HeroStat,
  MedicalService,
  Testimonial,
  WhyChooseFeature,
} from "@/types";
import { images } from "@/lib/images";

export const BRAND_COLORS = {
  primary: "#0F766E",
  secondary: "#14B8A6",
  accent: "#38BDF8",
  background: "#F8FAFC",
  grey: "#64748B",
  /** @deprecated Use primary */
  navy: "#0F766E",
  /** @deprecated Use secondary */
  green: "#14B8A6",
  /** @deprecated Use accent */
  blue: "#38BDF8",
  /** @deprecated Use background */
  offWhite: "#F8FAFC",
} as const;

export const HERO_TEXT_GRADIENT = `linear-gradient(122deg, ${BRAND_COLORS.accent} 0%, ${BRAND_COLORS.primary} 48%, ${BRAND_COLORS.secondary} 100%)`;

export const HERO_TEXT_GRADIENT_ON_DARK = `linear-gradient(122deg, #FFFFFF 0%, #CCFBF1 45%, ${BRAND_COLORS.secondary} 100%)`;

export const brandButtonClassName =
  "group inline-flex items-center justify-center gap-3 rounded-full border-2 border-brand-green bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark hover:border-brand-green-dark";

export const brandButtonClassNameSm =
  "group inline-flex items-center justify-center rounded-full border-2 border-brand-green bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy-dark hover:border-brand-green-dark";

export const brandButtonOutlineClassName =
  "group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-navy";

export const company = {
  name: "MedCare Health Clinic",
  shortName: "MedCare",
  tagline: "Your Health, Our Priority",
  locationShort: "G-8, Islamabad",
  description:
    "MedCare Health Clinic is a leading private medical centre in G-8, Islamabad — offering compassionate, affordable healthcare for you and your family with FCPS-qualified doctors and modern diagnostic facilities.",
  email: "info@medcareclinic.pk",
  whatsapp: "+92 300 847 3200",
  whatsappUrl: "https://wa.me/923008473200",
  address: "Plot 15, G-8 Markaz, Islamabad, ICT 44000, Pakistan",
  copyright: "MedCare Health Clinic",
  mapEmbedUrl:
    "https://www.google.com/maps?q=G-8+Markaz,+Islamabad,+Pakistan&hl=en&z=15&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=G-8+Markaz,+Islamabad,+Pakistan",
  workingHours: {
    weekdays: "Monday – Friday: 9:00 AM – 9:00 PM",
    saturday: "Saturday: 9:00 AM – 6:00 PM",
    sunday: "Sunday: 10:00 AM – 4:00 PM (Emergency Only After Hours)",
    emergency: "24/7 emergency desk at the clinic — dial 1122 for ambulance",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Health Tips", href: "/health-tips" },
] as const;

export const contactPageHref = "/contact";

export const appointmentTimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
] as const;

export const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact & Appointment", href: "/contact" },
] as const;

export const departments = [
  "General Medicine",
  "Cardiology",
  "Dentistry",
  "Pediatrics",
  "Orthopedics",
  "Neurology",
  "Dermatology",
  "Gynecology",
  "Eye Care",
  "Diagnostic Lab",
  "Emergency Care",
  "Physiotherapy",
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
] as const;

export const heroStats: HeroStat[] = [
  { value: 20, suffix: "+", label: "Experienced Doctors" },
  { value: 15, suffix: "+", label: "Medical Departments" },
  { value: 25000, suffix: "+", label: "Happy Patients" },
  { value: 0, suffix: "", label: "Emergency Support", isText: true, textValue: "24/7" },
];

export const aboutContent = {
  mission:
    "To provide accessible, compassionate, and world-class healthcare that empowers every patient to live a healthier, fuller life — treating each person with dignity, respect, and individualized attention.",
  vision:
    "To be the most trusted medical centre in Islamabad and across the capital region — recognised for clinical excellence, affordable care, and a commitment to healthier Pakistani families.",
  experience: 18,
  highlights: [
    {
      title: "Patient-First Philosophy",
      description:
        "Every decision we make starts with your comfort, safety, and well-being. We listen carefully and involve you in every step of your care plan.",
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art diagnostic equipment, sterile surgical suites, and thoughtfully designed spaces that make every visit calm and reassuring.",
    },
    {
      title: "Experienced Team",
      description:
        "Board-certified physicians and caring support staff with decades of combined experience across every major medical specialty.",
    },
  ],
} as const;

export const medicalServices: MedicalService[] = [
  {
    id: "general-medicine",
    title: "General Medicine",
    description:
      "Comprehensive primary care for adults — routine checkups, chronic disease management, and preventive screenings tailored to your lifestyle.",
    icon: "stethoscope",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description:
      "Advanced heart health diagnostics, ECG monitoring, and personalized treatment plans to protect your cardiovascular well-being.",
    icon: "heart",
  },
  {
    id: "dentistry",
    title: "Dentistry",
    description:
      "From routine cleanings to cosmetic procedures, our dental team keeps your smile healthy, confident, and pain-free.",
    icon: "tooth",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description:
      "Gentle, expert care for infants, children, and adolescents — including vaccinations, growth monitoring, and developmental assessments.",
    icon: "baby",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description:
      "Specialized treatment for bones, joints, and muscles — from sports injuries to arthritis management and surgical rehabilitation.",
    icon: "bone",
  },
  {
    id: "neurology",
    title: "Neurology",
    description:
      "Expert diagnosis and care for neurological conditions including migraines, epilepsy, stroke recovery, and nerve disorders.",
    icon: "brain",
  },
  {
    id: "dermatology",
    title: "Dermatology",
    description:
      "Skin health solutions for acne, eczema, psoriasis, mole checks, and cosmetic dermatology with the latest treatment options.",
    icon: "skin",
  },
  {
    id: "gynecology",
    title: "Gynecology",
    description:
      "Compassionate women's health services — annual exams, prenatal care, fertility counseling, and menopause management.",
    icon: "female",
  },
  {
    id: "eye-care",
    title: "Eye Care",
    description:
      "Complete vision care including eye exams, glaucoma screening, cataract evaluation, and prescription eyewear consultations.",
    icon: "eye",
  },
  {
    id: "diagnostic-lab",
    title: "Diagnostic Lab",
    description:
      "Fast, accurate blood work, pathology, and imaging services with results delivered directly to your physician for prompt action.",
    icon: "lab",
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    description:
      "Round-the-clock emergency services with rapid triage, on-site specialists, and seamless hospital coordination when needed.",
    icon: "ambulance",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description:
      "Personalized rehabilitation programs to restore mobility, reduce pain, and accelerate recovery after injury or surgery.",
    icon: "physio",
  },
];

export const whyChooseUs: WhyChooseFeature[] = [
  {
    id: "experienced-doctors",
    title: "Experienced Doctors",
    description:
      "Board-certified specialists with years of hands-on clinical experience across every department.",
    icon: "doctor",
  },
  {
    id: "modern-equipment",
    title: "Modern Equipment",
    description:
      "Cutting-edge diagnostic and treatment technology for faster, more accurate results.",
    icon: "equipment",
  },
  {
    id: "affordable",
    title: "Affordable Healthcare",
    description:
      "Transparent PKR fees, Sehat Sahulat panel acceptance, and easy instalment plans for every family.",
    icon: "affordable",
  },
  {
    id: "online-appointments",
    title: "Online Appointments",
    description:
      "Book, reschedule, or cancel appointments online in minutes — no phone queues required.",
    icon: "calendar",
  },
  {
    id: "emergency",
    title: "24/7 Emergency",
    description:
      "Always-on emergency support with rapid response teams ready when every second counts.",
    icon: "emergency",
  },
  {
    id: "fast-diagnosis",
    title: "Fast Diagnosis",
    description:
      "On-site lab and imaging mean most test results within hours, not days.",
    icon: "speed",
  },
  {
    id: "safe-environment",
    title: "Safe Environment",
    description:
      "Hospital-grade sterilization protocols and infection control standards you can trust.",
    icon: "shield",
  },
  {
    id: "satisfaction",
    title: "Patient Satisfaction",
    description:
      "A 98% patient satisfaction rate built on genuine care, clear communication, and follow-through.",
    icon: "star",
  },
];

export const doctors: Doctor[] = [
  {
    id: "dr-fatima",
    name: "Dr. Fatima Khan",
    specialization: "Cardiology",
    qualification: "MBBS, FCPS (Cardiology) — Aga Khan University",
    experience: 15,
    bio: "Dr. Fatima specialises in preventive cardiology and hypertension management, serving patients across Islamabad and the capital region with evidence-based heart care.",
    image: images.doctor1,
  },
  {
    id: "dr-hassan",
    name: "Dr. Hassan Ahmed",
    specialization: "General Medicine",
    qualification: "MBBS, MRCP — King Edward Medical University",
    experience: 18,
    bio: "With nearly two decades in primary care, Dr. Hassan is known across G-8 for his thorough consultations and honest, patient-first approach.",
    image: images.doctor2,
  },
  {
    id: "dr-ayesha",
    name: "Dr. Ayesha Malik",
    specialization: "Pediatrics",
    qualification: "MBBS, FCPS (Paediatrics) — Pakistan Institute of Medical Sciences",
    experience: 12,
    bio: "Dr. Ayesha creates a warm, child-friendly environment trusted by hundreds of Pakistani families for vaccinations, growth checks, and paediatric care.",
    image: images.doctor3,
  },
  {
    id: "dr-usman",
    name: "Dr. Usman Raza",
    specialization: "Orthopedics",
    qualification: "MBBS, FRCS — Allama Iqbal Medical College",
    experience: 14,
    bio: "A specialist in sports injuries and joint replacement, Dr. Usman has helped athletes and everyday patients recover mobility and live pain-free.",
    image: images.doctor4,
  },
  {
    id: "dr-sana",
    name: "Dr. Sana Iqbal",
    specialization: "Dermatology",
    qualification: "MBBS, MCPS (Dermatology) — Fatima Jinnah Medical University",
    experience: 10,
    bio: "Dr. Sana treats acne, eczema, and pigmentation common in Pakistani climates, combining medical and cosmetic dermatology for healthy, confident skin.",
    image: images.doctor5,
  },
  {
    id: "dr-kamran",
    name: "Dr. Kamran Siddiqui",
    specialization: "Neurology",
    qualification: "MBBS, FCPS (Neurology) — Aga Khan University Hospital",
    experience: 16,
    bio: "Dr. Kamran leads our neurology department with expertise in migraines, epilepsy, and stroke recovery — backed by the latest diagnostic technology.",
    image: images.doctor6,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "From the moment I walked in, I felt genuinely cared for. Dr. Hassan explained everything in Urdu and English, and the fees were very reasonable. MedCare has earned our family's complete trust.",
    name: "Nadia Sheikh",
    role: "Patient",
    company: "Islamabad",
    image: images.patient1,
    rating: 5,
  },
  {
    id: "2",
    quote:
      "I was anxious about my heart tests, but Dr. Fatima and her team made me feel safe throughout. The lab results came the same day — something you rarely find in Islamabad.",
    name: "Tariq Mahmood",
    role: "Cardiology Patient",
    company: "G-8, Islamabad",
    image: images.patient2,
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Booking online was simple, and I was seen within 15 minutes. Clear diagnosis, fair PKR pricing, and no unnecessary tests. This is how healthcare should work in Pakistan.",
    name: "Hina Rizvi",
    role: "Patient",
    company: "Karachi",
    image: images.patient3,
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Our son was scared of doctors until we met Dr. Ayesha. She is so patient and kind with children — we travel from Faisalabad just for her paediatric appointments.",
    name: "Bilal & Saima Akhtar",
    role: "Parents",
    company: "Faisalabad",
    image: images.patient4,
    rating: 5,
  },
  {
    id: "5",
    quote:
      "After my knee injury, Dr. Usman and the physiotherapy team got me walking again in weeks. Professional, encouraging, and truly results-driven care at an affordable cost.",
    name: "Ahmed Rauf",
    role: "Orthopedics Patient",
    company: "Islamabad",
    image: images.patient5,
    rating: 5,
  },
  {
    id: "6",
    quote:
      "When my father had chest pain at midnight, MedCare's emergency line responded immediately. Their calm professionalism and quick action made all the difference. Shukriya MedCare.",
    name: "Zainab Hussain",
    role: "Emergency Care",
    company: "Rawalpindi",
    image: images.patient6,
    rating: 5,
  },
];

export const healthTips: HealthTip[] = [
  {
    id: "heart-health",
    title: "Healthy Heart Tips",
    excerpt:
      "Simple daily habits that protect your cardiovascular system and reduce your risk of heart disease.",
    content:
      "Your heart works tirelessly every day — give it the care it deserves. Aim for at least 150 minutes of moderate aerobic activity per week, such as brisk walking or swimming. Reduce sodium intake by cooking at home and reading food labels carefully. Manage stress through mindfulness, adequate sleep, and meaningful social connections. If you smoke, quitting is the single most impactful change you can make. Schedule an annual cardiovascular screening with your physician, especially if you have a family history of heart disease. Small, consistent changes compound into a dramatically healthier heart over time.",
    image: images.heartHealth,
  },
  {
    id: "annual-checkups",
    title: "Importance of Annual Checkups",
    excerpt:
      "Why a yearly wellness visit is the smartest investment you can make in your long-term health.",
    content:
      "Annual checkups are not just for when you feel unwell — they are your frontline defense against preventable disease. During a wellness visit, your doctor screens for high blood pressure, diabetes, cholesterol imbalances, and early signs of cancer. Many serious conditions show no symptoms in their early stages, making routine blood work and physical exams essential. Your physician can also update vaccinations, review medications, and discuss lifestyle changes tailored to your age and risk factors. Patients who maintain regular checkups live longer and catch problems when they are most treatable.",
    image: images.checkup,
  },
  {
    id: "diabetes",
    title: "Managing Diabetes",
    excerpt:
      "Practical strategies for keeping blood sugar stable and living well with diabetes.",
    content:
      "Living with diabetes requires a proactive partnership between you and your healthcare team. Monitor your blood glucose levels as directed and keep a log to identify patterns. Focus on a balanced diet rich in whole grains, lean proteins, and non-starchy vegetables while limiting refined sugars. Regular physical activity improves insulin sensitivity — even a 30-minute daily walk makes a measurable difference. Take medications exactly as prescribed and never skip doses without consulting your doctor. Attend quarterly HbA1c tests to track your long-term control, and schedule annual eye and foot exams to prevent complications.",
    image: images.diabetes,
  },
  {
    id: "vaccination",
    title: "Child Vaccination Guide",
    excerpt:
      "A parent's guide to essential childhood vaccinations and why they matter for community health.",
    content:
      "Vaccinations protect Pakistani children from polio, measles, hepatitis B, and other serious diseases. Follow the EPI (Expanded Programme on Immunization) schedule recommended by the Government of Pakistan — available free at government centres and at MedCare for private scheduling. Keep your child's immunisation card updated and bring it to every paediatric visit. Mild fever or soreness after injection is normal. If a dose is missed, catch-up vaccination is available — speak with our paediatrician. Vaccinating your child also protects vulnerable members of your community.",
    image: images.vaccination,
  },
  {
    id: "healthy-eating",
    title: "Healthy Eating Habits",
    excerpt:
      "Build a sustainable, nutritious diet that fuels your body without restrictive fad diets.",
    content:
      "Nutrition is the foundation of good health. Fill half your plate with colorful fruits and vegetables at every meal. Choose whole grains over refined carbohydrates for sustained energy and better digestion. Include lean protein sources such as fish, poultry, legumes, and nuts. Stay hydrated by drinking water throughout the day — aim for eight glasses as a general guideline. Limit processed foods, sugary beverages, and excessive saturated fats. Plan meals ahead to avoid impulsive unhealthy choices. Remember, healthy eating is a lifestyle, not a temporary diet — consistency matters far more than perfection.",
    image: images.healthyEating,
  },
  {
    id: "dental-hygiene",
    title: "Dental Hygiene Tips",
    excerpt:
      "Daily oral care practices that prevent cavities, gum disease, and costly dental procedures.",
    content:
      "Good oral hygiene protects more than just your smile — it is linked to heart health, diabetes management, and overall well-being. Brush twice daily with fluoride toothpaste for at least two minutes, reaching all surfaces of every tooth. Floss daily to remove plaque between teeth where brushes cannot reach. Replace your toothbrush every three months or sooner if bristles are frayed. Limit acidic and sugary foods that erode enamel and feed harmful bacteria. Schedule professional cleanings and exams every six months to catch issues early. If you experience bleeding gums, persistent bad breath, or tooth sensitivity, see your dentist promptly.",
    image: images.dentalHygiene,
  },
];

export const faqs: FaqItem[] = [
  {
    id: "appointments",
    question: "How do I book an appointment at MedCare Health Clinic?",
    answer:
      "Book online through our appointment page, WhatsApp us, email info@medcareclinic.pk, or visit our G-8 Markaz reception during working hours. Online bookings are confirmed within one hour via WhatsApp or SMS.",
  },
  {
    id: "insurance",
    question: "Do you accept health insurance in Pakistan?",
    answer:
      "Yes. We are empaneled with Sehat Sahulat Programme, State Life, EFU Health, Jubilee General, Adamjee Insurance, and other major panels. Contact our billing desk to verify your coverage before your visit.",
  },
  {
    id: "emergency",
    question: "What should I do in a medical emergency?",
    answer:
      "Visit our 24/7 emergency desk at the G-8 clinic immediately. For ambulance support, dial national emergency 1122. Our on-call specialists are available around the clock for urgent cases.",
  },
  {
    id: "hours",
    question: "What are your clinic working hours?",
    answer:
      "Monday to Friday: 9:00 AM – 9:00 PM. Saturday: 9:00 AM – 6:00 PM. Sunday: 10:00 AM – 4:00 PM. Emergency support is available 24 hours a day, every day of the year.",
  },
  {
    id: "fees",
    question: "What are your consultation fees?",
    answer:
      "General consultation starts from PKR 2,500. Specialist consultations range from PKR 3,500 to PKR 6,000 depending on the department. We provide a clear cost estimate before any procedure and offer easy instalment options.",
  },
  {
    id: "online-booking",
    question: "Can I reschedule or cancel my appointment online?",
    answer:
      "Yes. Use the confirmation SMS link to reschedule or cancel up to 3 hours before your appointment at no charge. For same-day changes, WhatsApp our front desk.",
  },
];

export const seoKeywords = [
  "medical clinic Islamabad",
  "doctor in G-8 Islamabad",
  "healthcare Pakistan",
  "book doctor appointment Islamabad",
  "family medicine Pakistan",
  "cardiology clinic Islamabad",
  "paediatrics Islamabad",
  "emergency clinic Pakistan",
  "MedCare Health Clinic",
  "private hospital Islamabad",
] as const;
