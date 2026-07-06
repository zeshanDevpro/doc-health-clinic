/** Build stable Unsplash URLs (verified working sources). */
function unsplash(photoId: string, width = 1200) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/** Remote healthcare imagery for MedCare Health Clinic */
export const images = {
  heroHome: unsplash("1727830968495-ea2798aaee35", 1920),

  heroAbout: unsplash("1579684385127-1ef15d508118", 1920),
  heroServices: unsplash("1559839734-2b71ea197ec2", 1920),
  heroDoctors: unsplash("1612349317150-e413f6a5b16d", 1920),
  heroWhyChooseUs: unsplash("1584515933487-779824d29309", 1920),
  heroTestimonials: unsplash("1576091160550-2173dba999ef", 1920),
  heroHealthTips: unsplash("1559757148-5c350d0d3c56", 1920),
  heroContact: unsplash("1576091160550-2173dba999ef", 1920),

  doctorConsultation: unsplash("1612349317150-e413f6a5b16d", 1200),
  hospitalReception: unsplash("1727830968495-ea2798aaee35", 1200),
  medicalTeam: unsplash("1559839734-2b71ea197ec2", 1200),
  dentist: unsplash("1576091160550-2173dba999ef", 1200),
  pediatrics: unsplash("1584515933487-779824d29309", 1200),
  laboratory: unsplash("1558618666-fcd25c85cd64", 1200),
  mri: unsplash("1727830968495-ea2798aaee35", 1200),
  nurses: unsplash("1559839734-2b71ea197ec2", 1200),
  waitingRoom: unsplash("1727830968495-ea2798aaee35", 1200),
  medicalEquipment: unsplash("1559839734-2b71ea197ec2", 1200),
  aboutClinic: unsplash("1579684385127-1ef15d508118", 1200),
  ctaBg: unsplash("1579684385127-1ef15d508118", 1920),

  homeServices: unsplash("1559839734-2b71ea197ec2", 800),
  homeCare: unsplash("1584515933487-779824d29309", 800),
  homeFacility: unsplash("1579684385127-1ef15d508118", 800),

  heartHealth: unsplash("1559757148-5c350d0d3c56", 800),
  checkup: unsplash("1576091160550-2173dba999ef", 800),
  diabetes: unsplash("1558618666-fcd25c85cd64", 800),
  vaccination: unsplash("1584515933487-779824d29309", 800),
  healthyEating: unsplash("1558618666-fcd25c85cd64", 800),
  dentalHygiene: unsplash("1576091160550-2173dba999ef", 800),

  doctor1: unsplash("1612349317150-e413f6a5b16d", 600),
  doctor2: unsplash("1594824476967-48c8b964273f", 600),
  doctor3: unsplash("1573496359142-b8d87734a5a2", 600),
  doctor4: unsplash("1573496359142-b8d87734a5a2", 600),
  doctor5: unsplash("1594824476967-48c8b964273f", 600),
  doctor6: unsplash("1612349317150-e413f6a5b16d", 600),

  patient1: unsplash("1438761681033-6461ffad8d80", 200),
  patient2: unsplash("1507003211169-0a1dd7228f2d", 200),
  patient3: unsplash("1494790108377-be9c29b29330", 200),
  patient4: unsplash("1507003211169-0a1dd7228f2d", 200),
  patient5: unsplash("1534528741775-53994a69daeb", 200),
  patient6: unsplash("1472099645785-5658abf4ff4e", 200),
} as const;
