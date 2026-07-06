/** Build stable Unsplash URLs (verified working sources). */
function unsplash(photoId: string, width = 1200) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/** Remote real-estate imagery for demo UI */
export const images = {
  // Hero backgrounds
  heroHome: unsplash("1600596542815-ffad4c1539a9", 1920),
  heroResidential: unsplash("1613490493576-7fde63acd811", 1920),
  heroCommercial: unsplash("1486406146926-c627a92ad1ab", 1920),
  heroProjects: unsplash("1564013799919-ab600027ffc6", 1920),
  heroInvestment: unsplash("1560518883-ce09059eeffa", 1920),
  heroRentals: unsplash("1522708323590-d24dbb6b0267", 1920),
  heroConsultancy: unsplash("1600585152915-d208bec867a1", 1920),
  heroContact: unsplash("1605146769289-440113cc3d00", 1920),
  ctaBg: unsplash("1600585154340-be6161a56a0c", 1920),

  // Property types
  skyline: unsplash("1512917774080-9991f1c4c750", 1200),
  apartment: unsplash("1545324418-cc1a3fa10c00", 1200),
  villa: unsplash("1613977257363-707ba9348227", 1200),
  plot: unsplash("1500382017468-9049fed747ef", 1200),
  office: unsplash("1497366216548-37526070297c", 1200),
  shop: unsplash("1441986300917-64674bd600d8", 1200),

  // Communities, streets & new developments
  communityAerial: unsplash("1448630360428-65456885c650", 1200),
  suburbanStreet: unsplash("1600047509358-9dc75507daeb", 1200),
  houseExterior: unsplash("1600607687920-4e2a09cf159d", 1200),
  modernHome: unsplash("1600585152915-d208bec867a1", 1200),
  townhouse: unsplash("1600607687644-c7171b42498f", 1200),
  newDevelopment: unsplash("1605146769289-440113cc3d00", 1200),
  masterPlanned: unsplash("1564013799919-ab600027ffc6", 1200),
  luxuryEstate: unsplash("1600596542815-ffad4c1539a9", 1200),

  // Interiors
  livingRoom: unsplash("1600210492486-724fe5c67fb0", 1200),
  homeInterior: unsplash("1600585154526-990dced4db0d", 1200),

  /** @deprecated Use communityAerial */
  development: unsplash("1448630360428-65456885c650", 1200),

  // Team portraits
  team1: unsplash("1560250097-0b93528c311a", 800),
  team2: unsplash("1573496359142-b8d87734a5a2", 800),
  team3: unsplash("1507003211169-0a1dd7228f2d", 800),
} as const;
