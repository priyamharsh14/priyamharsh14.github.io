/**
 * Public facts only. No client names, product internals, techniques, specs, or metrics.
 * Travvir’s public site is https://travvir.com/ (checked against the live homepage).
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
  url: "https://travvir.com/",
  dates: "2021 – present (Lead since February 2024)",
  summary:
    "Leading engineering for an imaging and digital-twin platform: backend, cloud infrastructure, and mobile apps.",
  owns: "Backend services, multi-cloud infrastructure (AWS and GCP), and the mobile capture apps and SDKs for iOS and Android.",
  roles: [
    { title: "Lead Software Engineer", dates: "February 2024 – present" },
    { title: "Software Engineer", dates: "2021 – February 2024" },
  ],
} as const;

export const earlierWork = {
  title: "Freelance and internships",
  dates: "Before 2021",
  summary: "Building backend and web software for small teams and clients.",
} as const;

/**
 * TODO: Priyam — confirm or rewrite these. They are general lessons, not a description of Travvir.
 */
export const lessons = [
  "Treat the network and the device as unreliable. A flow that only works on a fast connection, with a careful operator, fails the day it leaves the desk.",
  "Long-running compute has to be observable. If you cannot tell whether a job is working, stuck, or finished, you cannot operate it.",
  "Running on more than one cloud is only useful if you can leave one of them. Keep the work portable, and keep the cloud-specific pieces at the edge.",
  "Own the path from the phone to the service behind it. The failures that matter sit in that handoff, not in either half alone.",
] as const;

export const timeline = [
  {
    dates: "February 2024 – present",
    title: "Lead Software Engineer, Travvir",
    detail: "Noida, India.",
  },
  {
    dates: "2021 – February 2024",
    title: "Software Engineer, Travvir",
    detail: "Noida, India.",
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
    summary: "2019–2021. Hack The Box Hall of Fame, and acknowledgements from NCIIPC and CERT-In.",
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
