/**
 * Public facts only. Do not add client names, internal architecture,
 * techniques, specs, scale, or metrics.
 *
 * TODO: Priyam — review every Travvir string in this file against your NDA
 * before merging. Employment copy is role, dates, and one generic sentence.
 */

export const profile = {
  name: "Priyam Harsh",
  location: "Noida, India",
  hero: "Lead Software Engineer. I build backend systems, cloud infrastructure and mobile apps. Former security researcher.",
  email: "priyamharsh14@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/priyamharsh14" },
    { label: "LinkedIn", href: "https://linkedin.com/in/priyamharsh14" },
    { label: "X", href: "https://x.com/priyamharsh14" },
  ],
} as const;

export const experience = {
  organization: "Travvir",
  role: "Lead Software Engineer",
  location: "Noida, India",
  dates: "2021 – present (Lead since February 2024)",
  summary:
    "Leading engineering for an imaging and digital-twin platform: backend, cloud infrastructure, and mobile apps.",
} as const;

export const timeline = [
  {
    dates: "February 2024 – present",
    title: "Lead Software Engineer, Travvir",
    detail: "Noida, India.",
  },
  {
    dates: "2021 – February 2024",
    title: "Travvir",
    detail:
      "Noida, India. TODO: add the title you held before Lead. It was not in the source notes, so this line does not guess one.",
  },
  {
    dates: "2018 – 2021",
    title: "BCA, St. Xavier's College, Ranchi",
    detail: "",
  },
] as const;

/**
 * TODO: Priyam — edit these blurbs. They only name skills, not an employer’s systems.
 */
export const capabilities = [
  {
    title: "Backend and distributed systems",
    summary: "Python, Node, Django, Flask, Express, RabbitMQ, MongoDB, and SQL.",
    href: "",
  },
  {
    title: "Cloud infrastructure",
    summary: "AWS, GCP, Docker, Nginx, and CI/CD.",
    href: "",
  },
  {
    title: "Mobile and cross-platform",
    summary: "Kotlin, Flutter, iOS/Android, and WebRTC.",
    href: "",
  },
  {
    title: "Security research",
    summary: "Past work. Hack The Box Hall of Fame, and critical findings reported through official channels.",
    href: "/security/",
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JS/TS", "Kotlin", "Java", "SQL", "Bash"],
  },
  {
    label: "Frameworks and tools",
    items: ["Django", "Flask", "Express/Node", "Vue", "Flutter", "WebRTC", "RabbitMQ"],
  },
  {
    label: "Platforms",
    items: ["AWS", "GCP", "Docker", "Nginx", "CI/CD", "MongoDB"],
  },
] as const;

export const education = {
  degree: "BCA",
  school: "St. Xavier's College, Ranchi",
  years: "2018–2021",
} as const;
