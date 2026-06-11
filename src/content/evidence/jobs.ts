import type { SectorDeepDive } from "./types";

export const jobsDeepDive: SectorDeepDive = {
  slug: "jobs",
  sector: "Jobs & Livelihoods",
  hero: {
    title: "Work that is real, fair, and reaches everyone.",
    sub:
      "India does not have a simple unemployment problem. The headline rate is low — 3.1% by usual-status measure [c:plfs-2025] — but nine in ten workers are informally employed [c:ilo-india-2024], over half are self-employed in low-productivity family enterprises [c:plfs-2025], 43% of the workforce remains in agriculture that produces less than a fifth of national output [c:plfs-2025][c:moafw-agri-2025], and real wages have barely moved in a decade [c:ilo-india-2024][c:ideas-wages-2024]. Meanwhile, unemployment is concentrated among the young and educated: graduates face a jobless rate roughly nine times that of workers who cannot read or write [c:ilo-india-2024]. This brief sets out the evidence, the binding constraints, and a costed five-year plan.",
  },

  indicators: [
    {
      value: "59.3%",
      label: "Labour Force Participation Rate (LFPR), persons aged 15+, usual status",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "It was 59.6% in calendar 2024 [c:plfs-2024] and 60.1% in July 2023–June 2024 [c:plfs-2023-24]. The 2025 PLFS moved to a new sampling frame; 2025 estimates are not strictly comparable with earlier rounds.",
    },
    {
      value: "57.4%",
      label: "Worker Population Ratio (WPR), i.e. roughly 61.6 crore Indians in employment",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "Of these, approximately 41.6 crore are men and 20.0 crore are women [c:plfs-2025].",
    },
    {
      value: "3.1%",
      label: "Unemployment rate (usual status, 15+)",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "The usual-status measure counts anyone who worked at any point in the reference year as employed, which is why the rate appears low. The stricter current weekly status (CWS) rate was 4.9% in calendar 2024 [c:plfs-2024]. Both measures are valid; they capture different dimensions of labour underutilisation.",
    },
    {
      value: "9.9%",
      label: "Youth unemployment rate (15–29), usual status",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "Urban youth unemployment is 13.6%; rural is 8.3% [c:plfs-2025]. Youth accounted for 82.9% of India's total unemployed in 2022 [c:ilo-india-2024].",
    },
    {
      value: "29.1%",
      label: "Unemployment rate among youth (15–29) with a graduate degree",
      vintage: "ILO India Employment Report 2024",
      cite: ["ilo-india-2024"],
      context:
        "The comparable rate for youth who cannot read or write is 3.4% [c:ilo-india-2024]. Education raises unemployment risk because educated youth queue for scarce formal jobs rather than accept informal work.",
    },
    {
      value: "40.0%",
      label: "Female LFPR (15+, usual status)",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "Against 79.1% for men [c:plfs-2025]. Female LFPR has risen substantially from 23.3% in 2017-18 [c:plfs-2023-24], but the nature of that rise is contested — much of it is in unpaid family helpers and own-account work rather than wage employment [c:ceda-flfp-2025].",
    },
    {
      value: "~90%",
      label: "Share of workers in informal employment",
      vintage: "ILO India Employment Report 2024",
      cite: ["ilo-india-2024"],
      context:
        "About 82% work in the informal sector overall [c:ilo-india-2024]. Only 23.6% of workers held regular wage or salaried jobs in 2025 [c:plfs-2025]; 56.2% were self-employed.",
    },
    {
      value: "43.0%",
      label: "Share of workforce employed in agriculture",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "Agriculture contributed approximately 18% of Gross Value Added in 2023-24 [c:moafw-agri-2025], making the productivity gap between farm and non-farm work among the largest of any major economy. Manufacturing employs roughly 12% of workers [c:plfs-2025] while its GVA share has stagnated around 14–17% for over a decade [c:ideas-manufacturing-2025].",
    },
    {
      value: "Stagnant",
      label: "Real wages of regular and casual workers, 2012–2022",
      vintage: "ILO India Employment Report 2024",
      cite: ["ilo-india-2024", "ideas-wages-2024"],
      context:
        "The ILO finds regular workers' real wages stagnated or declined between 2012 and 2022; only casual wages rose slightly in real terms [c:ilo-india-2024]. As of 2018, approximately 41% of casual workers and 15% of salaried workers were paid below the national minimum wage floor [c:ilo-wage-2018] — no more recent estimate is publicly available.",
    },
    {
      value: "78.5 lakh/yr",
      label: "Non-farm jobs needed annually until 2030 to absorb workforce growth",
      vintage: "Economic Survey 2023-24",
      cite: ["econ-survey-2023-24"],
      context:
        "This is the minimum requirement simply to keep pace with new entrants; it does not account for absorbing those already in low-productivity farm work.",
    },
    {
      value: "4.2%",
      label: "Share of workforce (15–59) with formal vocational or technical training",
      vintage: "PLFS Annual 2025",
      cite: ["plfs-2025"],
      context:
        "25% of youth aged 15–29 are NEET — not in employment, education, or training [c:plfs-2025].",
    },
    {
      value: "~19%",
      label: "Share of MSME credit demand met through formal channels",
      vintage: "NITI Aayog 2025",
      cite: ["niti-msme-2025"],
      context:
        "NITI Aayog estimates the unmet gap at around Rs 80 lakh crore [c:niti-msme-2025]. An older IFC estimate (2018) put the gap at Rs 16.66 lakh crore [c:ifc-msme-2018]; the near five-fold difference reflects different definitions and methodologies, not simply gap growth. The NITI Aayog 2025 figure is the more recent and has not been independently reproduced.",
    },
    {
      value: "77 lakh",
      label: "Gig and platform workers in 2020-21, projected to reach 2.35 crore by 2029-30",
      vintage: "NITI Aayog 2022",
      cite: ["niti-gig-2022"],
      context:
        "Over 31 crore unorganised workers were registered on the e-Shram portal by late 2025 [c:pib-eshram-2025], though the link between registration and actual benefit access remains weak.",
    },
    {
      value: "7.1 crore",
      label: "Construction workers — second-largest employer after agriculture",
      vintage: "The India Forum 2024",
      cite: ["india-forum-bocw"],
      context:
        "Only about 5.65 crore are registered under the Building and Other Construction Workers Act, leaving over 1.4 crore outside welfare coverage [c:india-forum-bocw]. Construction workers are largely migrant and informal.",
    },
  ],

  rootCauses: [
    {
      title: "Growth without labour absorption",
      body:
        "India's growth is led by services and capital-intensive industry, which generate output faster than jobs. Manufacturing's GVA share has stagnated around 14–17% [c:ideas-manufacturing-2025], and the fastest-growing segments — electronics, petrochemicals, autos — employ relatively few workers per rupee of capital. Economic Survey 2025-26 credits the Production Linked Incentive scheme with Rs 2.0 lakh crore of investment but only 12.6 lakh jobs [c:econ-survey-2025-26], approximately Rs 1.6 crore of investment per job. The ILO's multi-year analysis finds that employment conditions improved least where output grew most [c:ilo-india-2024], and real wages have remained flat even through periods of rapid GDP growth [c:ilo-india-2024][c:ideas-wages-2024].",
    },
    {
      title: "A missing middle of firms",
      body:
        "Most Indian enterprises are micro: self-employment accounts for 56.2% of all work [c:plfs-2025]. Firms stay small partly because formal credit is scarce — only about 19% of MSME credit demand is met formally [c:niti-msme-2025] — and partly because regulatory and compliance costs rise sharply with size. Small firms cannot achieve the scale that made Bangladeshi garments or Vietnamese electronics globally competitive [c:econ-obs-bangladesh][c:oecd-vietnam-2025]. The missing middle means India's labour market consists largely of a thin formal-sector tier and a vast sea of self-employment, with little dynamic movement between them.",
    },
    {
      title: "Education and training that do not connect to work",
      body:
        "Only 4.2% of the workforce has formal vocational training [c:plfs-2025]. The flagship short-term skilling model has failed its own test: of 13.7 million trained under the Pradhan Mantri Kaushal Vikas Yojana (PMKVY) in its first seven years, only about 18% were placed in jobs [c:indiaspend-pmkvy]. Under PMKVY 3.0, a Parliamentary Standing Committee scrutiny found fewer than 10% of certified candidates were recorded as placed, and placement tracking was then dropped altogether under PMKVY 4.0, making verification impossible [c:psc-pmkvy-2024]. Apprenticeships — the proven bridge between training and sustained employment — cover roughly 0.1% of India's workforce, versus approximately 4% in Germany [c:msde-naps].",
    },
    {
      title: "Barriers specific to women workers",
      body:
        "Female LFPR (40.0%) is half the male rate (79.1%) [c:plfs-2025]. The recent rise in women's participation is largely concentrated in unpaid family helpers and own-account work, not wage jobs [c:ceda-flfp-2025]. Public spending on the care economy is under 1% of GDP [c:ilo-care-2018], leaving childcare, elder care, and domestic work almost entirely borne by women. Randomised evaluations across several low- and middle-income countries find that childcare access raises women's labour supply — but only where complementary barriers including safety, transport, and job availability are also addressed [c:jpal-childcare-2023]. Where employers and states have solved housing and safety, as in Tamil Nadu's industrial cluster model, tens of thousands of women have entered factory work [c:time-foxconn-2023][c:dtnext-sipcot-2024].",
    },
    {
      title: "Informality traps and absent safety nets for urban workers",
      body:
        "Rural India has had a statutory employment guarantee since 2005; urban India has none at national scale. Construction's 7-plus crore workers are largely migrant and informal, with welfare boards reaching only a fraction [c:india-forum-bocw]. Informal workers cannot smooth income shocks, so they cannot search for better jobs, invest in skills, or bargain for higher wages. The gig economy — 77 lakh workers in 2020-21, heading to 2.35 crore by 2029-30 [c:niti-gig-2022] — sits almost entirely outside social insurance frameworks despite the Code on Social Security (2020) providing legal hooks for gig-worker contributions [c:niti-gig-2022].",
    },
    {
      title: "The educated-youth queue: a demand-side failure",
      body:
        "Because formal jobs are scarce and prized — government posts especially — educated youth remain unemployed for years rather than accept informal work, producing the inverted gradient where graduates face 29.1% unemployment and illiterate workers 3.4% [c:ilo-india-2024]. This is fundamentally a demand-side problem: too few good jobs, not primarily too few skilled people. The 25% NEET rate among 15–29-year-olds [c:plfs-2025] reflects both supply-side failures (weak training pathways) and demand-side ones (absence of the formal jobs that would make training worth undertaking).",
    },
  ],

  benchmarks: [
    {
      place: "Bangladesh",
      scope: "world",
      headline:
        "Garment-led export manufacturing absorbed roughly 4 million workers, the majority women, within a generation",
      body:
        "Bangladesh's ready-made garment (RMG) industry employs roughly 4 million workers and accounts for over 80% of export earnings [c:econ-obs-bangladesh]. The sector pulled millions of rural women into formal wage work within a generation, transforming both household incomes and women's economic agency. Transferability: India already has the textile base; what Bangladesh demonstrates is that labour-intensive, export-oriented manufacturing can transform female employment at scale if trade policy, logistics, and compliance costs allow firms to compete on the global price ladder. Caveats that must not be minimised: the sector was built on very low wages and weak labour protections. The Rana Plaza disaster of 2013 forced partial reform. Working conditions, wage theft, and harassment remain serious problems [c:econ-obs-bangladesh]. India should draw the lesson about scale and export-orientation while treating low wages and absent protections as design failures to avoid, not conditions to replicate.",
    },
    {
      place: "Vietnam",
      scope: "world",
      headline:
        "FDI-led electronics manufacturing generated US$126.5 billion in exports (2024), roughly a third of all exports",
      body:
        "Foreign-invested firms account for approximately 98% of Vietnam's electronics exports, and Samsung alone accounted for roughly one-fifth of Vietnam's total exports in 2023, employing about 112,000 workers [c:oecd-vietnam-2025]. Foreign firms' share of Vietnam's formal workforce reached roughly 35% by 2019, growing at 5.6% per year since 1995 [c:oecd-vietnam-2025]. The playbook: aggressive trade-agreement coverage, predictable land and customs administration, and single-window investor facilitation. Transferability: the export-orientation and investor-facilitation lessons are portable; India's electronics PLI is partly inspired by this model. Caveats: OECD and independent analyses find weak spillovers to domestic Vietnamese firms — assembly-led growth without deep local value addition [c:oecd-vietnam-2025]. The same critique has been applied to India's PLI scheme [c:rajan-pli-2023].",
    },
    {
      place: "Germany",
      scope: "world",
      headline:
        "Dual apprenticeship system places roughly 4% of the workforce in apprenticeships; youth unemployment is among the lowest in the OECD",
      body:
        "Germany's vocational training system combines workplace learning with classroom instruction, underpinned by strong employer associations, codified occupational standards, and structured certification [c:msde-naps]. The result is a workforce where roughly 4% are in active apprenticeships at any time, and youth unemployment is consistently well below the OECD average. Transferability caveat: the German system rests on preconditions that India largely lacks — a predominantly formal economy, organised employer federations, and century-old occupational standards infrastructure. With approximately 90% informality [c:ilo-india-2024], India cannot copy the model wholesale. It can, however, scale employer-led apprenticeships within its formal-sector islands — large registered firms, government contractors, public-sector undertakings — where the preconditions do exist.",
    },
    {
      place: "China — Shenzhen SEZ",
      scope: "world",
      headline:
        "Shenzhen grew from under 30,000 workers in 1980 to a 3.09 million labour force by 2000 through spatially concentrated export manufacturing",
      body:
        "Shenzhen grew from approximately 310,000 residents and under 30,000 workers in 1980 to 4.33 million people and a 3.09 million labour force by 2000, on the back of export manufacturing concentrated in a special economic zone with simplified rules [c:wb-shenzhen-2010]. Caveats that come first: the Chinese SEZ model combined cheap land acquired through state expropriation, suppressed labour rights, massive state infrastructure investment, and an undervalued currency. None of these conditions are available or desirable for India. The portable lesson is narrower: spatial concentration — bundling infrastructure, housing, and streamlined compliance in a few specific places rather than spreading incentives thin — consistently outperforms dispersed approaches in job creation per rupee of public investment. India's own SEZ experience validates the principle while illustrating the governance challenges.",
    },
    {
      place: "Tamil Nadu",
      scope: "india",
      headline:
        "Hosts roughly 42% of India's registered women factory workers through a model that treats worker housing as industrial infrastructure",
      body:
        "Tamil Nadu hosts approximately 42% of India's registered women factory workers [c:time-foxconn-2023]. The Foxconn iPhone plant at Sriperumbudur employed 41,281 workers of whom 33,360 were women [c:theprint-foxconn-2024], enabled by a Rs 706.50-crore SIPCOT-built industrial housing facility for 18,720 women workers at the same cluster [c:dtnext-sipcot-2024]. The state demonstrates that treating safe accommodation as industrial infrastructure — rather than welfare or an employer obligation — unlocks women's factory employment at scale. The same model has produced documented rights violations that must be treated as design constraints, not footnotes: exclusion of married women from hiring, restrictive hostel conditions, and limited worker agency [c:theprint-foxconn-2024]. Replication must include labour-standard audits and clear worker-rights frameworks as non-negotiable conditions of public facility funding.",
    },
    {
      place: "MGNREGA (national)",
      scope: "india",
      headline:
        "Rural employment guarantee raised low-skill wages by approximately 5% on average; payment reform produced large household earnings gains",
      body:
        "India's rural employment guarantee is among the world's most studied workfare programmes. Imbert and Papp (2015) estimated MGNREGA raised low-skill rural wages by approximately 5% on average, concentrated in the seven states that implemented the programme most actively — these estimates are based on the 2005–2008 rollout period, and wage effects at the programme's current scale may differ [c:imbert-mgnrega-2015]. Muralidharan, Niehaus and Sukhtankar (2017) showed that fixing payment infrastructure (biometric smartcards in Andhra Pradesh) produced large gains in earnings and household assets — implementation quality, not programme design, was the binding constraint [c:muralidharan-smartcards-2017]. Status note: the Union Budget 2026-27 reduced MGNREGA allocations to Rs 30,000 crore while introducing the VB-G RAM G rural employment mission at Rs 95,692 crore [c:theprint-vbgramg-2026]. Whether VB-G RAM G preserves the demand-driven guarantee structure of MGNREGA is not yet clear from published rules; the comparison of headline allocations is not a reliable guide to effective coverage until the programme's design is public.",
    },
    {
      place: "Rajasthan — urban guarantee",
      scope: "india",
      headline:
        "Pilot urban employment guarantee (125 days/household) attracted primarily women workers; demand exceeded available work",
      body:
        "The Indira Gandhi Shahari Rozgar Guarantee Yojana, launched in September 2022 and expanded to 125 days per household from April 2023, is the closest India has to a tested template for an urban safety net. Field evaluations and a peer-reviewed study find the scheme primarily attracts women because of its flexibility, that demand for work consistently exceeded supply, and that the main failures were payment delays and low wage rates — implementation problems, not absence of demand [c:india-forum-rajasthan-2023][c:tandf-rajasthan-2025]. This is urban equivalence to the MGNREGA evidence: design can work; execution determines outcome.",
    },
  ],

  interventions: [
    {
      title: "Reorient manufacturing incentives from capital to jobs",
      problem:
        "Current incentives reward investment and output, not employment. The Production Linked Incentive scheme is credited with Rs 2.0 lakh crore of investment but only 12.6 lakh jobs [c:econ-survey-2025-26] — roughly Rs 1.6 crore per job. Academic economists have questioned whether PLI generates genuine value addition or primarily subsidises assembly [c:rajan-pli-2023]; defenders argue it builds anchor investments and supply-chain depth over longer horizons. The evidence base for either claim is still accumulating.",
      intervention:
        "We propose making the Employment Linked Incentive (ELI) scheme — Rs 99,446 crore, targeting 3.5 crore jobs via EPFO-verified payroll over August 2025 to July 2027 [c:pib-eli-2025] — the template for all manufacturing support: pay for verified, sustained payroll additions, with higher rates for women workers and labour-intensive sectors (apparel, footwear, food processing, toys, furniture, electronics assembly). Sustain this envelope for five years rather than two.",
      mechanism:
        "Wage subsidies lower the marginal cost of hiring exactly where India has comparative advantage in abundant semi-skilled labour. EPFO verification makes the subsidy formalising by construction — firms cannot claim the incentive without registering workers. ELI is already budgeted [c:pib-eli-2025]; the proposal is extension and deepening, not a new instrument.",
      target: {
        text:
          "Manufacturing employment share from approximately 12% (PLFS 2025 [c:plfs-2025]) to 14% by 2031; at least 40% of incentivised new jobs going to women.",
        baseline:
          "Manufacturing employs roughly 12% of workers; women are 20.0 crore of 61.6 crore total workers [c:plfs-2025].",
      },
      owner:
        "Ministry of Labour and Employment plus EPFO (payments); Ministry of Commerce and DPIIT (sector schemes); state governments for land acquisition and single-window clearance.",
      cost:
        "ELI is budgeted at Rs 99,446 crore over approximately two years [c:pib-eli-2025], approximately 0.14% of FY26 GDP per year [c:mospi-fae-fy26]. We propose sustaining this envelope for five years: approximately Rs 2.5 lakh crore total.",
      risks:
        "Deadweight (paying for jobs that would have existed anyway); churn gaming (fire-and-rehire to keep collecting the subsidy); the predecessor PMRPY scheme produced thin additionality evidence. Mitigation: independent evaluation using EPFO microdata published annually, with disbursement clawback for firms showing abnormal turnover patterns.",
    },
    {
      title: "A phased urban employment guarantee",
      problem:
        "Urban casual and gig workers have no income floor at national scale. Urban youth unemployment is 13.6% [c:plfs-2025]. Rajasthan's pilot demonstrates that demand for urban public work exists, especially among women, and that implementation — not programme design — is the binding constraint [c:india-forum-rajasthan-2023][c:tandf-rajasthan-2025].",
      intervention:
        "We propose a national urban works programme in towns under one million population, starting at 50 days per household per year and scaling on evidence, drawing on the Azim Premji University Centre for Sustainable Employment design of 100 days at a statutory wage with works covering urban commons, care infrastructure, and civic services [c:apu-urban-2019].",
      mechanism:
        "The MGNREGA evidence shows employment guarantees raise market wages for the lowest-income workers and self-target effectively [c:imbert-mgnrega-2015][c:muralidharan-smartcards-2017]. Rajasthan shows that urban demand and women's uptake are real [c:india-forum-rajasthan-2023]. Phasing from small towns limits fiscal risk and allows iterative design improvement before national expansion.",
      target: {
        text:
          "One crore urban households receiving at least 30 days of work per year by Year 5.",
        baseline:
          "No national programme exists; Rajasthan-type state schemes only [c:india-forum-rajasthan-2023].",
      },
      owner:
        "Ministry of Housing and Urban Affairs; urban local bodies execute; states co-fund on the Azim Premji University proposed Centre:state 80:20 split on labour costs [c:apu-urban-2019].",
      cost:
        "The full APU national design was costed at 1.7–2.7% of GDP [c:apu-urban-2019]. A 50-day, small-town, phased version is substantially smaller: we propose ramping from Rs 20,000 crore per year to Rs 60,000 crore per year by Year 5, approximately 0.06–0.17% of FY26 GDP [c:mospi-fae-fy26]. This is our scaling of the APU cost basis, not an independently verified figure. The APU design assumed Rs 500 per day in 2019 prices; applying rough CPI inflation suggests a 2026 equivalent of Rs 600–700 per day, which would scale costs proportionally upward. Our estimate should be treated as a lower bound.",
      risks:
        "Urban works are harder to supervise than rural earthworks; wage-setting can distort low-end labour markets; payment delays destroyed much of the value delivered in Rajasthan [c:tandf-rajasthan-2025]. If urban informal wages in target cities already exceed the statutory guarantee rate, take-up will be low and cost-per-job will rise sharply. Conversely, in cities with deep labour surplus, a guarantee wage could set a de facto floor above private-sector clearing rates, suppressing informal hiring. Neither effect is modelled here. Mitigation: begin in small towns, commission third-party concurrent evaluation, apply payment lessons from MGNREGA smartcard reform [c:muralidharan-smartcards-2017].",
    },
    {
      title: "Apprenticeships as the default school-to-work bridge",
      problem:
        "Only 4.2% of the workforce has formal vocational training [c:plfs-2025]. Apprentices are approximately 0.1% of the workforce against roughly 4% in Germany [c:msde-naps]. Short-term classroom skilling has demonstrably failed: approximately 18% placement under PMKVY's first seven years [c:indiaspend-pmkvy]; fewer than 10% placement under PMKVY 3.0 per Parliamentary Standing Committee scrutiny; placement tracking then dropped entirely under PMKVY 4.0 [c:psc-pmkvy-2024].",
      intervention:
        "We propose shifting the marginal skilling rupee from short-term classroom training to employer-led apprenticeships: raise the National Apprenticeship Promotion Scheme (NAPS) stipend cost-sharing for employers, simplify compliance for MSMEs, mandate apprenticeship quotas in public-sector undertakings and large government contractors, and publish placement and retention outcomes per establishment on a quarterly basis. NAPS engaged approximately 42 lakh apprentices cumulatively over FY2018-19 to mid-2025 [c:msde-naps] — the pipeline exists but is small relative to the 78.5 lakh annual workforce entrants the economy needs to absorb [c:econ-survey-2023-24].",
      mechanism:
        "Apprenticeships solve two binding constraints simultaneously: the information problem (employers can observe workers before committing to permanent hire) and the relevance problem (training happens on real equipment and real production lines). Germany's system demonstrates the outcomes possible when these conditions are met at scale [c:msde-naps], with the important caveat that India must concentrate initially on its formal-sector islands where the institutional preconditions already exist.",
      target: {
        text:
          "From approximately 6–7 lakh apprentices per year (implied by the cumulative NAPS total divided by seven years — not a stated annual figure; if recent engagement is rising, the baseline may be higher) to 30 lakh per year by Year 5, with placement-or-retention rate published quarterly.",
        baseline:
          "Approximately 42 lakh cumulative NAPS apprentices FY2018-19 to mid-2025; placement data not published under PMKVY 4.0 [c:msde-naps][c:psc-pmkvy-2024].",
      },
      owner:
        "Ministry of Skill Development and Entrepreneurship (NAPS administration); industry associations; state apprenticeship cells.",
      cost:
        "At NAPS-2 stipend support of Rs 1,500 per month per apprentice for approximately 11 months [c:msde-naps], 30 lakh apprentices per year implies approximately Rs 5,000 crore per year of central stipend co-payment — approximately Rs 25,000 crore over five years. This is our arithmetic on the cited stipend rate.",
      risks:
        "Apprentice substitution for regular workers, where firms cycle cheap apprentice labour continuously to avoid permanent hiring commitments; quality collapse if enrolment numbers are chased rather than completion and retention rates. Mitigation: cap the ratio of apprentices to permanent workers per establishment, audit completion and retention annually rather than enrolment, link NAPS funding to verified completion certificates.",
    },
    {
      title: "A national mission for women's work: childcare, housing, and transport",
      problem:
        "Female LFPR is 40.0% against 79.1% for men [c:plfs-2025], and the recent rise in women's participation is concentrated in unpaid family helpers and own-account work rather than wage employment [c:ceda-flfp-2025]. Public spending on the care economy is under 1% of GDP [c:ilo-care-2018], leaving childcare almost entirely borne by women within the household.",
      intervention:
        "We propose three mutually reinforcing components: (i) Universal public childcare in urban wards and industrial clusters, expanding the existing Palna and Anganwadi-cum-creche network to full coverage; (ii) State-built women's worker hostels at industrial nodes, on the Tamil Nadu SIPCOT model [c:dtnext-sipcot-2024], as industrial infrastructure rather than welfare; (iii) Safe-transport corridors connecting residential areas to factory and service clusters.",
      mechanism:
        "Nine randomised evaluations across eight low- and middle-income countries find childcare access raises women's labour supply, but only where complementary barriers — safety, transport, social norms, job availability — are also addressed [c:jpal-childcare-2023]. Tamil Nadu demonstrates the housing and safety channel at industrial scale: 33,360 women employed in a single plant supported by purpose-built accommodation [c:theprint-foxconn-2024][c:dtnext-sipcot-2024]. The ILO estimates that direct public investment of 2% of GDP in care services could generate approximately 11 million jobs in India, with roughly 70% going to women [c:ilo-care-2018] — the care sector is both an enabler of women's market work and a significant employer in its own right.",
      target: {
        text:
          "Measurable increase in the female regular-wage employment share, which is a harder indicator to game than overall LFPR and more directly reflects the policy's intent. A specific LFPR point-estimate target is not derived here from any underlying model; the primary measurable co-target is the female regular-wage employment share.",
        baseline:
          "Regular wage or salaried employment accounts for 23.6% of all workers [c:plfs-2025]; the female sub-share requires tracking specifically.",
      },
      owner:
        "Ministry of Women and Child Development (childcare expansion); state industrial development corporations (hostels); urban local bodies and state transport undertakings (safe-transport corridors).",
      cost:
        "Phasing public care spending upward by 0.25% of GDP per year toward the ILO's 2%-of-GDP scenario [c:ilo-care-2018] implies approximately Rs 90,000 crore per year by Year 5 against the FY26 GDP base [c:mospi-fae-fy26]. Using the SIPCOT unit cost of approximately Rs 3.8 lakh per bed (derived from Rs 706.50 crore for 18,720 beds [c:dtnext-sipcot-2024]), 50 hostel projects at 10,000 beds each would cost approximately Rs 19,000 crore in total — treat as order-of-magnitude only.",
      risks:
        "Childcare raises participation only where jobs and safety exist simultaneously [c:jpal-childcare-2023]; sequencing matters. Hostels can become instruments of control over women workers if unregulated, as documented at existing facilities [c:theprint-foxconn-2024]. Mitigation: tie hostel funding to enforceable labour-standard audits including right to exit and no restrictions on marital status; co-locate childcare provision with employment clusters rather than residential areas alone.",
    },
    {
      title: "Close the MSME credit and formalisation gap",
      problem:
        "Only approximately 19% of MSME credit demand is met through formal channels; the unmet gap is estimated near Rs 80 lakh crore [c:niti-msme-2025]. Credit-starved micro-firms cannot grow into employers. 56.2% of workers remain self-employed [c:plfs-2025], many in enterprises too small to achieve productivity gains through scale.",
      intervention:
        "We propose tripling the corpus and coverage of credit guarantees under CGTMSE, making Udyam, e-Shram, and GST data interoperable for cash-flow-based lending underwriting, and tying guarantee pricing to verified employment growth in borrower firms.",
      mechanism:
        "The binding constraint for MSMEs is collateral and credit-history information, not underlying bankability: between 2020 and 2024 the share of micro and small enterprises accessing scheduled-bank credit rose from 14% to 20% as digital underwriting spread [c:niti-msme-2025]. Guarantee capacity and data interoperability scale that trend. Employment-linked pricing creates a direct incentive for firms to formalise workers in exchange for better credit terms.",
      target: {
        text:
          "Formal credit meeting 35% of MSME credit demand by 2031, from the current 19% baseline [c:niti-msme-2025].",
        baseline:
          "Approximately 19% of MSME credit demand met formally [c:niti-msme-2025]; IFC 2018 estimate of Rs 16.66 lakh crore gap [c:ifc-msme-2018] has been superseded by the NITI Aayog 2025 figure, though both should be read with methodological caution.",
      },
      owner:
        "Ministry of MSME; SIDBI (scheme administration); Reserve Bank of India (regulatory framework); commercial banks and NBFCs.",
      cost:
        "Credit guarantees are contingent liabilities rather than upfront outlays. Provisioning of approximately Rs 10,000–15,000 crore per year against expanded guarantee cover is our illustrative estimate, broadly consistent with CGTMSE's published provisioning ratios applied to a larger corpus — though CGTMSE's exact provisioning methodology is not publicly standardised and this range should not be treated as an audited figure.",
      risks:
        "Guarantee schemes can breed moral hazard and non-performing assets; employment-linked pricing adds verification burden on banks and borrowers. Mitigation: risk-based pricing differentiated by sector and employment intensity, public NPA reporting by loan cohort.",
    },
    {
      title: "Make labour data and worker welfare portable",
      problem:
        "7.1 crore construction workers, only about 5.65 crore registered for welfare coverage [c:india-forum-bocw]; gig workers (77 lakh in 2020-21, projected to 2.35 crore by 2029-30 [c:niti-gig-2022]) sit outside most social insurance; 31 crore e-Shram registrations exist but link weakly to any actual benefit [c:pib-eshram-2025].",
      intervention:
        "We propose a portable benefits stack delivered through e-Shram: accident and health coverage, pension contributions co-paid by platforms and contractors, the BOCW cess (a 1% levy on construction project costs collected by state welfare boards but historically under-spent [c:india-forum-bocw]) actually disbursed to registered workers, and PLFS-linked district labour dashboards published monthly.",
      mechanism:
        "Portability removes the mobility penalty informal workers currently face: benefits that are tied to a single employer or locality are forfeit when a migrant worker moves or a gig worker changes platforms. The Code on Social Security 2020 already provides the legal hooks for gig-worker platform contributions [c:niti-gig-2022]. Registration without accessible benefits has no behavioural effect; tangible benefits make registration self-sustaining.",
      target: {
        text:
          "90% of BOCW-eligible workers registered and at least one benefit disbursed by Year 5; all major gig platforms remitting social-security contributions by Year 3.",
        baseline:
          "5.65 crore of 7.1 crore construction workers registered; fraction receiving actual benefits unknown [c:india-forum-bocw]. No gig platform currently remits contributions at scale.",
      },
      owner:
        "Ministry of Labour and Employment; state BOCW welfare boards; platform aggregators and gig economy firms.",
      cost:
        "Largely financed by the existing BOCW cess (1% of construction project cost — collected but under-spent [c:india-forum-bocw]) and platform contributions mandated under the Code on Social Security 2020 [c:niti-gig-2022]. Central technology and administration is estimated at approximately Rs 2,000 crore over five years — our estimate, flagged as illustrative.",
      risks:
        "State BOCW boards have a two-decade record of cess collection without commensurate disbursement [c:india-forum-bocw]; platform contribution mandates may be passed on to workers as lower pay or higher platform fees. Mitigation: statutory minimum spending floors for BOCW boards with transparent public accounts; independent annual audit of cess utilisation published in machine-readable form.",
    },
  ],

  overallCost: {
    title: "What the five-year plan costs",
    body: [
      "Annual incremental public cost at full ramp (Year 5), against FY 2025-26 nominal GDP of Rs 357.14 lakh crore [c:mospi-fae-fy26]:",
      "Employment-linked incentives (sustained ELI): approximately Rs 50,000 crore per year — based on the ELI outlay of Rs 99,446 crore over approximately two years [c:pib-eli-2025]. Urban employment guarantee (phased): approximately Rs 60,000 crore per year — our scaling of the Azim Premji University 1.7–2.7%-of-GDP full-design estimate [c:apu-urban-2019], treated as a lower bound. Apprenticeships (NAPS expansion): approximately Rs 5,000 crore per year — our arithmetic on the NAPS-2 stipend rate [c:msde-naps]. Women's work mission (care plus hostels plus transport): approximately Rs 90,000 crore per year — phasing toward the ILO's 2%-of-GDP care scenario [c:ilo-care-2018] using SIPCOT unit costs [c:dtnext-sipcot-2024]. MSME guarantee provisioning: approximately Rs 12,500 crore per year — illustrative, see intervention detail. Portable benefits and data infrastructure: approximately Rs 500 crore per year — our estimate. Year-5 total: approximately Rs 2.2 lakh crore per year, or about 0.6% of FY26 GDP.",
      "For context: the Budget 2026-27 already allocates Rs 95,692 crore to VB-G RAM G and Rs 30,000 crore to MGNREGA — approximately Rs 1.26 lakh crore on rural employment support alone [c:theprint-vbgramg-2026][c:mospi-fae-fy26]. ELI's Rs 99,446 crore is committed through July 2027 [c:pib-eli-2025]. Roughly half the proposed Year-5 envelope represents re-orientation and continuation of existing commitments rather than new public spending. The genuinely new spending — the urban guarantee and the care economy mission — is on the order of 0.3–0.4% of GDP per year, phased over five years, with early years costing far less (approximately Rs 60,000–80,000 crore incremental).",
      "Several cost figures are our arithmetic on cited unit costs (hostel scaling, apprentice stipends, urban-guarantee phasing, MSME provisioning) rather than independently audited estimates. They are flagged as such throughout. Reliable recent data on BOCW cess utilisation rates and PMKVY 4.0 placement is unavailable [c:india-forum-bocw][c:psc-pmkvy-2024] — itself a finding about the state of public accountability in this sector.",
    ],
  },

  unknowns: [
    "The female LFPR rise may be partly a measurement artefact or a signal of economic distress rather than expanding opportunity. The increase since 2017-18 is concentrated in unpaid family helpers (9.1% to 19.6% of women workers) and own-account work (4.5% to 14.6%), not wage employment [c:ceda-flfp-2025]. CEDA and EPW analyses argue part reflects better counting of previously uncounted unpaid work and part may reflect household income distress pushing women into subsistence activity. The female regular-wage share is therefore the more meaningful policy target, and is specified as the primary co-target for Intervention 4.",

    "PLFS 2025 broke the data series. The new sampling frame means 2025 estimates are not strictly comparable with any prior annual round [c:plfs-2025][c:plfs-2024]. Some apparent changes — particularly rural female WPR movements — may partly reflect frame effects rather than real labour market changes. Every trend statement in this brief that spans 2024 to 2025 should be read with this caveat. The Ministry of Statistics should publish a bridge table reconciling 2024 estimates on both frames.",

    "The low headline unemployment rate is a measurement choice, not a complete picture. The usual-status rate of 3.1% [c:plfs-2025] coexists with a current weekly status rate of 4.9% [c:plfs-2024] and very high youth and graduate unemployment [c:ilo-india-2024]. The two measures use different reference periods and produce different results by construction — neither is wrong, they measure different things. This brief presents both without adjudicating which better captures labour market distress, as that determination would require access to unit-level PLFS microdata and an agreed welfare framework.",

    "Wage-subsidy additionality at ELI's scale is unproven. There is no published independent evaluation showing what share of EPFO-incentivised jobs under ELI are genuinely additional rather than jobs that would have been created anyway. Intervention 1 could partly operate as a transfer to firms that would have hired regardless. The 12.6 lakh PLI jobs figure [c:econ-survey-2025-26] is a government administrative claim, not an audited or independently verified count.",

    "Urban employment guarantee evidence is thin. Rajasthan's scheme has field studies, not randomised or quasi-experimental impact estimates [c:india-forum-rajasthan-2023][c:tandf-rajasthan-2025]. Urban labour markets are structurally different from rural ones — deeper, more segmented, with more substitutes — so MGNREGA's documented wage effects [c:imbert-mgnrega-2015] may not replicate. The phased small-town design is a hedge against this uncertainty, but the cost-benefit case at national scale is unproven.",

    "The MGNREGA to VB-G RAM G transition is a live unknown. The 2026-27 budget shifted Rs 95,692 crore to VB-G RAM G while cutting MGNREGA to Rs 30,000 crore [c:theprint-vbgramg-2026]. Whether VB-G RAM G preserves the demand-driven guarantee structure of MGNREGA — the feature that makes the programme self-targeting and counter-cyclical — is not yet established from published rules. This plan assumes a functioning rural employment guarantee persists; if it does not, rural distress migration to cities would materially change the urban-guarantee arithmetic.",

    "Interventions 1 and 2 may partially cancel each other. ELI (Intervention 1) lowers the marginal cost of formal hiring at a given wage. An urban employment guarantee (Intervention 2) raises the informal reservation wage. In low-wage urban labour markets both effects could be simultaneously active, compressing ELI's wage-subsidy advantage. The net effect depends on how the ELI wage threshold and the guarantee wage are calibrated against local wage distributions — a sensitivity analysis should be done before either scheme's final design is locked.",

    "Transferability of all four international benchmarks is partial. Bangladesh's garment model rode a low-wage, weak-protection phase that India should not emulate [c:econ-obs-bangladesh]; Vietnam's electronics boom shows weak domestic spillovers [c:oecd-vietnam-2025]; Germany's apprenticeship system rests on preconditions of formality and employer associations mostly absent in India [c:ilo-india-2024][c:msde-naps]; the Shenzhen SEZ model combined land acquisition and labour suppression that are institutionally unavailable [c:wb-shenzhen-2010]. These benchmarks are used as directional evidence about what is possible, not as blueprints.",

    "The strongest counterargument to this plan is that India's job problem is fundamentally a productivity and firm-size problem, and that 0.6% of GDP spent on guarantees, subsidies, and care provision treats symptoms while delaying factor-market reforms — in land markets, labour codes implementation, and tariffs — that would allow large labour-intensive firms to emerge organically. This brief partly accepts the critique: Interventions 1, 3, and 5 are designed as complements to those reforms, not substitutes. But if fiscal resources and political attention are finite, and if spending on these interventions crowds out reform momentum, the critics would be right.",
  ],

  sources: [
    {
      id: "plfs-2025",
      org: "Ministry of Statistics and Programme Implementation",
      title: "Periodic Labour Force Survey Annual Report 2025 (January–December 2025)",
      year: "2026",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246009",
      note: "PIB press release with key indicators; full PDF via MoSPI",
      category: "official",
    },
    {
      id: "ilo-india-2024",
      org: "International Labour Organization & Institute for Human Development",
      title: "India Employment Report 2024: Youth employment, education and skills",
      year: "2024",
      url: "https://www.ilo.org/publications/india-employment-report-2024-youth-employment-education-and-skills",
      category: "multilateral",
    },
    {
      id: "moafw-agri-2025",
      org: "Ministry of Agriculture and Farmers Welfare",
      title: "Statistical Report on Agriculture and Allied Sectors",
      year: "2025",
      url: "https://www.nextias.com/ca/current-affairs/28-06-2025/agriculture-allied-sectors-statistical-report",
      note: "Agriculture approximately 18% of GVA in 2023-24",
      category: "other",
    },
    {
      id: "ideas-wages-2024",
      org: "Ideas for India",
      title: "The problem of India's stagnant real wages",
      year: "2024",
      url: "https://www.ideasforindia.in/topics/poverty-inequality/the-problem-of-india-s-stagnant-real-wages",
      category: "research",
    },
    {
      id: "plfs-2024",
      org: "Ministry of Statistics and Programme Implementation",
      title: "PLFS Key Employment Unemployment Indicators 2024 (January–December 2024)",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2120359",
      category: "official",
    },
    {
      id: "plfs-2023-24",
      org: "Ministry of Statistics and Programme Implementation",
      title: "PLFS Annual Report July 2023–June 2024",
      year: "2024",
      url: "https://mospi.gov.in/sites/default/files/press_release/Press_note_AR_PLFS_2023_24_22092024.pdf",
      category: "official",
    },
    {
      id: "ceda-flfp-2025",
      org: "CEDA (Ashoka University) and Economic and Political Weekly",
      title: "Decoding Rising Female Labour Force Participation in India",
      year: "2025",
      url: "https://ceda.ashoka.edu.in/illusory-or-real-unpacking-the-recent-increase-in-womens-labour-force-participation-in-india/",
      note: "Helpers in household enterprises 9.1% to 19.6%, own-account workers 4.5% to 14.6% (2017-18 to 2023-24)",
      category: "research",
    },
    {
      id: "ilo-wage-2018",
      org: "International Labour Organization",
      title: "India Wage Report: Wage policies for decent work and inclusive growth",
      year: "2018",
      url: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@asia/@ro-bangkok/@sro-new_delhi/documents/publication/wcms_638305.pdf",
      category: "multilateral",
    },
    {
      id: "econ-survey-2023-24",
      org: "Ministry of Finance / PIB",
      title: "Economic Survey 2023-24: India needs 78.5 lakh non-farm jobs annually until 2030",
      year: "2024",
      url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2034952",
      category: "official",
    },
    {
      id: "niti-msme-2025",
      org: "NITI Aayog",
      title: "Enhancing Competitiveness of MSMEs in India",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126063",
      note: "Approximately 19% of MSME credit demand met formally; unmet gap estimated at Rs 80 lakh crore",
      category: "official",
    },
    {
      id: "ifc-msme-2018",
      org: "International Finance Corporation / Intellecap",
      title: "Financing India's MSMEs: Estimation of Debt Requirement of MSMEs in India",
      year: "2018",
      url: "https://www.intellecap.com/wp-content/uploads/2019/04/Financing-Indias-MSMEs-Estimation-of-Debt-Requireme-nt-of-MSMEs-in_India.pdf",
      note: "Credit gap estimated at Rs 16.66 lakh crore; methodology differs from NITI Aayog 2025 estimate",
      category: "multilateral",
    },
    {
      id: "niti-gig-2022",
      org: "NITI Aayog",
      title: "India's Booming Gig and Platform Economy",
      year: "2022",
      url: "https://www.niti.gov.in/sites/default/files/2023-06/Policy_Brief_India's_Booming_Gig_and_Platform_Economy_27062022.pdf",
      category: "official",
    },
    {
      id: "pib-eshram-2025",
      org: "Ministry of Labour and Employment / PIB",
      title: "Over 30.68 crore unorganised workers registered on e-Shram portal",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2109828",
      category: "official",
    },
    {
      id: "india-forum-bocw",
      org: "The India Forum",
      title: "A Law Only on Paper: Welfare for Construction Workers",
      year: "2024",
      url: "https://www.theindiaforum.in/forum/law-only-paper-welfare-construction-workers",
      note: "Approximately 7.1 crore construction workers, 5.65 crore BOCW-registered",
      category: "research",
    },
    {
      id: "ideas-manufacturing-2025",
      org: "Ideas for India",
      title: "Net assessment of India's manufacturing sector",
      year: "2025",
      url: "https://www.ideasforindia.in/topics/macroeconomics/net-assessment-of-indias-manufacturing-sector",
      category: "research",
    },
    {
      id: "econ-obs-bangladesh",
      org: "Economics Observatory",
      title: "What's happening in Bangladesh's garment industry?",
      year: "2024",
      url: "https://www.economicsobservatory.com/whats-happening-in-bangladeshs-garment-industry",
      category: "research",
    },
    {
      id: "oecd-vietnam-2025",
      org: "OECD",
      title: "OECD Economic Surveys: Viet Nam 2025 — Harnessing trade and investment flows to boost productivity",
      year: "2025",
      url: "https://www.oecd.org/en/publications/oecd-economic-surveys-viet-nam-2025_fb37254b-en/full-report/harnessing-trade-and-investment-flows-to-boost-productivity_98d56c90.html",
      note: "FDI firms approximately 98% of electronics exports (US$126.5bn, 2024); Samsung approximately one-fifth of total exports using 2023 data",
      category: "multilateral",
    },
    {
      id: "msde-naps",
      org: "Ministry of Skill Development and Entrepreneurship",
      title: "NAPS guidelines and apprenticeship statistics; National Apprenticeship Promotion Scheme",
      year: "2024",
      url: "https://www.msde.gov.in/static/uploads/2024/04/Guidelines-for-NAPS.pdf",
      note: "Cumulative approximately 41.96 lakh apprentices FY2018-19 to July 2025; stipend sharing Rs 1,500/month; India approximately 0.1% of workforce as apprentices vs Germany approximately 4%",
      category: "official",
    },
    {
      id: "indiaspend-pmkvy",
      org: "IndiaSpend",
      title: "DataViz: Govt's Skill Development Scheme Placed Only 18% Candidates",
      year: "2022",
      url: "https://www.indiaspend.com/data-viz/govts-skill-development-scheme-placed-only-18-candidates-876460",
      note: "Pointer to MSDE placement data for PMKVY first seven years",
      category: "other",
    },
    {
      id: "psc-pmkvy-2024",
      org: "Parliamentary Standing Committee on Labour, Textiles and Skill Development (via Careers360)",
      title: "PMKVY: Under 50% certified, placement data missing",
      year: "2024",
      url: "https://news.careers360.com/pmkvy-4-0-under-50-pc-trainee-certification-placement-data-parliamentary-panel-skill-india-scheme-delay-kaushal-vikas-yojana-rti",
      note: "PMKVY 3.0 placed 30,599 of approximately 3,99,860 certified; placement tracking dropped under PMKVY 4.0",
      category: "other",
    },
    {
      id: "jpal-childcare-2023",
      org: "J-PAL (Abdul Latif Jameel Poverty Action Lab)",
      title: "Access to childcare to improve women's economic empowerment",
      year: "2023",
      url: "https://www.povertyactionlab.org/policy-insight/access-childcare-improve-womens-economic-empowerment",
      note: "Policy insight reviewing nine randomised evaluations across eight LMICs",
      category: "research",
    },
    {
      id: "ilo-care-2018",
      org: "International Labour Organization",
      title: "Care Work and Care Jobs for the Future of Decent Work",
      year: "2018",
      url: "https://www.ilo.org/topics-and-sectors/care-economy",
      note: "India scenario: public investment of 2% of GDP in care could generate approximately 11 million jobs, approximately 70% to women; India's public care spending under 1% of GDP",
      category: "multilateral",
    },
    {
      id: "rajan-pli-2023",
      org: "Raghuram Rajan (with Rohit Lamba)",
      title: "The PLI scheme: Sense and nonsense in the debate",
      year: "2023",
      url: "https://www.linkedin.com/posts/raghuram-rajan_the-pli-scheme-sense-and-nonsense-in-the-activity-7022986149132464128-tfjL",
      note: "Critique of capital-intensity and low value addition in PLI scheme",
      category: "research",
    },
    {
      id: "wb-shenzhen-2010",
      org: "World Bank",
      title: "China's First Special Economic Zone: The Case of Shenzhen",
      year: "2010",
      url: "https://documents1.worldbank.org/curated/en/294021468213279589/pdf/564470PUB0buil10Box349496B01PUBLIC1.pdf",
      note: "Shenzhen 1980: approximately 310,000 residents and under 30,000 workers; 2000: 4.33 million people and 3.09 million labour force",
      category: "multilateral",
    },
    {
      id: "time-foxconn-2023",
      org: "TIME",
      title: "Inside One iPhone Factory Powering Apple's Pivot to India",
      year: "2023",
      url: "https://time.com/6318369/apple-iphone-factory-india/",
      note: "Approximately 42% of India's registered women factory workers in Tamil Nadu, citing official factory employment data",
      category: "other",
    },
    {
      id: "theprint-foxconn-2024",
      org: "The Print",
      title: "All about Foxconn in India",
      year: "2024",
      url: "https://theprint.in/india/all-about-foxconn-in-india-boosted-manufacturing-in-tn-under-scanner-for-labour-practices/2150207/",
      note: "Sriperumbudur plant 41,281 workers including 33,360 women; Reuters investigation on exclusion of married women",
      category: "other",
    },
    {
      id: "dtnext-sipcot-2024",
      org: "DT Next",
      title: "Foxconn home for 18,720 women workers opened at Sriperumbudur",
      year: "2024",
      url: "https://www.dtnext.in/news/tamilnadu/foxconn-home-for-18720-women-workers-opened-at-sriperumbudur-799973",
      note: "SIPCOT industrial housing facility, Rs 706.50 crore, 18,720 women workers; unit cost approximately Rs 3.8 lakh per bed",
      category: "other",
    },
    {
      id: "imbert-mgnrega-2015",
      org: "Imbert C. and Papp J.",
      title: "Labor Market Effects of Public Works: Evidence from India's Employment Guarantee (AEJ Applied 2015)",
      year: "2015",
      url: "https://voxdev.org/topic/labour-markets/labour-market-effects-of-workfare-programmes-evidence-from-indias-nrega",
      note: "Estimated 5% average wage increase for low-skill rural workers; effects concentrated in seven most active states; estimates based on 2005-2008 rollout period",
      category: "research",
    },
    {
      id: "muralidharan-smartcards-2017",
      org: "Muralidharan K., Niehaus P. and Sukhtankar S.",
      title: "Building State Capacity: Evidence from Biometric Smartcards in India (American Economic Review 2016/2017)",
      year: "2017",
      url: "https://www.nber.org/papers/w19999",
      note: "Smartcard payment reform in Andhra Pradesh produced large gains in earnings and household assets",
      category: "research",
    },
    {
      id: "theprint-vbgramg-2026",
      org: "The Print",
      title: "VB-G RAM G gets Rs 95,000-plus crore allocation under Union Budget 2026-27, MGNREGA funds reduced",
      year: "2026",
      url: "https://theprint.in/india/governance/vb-g-ram-g-gets-rs-95000-plus-crore-allocation-under-union-budget-2026-27-mgnrega-funds-reduced/2842622/",
      note: "VB-G RAM G Rs 95,692 crore; MGNREGA cut from Rs 86,000 crore (2025-26) to Rs 30,000 crore (2026-27)",
      category: "other",
    },
    {
      id: "india-forum-rajasthan-2023",
      org: "The India Forum",
      title: "A Field Study of Rajasthan's Urban Employment Guarantee Programme",
      year: "2023",
      url: "https://www.theindiaforum.in/public-policy/field-study-rajasthans-urban-employment-guarantee-programme",
      category: "research",
    },
    {
      id: "tandf-rajasthan-2025",
      org: "Development in Practice",
      title: "Evaluating Rajasthan's urban employment guarantee program",
      year: "2025",
      url: "https://www.tandfonline.com/doi/full/10.1080/09614524.2025.2467993",
      note: "Vol. 35, Issue 3; field evaluation finding payment delays and low wages as primary failures, not absence of demand",
      category: "research",
    },
    {
      id: "econ-survey-2025-26",
      org: "Government of India",
      title: "Economic Survey 2025-26: PLI investment and jobs",
      year: "2026",
      url: "https://www.indiabudget.gov.in/economicsurvey/",
      note: "PLI credited with Rs 2.0 lakh crore actual investment and 12.6 lakh jobs; National Manufacturing Mission targets",
      category: "official",
    },
    {
      id: "pib-eli-2025",
      org: "Cabinet / PIB",
      title: "Cabinet Approves Employment Linked Incentive (ELI) Scheme — Rs 99,446 crore",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2141129",
      note: "Rs 99,446 crore; target of 3.5 crore jobs incentivised via EPFO-verified payroll; August 2025 to July 2027",
      category: "official",
    },
    {
      id: "apu-urban-2019",
      org: "Azim Premji University, Centre for Sustainable Employment",
      title: "Strengthening Towns through Sustainable Employment: A Job Guarantee Programme for Urban India",
      year: "2019",
      url: "https://azimpremjiuniversity.edu.in/centre-for-sustainable-employment",
      note: "100 days at Rs 500/day in towns under 1 million; costed at 1.7–2.7% of GDP at national scale; Centre:state 80:20 cost-share",
      category: "research",
    },
    {
      id: "mospi-fae-fy26",
      org: "MoSPI / PIB",
      title: "First Advance Estimates of National Income 2025-26",
      year: "2026",
      url: "https://www.mospi.gov.in/uploads/latestReleases/latest_release_1767781372753_1380ce82-f5a5-440d-99e6-e6b35af0deb5_GDP_Press_Note_on_FAE_2025-26.pdf",
      note: "Nominal GDP Rs 357.14 lakh crore for FY 2025-26",
      category: "official",
    },
  ],
};
