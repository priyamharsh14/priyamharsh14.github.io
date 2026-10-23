/**
 * Public facts only. Process, decisions, and approved impact numbers are fine.
 * Nothing about the tech behind the pipeline, the apps, or the infrastructure:
 * no specs, resolutions, CPU/GPU, clouds, servers, or SDK internals.
 * Travvir’s public site is https://travvir.com/ (checked against the live homepage).
 */

export const profile = {
  name: "Priyam Harsh",
  location: "New Delhi, India",
  /**
   * First-viewport proof. Also used as the default meta description.
   */
  hero: "A lead engineer who designs and runs production systems — pipelines, cloud infrastructure, and mobile apps — with a security researcher's instincts.",
  /**
   * Approved impact figure only. Do not invent other numbers.
   */
  impact: "20,000+ panoramas delivered for clients and customers.",
  email: "priyamharsh14@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/priyamharsh14" },
    { label: "LinkedIn", href: "https://linkedin.com/in/priyamharsh14" },
    { label: "X", href: "https://x.com/priyamharsh14" },
  ],
} as const;

/**
 * Travvir employment. Bullet strings are approved copy — keep them exact.
 */
export const experience = {
  organization: "Travvir",
  role: "Lead Software Developer",
  url: "https://travvir.com/",
  summary: "Travvir builds spatial AI, turning smartphone scans into 360° digital twins.",
  roles: [
    { title: "Lead Software Developer", dates: "Feb 2024 – present" },
    { title: "SDE1 (Software Development Engineer I)", dates: "Sep 2021 – Jan 2024" },
  ],
  bullets: [
    "Built and have run the company's image processing pipeline since its early days, delivering 20,000+ panoramas for clients and customers.",
    "Helped build the system that runs our processing workloads, so that it scales on its own as demand changes.",
    "Ship and maintain the company's mobile capture apps and the tools partners use to build on them.",
    "Lead the engineering team, from planning and reviews to production.",
  ],
} as const;

/**
 * Domain ledger for home, with anchors into /work (or /security).
 * `evidence` is one allowed line each. `bullet` is the matching approved Work bullet, or null for security.
 */
export const domains = [
  {
    id: "system-design",
    label: "System design",
    evidence: experience.bullets[3],
    href: "/work/#system-design",
    bullet: experience.bullets[3],
  },
  {
    id: "processing-pipelines",
    label: "Processing pipelines",
    evidence: experience.bullets[0],
    href: "/work/#processing-pipelines",
    bullet: experience.bullets[0],
  },
  {
    id: "cloud-infrastructure",
    label: "Cloud infrastructure",
    evidence: experience.bullets[1],
    href: "/work/#cloud-infrastructure",
    bullet: experience.bullets[1],
  },
  {
    id: "mobile-apps",
    label: "Mobile apps",
    evidence: experience.bullets[2],
    href: "/work/#mobile-apps",
    bullet: experience.bullets[2],
  },
  {
    id: "security-research",
    label: "Security research",
    evidence: "2019–2021. Hack The Box Hall of Fame, and acknowledgements from NCIIPC and CERT-In.",
    href: "/security/",
    bullet: null,
  },
] as const;

/** Work-page domain groups: only domains that carry an approved Travvir bullet. */
export const workDomains = domains.filter(
  (domain): domain is (typeof domains)[number] & { bullet: string } => domain.bullet !== null,
);

export const earlierRoles = [
  {
    title: "Software Engineer Intern",
    organization: "Expertrons",
    dates: "Dec 2020 – May 2021",
    summary: "",
  },
  {
    title: "Python Developer Intern",
    organization: "Indian Cyber Security Solutions",
    dates: "Feb 2019 – Apr 2019",
    summary: "",
  },
  {
    title: "Freelance",
    organization: "",
    dates: "",
    summary: "Building software for clients.",
  },
] as const;

export const timeline = [
  {
    dates: "Feb 2024 – present",
    title: "Lead Software Developer, Travvir",
    detail: "",
  },
  {
    dates: "Sep 2021 – Jan 2024",
    title: "SDE1 (Software Development Engineer I), Travvir",
    detail: "",
  },
  {
    dates: "Dec 2020 – May 2021",
    title: "Software Engineer Intern, Expertrons",
    detail: "",
  },
  {
    dates: "Feb 2019 – Apr 2019",
    title: "Python Developer Intern, Indian Cyber Security Solutions",
    detail: "",
  },
  {
    dates: "",
    title: "Freelance",
    detail: "Building software for clients.",
  },
] as const;

export const stack = [
  "Python",
  "JavaScript/TypeScript",
  "Kotlin/Java",
  "Django",
  "Flask",
  "Node/Express",
  "Vue",
  "Flutter",
  "RabbitMQ",
  "WebRTC",
  "Nginx",
  "Docker",
  "AWS",
  "GCP",
  "MongoDB",
  "SQL",
] as const;

export const education = [
  {
    title: "BCA (Computer Science), St. Xavier's College, Ranchi",
    dates: "2018–2021",
  },
  {
    title: "Xartup Startup Fellowship",
    dates: "2021",
  },
] as const;
