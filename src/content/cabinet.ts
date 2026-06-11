// Aspirational "Dream Cabinet" portfolios for Apni Sarkar.
//
// This is a NON-PARTISAN civic thought experiment. It is NOT a real government,
// makes no claim to office, and appoints no one. Named figures appear only as
// illustrative examples of the kind of person the public might NOMINATE for a
// given domain. All copy is a first draft for human review before publish.

import type { Portfolio } from "./types";

export const portfolios: Portfolio[] = [
  {
    slug: "education",
    name: "Education & Skilling",
    icon: "GraduationCap",
    tagline: "Har bachche ke liye real learning.",
    mandate:
      "Too many children finish primary school without reading or basic arithmetic at grade level, and skilling programs often stay disconnected from real jobs. This ministry would treat foundational literacy and numeracy as the first priority, publish honest learning outcomes school by school, and rebuild skilling around employer demand and apprenticeships.",
    seedNominees: [
      {
        name: "Anand Kumar",
        note: "Founder of Super 30, which coaches underprivileged students for IIT entrance for free",
      },
      {
        name: "Rukmini Banerji",
        note: "CEO of Pratham and a lead voice behind the ASER learning surveys and foundational-learning reform",
      },
    ],
    councilExamples: [
      "Government school headteachers",
      "ASER / Pratham field researchers",
      "ITI and polytechnic principals",
      "NCERT curriculum experts",
      "Apprenticeship employers from MSMEs",
      "Student union representatives",
    ],
  },
  {
    slug: "health",
    name: "Health & Wellbeing",
    icon: "HeartPulse",
    tagline: "Quality care within reach of every family.",
    mandate:
      "Out-of-pocket costs still push millions of families toward debt when illness strikes, and primary health centres are often understaffed in rural districts. This ministry would strengthen primary and preventive care, expand access to affordable diagnostics and essential medicines, and support and retain frontline health workers where they are needed most.",
    seedNominees: [
      {
        name: "Dr. Ravi Kannan",
        note: "Padma Shri & Ramon Magsaysay-winning oncologist who made cancer care affordable in Assam",
      },
      {
        name: "Dr. Devi Shetty",
        note: "Cardiac surgeon and founder of Narayana Health, known for high-volume, low-cost heart surgery",
      },
      {
        name: "Dr. Soumya Swaminathan",
        note: "Paediatrician and former Chief Scientist of the World Health Organization",
      },
    ],
    councilExamples: [
      "ASHA worker representatives",
      "AIIMS directors",
      "District primary health centre doctors",
      "Public health epidemiologists",
      "Generic-medicine manufacturers",
      "Patient advocacy groups",
    ],
  },
  {
    slug: "jobs",
    name: "Jobs & Economy",
    icon: "Briefcase",
    tagline: "Dignified work, not just GDP numbers.",
    mandate:
      "Many young people enter the workforce each year faster than formal jobs are created, and a large share of work remains informal and insecure. This ministry would focus on widening formal employment, supporting small businesses and startups with simpler compliance and credit, and aligning skilling with where the economy is actually hiring.",
    seedNominees: [
      {
        name: "Nandan Nilekani",
        note: "Infosys co-founder who led the Aadhaar digital identity programme",
      },
      {
        name: "Kiran Mazumdar-Shaw",
        note: "Founder of Biocon and a leading voice for India's biotech and enterprise growth",
      },
      {
        name: "Raghuram Rajan",
        note: "Economist and former Governor of the Reserve Bank of India",
      },
    ],
    councilExamples: [
      "MSME owner associations",
      "Gig and platform worker representatives",
      "Startup founders and incubators",
      "Labour economists",
      "Trade union representatives",
      "Vocational training providers",
    ],
  },
  {
    slug: "environment",
    name: "Environment & Climate",
    icon: "Leaf",
    tagline: "Clean air, water and a livable future.",
    mandate:
      "Several Indian cities record some of the world's worst air quality, and groundwater depletion and biodiversity loss threaten long-term livelihoods. This ministry would set transparent, enforceable air and water targets, accelerate clean energy adoption, and protect forests and wetlands while supporting communities whose livelihoods depend on them.",
    seedNominees: [
      {
        name: "Sunita Narain",
        note: "Environmentalist and director general of the Centre for Science and Environment",
      },
      {
        name: "Dr. Madhav Gadgil",
        note: "Ecologist who chaired the Western Ghats Ecology Expert Panel",
      },
      {
        name: "Jadav Payeng",
        note: "The 'Forest Man of India', who single-handedly planted a forest on a river island in Assam",
      },
    ],
    councilExamples: [
      "Central Pollution Control Board scientists",
      "Renewable energy developers",
      "Forest department field officers",
      "Climate researchers and IITs",
      "Farmer water-user associations",
      "Urban air-quality citizen groups",
    ],
  },
  {
    slug: "justice",
    name: "Justice, Law & Anti-Corruption",
    icon: "Scale",
    tagline: "Faster justice, fewer pending cases.",
    mandate:
      "Tens of millions of cases are pending across Indian courts, and ordinary citizens often wait years for resolution while corruption erodes trust. This ministry would push for faster case disposal through more judges and digitised courts, strengthen legal aid for the poor, and back independent, well-resourced anti-corruption institutions.",
    seedNominees: [
      {
        name: "Justice (Retd.) Madan Lokur",
        note: "Former Supreme Court judge known for work on judicial reform and access to justice",
      },
      {
        name: "Justice (Retd.) B. N. Srikrishna",
        note: "Former Supreme Court judge who chaired the committee that drafted India's first data protection bill",
      },
      {
        name: "Aruna Roy",
        note: "Social activist who helped drive the Right to Information movement",
      },
    ],
    councilExamples: [
      "District legal services authorities",
      "Bar council representatives",
      "Retired High Court judges",
      "Legal-aid clinic lawyers",
      "Court digitisation (e-Courts) experts",
      "Citizen RTI activists",
    ],
  },
  {
    slug: "sports",
    name: "Sports & Fitness",
    icon: "Trophy",
    tagline: "From playground to podium.",
    mandate:
      "India's medal tally remains modest relative to its population, and grassroots sports facilities are scarce outside major cities. This ministry would invest in school and district-level sporting infrastructure, build transparent talent pipelines and coaching, and promote everyday fitness as a public health goal.",
    seedNominees: [
      {
        name: "Abhinav Bindra",
        note: "India's first individual Olympic gold medallist, in shooting",
      },
      {
        name: "P. T. Usha",
        note: "Legendary track-and-field athlete and sports administrator",
      },
      {
        name: "Pullela Gopichand",
        note: "Badminton coach behind multiple Olympic and world-championship medallists",
      },
    ],
    councilExamples: [
      "Sports Authority of India coaches",
      "National sports federation officials",
      "School physical-education teachers",
      "Sports science and physiotherapy experts",
      "IPL and league team owners",
      "Para-athlete representatives",
    ],
  },
  {
    slug: "science",
    name: "Science, Tech & AI",
    icon: "Cpu",
    tagline: "Research that reaches real life.",
    mandate:
      "India produces world-class scientists yet research funding as a share of GDP stays low and brain drain persists. This ministry would raise sustained funding for basic and applied research, support indigenous deep-tech and responsible AI, and build stronger bridges between labs, startups and public problems.",
    seedNominees: [
      {
        name: "Dr. K. Sivan",
        note: "Aerospace engineer and former chairman of ISRO",
      },
      {
        name: "Dr. Gagandeep Kang",
        note: "Vaccine scientist and the first Indian woman elected a Fellow of the Royal Society",
      },
      {
        name: "Dr. Manjul Bhargava",
        note: "Mathematician and Fields Medal laureate",
      },
    ],
    councilExamples: [
      "ISRO and DRDO scientists",
      "IIT and IISc research deans",
      "Deep-tech startup founders",
      "AI ethics and policy researchers",
      "Open-source and developer communities",
      "Science journalism representatives",
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture & Farmers",
    icon: "Wheat",
    tagline: "Fair prices, healthy soil, secure farmers.",
    mandate:
      "Many farmers face volatile prices, mounting input costs and the rising risks of climate stress, while middlemen capture much of the value. This ministry would improve price discovery and market access, promote sustainable and water-efficient farming, and strengthen crop insurance and storage so farmers keep more of what they grow.",
    seedNominees: [
      {
        name: "Dr. M. S. Swaminathan",
        note: "Agricultural scientist regarded as a father of India's Green Revolution",
      },
      {
        name: "Dr. Rajaram Tripathi",
        note: "Award-winning herbal farmer and founder of a large farmer-producer collective in Chhattisgarh",
      },
      {
        name: "Subhash Palekar",
        note: "Padma Shri agriculturist who popularised low-cost natural farming",
      },
    ],
    councilExamples: [
      "Farmer producer organisation (FPO) leaders",
      "Agricultural university scientists",
      "APMC mandi and supply-chain experts",
      "Crop insurance administrators",
      "Cooperative society representatives",
      "Agri-tech and storage entrepreneurs",
    ],
  },
  {
    slug: "women-child",
    name: "Women, Children & Safety",
    icon: "ShieldCheck",
    tagline: "Safety, dignity and opportunity for all.",
    mandate:
      "Gaps in child nutrition, women's safety and workforce participation continue to hold back families and the wider economy. This ministry would strengthen anganwadi nutrition and early childhood care, make public spaces and reporting systems safer and more responsive, and expand support that helps women study, work and lead.",
    seedNominees: [
      {
        name: "Sunitha Krishnan",
        note: "Anti-trafficking activist and co-founder of Prajwala",
      },
      {
        name: "Dr. Indira Hinduja",
        note: "Pioneering gynaecologist behind India's first scientifically documented test-tube baby",
      },
      {
        name: "Safeena Husain",
        note: "Founder of Educate Girls, which brings out-of-school girls back into education",
      },
    ],
    councilExamples: [
      "Anganwadi worker representatives",
      "Child protection NGOs",
      "Women's safety helpline operators",
      "Paediatric and maternal health doctors",
      "Self-help group (SHG) federations",
      "Gender and law policy experts",
    ],
  },
  {
    slug: "media",
    name: "Media, Information & Transparency",
    icon: "Radio",
    tagline: "Facts in the open, trust restored.",
    mandate:
      "Misinformation spreads faster than verified facts, and access to public information is often slow or obstructed. This ministry would champion proactive open data and transparent government communication, protect press freedom and independent fact-checking, and improve media literacy so citizens can tell signal from noise.",
    seedNominees: [
      {
        name: "Faye D'Souza",
        note: "Independent journalist known for accessible, issue-focused civic news",
      },
      {
        name: "Pratik Sinha",
        note: "Co-founder of the fact-checking organisation Alt News",
      },
      {
        name: "Sucheta Dalal",
        note: "Financial journalist who exposed major securities scams and promotes investor awareness",
      },
    ],
    councilExamples: [
      "Press Council of India members",
      "Independent fact-checking organisations",
      "Open-data and civic-tech groups",
      "Regional-language journalists",
      "Media literacy educators",
      "Public broadcaster representatives",
    ],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure & Cities",
    icon: "Building2",
    tagline: "Cities that work for everyone.",
    mandate:
      "Rapid urbanisation has outpaced housing, public transport and basic services, leaving congestion and stretched utilities in its wake. This ministry would prioritise reliable public transport and walkable cities, climate-resilient water and sanitation, and quality affordable housing through better planning and accountable delivery.",
    seedNominees: [
      {
        name: "E. Sreedharan",
        note: "Engineer known as the 'Metro Man' for leading the Konkan Railway and Delhi Metro",
      },
      {
        name: "Dr. Shirish Patel",
        note: "Civil engineer and a key planner behind the original concept of Navi Mumbai",
      },
      {
        name: "Sheela Patel",
        note: "Founder of SPARC, working on inclusive housing and sanitation for the urban poor",
      },
    ],
    councilExamples: [
      "Municipal commissioners",
      "Urban planners and architects",
      "Public transport authority engineers",
      "Water and sanitation utility heads",
      "Resident welfare associations",
      "Affordable housing developers",
    ],
  },
  {
    slug: "culture",
    name: "Culture & Arts",
    icon: "Palette",
    tagline: "Living heritage, thriving artists.",
    mandate:
      "India's vast artistic and craft traditions are underfunded, and many artisans and folk performers struggle to earn a sustainable living. This ministry would support working artists and craftspeople with fair markets and grants, protect and digitise heritage and languages, and make arts education and public culture more widely accessible.",
    seedNominees: [
      {
        name: "Pandit Hariprasad Chaurasia",
        note: "Internationally renowned classical flautist",
      },
      {
        name: "Sonal Mansingh",
        note: "Eminent classical dancer and Padma Vibhushan awardee",
      },
      {
        name: "Jatin Das",
        note: "Acclaimed contemporary painter and founder of the JD Centre of Art",
      },
    ],
    councilExamples: [
      "Sangeet Natak Akademi representatives",
      "Master artisans and craft cooperatives",
      "Folk and tribal art practitioners",
      "Museum and archive curators",
      "Language and heritage scholars",
      "Independent filmmakers and theatre groups",
    ],
  },
];
