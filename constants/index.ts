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

/** Bright stops only  readable on dark hero / page backgrounds */
export const HERO_TEXT_GRADIENT_ON_DARK =
  "linear-gradient(120deg, #F0FDFA 0%, #5EEAD4 38%, #2DD4BF 72%, #99F6E4 100%)";

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
    "MedCare Health Clinic is a leading private medical centre in G-8, Islamabad  offering compassionate, affordable healthcare for you and your family with FCPS-qualified doctors and modern diagnostic facilities.",
  email: "info@medcareclinic.pk",
  whatsapp: "+92 300 123 4567",
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
    emergency: "24/7 emergency desk at the clinic  dial 1122 for ambulance",
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
export const appointmentPageHref = "/appointment";

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
  { label: "Book Appointment", href: "/appointment" },
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
] as const;

export const heroStats: HeroStat[] = [
  { value: 20, suffix: "+", label: "Experienced Doctors" },
  { value: 15, suffix: "+", label: "Medical Departments" },
  { value: 25000, suffix: "+", label: "Happy Patients" },
  { value: 0, suffix: "", label: "Emergency Support", isText: true, textValue: "24/7" },
];

export const aboutContent = {
  mission:
    "To provide accessible, compassionate, and world-class healthcare that empowers every patient to live a healthier, fuller life  treating each person with dignity, respect, and individualized attention.",
  vision:
    "To be the most trusted medical centre in Islamabad and across the capital region  recognised for clinical excellence, affordable care, and a commitment to healthier Pakistani families.",
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
      "Comprehensive primary care for adults  routine checkups, chronic disease management, and preventive screenings tailored to your lifestyle.",
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
      "Gentle, expert care for infants, children, and adolescents  including vaccinations, growth monitoring, and developmental assessments.",
    icon: "baby",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description:
      "Specialized treatment for bones, joints, and muscles  from sports injuries to arthritis management and surgical rehabilitation.",
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
      "Compassionate women's health services  annual exams, prenatal care, fertility counseling, and menopause management.",
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
      "Book, reschedule, or cancel appointments online in minutes  no phone queues required.",
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
    qualification: "MBBS, FCPS (Cardiology)  Aga Khan University",
    experience: 15,
    bio: "Dr. Fatima specialises in preventive cardiology and hypertension management, serving patients across Islamabad and the capital region with evidence-based heart care.",
    image: images.doctor1,
  },
  {
    id: "dr-hassan",
    name: "Dr. Hassan Ahmed",
    specialization: "General Medicine",
    qualification: "MBBS, MRCP  King Edward Medical University",
    experience: 18,
    bio: "With nearly two decades in primary care, Dr. Hassan is known across G-8 for his thorough consultations and honest, patient-first approach.",
    image: images.doctor2,
  },
  {
    id: "dr-ayesha",
    name: "Dr. Ayesha Malik",
    specialization: "Pediatrics",
    qualification: "MBBS, FCPS (Paediatrics)  Pakistan Institute of Medical Sciences",
    experience: 12,
    bio: "Dr. Ayesha creates a warm, child-friendly environment trusted by hundreds of Pakistani families for vaccinations, growth checks, and paediatric care.",
    image: images.doctor3,
  },
  {
    id: "dr-usman",
    name: "Dr. Usman Raza",
    specialization: "Orthopedics",
    qualification: "MBBS, FRCS  Allama Iqbal Medical College",
    experience: 14,
    bio: "A specialist in sports injuries and joint replacement, Dr. Usman has helped athletes and everyday patients recover mobility and live pain-free.",
    image: images.doctor4,
  },
  {
    id: "dr-sana",
    name: "Dr. Sana Iqbal",
    specialization: "Dermatology",
    qualification: "MBBS, MCPS (Dermatology)  Fatima Jinnah Medical University",
    experience: 10,
    bio: "Dr. Sana treats acne, eczema, and pigmentation common in Pakistani climates, combining medical and cosmetic dermatology for healthy, confident skin.",
    image: images.doctor5,
  },
  {
    id: "dr-kamran",
    name: "Dr. Kamran Siddiqui",
    specialization: "Neurology",
    qualification: "MBBS, FCPS (Neurology)  Aga Khan University Hospital",
    experience: 16,
    bio: "Dr. Kamran leads our neurology department with expertise in migraines, epilepsy, and stroke recovery  backed by the latest diagnostic technology.",
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
      "I was anxious about my heart tests, but Dr. Fatima and her team made me feel safe throughout. The lab results came the same day  something you rarely find in Islamabad.",
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
      "Our son was scared of doctors until we met Dr. Ayesha. She is so patient and kind with children  we travel from Faisalabad just for her paediatric appointments.",
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
    id: "blood-pressure",
    title: "Blood Pressure: Watch the Namak",
    excerpt:
      "High BP is common in Pakistani adults. Small changes to salt, chai, and routine checks can prevent serious problems later.",
    content:
      "At MedCare we see patients every week whose blood pressure has crept up without any obvious symptoms  until headaches, dizziness, or a routine reading flags it. Extra salt in daal, achaar, restaurant food, and even multiple cups of strong chai can add up quickly. Try tasting food before reaching for the namak dani, choose home-cooked meals when you can, and walk for 20–30 minutes most days  even a stroll in the park after Maghrib helps. If you are over 40, have diabetes in the family, or already take BP medicine, get your pressure checked at least every few months. Our nurses can record it in under five minutes at reception; no appointment needed for a quick reading. If your home monitor shows readings above 140/90 on several days, book a consultation  early treatment protects your heart, kidneys, and eyes.",
    image: images.healthTipBloodPressure,
  },
  {
    id: "annual-checkups",
    title: "What Your Annual Check-Up Covers",
    excerpt:
      "A yearly visit is not just for when you feel unwell. Here is what our doctors actually look at during a routine exam.",
    content:
      "Many patients tell us they only visit when something hurts. A proper annual check-up is different: it is a chance to catch issues while they are still easy to treat. At MedCare, a typical wellness visit includes blood pressure and weight, a listen to your heart and lungs, basic blood tests (CBC, sugar, cholesterol, and kidney function where needed), and a conversation about sleep, stress, and family history. Women may be advised on anaemia screening; men over 45 often benefit from prostate discussion; anyone with a family history of diabetes or heart disease should not skip yearly labs. Bring your current medicines  including herbal or home remedies  and any reports from other hospitals. General consultation starts from PKR 2,500; we explain lab costs upfront before anything is sent to our on-site laboratory. Most results are ready within 24 hours.",
    image: images.healthTipCheckup,
  },
  {
    id: "diabetes",
    title: "Diabetes: Eating Well with Desi Food",
    excerpt:
      "You do not have to give up roti and daal. Portion size, timing, and regular sugar checks matter more than cutting everything out.",
    content:
      "Type 2 diabetes is rising fast in Islamabad, often linked to weight gain, sugary chai, fizzy drinks, and long hours sitting at a desk. The good news: most patients can stay well without extreme diets. Choose whole wheat roti over double naan portions, fill half the plate with sabzi, and keep rice to one modest serving. Avoid skipping breakfast and then overeating at dinner  steady meal times help blood sugar stay stable. If you drink chai, reduce sugar gradually or switch to doodh patti with less shakar. Walk after meals when possible; even 15 minutes makes a difference. Check your fasting sugar or HbA1c as your doctor advises  we run both at our lab and can book follow-ups with our general physician or medicine specialist. Never stop tablets or insulin on your own; if readings are often high or you feel very thirsty, weak, or confused, come in the same day.",
    image: images.healthTipDiabetes,
  },
  {
    id: "vaccination",
    title: "Child Vaccines: EPI Schedule Made Simple",
    excerpt:
      "Polio drops, BCG, measles, and hepatitis B  here is how to stay on track and what to bring to each visit.",
    content:
      "Parents often arrive at our paediatric desk unsure which injection is due next. Pakistan's EPI (Expanded Programme on Immunization) schedule is free at government centres; at MedCare we offer the same vaccines on a convenient private timetable with appointment reminders. Birth: BCG and OPV. At 6, 10, and 14 weeks: pentavalent, pneumococcal, and polio doses. At 9 months: measles. Boosters follow at 15–18 months and before school entry. Always bring your child's green immunisation card  our staff will stamp it after each dose. Mild fever or a sore leg for a day is normal; give paracetamol as directed on the pack and avoid bathing the injection site for a few hours. If a dose was missed because of travel or illness, do not restart the whole course; our paediatrician will plan catch-up doses. Vaccines protect your child and help keep polio and measles out of our community.",
    image: images.healthTipVaccination,
  },
  {
    id: "smog-season",
    title: "Smog Season in Islamabad: Protect Your Lungs",
    excerpt:
      "From late autumn through winter, air quality drops across the capital. Asthma, cough, and chest tightness spike  here is how to cope.",
    content:
      "Every year between October and January, Islamabad's smog pushes more patients to our emergency desk with cough, wheezing, burning eyes, and chest discomfort  especially children and older adults. On high AQI days, limit outdoor exercise, keep windows closed during peak traffic hours, and wear a proper N95 mask if you must be outside for long. Asthma patients should carry their inhaler and follow their action plan; do not wait until breathing becomes difficult at night. Use a humidifier if indoor air feels dry, but clean it regularly to avoid mould. If a cough lasts more than two weeks, you bring up blood, or a child has fast breathing or blue lips, come to the clinic or call 1122 for ambulance help. Our G-8 location is easy to reach from F-6, F-7, and I-8  walk-ins are seen for urgent respiratory symptoms during working hours.",
    image: images.healthTipSmog,
  },
  {
    id: "dental-hygiene",
    title: "Teeth, Gums, and Habits We See Every Day",
    excerpt:
      "Chai stains, sweet paan, and skipped flossing lead to cavities and gum bleeding. Daily care and a six-month scale-and-polish go a long way.",
    content:
      "Our dental team treats a lot of preventable problems: sensitivity from aggressive brushing, bleeding gums from built-up plaque, and decay worsened by constant chai, mithai, and supari. Brush twice daily with a soft brush and fluoride paste  two full minutes, not a quick scrub. Floss or use an interdental brush at night; food stuck between molars is a common cause of bad breath and cavities. Rinse your mouth with water after chai or cold drinks if you cannot brush right away. Children should have their first dental check by age three, or earlier if you notice brown spots on teeth. Adults should book a professional cleaning every six months; it removes tartar that home brushing cannot. We offer basic fillings, extractions, and hygiene visits at transparent PKR rates. Sudden swelling, severe pain, or a knocked-out tooth needs same-day attention  WhatsApp our front desk and we will fit you in.",
    image: images.healthTipDental,
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
