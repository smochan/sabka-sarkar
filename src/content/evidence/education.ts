// Education & Skills deep-dive brief.
// All numbers are sourced from the education-brief.md research document.
// Every [c:id] marker references a canonical id from synthesis.md Section 1.
// Sources are listed in first-cited order.

import type { SectorDeepDive } from "./types";

export const educationDeepDive: SectorDeepDive = {
  slug: "education",
  sector: "Education & Skills",

  hero: {
    title: "India has solved enrolment. It has not solved learning.",
    sub:
      "Nearly every child in India now enters primary school. [c:udise-2024-25] But fewer than one in four rural government-school children in Grade 3 can read a Grade 2-level text, [c:aser-2024] and the government's own national assessment finds Grade 9 students averaging just 37% on mathematics — fewer than four in ten questions correct. [c:parakh-rs-2024] This brief sets out where India stands, why the learning gap persists, what has demonstrably worked, and a costed five-year plan to move the numbers.",
  },

  indicators: [
    {
      value: "23.4%",
      label:
        "Rural government-school Grade 3 children who can read a Grade 2-level text",
      vintage: "ASER 2024",
      cite: ["aser-2024"],
      context:
        "Up from 16.3% in 2022 and above the pre-COVID figure of 20.9% in 2018 — but still meaning roughly three in four children cannot read at this basic level. [c:aser-2024]",
    },
    {
      value: "33.7%",
      label:
        "Rural Grade 3 children who can do a two-digit subtraction with borrowing",
      vintage: "ASER 2024",
      cite: ["aser-2024"],
      context: "Up from 25.9% in 2022. [c:aser-2024]",
    },
    {
      value: "30.7%",
      label: "Rural Grade 5 children who can do simple division",
      vintage: "ASER 2024",
      cite: ["aser-2024", "aser-2024-trends"],
      context:
        "Up from 25.6% in 2022 and 27.9% in 2018. Among Grade 8 children, only 45.8% could divide in 2024 — essentially flat since 2018 (44.1%). [c:aser-2024-trends]",
    },
    {
      value: "56%",
      label:
        "Children at late-primary age who cannot read and understand a simple age-appropriate text",
      vintage: "World Bank Learning Poverty Brief 2024",
      cite: ["wb-learning-poverty-2024"],
      context:
        "The World Bank's India Learning Poverty Brief uses the latest available pre-pandemic data and summarises the aggregate learning deficit across India. [c:wb-learning-poverty-2024]",
    },
    {
      value: "37%",
      label:
        "Average Grade 9 mathematics score on PARAKH Rashtriya Sarvekshan 2024",
      vintage: "PARAKH RS 2024",
      cite: ["parakh-rs-2024", "parakh-rs-2024-pdf"],
      context:
        "The lowest score of any grade and subject tested. The weakest Grade 9 competencies — fractions, applying percentages, number sets — had correct-answer rates of only 28–31%. [c:parakh-rs-2024-pdf] Each grade was tested on grade-referenced items, so percent-correct figures are not directly comparable across grades.",
    },
    {
      value: "47.5%",
      label: "Net Enrolment Ratio at secondary level",
      vintage: "UDISE+ 2024-25",
      cite: ["udise-2024-25", "efai-udise-ner"],
      context:
        "The Gross Enrolment Ratio at secondary level is 68.5% and at higher secondary 58.4%. The transition rate from middle to secondary is 86.6%. [c:efai-udise-ner]",
    },
    {
      value: "8.2%",
      label: "Secondary-level dropout rate",
      vintage: "UDISE+ 2024-25",
      cite: ["udise-2024-25"],
      context:
        "Fallen from 10.9% in 2022-23. ASER 2024 finds only 7.9% of rural 15–16-year-olds not enrolled, down from 13.1% in 2018. [c:aser-1516-enrol]",
    },
    {
      value: "~10 lakh",
      label: "Vacant teaching posts flagged by the Parliamentary Standing Committee",
      vintage: "PSC Report No. 368, August 2025",
      cite: ["psc-ed-368"],
      context:
        "Secondary-level vacancies rose from 2.34 lakh in 2023-24 to 4.09 lakh in 2024-25. About 1.04 lakh schools still run with a single teacher. [c:efai-single-teacher]",
    },
    {
      value: "23.6%",
      label:
        "Teachers absent on any given school day — last nationally representative measurement",
      vintage: "Muralidharan et al. 2017 (fieldwork c. 2010)",
      cite: ["muralidharan-absence-2017"],
      context:
        "At an estimated fiscal cost of approximately US$1.5 billion per year. No comparable nationally representative re-survey has been conducted since. The measurement gap is itself a governance finding. [c:muralidharan-absence-2017]",
    },
    {
      value: "77.4%",
      label: "Rural 3-year-olds enrolled in some pre-primary institution",
      vintage: "ASER 2024",
      cite: ["aser-preschool-2024"],
      context:
        "Up from 68.1% in 2018. Anganwadis are the largest provider, enrolling over half of all 3- and 4-year-olds. The Saksham Anganwadi & POSHAN 2.0 umbrella received ₹23,100 crore in Budget 2026-27. [c:budget-poshan-2026]",
    },
    {
      value: "~4–4.6%",
      label: "Combined public expenditure on education as a share of GDP",
      vintage: "MoE Budget Expenditure Series; World Bank",
      cite: ["moe-budget-exp", "wb-edu-gdp"],
      context:
        "Below the 6% goal restated by NEP 2020. The Ministry of Education received ₹1.39 lakh crore in Budget 2026-27 (+8.27% year-on-year), of which Samagra Shiksha received ₹42,100 crore. [c:pib-edu-budget-2026] [c:efai-budget-2026]",
    },
    {
      value: "2026-27",
      label:
        "NIPUN Bharat deadline for universal foundational literacy and numeracy by end of Grade 3",
      vintage: "NIPUN Bharat Guidelines 2021",
      cite: ["pib-nipun-2021"],
      context:
        "On ASER 2024 numbers, the country will miss this deadline by a wide margin: only 23.4% of rural government-school Grade 3 children can currently read a Grade 2-level text. [c:aser-2024]",
    },
  ],

  rootCauses: [
    {
      title: "The curriculum outpaces the child",
      body:
        "Indian syllabi assume grade-level proficiency that most children do not have. Teachers are obliged to complete the syllabus rather than teach where children actually are. This is the central diagnosis behind the Teaching at the Right Level literature: six randomised evaluations across seven states found that regrouping children by learning level — not grade — produces effect sizes of up to 0.70 standard deviations in language, roughly enough to move a mid-ranked child into the top quarter of the class. [c:jpal-tarl] [c:banerjee-tarl-2016] The pattern in PARAKH 2024, where older students score further from their own grade-level benchmarks, is consistent with accumulating curriculum mismatch — though, since each grade is tested on its own grade-referenced items, cross-grade figures cannot be read as a single child's trajectory. [c:parakh-rs-2024]",
    },
    {
      title: "Weak accountability for learning, strong accountability for inputs",
      body:
        "The system measures and rewards enrolment, infrastructure, and scheme delivery — all of which have improved [c:udise-2024-25] — rather than learning. Teacher absence of 23.6% persisted despite a decade of large input investments; the same study found monitoring frequency, not salary levels, was the strongest correlate of teacher presence. [c:muralidharan-absence-2017] PARAKH Rashtriya Sarvekshan now exists as a learning assessment, but its results are not yet tied to any consequence for districts or states. [c:parakh-rs-2024]",
    },
    {
      title: "Teacher posting and vacancy concentration, not aggregate shortage",
      body:
        "With over 1 crore teachers nationally and pupil-teacher ratios of 10–21 comfortably within NEP 2020 norms, India's problem is distribution. [c:udise-2024-25] Roughly 10 lakh vacancies are concentrated in a handful of states, [c:psc-ed-368] about 1.04 lakh schools operate with a single teacher, [c:efai-single-teacher] and secondary-level vacancies are surging precisely as enrolment pressure shifts to secondary school. [c:psc-ed-368]",
    },
    {
      title: "The foundation is laid before Grade 1, and that stage is the weakest-funded",
      body:
        "The Global Education Evidence Advisory Panel rates early childhood education among the most cost-effective investments in global education. [c:geeap-2023] India's main early childhood provider is the anganwadi system, whose workers are paid a central honorarium of ₹4,500 per month — static since October 2018 — while simultaneously carrying nutrition, health, and pre-school duties. [c:ai-aw-honorarium] Early childhood education quality is not measured at scale in any official series.",
    },
    {
      title: "Secondary schooling is where poor foundations, costs, and distance compound",
      body:
        "A secondary Net Enrolment Ratio of 47.5% and an 8.2% dropout rate [c:udise-2024-25] [c:efai-udise-ner] reflect children arriving at Grade 9 unable to read fluently and facing higher direct and opportunity costs. The gender gap in device access — 26.9% of rural girls versus 36.2% of boys own a smartphone [c:aser-2024-digital] — and the flat Grade 8 arithmetic figures [c:aser-2024-trends] show the pipeline into secondary is leaky in quality terms even where enrolment holds.",
    },
    {
      title: "Money is below target, but the bigger gap is allocative",
      body:
        "At approximately 4–4.6% of GDP, India spends less than the NEP 2020 benchmark of 6%. [c:moe-budget-exp] [c:wb-edu-gdp] But the absence-cost evidence [c:muralidharan-absence-2017] and the contrast between input growth and flat Grade 8 outcomes [c:aser-2024-trends] suggest that how money is spent — on measurement, remediation, early childhood care, and teacher deployment — binds at least as tightly as how much is spent.",
    },
  ],

  benchmarks: [
    {
      place: "Vietnam",
      scope: "world",
      headline:
        "Vietnamese 15-year-olds scored 469 in mathematics in PISA 2022 — near the OECD average — at a GDP per capita of roughly US$4,100",
      body:
        "In PISA 2022, Vietnamese 15-year-olds scored 469 in mathematics against an OECD average of 472, with 72% reaching baseline proficiency (OECD average 69%). [c:oecd-pisa-vietnam] Vietnam's GDP per capita was roughly US$4,100 in 2022. [c:wb-vietnam-gdp] The World Bank's analysis credits high minimum teacher standards, near-universal primary and lower-secondary completion, and sustained, focused public investment under the 2005 Education Law. [c:wb-vietnam-edu-2020] Transferability caveat: careful econometric work finds observable school and household factors explain at most roughly 30% of Vietnam's outperformance. [c:dang-vietnam-2023] Culture, exam selection, and system coherence matter. India cannot simply copy inputs. The replicable core is teacher professional standards combined with relentless focus on universal basics.",
    },
    {
      place: "Sobral, Brazil",
      scope: "world",
      headline:
        "Ranked 1,366th of 5,570 Brazilian municipalities on education in 2005; ranked first in both primary and lower-secondary by 2017",
      body:
        "Sobral, a poor municipality in Ceará state, moved from near the bottom to the top of Brazil's national IDEB education index within twelve years. [c:wb-sobral-2020] [c:rise-sobral] The documented approach: assess every child's reading level twice a year and use results formatively; give teachers structured lesson plans, aligned materials, and continuous coaching; appoint head teachers on merit; and — at state level — Ceará tied a share of inter-municipal tax transfers to learning results rather than to inputs. [c:wb-ceara-blog-2020] Transferability caveat: Sobral is a municipality of roughly 200,000 people with two decades of political continuity. The relevant Indian analogue is the district, and the incentive design — results-linked transfers — is the most portable piece.",
    },
    {
      place: "Tamil Nadu",
      scope: "india",
      headline:
        "Post-COVID volunteer remediation programme Illam Thedi Kalvi reached ~96 lakh children and accounted for roughly 24% of cohort-level learning recovery",
      body:
        "A panel study of approximately 19,000 rural Tamil Nadu children measured COVID learning losses of roughly 0.70 standard deviations in mathematics and 0.34 SD in language by December 2021, then found two-thirds of the deficit recovered within six months of school reopening. [c:singh-itk-2022] The state's volunteer-run after-school remediation programme, Illam Thedi Kalvi, accounted for approximately 24% of cohort-level recovery. It deployed 1.65–1.8 lakh village volunteers, reached approximately 96 lakh children over its run, and cost ₹660.35 crore across 2021-22 to 2024-25. [c:dtnext-itk-2025] The recovery was progressive: weaker students gained more. Transferability caveat: the NBER study attributes only 24% of recovery to this programme; most recovery came from school reopening itself. Scaling this model to a non-crisis setting may yield smaller returns than the post-COVID episode suggests.",
    },
    {
      place: "Delhi",
      scope: "india",
      headline:
        "Government-school reform with rising board pass rates and reported foundational-skills gains in grades 6–9 — interpret with care",
      body:
        "Independent reviews document the 2015–20 reform package in Delhi — infrastructure improvement, school leadership empowerment, a foundational-skills push, and teacher development — alongside rising Class 12 pass rates (88% in 2014-15 to 97% in 2023-24) and reported jumps in grade-level reading and numeracy in grades 6–9 during 2018-19. [c:brookings-delhi-2023] [c:ednext-delhi] Honesty caveat: there is no randomised or quasi-experimental evaluation of this reform package. Board pass-rate gains partly reflect decisions about who is allowed to sit the exam, and the strongest verified gains are from programme-administered assessments, not independent surveys. This case is treated here as suggestive evidence that visible state commitment combined with a foundational-skills mission can shift a large urban system — not as proof of a specific causal package.",
    },
  ],

  interventions: [
    {
      title:
        "A second-generation FLN mission: NIPUN reset with Teaching at the Right Level built in",
      problem:
        "76.6% of rural government-school Grade 3 children cannot read a Grade 2-level text (ASER 2024). [c:aser-2024] NIPUN Bharat committed India to universal foundational literacy and numeracy by end of Grade 3 by 2026-27; [c:pib-nipun-2021] on current numbers, the country will miss this deadline by a wide margin.",
      intervention:
        "We propose resetting NIPUN with a 2030-31 horizon and making intensive learning camps the primary engine — Tamil Nadu ITK-style, volunteer-and-teacher-run camps for the lowest-performing third of children in Grades 3–8 — reinforced by a timetabled level-based regrouping hour in Grades 2–5 during the school day. Camps are placed first because in the RCT record the intensive camp variant delivered up to 0.70 standard deviations of gain while the mandated in-school variant delivered only 0.15 SD. [c:banerjee-tarl-2016] The in-school hour serves as reinforcement, not as the primary lever.",
      mechanism:
        "Instruction at the child's actual learning level is the single most consistently replicated lever in the randomised controlled trial literature: 0.07–0.70 SD across six J-PAL/Pratham trials in seven states. [c:jpal-tarl] [c:banerjee-tarl-2016] Tamil Nadu showed the volunteer variant works at state scale in a post-COVID setting. [c:singh-itk-2022] [c:dtnext-itk-2025] GEEAP rates structured, targeted instruction among the few 'great buys' in global education. [c:geeap-2023]",
      target: {
        text:
          "Rural government-school Grade 3 reading: 23.4% (ASER 2024) to approximately 40% by ASER 2030 as the central estimate, with 50% or more as the stretch target under high-fidelity implementation. Grade 5 division: 30.7% (ASER 2024) to 45% or more centrally, 55% or more under stretch conditions. [c:aser-2024] [c:aser-2024-trends]",
        baseline:
          "23.4% Grade 3 reading, 30.7% Grade 5 division — ASER 2024. [c:aser-2024]",
      },
      owner:
        "Department of School Education and Literacy (DoSEL) sets the framework inside Samagra Shiksha; SCERTs adapt materials; districts run camps; civil-society organisations train volunteers; panchayats recruit them.",
      cost:
        "Tamil Nadu's ITK cost ₹660.35 crore across 2021-22 to 2024-25 against cumulative reach of approximately 96 lakh children — roughly ₹690 per child cumulatively. [c:dtnext-itk-2025] Government-school enrolment in Grades 2–5 is approximately 4–4.5 crore children. [c:udise-2024-25] [c:udise-grades-enrol] At ₹600–1,000 per child-year: indicative cost of ₹3,000–5,000 crore per year, fundable within Samagra Shiksha's ₹42,100 crore budget estimate 2026-27 [c:efai-budget-2026] plus a top-up.",
      risks:
        "TaRL effects collapse when implementation is nominal: the Haryana in-school variant delivered only 0.15 SD versus 0.70 SD in well-run camps. [c:banerjee-tarl-2016] Risks include volunteer churn and narrowing teaching to tested basics. Requires the measurement architecture proposed in Intervention 4 to detect and correct implementation failure early.",
    },
    {
      title:
        "Fill vacancies where they bind; manage presence, not just posts",
      problem:
        "Approximately 10 lakh vacant posts are concentrated in a few states; secondary-level vacancies rose from 2.34 lakh to over 4.09 lakh between 2023-24 and 2024-25. [c:psc-ed-368] About 1.04 lakh schools still run with a single teacher. [c:efai-single-teacher] Teacher absence was 23.6% in the last nationally representative measurement — a fiscal cost of approximately US$1.5 billion per year. [c:muralidharan-absence-2017]",
      intervention:
        "We propose a centrally sponsored, five-year matched grant for deficit states to recruit approximately 5 lakh regular teachers — priority given to single-teacher schools and secondary subject teachers — conditional on (a) transparent, rule-based posting and transfer systems and (b) digital-plus-physical inspection regimes with published school-level presence data. We propose regular recruitment, not contractual hiring: the Parliamentary Standing Committee documents how contractual hiring erodes reservation compliance and career structure. [c:psc-ed-368]",
      mechanism:
        "The Andhra Pradesh contract-teacher RCT shows extra adults in classrooms raise learning by +0.16/0.15 SD in mathematics and language over two years, largely through smaller effective class sizes, and that lower-paid contract teachers were no less effective than regular teachers. [c:muralidharan-contract-2013] On governance: in the national absence study, villages with regular inspections had teacher absence 6.5 percentage points lower than the 23.6% average — an association in observational data, not an experimental result. [c:muralidharan-absence-2017]",
      target: {
        text:
          "Vacancies from approximately 10 lakh to fewer than 3 lakh; single-teacher schools from 1.04 lakh to fewer than 25,000; published absence rate in an independent re-survey from 23.6% (c. 2010 baseline) to below 15%. [c:psc-ed-368] [c:efai-single-teacher] [c:muralidharan-absence-2017]",
        baseline:
          "~10 lakh vacancies (PSC Report No. 368, August 2025); 1.04 lakh single-teacher schools (UDISE+ 2024-25); 23.6% absence rate (fieldwork c. 2010). [c:psc-ed-368] [c:efai-single-teacher] [c:muralidharan-absence-2017]",
      },
      owner:
        "State governments handle recruitment (a state subject in practice); MoE/DoSEL designs the matched grant; District Institutes of Education and Training (DIETs) handle induction.",
      cost:
        "Bihar's 2023 BPSC recruitment paid basic salaries of ₹25,000 per month for primary teachers and ₹28,000–32,000 for higher grades — roughly ₹4.5–6 lakh per teacher-year gross at the low end of state pay scales. [c:careers360-bihar-teachers] Vacancy-concentrated states may run higher. Five lakh teachers: indicative cost of ₹25,000–50,000 crore per year recurring — the Bihar-scale floor to a higher-scale ceiling — phased in over five years, shared between Centre and states.",
      risks:
        "This is the plan's dominant recurring cost and is effectively irreversible once salaries are committed. Class-size effects on learning are modest unless paired with pedagogy change. [c:muralidharan-contract-2013] Teacher transfer-and-posting reform has repeatedly stalled under political pressure. Tie tranche release to posting-reform milestones to manage sequencing risk.",
    },
    {
      title: "Make the anganwadi a real pre-school",
      problem:
        "Pre-primary enrolment is now 77.4% at age 3 (ASER 2024), [c:aser-preschool-2024] but the dominant provider — the anganwadi — has one worker paid ₹4,500 per month simultaneously managing nutrition, health, and pre-school duties. [c:ai-aw-honorarium] Early childhood education quality is not measured at scale in any official series.",
      intervention:
        "We propose phasing in a second, ECCE-dedicated worker (a Balvatika educator) in the 2.9 lakh anganwadis already co-located with primary schools; [c:mwcd-colocation-2025] introducing a structured daily activity calendar and play materials; and establishing a public ECCE quality-assessment cycle under PARAKH.",
      mechanism:
        "A randomised evaluation across 640 Tamil Nadu anganwadis found that adding a second worker dedicated to pre-school education roughly doubled instructional time and raised mathematics scores by 0.29 standard deviations and language scores by 0.46 SD after 18 months, with lower rates of stunting and severe malnutrition; the authors' cost-benefit analysis found benefits well above costs under conservative assumptions. [c:tn-anganwadi-rct] GEEAP independently rates pre-primary education among the highest-return investments in global education. [c:geeap-2023] Foundational deficits visible at Grade 3 originate before Grade 1; remediating later is costlier than preventing.",
      target: {
        text:
          "First national ECCE quality baseline under PARAKH published by 2028; at least 60% of sampled co-located Balvatikas meeting structured daily-activity benchmarks by 2030 (we propose this benchmark — no official one exists yet). Secondary indicator: age-3 pre-primary enrolment from 77.4% (ASER 2024) to 90% or more by ASER 2030. [c:aser-preschool-2024]",
        baseline:
          "77.4% age-3 pre-primary enrolment; no official ECCE quality measure — ASER 2024. [c:aser-preschool-2024]",
      },
      owner:
        "Ministry of Women and Child Development (Saksham Anganwadi/POSHAN 2.0) jointly with DoSEL for co-located Balvatikas; states hire educators; PARAKH/NCERT builds the assessment.",
      cost:
        "The Saksham Anganwadi & POSHAN 2.0 umbrella received ₹23,100 crore in Budget 2026-27. [c:budget-poshan-2026] Phased across 2.9 lakh co-located anganwadis: [c:mwcd-colocation-2025] educators at approximately ₹10,000 per month amounts to roughly ₹3,500 crore per year at full coverage, plus training and materials — indicative cost of ₹4,000–6,000 crore per year.",
      risks:
        "Two-worker models can blur accountability. Ministry of Women and Child Development and Ministry of Education coordination has historically been weak. Honorarium-based hiring without social security — the current anganwadi worker model [c:ai-aw-honorarium] — invites attrition and industrial action.",
    },
    {
      title:
        "Independent measurement plus Ceará-style performance-linked transfers",
      problem:
        "No consequence currently attaches to learning data. PARAKH Rashtriya Sarvekshan 2024 exists but its results feed no allocation decision. [c:parakh-rs-2024] The one robust governance correlate of teacher effort in the Indian evidence is being monitored. [c:muralidharan-absence-2017]",
      intervention:
        "We propose (a) a legally mandated annual, independent, household-based foundational literacy and numeracy survey — ASER-style, government-funded but third-party-run — reported at district level; and (b) converting 10–15% of Samagra Shiksha into a performance window paying states and districts for independently measured gains (not levels, which would punish poor states), modelled on Ceará's results-linked transfers. [c:wb-ceara-blog-2020] The window is funded by shrinking formula-based allocations; some states will receive less than under the status quo in any given year.",
      mechanism:
        "Sobral and Ceará are the best-documented cases suggesting that frequent child-level assessment used formatively, plus money tied to results, can move a system from near the bottom to the top within roughly 15 years. [c:wb-sobral-2020] [c:rise-sobral] [c:wb-ceara-blog-2020] Household-based measurement is far harder to game than school-administered tests, though not immune: enumerator shirking, sample manipulation, and coaching to the survey tool all become risks once money attaches, so independent fieldwork audits are part of the design.",
      target: {
        text:
          "Annual district FLN report cards published from 2027-28 onwards; at least ₹5,000 crore per year of Samagra Shiksha flowing through the performance window by 2029-30, against a total Samagra Shiksha budget estimate of ₹42,100 crore (BE 2026-27). [c:efai-budget-2026]",
        baseline:
          "No district-level FLN survey series exists; no performance-linked component in Samagra Shiksha as of 2026-27. [c:parakh-rs-2024]",
      },
      owner:
        "DoSEL legislates the survey mandate; PARAKH (NCERT) sets standards; an independent consortium of universities and civil-society organisations executes fieldwork; the Samagra Shiksha Project Approval Board administers the performance window.",
      cost:
        "Reliable public cost data for a national household learning survey is unavailable. For scale reference, PARAKH RS 2024 assessed 21.15 lakh students within NCERT's existing budget, [c:parakh-rs-2024-pdf] and ASER surveys approximately 6.5 lakh children annually with volunteer enumerators. [c:aser-2024] We budget a conservative ₹300–500 crore per year placeholder. The performance window reallocates existing Samagra Shiksha funds — it does not add to the aggregate spend.",
      risks:
        "Measurement-linked money invites manipulation pressure; the design stands or falls on the survey body's independence. Gain-based payments can still disadvantage states hit by shocks (floods, elections, administrative disruption). Because the window is carved out of existing formula allocations, some states lose money in bad years; a hold-harmless floor is proposed for years 1–2. This is the plan's riskiest and most novel component: Ceará's model rests on a single, uncontrolled case from one Brazilian state. [c:wb-sobral-2020] [c:rise-sobral] No Indian state has run results-linked education transfers.",
    },
    {
      title: "Hold the line at secondary",
      problem:
        "Secondary Net Enrolment Ratio is 47.5%, Gross Enrolment Ratio 68.5%, and dropout 8.2% (UDISE+ 2024-25). [c:udise-2024-25] [c:efai-udise-ner] Vacancies are growing fastest at secondary level. [c:psc-ed-368] Girls face a device and ownership gap. [c:aser-2024-digital]",
      intervention:
        "We propose a targeted secondary completion package in approximately 200 lowest-transition districts (identified from UDISE+ transition tables): subject-teacher recruitment drawn from Intervention 2's pool, transport or bicycle and conditional scholarship support for girls, and remedial bridge courses at Grade 9 entry using Intervention 1's TaRL infrastructure.",
      mechanism:
        "Dropout at secondary reflects compounding academic failure plus direct costs. Remediation addresses the academic failure — Tamil Nadu's ITK recovery effects were largest for weaker students. [c:singh-itk-2022] Bihar's cycle programme — bicycle funds for every girl entering Grade 9 — raised girls' age-appropriate secondary enrolment by 32% (5.2 percentage points) and narrowed the gender enrolment gap by 40% in a rigorous quasi-experimental evaluation, at lower cost than comparable conditional cash transfers. [c:bihar-cycle-eval] India's fall in 15–16-year-old non-enrolment (13.1% to 7.9%, ASER 2018 to 2024 [c:aser-1516-enrol]) shows that demand responds when access and support improve.",
      target: {
        text:
          "In approximately 200 programme districts: middle-to-secondary transition rate raised to at least the current national average of 86.6%, and district secondary dropout below 5%, by 2030-31. National secondary NER rising from 47.5% toward 60% is a whole-plan aspiration that depends on Interventions 1, 2, and 5 working together — not a costed projection from this intervention alone. [c:udise-2024-25] [c:efai-udise-ner]",
        baseline:
          "Secondary NER 47.5%, GER 68.5%, dropout 8.2% — UDISE+ 2024-25; national middle-to-secondary transition rate 86.6%. [c:udise-2024-25] [c:efai-udise-ner]",
      },
      owner:
        "States via Samagra Shiksha's secondary component; MoE sets the district list; Panchayati Raj institutions verify beneficiary targeting.",
      cost:
        "Largely composed of cost lines from Interventions 1 and 2. Incremental scholarships and transport support in 200 districts: indicative cost of ₹3,000–4,000 crore per year. Cost basis is an extension of existing Samagra Shiksha and National Means-cum-Merit-type per-student support rates; precise unit costs vary by state.",
      risks:
        "Cash and transport support without learning recovery produces enrolled-but-not-learning adolescents — the current Grade 8 arithmetic data illustrates this risk. [c:aser-2024-trends] Conditionality enforcement is administratively heavy. This intervention targets girls for the transport component because the evidence and the data both show the gap runs against them — while acknowledging that poor boys facing the same distance and cost barriers are excluded from this component.",
    },
  ],

  overallCost: {
    title: "What the five-year plan costs",
    body: [
      "Indicative incremental public cost at steady state (year 3 onwards), over and above current budgets: Intervention 1 (FLN and TaRL at scale) ₹3,000–5,000 crore per year; Intervention 2 (teacher recruitment and governance) ₹25,000–50,000 crore per year; Intervention 3 (ECCE and anganwadi upgrade) ₹4,000–6,000 crore per year; Intervention 4 (measurement and performance window) ₹300–500 crore per year, with the window reallocating existing Samagra Shiksha funds; Intervention 5 (secondary completion package) ₹3,000–4,000 crore per year. Total incremental: approximately ₹35,000–65,000 crore per year.",
      "For scale: nominal GDP is ₹357.14 lakh crore in FY 2025-26 [c:mospi-fae-fy26] and Budget 2026-27 assumes approximately 10% nominal growth. [c:prs-budget-analysis-2026] The plan's steady-state increment is roughly 0.09–0.17% of GDP per year — against current combined public education spending of approximately 4–4.6% of GDP [c:moe-budget-exp] [c:wb-edu-gdp] and the NEP 2020 aspiration of 6% of GDP. The Department of School Education & Literacy received ₹83,562 crore in Budget 2026-27. [c:efai-budget-2026]",
      "This plan consumes well under a fifth of the distance between current spending and the NEP target. Roughly 70–76% of the total at the midpoint — the teacher salary line — would be incurred anyway if states comply with existing Right to Education norms on vacancies. [c:psc-ed-368] [c:efai-single-teacher] The Centre-state split matters: most recurring costs fall on states, which already carry roughly three-quarters of public education expenditure. [c:moe-budget-exp]",
    ],
  },

  unknowns: [
    "ASER and PARAKH disagree in level and cannot be reconciled exactly. ASER is a rural household survey using a floor-level tool; PARAKH is a school-based, curriculum-referenced assessment. [c:aser-2024] [c:parakh-rs-2024] Both show low learning, but neither gives a single true national number; our Grade 3 baseline of 23.4% is government-schools-only and rural-only.",
    "TaRL's headline effects come from well-supervised implementations. The 0.70 SD result is from intensive UP camps; the in-school Haryana variant delivered 0.15 SD. [c:banerjee-tarl-2016] At all-India scale, fidelity will be lower than in any RCT. The Intervention 1 central estimate of approximately 40% Grade 3 reading by 2030 assumes effect sizes nearer the lower bound; the 50% stretch target assumes camp-level fidelity at national scale. Both estimates could still be too optimistic.",
    "The Tamil Nadu COVID recovery attribution is partial. The NBER study attributes roughly 24% of recovery to Illam Thedi Kalvi; most recovery came from school reopening itself. [c:singh-itk-2022] Scaling ITK-style programmes to a non-crisis setting may yield smaller returns than the post-COVID episode suggests.",
    "The teacher-absence baseline is dated. The 23.6% figure comes from fieldwork around 2010. [c:muralidharan-absence-2017] Absence may have changed with smartphone-based monitoring; no comparable nationally representative re-survey exists. Commissioning one is part of Intervention 4.",
    "Delhi's reforms lack causal identification. Board pass-rate gains can reflect decisions about who is allowed to sit the exam; the assessments showing reading gains were programme-administered, not independent. [c:brookings-delhi-2023] [c:ednext-delhi] We use Delhi as suggestive evidence, not proof — and the same caution applies to UP's ASER surge, which has not been independently decomposed into NIPUN effects versus post-COVID recovery effects. [c:aser-2024] [c:ideasforindia-aser]",
    "Vietnam's lesson may be smaller than it looks. Up to 70% of Vietnam's outperformance on PISA is unexplained by observable policy variables. [c:dang-vietnam-2023] Importing teacher professional standards may not import the results.",
    "Cost lines are indicative, not budget-grade. Teacher salary costs vary approximately two-fold across states — which is why Intervention 2 carries a ₹25,000–50,000 crore range rather than a point estimate. [c:careers360-bihar-teachers] The measurement line has no reliable public cost benchmark. ECCE educator costing assumes an honorarium model we simultaneously criticise. A detailed project report-grade costing is the first task of implementation.",
    "Performance-linked transfers rest on one case. Intervention 4's incentive design is supported by a single Brazilian state's experience, documented in case studies rather than controlled evaluations. [c:wb-sobral-2020] [c:rise-sobral] [c:wb-ceara-blog-2020] No Indian state has run results-linked education transfers; India's Centre-state fiscal politics differ sharply from Ceará's intra-state setting.",
    "The strongest counterargument: India's system may fail not for lack of programmes but for lack of state capacity to run any programme with fidelity. If that is right, adding five new programmes makes things worse, and the most defensible minimal version of this plan is the measurement-plus-incentives layer alone — Intervention 4 — letting states discover their own methods as Ceará's municipalities did. [c:wb-ceara-blog-2020] The RCT evidence on TaRL [c:jpal-tarl] and the ITK scale-up [c:singh-itk-2022] shows that Indian states can execute pedagogy reform, but a reasonable reader could weigh that record more pessimistically.",
    "Demand-side unknowns. Falling total enrolment (24.80 crore to 24.69 crore from 2023-24 to 2024-25 [c:udise-2024-25] [c:careers360-udise]) partly reflects demographic decline and data cleaning. We do not know how fertility-driven cohort shrinkage will change optimal school networks over the plan period — a genuinely contested trade-off we have not costed.",
  ],

  sources: [
    {
      id: "aser-2024",
      org: "ASER Centre",
      title: "Annual Status of Education Report (Rural) 2024: National Findings",
      year: "2025",
      url: "https://asercentre.org/wp-content/uploads/2022/12/ASER-2024-National-findings.pdf",
      note: "Primary source for all ASER 2024 foundational learning statistics",
      category: "official",
    },
    {
      id: "udise-2024-25",
      org: "Ministry of Education / PIB",
      title: "UDISE+ 2024-25 Report on School Education of India",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2161543",
      note: "Enrolment, teacher workforce, dropout, and GER/NER figures",
      category: "official",
    },
    {
      id: "parakh-rs-2024",
      org: "PARAKH / NCERT",
      title: "PARAKH Rashtriya Sarvekshan 2024: National Report",
      year: "2025",
      url: "https://parakh.ncert.gov.in/prs-reports-2024",
      note: "Survey conducted 4 December 2024; 21.15 lakh students in 74,229 schools",
      category: "official",
    },
    {
      id: "parakh-rs-2024-pdf",
      org: "PARAKH / NCERT",
      title: "PARAKH Rashtriya Sarvekshan 2024: National Report PDF",
      year: "2025",
      url: "https://parakh.ncert.gov.in/sites/default/files/2025-07/REPORT_India_IND.pdf",
      note: "Full report with grade-level competency percentages",
      category: "official",
    },
    {
      id: "wb-learning-poverty-2024",
      org: "World Bank",
      title: "India Learning Poverty Brief",
      year: "2024",
      url: "https://documents1.worldbank.org/curated/en/099090524113131044/pdf/P17920918dbd990091900117c6f4b92d182.pdf",
      note: "April 2024 update; uses latest available pre-pandemic data",
      category: "multilateral",
    },
    {
      id: "aser-2024-trends",
      org: "ASER Centre",
      title: "ASER 2024 national and trends-over-time tables",
      year: "2025",
      url: "https://asercentre.org/aser-2024/",
      note:
        "Includes Grade 8 arithmetic trends (2018–2024) and Grade 5 division series",
      category: "official",
    },
    {
      id: "efai-udise-ner",
      org: "Education for All in India",
      title:
        "UDISE+ 2024-25 enrolment ratios and universal secondary education",
      year: "2025",
      url: "https://educationforallinindia.com/what-does-udise-2024-25-enrolment-ratios-reveal-about-universal-secondary-education-in-india/",
      note: "Secondary NER 47.5% and transition-rate figures",
      category: "research",
    },
    {
      id: "aser-1516-enrol",
      org: "ASER Centre",
      title: "ASER 2024: enrolment of 15–16-year-olds",
      year: "2025",
      url: "https://asercentre.org/aser-2024/",
      note: "Non-enrolment fell from 13.1% (2018) to 7.9% (2024)",
      category: "official",
    },
    {
      id: "psc-ed-368",
      org: "Parliamentary Standing Committee on Education",
      title:
        "Report No. 368: Review of Functioning of NCTE and Initiatives Taken to Support Training of Teachers in light of NEP 2020",
      year: "2025",
      url: "https://educationforallinindia.com/wp-content/uploads/2025/08/368-Report-of-PSC-on-Review-of-NCTE-initiatives-taken-towards-Capacity-building-of-teachers-NEP-2020.pdf",
      note:
        "Tabled August 2025; ~10 lakh vacancies, secondary vacancies rose to 4.09 lakh",
      category: "official",
    },
    {
      id: "efai-single-teacher",
      org: "Education for All in India",
      title: "Single-teacher schools: UDISE+ 2024-25 analysis",
      year: "2025",
      url: "https://educationforallinindia.com/single-teacher-schools-schools-without-enrolment-analysis-of-udiseplus-2024-25/",
      note: "1.04 lakh single-teacher schools reported",
      category: "research",
    },
    {
      id: "muralidharan-absence-2017",
      org: "Muralidharan K., Das J., Holla A., Mohpal A.",
      title:
        "The Fiscal Cost of Weak Governance: Evidence from Teacher Absence in India",
      year: "2017",
      url: "https://www.nber.org/papers/w20299",
      note:
        "NBER WP 20299; Journal of Public Economics 2017; fieldwork c. 2010; 23.6% absence rate; US$1.5bn fiscal cost",
      category: "research",
    },
    {
      id: "aser-preschool-2024",
      org: "ASER Centre",
      title: "Pre-school years in India: progress since NEP 2020",
      year: "2025",
      url: "https://asercentre.org/wp-content/uploads/2022/12/The-pre-school-years-in-India_Progress-since-NEP-2020_Rukmini-Banerji.pdf",
      note:
        "77.4% of rural 3-year-olds enrolled in pre-primary institutions; anganwadi as primary provider",
      category: "official",
    },
    {
      id: "budget-poshan-2026",
      org: "Union Budget 2026-27",
      title: "Saksham Anganwadi & POSHAN 2.0 budget estimate 2026-27",
      year: "2026",
      url: "https://www.indiabudget.gov.in/",
      note:
        "₹23,100 crore BE 2026-27 vs ₹21,960 crore BE 2025-26; accessed via Expenditure Profile / Demands for Grants",
      category: "official",
    },
    {
      id: "ai-aw-honorarium",
      org: "Accountability Initiative / Centre for Policy Research",
      title: "Mission Saksham Anganwadi and POSHAN 2.0 Budget Briefs 2023",
      year: "2023",
      url: "https://accountabilityindia.in/wp-content/uploads/2023/02/Mission-Saksham-Anganwadi-and-Poshan-2.0-Budget-Briefs-2023.pdf",
      note:
        "Anganwadi worker central honorarium ₹4,500/month; static since October 2018",
      category: "research",
    },
    {
      id: "aser-2024-digital",
      org: "ASER Centre",
      title: "ASER 2024 Beyond Basics digital-access module",
      year: "2025",
      url: "https://asercentre.org/aser-2024/",
      note:
        "Smartphone ownership: girls 26.9%, boys 36.2%; 57% used smartphone for educational activity",
      category: "official",
    },
    {
      id: "moe-budget-exp",
      org: "Ministry of Education",
      title:
        "Analysis of Budgeted Expenditure on Education 2019-20 to 2021-22",
      year: "2022",
      url: "https://www.education.gov.in/sites/upload_files/mhrd/files/statistics-new/budget_exp_2020_22.pdf",
      note: "Centre plus states public education expenditure as % of GDP",
      category: "official",
    },
    {
      id: "wb-edu-gdp",
      org: "World Bank",
      title: "Government expenditure on education, total (% of GDP) — India",
      year: "2026",
      url: "https://data.worldbank.org/indicator/SE.XPD.TOTL.GD.ZS?locations=IN",
      note: "Data series accessed June 2026",
      category: "multilateral",
    },
    {
      id: "pib-edu-budget-2026",
      org: "Press Information Bureau",
      title: "Union Education Minister on Budget 2026-27",
      year: "2026",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2221734",
      note:
        "Ministry of Education total allocation ₹1.39 lakh crore, +8.27% year-on-year",
      category: "official",
    },
    {
      id: "efai-budget-2026",
      org: "Education for All in India",
      title: "School Education in the Union Budget 2026",
      year: "2026",
      url: "https://educationforallinindia.com/school-education-in-the-union-budget-2026/",
      note:
        "DoSEL ₹83,562 crore; Samagra Shiksha ₹42,100 crore; PM POSHAN ₹12,750 crore; PM SHRI ₹7,500 crore",
      category: "research",
    },
    {
      id: "pib-nipun-2021",
      org: "Ministry of Education / PIB",
      title: "NIPUN Bharat Guidelines",
      year: "2021",
      url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2021/jul/doc20217531.pdf",
      note:
        "Foundational literacy and numeracy for every Grade 3 child by 2026-27; launched July 2021",
      category: "official",
    },
    {
      id: "jpal-tarl",
      org: "J-PAL",
      title: "Teaching at the Right Level to improve learning (case study)",
      year: "2016",
      url: "https://www.povertyactionlab.org/case-study/teaching-right-level-improve-learning",
      note: "Synthesis of six RCTs across seven Indian states; 2001–2016",
      category: "research",
    },
    {
      id: "banerjee-tarl-2016",
      org: "Banerjee A., Banerji R., Berry J., Duflo E. et al.",
      title:
        "Mainstreaming an Effective Intervention: Evidence from Randomized Evaluations of TaRL in India",
      year: "2016",
      url: "https://www.nber.org/papers/w22746",
      note:
        "NBER WP 22746; UP camps +0.70 SD language; Haryana in-school +0.15 SD",
      category: "research",
    },
    {
      id: "geeap-2023",
      org: "Global Education Evidence Advisory Panel / World Bank",
      title:
        "Cost-Effective Approaches to Improve Global Learning (Smart Buys) 2023",
      year: "2023",
      url: "https://www.worldbank.org/en/news/press-release/2023/05/09/education-smart-buys-cost-effectively-supporting-teachers-and-parents-can-lead-to-significant-learning-improvements",
      note:
        "Rates structured pedagogy and TaRL-style instruction as great buys; rates hardware-only tech distribution as a bad buy",
      category: "multilateral",
    },
    {
      id: "oecd-pisa-vietnam",
      org: "OECD",
      title: "PISA 2022 Results: Country Notes — Viet Nam",
      year: "2023",
      url: "https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/viet-nam_a727c3a8-en.html",
      note: "Vietnam mathematics 469 vs OECD average 472; 72% at baseline proficiency",
      category: "multilateral",
    },
    {
      id: "wb-vietnam-gdp",
      org: "Macrotrends / World Bank",
      title: "Vietnam GDP per capita",
      year: "2022",
      url: "https://www.macrotrends.net/global-metrics/countries/vnm/vietnam/gdp-per-capita",
      note: "US$4,116 in 2022",
      category: "multilateral",
    },
    {
      id: "wb-vietnam-edu-2020",
      org: "World Bank",
      title: "Vietnam's Human Capital: Education Success and Future Challenges",
      year: "2020",
      url: "https://documents1.worldbank.org/curated/en/261401596433155112/pdf/Vietnam-s-Human-Capital-Education-Success-and-Future-Challenges.pdf",
      note: "Analysis of teacher standards, completion rates, and public investment under 2005 Education Law",
      category: "multilateral",
    },
    {
      id: "dang-vietnam-2023",
      org: "Dang H.-A., Glewwe P., Lee J., Vu K.",
      title:
        "What Explains Vietnam's Exceptional Performance in Education Relative to Other Countries?",
      year: "2023",
      url: "https://www.sciencedirect.com/science/article/pii/S027277572300081X",
      note:
        "Economics of Education Review 2023; observables explain at most ~30% of Vietnam's outperformance",
      category: "research",
    },
    {
      id: "wb-sobral-2020",
      org: "World Bank",
      title:
        "Achieving World-Class Education in Adverse Socioeconomic Conditions: The Case of Sobral in Brazil",
      year: "2020",
      url: "https://openknowledge.worldbank.org/handle/10986/34150",
      note: "Sobral ranked 1,366th in 2005 IDEB; first in both levels by 2017",
      category: "multilateral",
    },
    {
      id: "rise-sobral",
      org: "RISE Programme",
      title: "Responsive Reforms Can Lead to Learning Gains: The Sobral Turnaround",
      year: "2020",
      url: "https://riseprogramme.org/blog/responsive-reforms-can-lead-learning-gains-how-brazil-municipality-sobral-turned-around-its-education-system",
      note: "Documents Sobral's rank at 1,366th in 2005 and path to first",
      category: "research",
    },
    {
      id: "wb-ceara-blog-2020",
      org: "World Bank blog",
      title:
        "There is no magic: The formula for Brazil's Ceará and Sobral success to reduce learning poverty",
      year: "2020",
      url: "https://blogs.worldbank.org/en/education/there-no-magic-formula-brazils-ceara-and-sobral-success-reduce-learning-poverty",
      note: "Results-linked state transfers to municipalities; formative assessment and coaching",
      category: "research",
    },
    {
      id: "singh-itk-2022",
      org: "Singh A., Romero M., Muralidharan K.",
      title: "COVID-19 Learning Loss and Recovery: Panel Data Evidence from India",
      year: "2022",
      url: "https://www.nber.org/papers/w30552",
      note:
        "NBER WP 30552; ~19,000 rural TN children; loss 0.70 SD maths / 0.34 SD language; two-thirds recovered in 6 months; ITK ~24% of recovery",
      category: "research",
    },
    {
      id: "dtnext-itk-2025",
      org: "DT Next",
      title: "Illam Thedi Kalvi scheme reached nearly 96 lakh students",
      year: "2025",
      url: "https://www.dtnext.in/news/tamilnadu/illam-thedi-kalvi-scheme-reached-nearly-96-l-students-state-854242",
      note:
        "₹660.35 crore allocated 2021-22 to 2024-25; 1.65 lakh volunteers; state-reported figures",
      category: "other",
    },
    {
      id: "brookings-delhi-2023",
      org: "Brookings Institution",
      title: "State-led education reform in Delhi, India",
      year: "2023",
      url: "https://www.brookings.edu/wp-content/uploads/2023/02/Brief_State-led-education-reform-in-Delhi-India_FINAL-1.pdf",
      note: "Policy brief; Class 12 pass-rate trend and reform package documentation",
      category: "research",
    },
    {
      id: "ednext-delhi",
      org: "Education Next",
      title: "Inside the Delhi Education Revolution",
      year: "2023",
      url: "https://www.educationnext.org/inside-the-delhi-education-revolution/",
      note: "Independent reportage and review of programme-administered assessment results",
      category: "research",
    },
    {
      id: "muralidharan-contract-2013",
      org: "Muralidharan K. & Sundararaman V.",
      title: "Contract Teachers: Experimental Evidence from India",
      year: "2013",
      url: "https://www.nber.org/papers/w19440",
      note:
        "NBER WP 19440; Andhra Pradesh RCT; +0.16/0.15 SD mathematics/language over two years",
      category: "research",
    },
    {
      id: "careers360-bihar-teachers",
      org: "Careers360",
      title: "BPSC Teachers Recruitment 2023: Bihar to appoint over 1.70 lakh teachers",
      year: "2023",
      url: "https://news.careers360.com/bihar-bpsc-government-school-teachers-recruitment-application-process-dates-fee-salary-1-70-lakh-posts-2023",
      note:
        "Basic pay ₹25,000/month for Classes 1–5; ₹28,000–32,000 for higher grades",
      category: "other",
    },
    {
      id: "mospi-fae-fy26",
      org: "MoSPI / PIB",
      title: "First Advance Estimates of National Income 2025-26",
      year: "2026",
      url: "https://www.mospi.gov.in/uploads/latestReleases/latest_release_1767781372753_1380ce82-f5a5-440d-99e6-e6b35af0deb5_GDP_Press_Note_on_FAE_2025-26.pdf",
      note: "Nominal GDP ₹357.14 lakh crore FY 2025-26",
      category: "official",
    },
    {
      id: "prs-budget-analysis-2026",
      org: "PRS Legislative Research",
      title: "Union Budget 2026-27 Analysis",
      year: "2026",
      url: "https://prsindia.org/budgets/parliament/union-budget-2026-27-analysis",
      note: "Budget assumes 10% nominal GDP growth in 2026-27",
      category: "research",
    },
    {
      id: "careers360-udise",
      org: "Careers360",
      title: "UDISE+ 2024: enrolment drops, secondary retention 47%",
      year: "2025",
      url: "https://news.careers360.com/udise-2024-school-enrolment-drops-11-lakh-secondary-retention-at-47-teachers-1-crore-dropouts-gre-ptr-report-education-ministry",
      note:
        "Cited only for 24.80 to 24.69 crore enrolment decline; headline '47%' refers to secondary retention rate, not NER",
      category: "other",
    },
    {
      id: "ideasforindia-aser",
      org: "Ideas for India",
      title: "ASER 2024: More than a post-pandemic recovery in learning",
      year: "2025",
      url: "https://www.ideasforindia.in/topics/human-development/aser-2024-more-than-a-post-pandemic-recovery-in-learning",
      note:
        "Commentary on state-level ASER gains including UP; notes gains not yet independently decomposed",
      category: "research",
    },
    {
      id: "tn-anganwadi-rct",
      org: "PMC / Tamil Nadu RCT study",
      title:
        "Extra anganwadi worker randomised evaluation: mathematics +0.29 SD, language +0.46 SD",
      year: "2024",
      url: "https://www.nber.org/papers/w28377",
      note:
        "640 Tamil Nadu anganwadis; 18-month follow-up; doubled instructional time; lower stunting and malnutrition rates",
      category: "research",
    },
    {
      id: "bihar-cycle-eval",
      org: "J-PAL / Bihar cycle programme evaluation",
      title: "Bihar Cycle programme: girls' secondary enrolment +32%",
      year: "2010",
      url: "https://www.nber.org/papers/w19305",
      note:
        "Quasi-experimental evaluation; +5.2 percentage points age-appropriate enrolment; gender gap narrowed 40%",
      category: "research",
    },
    {
      id: "udise-grades-enrol",
      org: "UDISE+ / Ministry of Education",
      title: "UDISE+ enrolment by grade and government school share",
      year: "2025",
      url: "https://udiseplus.gov.in/#/page/flash-statistic",
      note:
        "Total enrolment 24.69 crore; government schools ~12.16 crore (roughly half total); used for Grades 1–5 government-school estimate",
      category: "official",
    },
    {
      id: "mwcd-colocation-2025",
      org: "Ministry of Women and Child Development / DoSEL",
      title: "Anganwadis co-located with primary schools",
      year: "2025",
      url: "",
      note: "2.9 lakh anganwadis identified as co-located with primary schools per MWCD/DoSEL data 2025",
      category: "official",
    },
  ],
};
