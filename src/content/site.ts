// Core site copy (Claude-authored; user reviews before publish).
// Tone: aspirational, sober, non-partisan. No attacks on named people/parties.

export const site = {
  name: "Apni Sarkar",
  nameDeva: "अपनी सरकार",
  tagline: "If the best of our generation ran the country.",
  // Used for <title>, OG, etc.
  description:
    "Apni Sarkar is an aspirational thought experiment: a dream cabinet of India's most accomplished people, chosen by the public. Nominate who you'd trust to run each ministry.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apni-sarkar.vercel.app",
};

export const hero = {
  eyebrow: "An open thought experiment for India",
  // headline rendered with emphasis spans handled in the component
  headlineLead: "What if the",
  headlineEmphasis: "best people",
  headlineTail: "of our generation ran the country?",
  sub: "Not politicians. Doctors, teachers, scientists, farmers, athletes and builders who have already proved what they can do — backed by the people who know each field best. You decide who. We imagine what India could become. This project makes two arguments: a five-year plan with every number sourced, and a case for a citizen-lottery reform that takes the money out of selecting power.",
  ctaPrimary: "Nominate your cabinet",
  ctaSecondary: "Read the argument",
  disclaimer:
    "An aspirational, non-partisan civic project. Not a real or claimed government, and not affiliated with any person or party.",
};

export const vision = {
  eyebrow: "How it would work",
  title: "A government designed so no one can capture it.",
  points: [
    {
      icon: "Users",
      title: "Picked on merit, by the people",
      body: "Every ministry is led by someone who has already done the work — nominated and ranked by the public, not handed out as a favour.",
    },
    {
      icon: "Network",
      title: "A Council of 50 behind every minister",
      body: "Each minister sits with ~50 real practitioners every month — the people actually inside that field — so decisions come from the ground, not a bubble.",
    },
    {
      icon: "Eye",
      title: "Radically transparent by default",
      body: "Open books, open data, open code. Every rupee, every decision, every meeting — public unless there is a genuine reason it cannot be.",
    },
    {
      icon: "Scale",
      title: "Power that checks itself",
      body: "A free press as the fourth pillar and a real separation of powers: everyone can question everyone, and no one can quietly take it over.",
    },
  ],
};

export const principles = {
  eyebrow: "Our principles",
  title: "The rules we would never bend.",
  items: [
    {
      n: "01",
      title: "Open source government",
      body: "Code, budgets and data published openly. If the public paid for it, the public can see it.",
    },
    {
      n: "02",
      title: "Radical transparency",
      body: "Default to disclosure. Secrecy must be justified, not assumed.",
    },
    {
      n: "03",
      title: "A free fourth pillar",
      body: "An independent press that can criticise us without fear is a feature, not a threat.",
    },
    {
      n: "04",
      title: "Separation of powers",
      body: "No single office can override the others. Everyone is questionable; no one is untouchable.",
    },
    {
      n: "05",
      title: "Merit over loyalty",
      body: "Roles go to the most capable, not the most connected.",
    },
    {
      n: "06",
      title: "Nobody owns it",
      body: "No dynasty, no permanent rulers. Service is a term, not a throne.",
    },
  ],
};

export const join = {
  eyebrow: "Be part of it",
  title: "Pick the India you actually want.",
  body: "Add your nominations, share the cabinet you'd vote for, and help shape the 5-year plan. The louder this gets, the harder it is to ignore.",
  cta: "Start nominating",
};

export const legal = {
  disclaimer:
    "Apni Sarkar is an independent, non-partisan, aspirational civic project and a thought experiment. It is not a real, registered, or claimed government, and it is not affiliated with, endorsed by, or representative of any individual, political party, or organisation unless explicitly stated. Names appearing on this site are public nominations and illustrative examples; they do not imply consent, endorsement, or candidacy by those individuals.",
  removalNote:
    "If you are named here and would like to be removed, write to us and we will take it down promptly.",
  removalEmail: "hello@apni-sarkar.org",
};
