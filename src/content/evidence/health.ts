import type { SectorDeepDive } from "./types";

export const healthDeepDive: SectorDeepDive = {
  slug: "health",
  sector: "Health & Wellbeing",
  hero: {
    title: "A health system that reaches every family.",
    sub:
      "Infant mortality has reached its lowest recorded level, but a child in Chhattisgarh is seven times more likely to die before age one than a child in Kerala. [c:srs-2023] Government health spending has risen — then retreated after the pandemic — and households are again paying a rising share of health costs directly. [c:nha-2022-23] These are not separate stories; they are the same story at different stages. This brief sets out where India stands, why, and a costed five-year plan to close the gap.",
  },

  indicators: [
    {
      value: "1.43%",
      label: "Government health expenditure as a share of GDP",
      vintage: "NHA 2022-23",
      cite: ["nha-2022-23"],
      context:
        "Down from 1.84% in FY22 as COVID-era public spending normalised. [c:nha-2022-23] The National Health Policy 2017 target of 2.5% by 2025 has been missed. [c:prs-health-2025]",
    },
    {
      value: "43.4%",
      label: "Out-of-pocket expenditure as a share of total health spending",
      vintage: "NHA 2022-23",
      cite: ["nha-2022-23"],
      context:
        "Up from 39.4% in the COVID-distorted year 2021-22. [c:nha-2021-22] The longer-term trend is an improvement from 64.2% in 2013-14, but the post-pandemic reversal is real. [c:nha-2022-23]",
    },
    {
      value: "₹1,06,530 cr",
      label: "Union Budget 2026-27 allocation to the Ministry of Health and Family Welfare",
      vintage: "Union Budget 2026-27",
      cite: ["pib-budget-health-2026"],
      context:
        "Includes ₹39,390 crore for the National Health Mission, ₹9,500 crore for PM-JAY, and ₹4,770 crore for PM-ABHIM. [c:pib-budget-health-2026]",
    },
    {
      value: "25 per 1,000",
      label: "Infant mortality rate (live births)",
      vintage: "SRS 2023",
      cite: ["srs-2023"],
      context:
        "Down from 32 in 2018. Kerala is at 5; Chhattisgarh, Madhya Pradesh, and Uttar Pradesh are at 37 — a seven-fold spread. [c:srs-2023]",
    },
    {
      value: "88 per 100,000",
      label: "Maternal mortality ratio (live births)",
      vintage: "SRS MMR Bulletin 2020-22",
      cite: ["srs-2020-22-mmr"],
      context:
        "Down from 130 in 2014-16. [c:srs-2020-22-mmr] Assam's MMR remains several times Kerala's — the interstate gap is the central fact of Indian maternal health. [c:srs-2020-22-mmr]",
    },
    {
      value: "19 per 1,000",
      label: "Neonatal mortality rate (live births), 2021",
      vintage: "SRS / PIB 2025",
      cite: ["pib-mortality-2025"],
      context:
        "Under-five mortality was 31 per 1,000 in the same year. [c:pib-mortality-2025] Neonatal deaths — concentrated in the first month of life — now dominate child mortality and depend on facility quality, not just outreach.",
    },
    {
      value: "62%",
      label: "Share of deaths in India attributable to non-communicable diseases",
      vintage: "GBD 2016 / PIB 2022",
      cite: ["pib-ncd-2022"],
      context:
        "Up from about 38% in 1990. [c:pib-ncd-2022] Cardiovascular disease, diabetes, chronic respiratory disease, and cancers are now the main killers, yet the public system was built for infections and childbirth.",
    },
    {
      value: "35.5% / 57%",
      label: "Children under 5 stunted / women aged 15-49 anaemic",
      vintage: "NFHS-5 2019-21",
      cite: ["nfhs-5"],
      context:
        "67% of children aged 6-59 months are anaemic. Anaemia among women worsened relative to NFHS-4 (53% in 2015-16). [c:nfhs-5] No NFHS-6 national report has been released as of June 2026.",
    },
    {
      value: "5 + 6 per 10,000",
      label: "Active qualified doctors and nurses/midwives per 10,000 population",
      vintage: "NSSO 2017-18 / Karan et al. 2021",
      cite: ["karan-2021"],
      context:
        "Against the WHO threshold of 44.5 doctors-nurses-midwives combined per 10,000. [c:karan-2021] The nurse-to-doctor ratio is inverted relative to well-functioning systems.",
    },
    {
      value: "79.9%",
      label: "Specialist shortfall at rural Community Health Centres",
      vintage: "RHS 2022-23",
      cite: ["rhs-2022-23"],
      context:
        "4,413 specialists in place against 21,964 required. Surgeons: 83.3% short; physicians: 81.9% short; paediatricians: 80.5% short; obstetrician-gynaecologists: 74.2% short. [c:rhs-2022-23]",
    },
    {
      value: "0.79 per 1,000",
      label: "Government hospital beds per 1,000 population",
      vintage: "Knight Frank-Berkadia, 2023",
      cite: ["southfirst-beds-2023"],
      context:
        "Against the National Health Policy 2017 norm of 2 public beds per 1,000. [c:southfirst-beds-2023] Over 60% of all beds are private and concentrated in cities. [c:wb-hospital-beds]",
    },
    {
      value: "~55 crore",
      label:
        "People covered under Ayushman Bharat PM-JAY (₹5 lakh per family per year of cashless hospitalisation)",
      vintage: "NHA, accessed 2026",
      cite: ["nha-pmjay"],
      context:
        "Over 42 crore Ayushman cards issued by late 2025. [c:nha-pmjay] Card issuance is an enrolment metric, not a utilisation or financial-protection metric.",
    },
    {
      value: "1.78 lakh",
      label: "Ayushman Arogya Mandirs operationalised (expanded primary care with NCD screening)",
      vintage: "MoHFW 2025",
      cite: ["pib-aam-2025"],
      context:
        "Operationalisation is an input measure — staffing, drug stocks, and footfall vary widely by state. [c:pib-aam-2025]",
    },
  ],

  rootCauses: [
    {
      title: "Public financing is low — and what exists is not fully absorbed",
      body:
        "At 1.43% of GDP (NHA 2022-23), India's public health spending is among the lowest of major economies relative to income. [c:nha-2022-23] But money alone is not the binding constraint everywhere: National Health Mission fund utilisation has been chronically incomplete. Unspent NHM balances with states rose to ₹9,509 crore by 2015-16; [c:indiaspend-nhm-2017] NIPFP's analysis documents low absorption concentrated in precisely the states with the weakest health outcomes, driven by missing complementary inputs. [c:nipfp-nhm-2020] CAG audits found state treasuries took 50 to 271 days to move released funds to health societies. [c:nipfp-nhm-2020] Raising spending without fixing the plumbing produces lapsed budgets, not health.",
    },
    {
      title: "The workforce is too small, wrongly mixed, and badly distributed",
      body:
        "With roughly 5 qualified active doctors and 6 nurses/midwives per 10,000 population, India is short by an estimated 1.5-1.8 million workers against the WHO 44.5 threshold. [c:karan-2021] The shortage is most acute for nurses and for specialists in rural facilities — 80% specialist shortfall at rural Community Health Centres. [c:rhs-2022-23] More than 20% of qualified professionals are not in the health labour market at all. [c:karan-2021] This is a retention and posting problem, not just a production problem.",
    },
    {
      title: "Primary care is too weak to manage the non-communicable disease transition",
      body:
        "With roughly 62% of deaths from chronic disease, [c:pib-ncd-2022] the system needs continuous, protocol-based care close to home: screening, cheap generic drugs, follow-up. The India Hypertension Control Initiative had enrolled over 4 million patients by 2022 — important progress, but roughly 12.5% of the estimated hypertensive population in covered areas. [c:who-ihci-2022] Untreated chronic disease surfaces later as expensive hospitalisation — the most regressive way to buy health.",
    },
    {
      title: "Medicines and diagnostics drive impoverishing payments",
      body:
        "Medicines are the single largest component of household out-of-pocket spending in NHA estimates. [c:nha-2022-23] Where states have not built reliable free-drug systems, patients buy from private pharmacies at retail prices. Before Uttar Pradesh's supply-chain redesign, overall essential medicine availability across public warehouses was around 34% at the December 2020 baseline. [c:up-supply-chain-2025] The combination of empty shelves and uninsured households is what drives impoverishment.",
    },
    {
      title: "Governance is thin: no public health cadres and weak audit",
      body:
        "Tamil Nadu is the only large state with a full directorate of public health staffed by a dedicated, trained public health cadre at district level, under a Public Health Act dating to 1939. [c:parthasarathi-2016] Most states assign public health functions to clinicians without public health training or career tracks. On the demand side, the CAG's 2023 performance audit of PM-JAY found 9.85 lakh beneficiaries linked to a single mobile number, claims paid for patients recorded as dead (₹6.97 crore across 3,903 claims), and ₹57.53 crore of excess payments to providers in four states. [c:cag-pmjay-2023] Fraud controls and data quality lag the scheme's scale.",
    },
    {
      title: "Dual practice and an unregulated private sector",
      body:
        "The private sector delivers over 70% of outpatient care and holds over 60% of hospital beds. [c:southfirst-beds-2023] Public-sector workforce expansion is partially offset by dual practice: doctors holding government posts who also run private clinics. The best multi-state household evidence finds PM-JAY associated with a shift toward private facilities, [c:pmjay-hsr-2023] meaning the scheme is financing private-sector growth rather than substituting it. Any plan that strengthens the public system without acknowledging private-sector lock-in will find out-of-pocket and NCD control targets harder to reach.",
    },
    {
      title: "Federal inequality compounds everything",
      body:
        "Kerala's infant mortality rate is 5 per 1,000; Madhya Pradesh, Uttar Pradesh, and Chhattisgarh are at 37 per 1,000 — a seven-fold spread. [c:srs-2023] Assam's maternal mortality ratio remains several times Kerala's. [c:srs-2020-22-mmr] The states with the worst outcomes also have the lowest per-capita health spending, weakest absorption, and thinnest workforce. [c:nipfp-nhm-2020] A national average is a misleading target; the policy problem is disproportionately an eight-state problem.",
    },
  ],

  benchmarks: [
    {
      place: "Thailand",
      scope: "world",
      headline: "Out-of-pocket spending fell from 34% to 11% of total health expenditure after the Universal Coverage Scheme launched in 2002",
      body:
        "Thailand's tax-financed Universal Coverage Scheme, built on capitation payment to primary-care networks and a strong purchaser (the National Health Security Office), covered the informal sector from 2002. Measured outcomes: the incidence of catastrophic health spending fell from about 6% in 1996 to under 3-4% within the first decade; out-of-pocket share of current health expenditure fell from 34% in 2000 to 11% by 2017. [c:tangcharo-2020] Government share of health spending rose from 65% in 2002 to 78% in 2016. [c:tangcharo-2020] Transferability caveat: Thailand spent decades building district hospitals and a rural health workforce before 2002, and is a unitary state of 70 million people. India must do workforce-building and coverage expansion simultaneously, state by state.",
    },
    {
      place: "Brazil — Family Health Strategy",
      scope: "world",
      headline: "Family Health Strategy expansion associated with falling infant mortality in 73% of Brazilian municipalities",
      body:
        "Salaried teams — a doctor, nurse, and 4-6 community health agents — each cover a defined catchment of about 3,500 people and deliver proactive primary care within the SUS universal system. A national municipal panel study found the programme's expansion was associated with falling infant mortality in 73% of Brazilian municipalities; the effect is strongest on post-neonatal deaths, which primary care can most plausibly prevent. [c:aquino-2009] A sub-national study from Paraná's third health region illustrates the pattern: infant mortality fell from 17.1 to 10.7 per 1,000 as coverage rose from 44% to 66% between 2005 and 2016 — a regional figure, not nationally representative. [c:scielo-parana] Transferability caveat: these are panel associations with selection issues; Brazil pays community health agents full salaries, unlike India's honorarium-based ASHAs.",
    },
    {
      place: "Sri Lanka",
      scope: "world",
      headline: "Maternal mortality around 18 per 100,000 and infant mortality near 5 per 1,000, achieved at roughly 3% of GDP in total health spending",
      body:
        "Sri Lanka built outcomes on free public primary care and a cadre of salaried public health midwives attending 98%+ of institutional deliveries, with no period of high health expenditure. [c:cgdev-srilanka] The CGD case study provides institutional detail; current statistics are from WHO/World Bank global health databases. Transferability caveat: small country, high female literacy, century-long head start on civil registration and community-based care.",
    },
    {
      place: "Tamil Nadu",
      scope: "india",
      headline: "Infant mortality rate 18, under-5 mortality 22, maternal mortality 60 — all far below national averages of the same vintage",
      body:
        "Two institutions underpin Tamil Nadu's performance. First, the Directorate of Public Health, staffed by a dedicated public-health-trained cadre managing districts under the Tamil Nadu Public Health Act, 1939. [c:parthasarathi-2016] Second, the Tamil Nadu Medical Services Corporation: centralised tendering for a stable essential drugs list, district warehouses, passbook-based facility drawing rights, and pre-dispatch quality testing. [c:parthasarathi-2016] Dvara Research's compilation of NFHS-5 2019-21 and SRS 2016-18 state indicators confirms the outcome advantage. [c:dvara-tn-health] Transferability caveat: TN's results reflect over 80 years of institutional accumulation and high female literacy; the cadre and corporation are replicable, the head start is not.",
    },
    {
      place: "Uttar Pradesh — supply-chain redesign",
      scope: "india",
      headline: "Essential medicine availability in public warehouses rose from 34% to 88% after redesign on the TNMSC model (December 2020 to July 2024)",
      body:
        "When UP redesigned its medicines supply chain on the Tamil Nadu model, overall availability of essential medicines across all warehouses improved from 34% to 88%; average availability per warehouse improved from 27% to 97%, with an average of 275 of 287 listed medicines in stock per warehouse by mid-2024. [c:up-supply-chain-2025] These are warehouse-level figures; the paper does not separately report facility-level availability after redesign, so the last-mile picture is not fully captured. Transferability caveat: supply-chain programme evaluation, not a randomised study; selection effects and parallel improvements cannot be ruled out.",
    },
    {
      place: "Chhattisgarh — Mitanin community health workers",
      scope: "india",
      headline: "Quasi-experimental evaluation estimated annual reductions of 4-5% in underweight and 5-6% in stunting in programme areas",
      body:
        "Nearly 70,000 women community health workers covering virtually all rural hamlets, selected by communities and supported by a dedicated technical body — the explicit prototype for the national ASHA programme. [c:nandi-mitanin-2014] [c:sundararaman-2012] Qualitative evaluations document effective community action on nutrition entitlements and gender-based violence. Transferability caveat: not a randomised controlled trial; causal attribution is uncertain; effects depend on the State Health Resource Centre-style support structure that several states copying the ASHA form did not copy in substance.",
    },
    {
      place: "Kerala — Aardram Family Health Centres",
      scope: "india",
      headline: "Family Health Centres delivered higher annual outpatient utilisation and offered services — depression and COPD screening — that ordinary PHCs did not",
      body:
        "A 2024 facility survey found that upgraded Family Health Centres averaged 11,343 versus 9,580 outpatient visits per 10,000 population in comparable primary health centres, and offered expanded services including NCD and mental-health screening. [c:kerala-fhc-2024] Transferability caveat: early-stage, facility-level evidence; Kerala's baseline human development is exceptional and cannot be assumed elsewhere.",
    },
  ],

  interventions: [
    {
      title: "Raise public health spending to 2.5% of GDP — tied to absorption reform",
      problem:
        "Government health expenditure stands at 1.43% of GDP (NHA 2022-23). [c:nha-2022-23] The National Health Policy 2017 target of 2.5% by 2025 has been missed. [c:prs-health-2025] Simultaneously, NHM funds go unspent in weak states: treasury delays of 50-271 days have been documented by CAG. [c:nipfp-nhm-2020] The most recent documented NHM utilisation was roughly 71% across surveyed states in FY2015-16. [c:nipfp-nhm-2020] [c:indiaspend-nhm-2017]",
      intervention:
        "A centre-state compact: the centre raises NHM and PM-ABHIM transfers on a published glide path; states qualify for increments by (a) transferring funds from treasury to implementing societies within 15 days, (b) filling sanctioned posts above a threshold, and (c) publishing quarterly utilisation data. Increments are front-loaded to the eight Empowered Action Group states.",
      mechanism:
        "Conditional grants change state behaviour where unconditional ones lapse; the binding constraint in poor states is absorption capacity, so the money must purchase capacity — staff and systems — first. [c:nipfp-nhm-2020] Evidence from NHM evaluations shows that states with stronger complementary inputs (facility readiness, filled posts) absorb and spend at higher rates than states without them.",
      target: {
        text:
          "Government health expenditure from ~1.9% of GDP (centre+state budgeted, 2024-25) to 2.5% of GDP by FY2031; NHM utilisation at or above 85% in every major state.",
        baseline:
          "GHE 1.43% of GDP, NHA 2022-23 [c:nha-2022-23]; budgeted centre+state spending ~1.9% of GDP, 2024-25 [c:prs-health-2025]; NHM utilisation ~71% across surveyed states, FY2015-16 [c:nipfp-nhm-2020].",
      },
      owner:
        "Union Ministry of Finance and MoHFW (transfers and conditions); state finance and health departments (absorption); Fifteenth/Sixteenth Finance Commission architecture for health grants.",
      cost:
        "This is the overall cost envelope (see Overall Cost section). Adding 0.6 percentage points of GDP per year at maturity equals approximately ₹1.9-2.0 lakh crore per year in FY2024-25 terms, against India's nominal GDP of ₹330.68 lakh crore. [c:nso-gdp-fy25] Phased in over five years, split between centre and states along existing NHM and Finance Commission lines.",
      risks:
        "Conditionality can punish exactly the states whose citizens most need spending; mitigate with capacity-building grants rather than pure penalties. Nominal %-of-GDP targets slip silently if GDP grows fast and health budgets do not keep pace. Conditional financing in Indian federalism has a mixed record — Bihar and UP saw large NHM unspent balances in earlier cycles even when funds were released unconditionally.",
    },
    {
      title: "Dedicated public health cadres and Public Health Acts in every major state",
      problem:
        "Only Tamil Nadu runs district health through a trained public health cadre under a Public Health Act. [c:parthasarathi-2016] Elsewhere, clinicians manage epidemics, sanitation, and health programmes without public health training or career incentives. Proposals for such cadres have been floated and shelved in Maharashtra, Karnataka, and Rajasthan over 20+ years.",
      intervention:
        "Each state notifies a three-tier public health management cadre (block-district-state) with MPH-qualified entry, separate from the clinical cadre, plus a model State Public Health Act. Draft model rules already exist with MoHFW and NITI Aayog. MoHFW provides model rules and NHM funds the transition; public health schools (IIPH network, medical colleges) supply training.",
      mechanism:
        "Tamil Nadu's outcome edge is credibly attributed in the health-systems literature to managerial specialisation: professionals whose entire career ladder is population health, not surgery interrupted by administration. [c:parthasarathi-2016] [c:dvara-tn-health] Trained public health cadres manage district-level surveillance, outbreak response, and programme performance in ways that visiting clinicians with split roles do not.",
      target: {
        text:
          "From 1 large state with a full cadre (baseline 2026) to all 20 large states notified and at least 60% of district public health officer posts filled by trained candidates by FY2031.",
        baseline:
          "1 state (Tamil Nadu) with a functioning public health cadre under a Public Health Act, as of 2026. [c:parthasarathi-2016] [c:dvara-tn-health]",
      },
      owner:
        "State governments (cadre rules are a state subject); MoHFW provides model rules and NHM funds the transition; IIPH network and public health schools for training supply.",
      cost:
        "Modest — salary differential and training for approximately 2-3 senior officers per district plus block officers. The relevant comparator is administrative cost within the existing NHM envelope; Tamil Nadu runs its directorate within an ordinary state health budget. [c:dvara-tn-health] Reliable all-India costing is unavailable; each state should build a budget line.",
      risks:
        "Cadre proposals have failed repeatedly across large states for over 20 years. Resistance comes from IAS and clinical-cadre lobbies who resist delegated authority. A cadre without delegated financial powers is a nameplate. Legislative backing (state Acts rather than administrative orders) reduces the risk of reversal. Phased entry through new posts rather than conversions reduces direct conflict but does not resolve budget competition.",
    },
    {
      title: "Free essential medicines and diagnostics everywhere via pooled procurement",
      problem:
        "Medicines are the largest component of out-of-pocket spending. [c:nha-2022-23] Availability in weak-state public warehouses has been as low as 27-34% at the warehouse level before reform. [c:up-supply-chain-2025] Where public facilities lack reliable stocks, patients buy from private pharmacies at retail prices — often the single financial catastrophe that drives households into debt.",
      intervention:
        "Every state operates an autonomous procurement corporation on the Tamil Nadu Medical Services Corporation design: a stable essential drugs list, e-tendered rate contracts, district warehouses, facility passbooks, NABL-tested batches, and real-time stock information systems. [c:parthasarathi-2016] [c:up-supply-chain-2025] The centre co-finances through NHM Free Drugs and Diagnostics Service Initiatives and makes publication of monthly facility-level stock-out data a condition for incremental transfers. Rajasthan's Mukhyamantri Nishulk Dava Yojana covers 1,795 medicines and surgical consumables free statewide and is centrally co-financed at up to 60% under NHM. [c:rajasthan-mndy]",
      mechanism:
        "Pooled procurement cuts unit prices and corruption simultaneously (single transparent tender versus thousands of local purchases); guaranteed supply is what moves patients from private pharmacies back to free public care. UP's redesign raised overall warehouse availability from 34% to 88% and average per-warehouse availability from 27% to 97% between 2020 and 2024. [c:up-supply-chain-2025] TNMSC-type systems historically deliver drugs at a fraction of retail prices. [c:parthasarathi-2016]",
      target: {
        text:
          "At least 90% availability of essential-list medicines in public facilities in every state by FY2030; out-of-pocket expenditure share of total health spending below 30% by FY2031.",
        baseline:
          "27-34% warehouse-level availability in pre-reform UP (December 2020 baseline) [c:up-supply-chain-2025]; OOPE 43.4% of total health expenditure, NHA 2022-23 [c:nha-2022-23].",
      },
      owner:
        "State health departments via procurement corporations; MoHFW (NHM) co-financing; state drug controllers for quality.",
      cost:
        "Rajasthan's experience is the best cost basis: a comprehensive state free-drug scheme is centrally co-financed at up to 60% under NHM. [c:rajasthan-mndy] TNMSC-type systems deliver drugs at a fraction of retail prices, [c:parthasarathi-2016] so the gross cost is partly offset by household savings that no longer leave the state as medicine expenditure.",
      risks:
        "Warehouse availability does not guarantee last-mile delivery to primary health centres — the last-mile gap is where patients are actually lost to private pharmacies. Stock-outs from poor demand forecasting occur even in Tamil Nadu. [c:up-supply-chain-2025] Free drugs without prescribing audits can fuel irrational prescription. The OOPE target of 30% requires parallel action on diagnostics, user fees, and private-sector price regulation — drug availability alone is not sufficient.",
    },
    {
      title: "Scale a primary-care chronic disease platform through 1.78 lakh Ayushman Arogya Mandirs",
      problem:
        "Non-communicable diseases cause roughly 62% of deaths in India, [c:pib-ncd-2022] yet the public system was built for infections and childbirth. Only a fraction of hypertensives and diabetics are diagnosed, treated, and controlled. Anaemia among women aged 15-49 is 57% (NFHS-5, 2019-21). [c:nfhs-5] Untreated chronic disease surfaces later as expensive hospitalisation — the most regressive way to buy health.",
      intervention:
        "Universalise the India Hypertension Control Initiative package — simple drug protocols, guaranteed drug supply at the Ayushman Arogya Mandir, task-sharing with nurses and Community Health Officers, a digital treatment register with cohort-based reporting — across all districts, extended to diabetes. Link to annual population screening of adults aged 30 and above already mandated under the National Programme for Non-Communicable Diseases.",
      mechanism:
        "IHCI is the rare Indian NCD intervention with measured results at scale. Rolled out with WHO support to 130+ districts, enrolling over 4 million patients by 2022. [c:who-ihci-2022] Programme cohort data reported by WHO and Resolve to Save Lives show blood pressure control rising from 37% to 48% among patients enrolled in programme facilities, and the share of patients paying out of pocket for blood pressure drugs falling from 47% to 9%. [c:who-ihci-2022] [c:rtsl-ihci] These figures come from programme-internal cohort tracking, not an independent controlled comparison. The mechanism is coherent and proven elsewhere: protocols plus assured drugs plus follow-up registers.",
      target: {
        text:
          "Blood pressure control at or above 60% among patients under treatment in public facilities by FY2031; all 1.78 lakh Ayushman Arogya Mandirs reporting monthly NCD cohort data.",
        baseline:
          "48% blood pressure control in IHCI programme cohorts [c:rtsl-ihci]; 1.78 lakh AAMs operationalised as of mid-2025 [c:pib-aam-2025].",
      },
      owner:
        "MoHFW (NP-NCD, NHM) sets protocol and finances drugs; states run through AAM staff (Community Health Officers, ANMs); WHO-India and ICMR for technical monitoring.",
      cost:
        "WHO describes IHCI as a high-impact, low-cost intervention — its costs are dominated by generic drugs (amlodipine and telmisartan class) procured at pooled-tender prices. [c:who-ihci-2022] The delivery infrastructure — Ayushman Arogya Mandirs and Community Health Officers — is already financed under NHM and PM-ABHIM. [c:pib-pmabhim]",
      risks:
        "Screening without treatment capacity creates worried-well patients and wasted data — sequence drug availability first, screening expansion second. Digital registers can become data-entry burdens that crowd out care; keep indicators few and reporting simple. IHCI's internal cohort evidence has not been independently replicated at scale; treat the 37%-to-48% BP-control figure as promising internal evidence, not a confirmed effect size.",
    },
    {
      title: "Fix the secondary tier: district hospitals, specialists, and a nursing surge",
      problem:
        "The 80% specialist shortfall at rural Community Health Centres [c:rhs-2022-23] and only 0.79 government beds per 1,000 population [c:southfirst-beds-2023] mean that referrals from primary care arrive at facilities that cannot treat them. Nurse density at approximately 6 active qualified nurses per 10,000 population is too low relative to what functional systems require. [c:karan-2021] Neonatal mortality at 19 per 1,000 (SRS 2021) [c:pib-mortality-2025] is now the hard core of child deaths and is a facility-quality problem.",
      intervention:
        "Three components: (a) Complete PM-ABHIM's 602 critical-care blocks and 730 district integrated public health labs on schedule. [c:pib-pmabhim] (b) Operate the 157 new government nursing colleges (Cabinet-approved 2023, ₹1,570 crore, approximately 15,700 additional graduates per year) at full capacity and add a second tranche. [c:pib-nursing-2023] (c) Attack the specialist gap with bonded district-service postgraduate seats in district hospitals (DNB programmes) and team-based task-sharing — anaesthesia assistants, obstetric nurse practitioners — rather than waiting for specialists who will not come to rural areas.",
      mechanism:
        "Thailand and Sri Lanka both built outcomes on functional district hospitals staffed heavily by nurses and midwives, not on specialist density. [c:tangcharo-2020] [c:cgdev-srilanka] India's own residual neonatal and maternal mortality is concentrated where comprehensive emergency obstetric care facilities are missing. Tamil Nadu's maternal death decline tracked its build-out of comprehensive emergency obstetric care centres. [c:dvara-tn-health]",
      target: {
        text:
          "Halve the CHC specialist shortfall to 40% or below by FY2031; government beds from 0.79 to at least 1.2 per 1,000; 75,000 or more cumulative additional nursing graduates by FY2031.",
        baseline:
          "79.9% CHC specialist shortfall, RHS 2022-23 [c:rhs-2022-23]; 0.79 government beds per 1,000 [c:southfirst-beds-2023]; 157 nursing colleges at 15,700 graduates per year from Cabinet-approved 2023 scheme [c:pib-nursing-2023].",
      },
      owner:
        "Centre: MoHFW (PM-ABHIM, nursing colleges, DNB seats via National Board of Examinations). States: recruitment and hospital operations. District: hospital management societies.",
      cost:
        "PM-ABHIM's existing envelope is ₹64,180 crore for 2021-26. [c:pib-pmabhim] Nursing expansion cost basis is ₹10 crore per college. [c:pib-nursing-2023] A successor PM-ABHIM of comparable scale is the realistic vehicle for the capital and operational investment required.",
      risks:
        "Buildings without staff — PM-ABHIM's own documented risk — argue for tying capital releases to staffing plans. Bonded rural service has a mixed record: evasion rates in prior state schemes ranged from 30-60%, and enforcement actions have faced legal challenges. The target of halving the specialist shortfall is achievable only with simultaneous improvements in facility living conditions, spousal employment, and school access in posting areas. Without these non-financial conditions, the bottleneck shifts from training supply to placement compliance regardless of how many seats are sanctioned.",
    },
    {
      title: "Measure quality and stop the leaks: death audits, facility dashboards, PM-JAY integrity",
      problem:
        "The system measures inputs, not outcomes. Facility quality against Indian Public Health Standards is largely unreported. The CAG found PM-JAY paying claims for patients recorded as dead, lakhs of beneficiaries linked to a single mobile number, and ₹57.53 crore in excess provider payments across four states. [c:cag-pmjay-2023] Fraud money does not reach intended poor households; it either exits the system or subsidises ineligible users.",
      intervention:
        "Two sub-goals. Quality measurement: mandatory confidential maternal, neonatal, and in-hospital death audits in every district hospital, published annually in aggregate; a public IPHS-compliance dashboard for every public health centre, Community Health Centre, and district hospital. The IPHS 2022 framework and NQAS certification machinery already exist. Scheme integrity: implement the CAG's PM-JAY recommendations — Aadhaar-validated beneficiary cleanup, real-time duplicate-admission flags, recovery of irregular payments, and independent state anti-fraud units. [c:cag-pmjay-2023]",
      mechanism:
        "Tamil Nadu and Kerala's health improvements were measurement-led — Tamil Nadu's maternal death audits are central to its MMR record. [c:dvara-tn-health] Transparency changes manager behaviour at near-zero marginal cost. Insurance schemes worldwide leak 3-10% to fraud without active controls; the CAG findings show India is not exempt. [c:cag-pmjay-2023]",
      target: {
        text:
          "100% of district hospitals conducting and publishing death audits by FY2029; at least 50% of public facilities NQAS-assessed by FY2031; zero PM-JAY claims payable against deceased-patient IDs in audit re-tests.",
        baseline:
          "No national publication of district-hospital death audit results as of 2026; 3,903 PM-JAY claims paid against deceased-patient IDs documented by CAG 2023 [c:cag-pmjay-2023].",
      },
      owner:
        "National Health Authority (PM-JAY controls); MoHFW and NHSRC (IPHS/NQAS); state quality assurance committees; CAG follow-up audits.",
      cost:
        "Small — audit cells and dashboards are administrative costs within NHM programme management. The CAG recoveries already identified across four states exceed any plausible system cost for audit infrastructure. [c:cag-pmjay-2023]",
      risks:
        "Punitive use of audit data drives under-reporting; the international norm is confidential, no-blame clinical audit with public aggregate reporting. Dashboards can be gamed; rotate independent verification. Beneficiary cleanup reduces headline enrolment counts and may generate political resistance if scheme coverage figures are used as performance metrics.",
    },
  ],

  overallCost: {
    title: "What the full agenda would cost",
    body: [
      "Government health expenditure was 1.43% of GDP in 2022-23 (NHA 2022-23) [c:nha-2022-23] and budgeted centre-plus-state spending ran at roughly 1.9% of GDP in 2024-25 (PRS). [c:prs-health-2025] The centre's health ministry budget for FY2026-27 is ₹1,06,530 crore. [c:pib-budget-health-2026] States together account for the larger share of public health spending.",
      "Reaching the National Health Policy target of 2.5% of GDP by FY2031 means adding roughly 0.6 percentage points of GDP per year at maturity. At FY2024-25 nominal GDP of ₹330.68 lakh crore, [c:nso-gdp-fy25] that increment is approximately ₹1.9-2.0 lakh crore per year in today's terms, phased in over five years and split between centre and states along existing NHM and Finance Commission lines. This envelope contains all six interventions: cadres, drug corporations, NCD platform, PM-ABHIM successor (current PM-ABHIM: ₹64,180 crore over five years [c:pib-pmabhim]), and nursing expansion (₹1,570 crore for 157 colleges [c:pib-nursing-2023]) are claims on it, not additions to it.",
      "The honest comparison: the increment of roughly ₹2.0 lakh crore per year at maturity is approximately twice the centre's entire current annual health budget. [c:pib-budget-health-2026] It is achievable only if states — who hire the nurses and run the hospitals — raise their own health allocations. For the eight Empowered Action Group states, reaching 2.5% of state GDP in health would require health to grow from roughly 4-5% of state budgets to roughly 7-8%. This is comparable to what Tamil Nadu and Kerala already spend. [c:dvara-tn-health]",
      "Every percentage point shifted from out-of-pocket to public financing is regressive household spending avoided. NHA 2022-23 confirms that OOPE has risen back to 43.4% post-pandemic, [c:nha-2022-23] underscoring that public spending retreats are not costless. Thailand bought catastrophic-spending incidence below 3-4% with a government share of 78% of health spending. [c:tangcharo-2020] India at 2.5% of GDP would still be financing a leaner system than that.",
    ],
  },

  unknowns: [
    "Nutrition and household-health data are stale. NFHS-5 fieldwork ended in 2021; as of June 2026 no NFHS-6 national report is available. [c:nfhs-5] Anaemia, stunting, and service-coverage figures are five-plus years old. If post-COVID recovery — or deterioration — has been large, parts of Section 1 are wrong in unknown directions.",
    "The out-of-pocket expenditure number is contested. NHA 2021-22's 39.4% [c:nha-2021-22] reflects a pandemic year with exceptional public spending. Peer-reviewed syntheses report OOPE estimates in the 47-49% range for nearby years. [c:pmjay-hsr-2023] The official NHA 2022-23 series, at 43.4%, [c:nha-2022-23] is used throughout this brief, but the true current share may be several points higher.",
    "PM-JAY's impact evidence cuts both ways. A six-state household study finds 13% and 21% relative reductions in out-of-pocket and catastrophic spending respectively. [c:pmjay-hsr-2023] Other peer-reviewed work finds publicly funded insurance failing to protect the poorest and documents exclusion errors in enrolment. The plan treats demand-side insurance as necessary but insufficient; if the optimistic estimates are right, supply-side spending could show lower marginal returns than assumed — and vice versa.",
    "Anaemia measurement itself is disputed. The NFHS capillary-blood method likely overstates anaemia relative to venous samples. The 57% and 67% figures [c:nfhs-5] may be biased upward, though the adverse trend between NFHS-4 and NFHS-5 is harder to dismiss.",
    "State success stories may not transfer. Tamil Nadu and Kerala built on decades of literacy, female agency, and administrative depth. [c:parthasarathi-2016] [c:dvara-tn-health] The Mitanin estimates are quasi-experimental, not randomised. [c:nandi-mitanin-2014] Brazil's Family Health Strategy effects are strongest in municipal panel correlations. [c:aquino-2009] Institutional designs — cadres, procurement corporations, CHW support structures — have a plausible mechanism and replication evidence, [c:up-supply-chain-2025] but replication failure is a live risk.",
    "Absorption is the plan's biggest internal tension. More money is proposed (Intervention 4.1) while evidence shows weak states cannot spend current allocations. [c:nipfp-nhm-2020] [c:indiaspend-nhm-2017] The conditional-grant design is the answer, but conditional financing in Indian federalism has a mixed record. Bihar and UP saw large NHM unspent balances in earlier cycles with unconditional grants; this plan's conditional-grant architecture is different in design, but the mechanism is untested at this scale in India. Observable evidence within 24 months that should trigger a reassessment: if any two large EAG states show NHM utilisation still below 60% after conditional grants have been in place for two full fiscal years, the conditionality is not working.",
  ],

  sources: [
    {
      id: "nha-2022-23",
      org: "MoHFW / NHSRC",
      title: "National Health Accounts Estimates for India 2022-23",
      year: "2026",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2265816",
      note: "GHE 1.43% of GDP; OOPE 43.4% of THE; government share of THE 43.7%",
      category: "official",
    },
    {
      id: "srs-2023",
      org: "Office of the Registrar General of India",
      title: "Sample Registration System Statistical Report 2023",
      year: "2025",
      url: "https://censusindia.gov.in/nada/index.php/catalog/46172",
      note: "IMR 25 per 1,000; state-level spread Kerala 5 to Chhattisgarh/MP/UP 37",
      category: "official",
    },
    {
      id: "nha-2021-22",
      org: "MoHFW / NHSRC",
      title: "National Health Accounts Estimates for India 2021-22",
      year: "2024",
      url: "https://nhsrcindia.org/sites/default/files/2024-09/NHA%202021-22.pdf",
      note: "OOPE 39.4% of THE (pandemic-year figure); GHE 1.84% of GDP",
      category: "official",
    },
    {
      id: "prs-health-2025",
      org: "PRS Legislative Research",
      title: "Demand for Grants 2025-26 Analysis: Health and Family Welfare",
      year: "2025",
      url: "https://prsindia.org/files/budget/budget_parliament/2025/DFG_Analysis_2025-26-Health.pdf",
      note: "Combined centre-plus-state budgeted health spending ~1.9% of GDP, 2024-25",
      category: "research",
    },
    {
      id: "pib-budget-health-2026",
      org: "Press Information Bureau",
      title: "Union Budget 2026-27: MoHFW allocation",
      year: "2026",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2221616",
      note: "₹1,06,530 crore total; NHM ₹39,390 crore; PM-JAY ₹9,500 crore; PM-ABHIM ₹4,770 crore",
      category: "official",
    },
    {
      id: "srs-2020-22-mmr",
      org: "Office of the Registrar General of India",
      title: "Special Bulletin on Maternal Mortality in India 2020-22",
      year: "2025",
      url: "https://censusindia.gov.in/nada/index.php/catalog/45569",
      note: "MMR 88 per 100,000 live births; down from 130 in 2014-16",
      category: "official",
    },
    {
      id: "pib-mortality-2025",
      org: "Press Information Bureau",
      title: "India maternal and child mortality trends toward SDG 2030",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2128024",
      note: "Neonatal mortality 19/1,000 and under-5 mortality 31/1,000 (SRS 2021)",
      category: "official",
    },
    {
      id: "pib-ncd-2022",
      org: "Press Information Bureau",
      title: "Status of Non-Communicable Diseases in India",
      year: "2022",
      url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1796435",
      note: "NCDs 62% of deaths (GBD 2016); up from 38% in 1990",
      category: "official",
    },
    {
      id: "nfhs-5",
      org: "IIPS & MoHFW",
      title: "National Family Health Survey (NFHS-5) 2019-21: India Report",
      year: "2022",
      url: "https://dhsprogram.com/pubs/pdf/FR375/FR375.pdf",
      note: "Stunting 35.5%; anaemia: children 6-59 months 67%; women 15-49 57%",
      category: "official",
    },
    {
      id: "karan-2021",
      org: "Karan A. et al.",
      title: "Size, composition and distribution of health workforce in India (Human Resources for Health 2021)",
      year: "2021",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7983088/",
      note: "Active qualified doctors: 5/10,000; nurses/midwives: 6/10,000; WHO threshold 44.5",
      category: "research",
    },
    {
      id: "rhs-2022-23",
      org: "MoHFW",
      title: "Rural Health Statistics 2022-23",
      year: "2024",
      url: "https://www.business-standard.com/health/rural-india-chc-s-see-nearly-80-shortfall-of-specialist-doctors-govt-rpt-124091000561_1.html",
      note: "CHC specialist shortfall 79.9%; 4,413 in place against 21,964 required",
      category: "official",
    },
    {
      id: "southfirst-beds-2023",
      org: "The South First",
      title: "India has only 0.79 beds per 1,000 population in government hospitals",
      year: "2023",
      url: "https://thesouthfirst.com/health/india-has-only-0-79-beds-per-1000-population-in-government-hospitals-short-by-2-4-million-hospital-beds/",
      note: "Knight Frank-Berkadia estimate; over 60% of beds private and city-concentrated",
      category: "other",
    },
    {
      id: "wb-hospital-beds",
      org: "World Bank",
      title: "Hospital beds (per 1,000 people) — India (latest year 2021)",
      year: "2021",
      url: "https://data.worldbank.org/indicator/SH.MED.BEDS.ZS?locations=IN",
      note: "1.6 per 1,000 (all beds, 2021)",
      category: "multilateral",
    },
    {
      id: "nha-pmjay",
      org: "National Health Authority",
      title: "About PM-JAY",
      year: "2026",
      url: "https://nha.gov.in/PM-JAY",
      note: "Coverage ~55 crore people; 42 crore+ Ayushman cards issued by late 2025",
      category: "official",
    },
    {
      id: "pib-aam-2025",
      org: "MoHFW",
      title: "Update on Ayushman Arogya Mandir",
      year: "2025",
      url: "https://www.mohfw.gov.in/?q=en/pressrelease-284",
      note: "1.78 lakh AAMs operationalised as of mid-2025",
      category: "official",
    },
    {
      id: "nipfp-nhm-2020",
      org: "NIPFP",
      title: "Role of National Health Mission in Health Spending of States, Working Paper 317",
      year: "2020",
      url: "https://nipfp.org.in/media/medialibrary/2020/08/WP_317_2020.pdf",
      note: "NHM utilisation ~71% in surveyed states FY15-16; treasury delays 50-271 days documented",
      category: "research",
    },
    {
      id: "indiaspend-nhm-2017",
      org: "IndiaSpend",
      title: "29% of NHM funds with states not spent in 5 years",
      year: "2017",
      url: "https://www.indiaspend.com/as-health-crises-grow-29-of-funds-with-states-not-spent-in-5-years-82058/",
      note: "Unspent NHM balances with states rose to ₹9,509 crore by 2015-16",
      category: "other",
    },
    {
      id: "cag-pmjay-2023",
      org: "Comptroller and Auditor General of India",
      title: "Performance Audit of Ayushman Bharat – PM-JAY, Report No. 11 of 2023",
      year: "2023",
      url: "https://cag.gov.in/uploads/download_audit_report/2023/Report-No.-11-of-2023_PA-on-PMJAY_English-PDF-A-064d22bab2b83b5.38721048.pdf",
      note: "3,903 claims paid for deceased patients (₹6.97 crore); ₹57.53 crore excess payments in 4 states",
      category: "official",
    },
    {
      id: "parthasarathi-2016",
      org: "Parthasarathi R. & Sinha S.P.",
      title: "Towards a Better Health Care Delivery System: The Tamil Nadu Model (IJCM 2016)",
      year: "2016",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5112973/",
      note: "TNMSC design and Tamil Nadu public health cadre under PH Act 1939",
      category: "research",
    },
    {
      id: "dvara-tn-health",
      org: "Dvara Research",
      title: "Political Economy of Health: Tamil Nadu",
      year: "not dated",
      url: "https://dvararesearch.com/political-economy-of-health-tamil-nadu/",
      note: "TN state indicators: IMR 18, U5MR 22, MMR 60; NFHS-5 2019-21 / SRS 2016-18",
      category: "research",
    },
    {
      id: "up-supply-chain-2025",
      org: "PMC / authors",
      title: "Lessons learned from redesigning public health medicines supply chain in Uttar Pradesh, India",
      year: "2025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12333384/",
      note: "Warehouse availability: 34% to 88% overall; 27% to 97% per warehouse (Dec 2020–Jul 2024)",
      category: "research",
    },
    {
      id: "tangcharo-2020",
      org: "Tangcharoensathien V. et al.",
      title: "Financial risk protection of Thailand's universal health coverage 1996-2015 (Int J Equity Health 2020)",
      year: "2020",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7507254/",
      note: "OOP fell from 34% (2000) to 11% (2017); catastrophic spending below 3-4%",
      category: "research",
    },
    {
      id: "aquino-2009",
      org: "Aquino R., de Oliveira N.F. & Barreto M.L.",
      title: "Impact of the Family Health Program on Infant Mortality in Brazilian Municipalities (AJPH 2009)",
      year: "2009",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2636620/",
      note: "FHS expansion associated with falling IMR in 73% of municipalities",
      category: "research",
    },
    {
      id: "scielo-parana",
      org: "Revista Paulista de Pediatria (SciELO Brazil)",
      title: "Infant mortality and Family Health Strategy in the 3rd Health Regional of Paraná 2005-2016",
      year: "2021",
      url: "https://www.scielo.br/j/rpp/a/rkFkzpgY3VGNdYFX7RXMvMC/",
      note: "IMR fell from 17.1 to 10.7 as FHS coverage rose from 44% to 66%",
      category: "research",
    },
    {
      id: "cgdev-srilanka",
      org: "Center for Global Development",
      title: "Millions Saved Case 6: Saving Mothers' Lives in Sri Lanka",
      year: "not dated",
      url: "https://www.cgdev.org/sites/default/files/archive/doc/millions/MS_case_6.pdf",
      note: "Salaried public health midwives; 98%+ institutional delivery rate",
      category: "other",
    },
    {
      id: "nandi-mitanin-2014",
      org: "Nandi S. & Schneider H.",
      title: "Addressing social determinants of health: the Mitanin programme in India (Health Policy and Planning 2014)",
      year: "2014",
      url: "https://academic.oup.com/heapol/article/29/suppl_2/ii71/587209",
      note: "70,000 Mitanin CHWs; prototype for national ASHA programme",
      category: "research",
    },
    {
      id: "sundararaman-2012",
      org: "Sundararaman T. et al.",
      title: "Scale-up of community action for health: Mitanin program in Chhattisgarh",
      year: "2012",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3467682/",
      note: "4-5% annual reduction in underweight and 5-6% in stunting in programme areas",
      category: "research",
    },
    {
      id: "who-ihci-2022",
      org: "WHO India",
      title: "India Hypertension Control Initiative: a high impact and low-cost solution",
      year: "2022",
      url: "https://www.who.int/india/news/item/02-06-2022-india-hypertension-control-initiative--a-high-impact-and-low-cost-solution",
      note: "130+ districts; 4 million+ patients enrolled by 2022; BP control 37% to 48%",
      category: "multilateral",
    },
    {
      id: "rtsl-ihci",
      org: "Resolve to Save Lives",
      title: "Evidence from India: progress in hypertension control",
      year: "not dated",
      url: "https://resolvetosavelives.org/timeline/evidence-from-india-demonstrates-progress-in-hypertension-control/",
      note: "OOP for BP drugs fell from 47% to 9% among IHCI enrolled patients",
      category: "other",
    },
    {
      id: "kerala-fhc-2024",
      org: "PMC / authors",
      title: "Monitoring the Family Health Centres in Kerala: Findings from a facility survey",
      year: "2024",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10866279/",
      note: "FHCs: 11,343 vs 9,580 OPD visits/10,000; offered depression and COPD screening",
      category: "research",
    },
    {
      id: "pmjay-hsr-2023",
      org: "Health Systems & Reform",
      title: "Effects of PM-JAY on hospitalizations, OOP expenditures and catastrophic expenditures",
      year: "2023",
      url: "https://www.tandfonline.com/doi/full/10.1080/23288604.2023.2227430",
      note: "13% relative OOPE reduction; 21% relative catastrophic expenditure reduction; shift toward private facilities",
      category: "research",
    },
    {
      id: "pib-pmabhim",
      org: "Press Information Bureau",
      title: "PM-ABHIM scheme update",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2182105",
      note: "₹64,180 crore outlay for 2021-26; 602 critical care blocks; 730 district labs",
      category: "official",
    },
    {
      id: "pib-nursing-2023",
      org: "ANI",
      title: "Cabinet approves 157 new nursing colleges at cost of ₹1,570 crore",
      year: "2023",
      url: "https://aninews.in/news/national/politics/cabinet-approves-proposal-to-establish-157-new-nursing-colleges-at-cost-of-rs-1570-crore20230426200354/",
      note: "~15,700 additional graduates per year; ₹10 crore per college",
      category: "official",
    },
    {
      id: "rajasthan-mndy",
      org: "Govt of Rajasthan",
      title: "Mukhyamantri Nishulk Dava Yojana scheme page",
      year: "not dated",
      url: "https://health.rajasthan.gov.in/content/raj/medical/en/department-of-medical--health---family-welfare/CM-free-drug-plan.html",
      note: "1,795 medicines and surgical consumables free statewide; 60% NHM co-financing",
      category: "official",
    },
    {
      id: "nso-gdp-fy25",
      org: "NSO / PIB",
      title: "Provisional Estimates of Annual GDP 2024-25",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2132688",
      note: "Nominal GDP ₹330.68 lakh crore (FY2024-25)",
      category: "official",
    },
  ],
};
