/**
 * Public facts only. No client names, product internals, techniques, specs, or metrics.
 * Travvir’s public site is https://travvir.com/ (checked against the live homepage).
 */

export const profile = {
  name: "Priyam Harsh",
  location: "New Delhi, India",
  hero: "Lead Software Developer. I build backend systems, cloud infrastructure and mobile apps. Former security researcher.",
  email: "priyamharsh14@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/priyamharsh14" },
    { label: "LinkedIn", href: "https://linkedin.com/in/priyamharsh14" },
    { label: "X", href: "https://x.com/priyamharsh14" },
  ],
} as const;

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
    "Built, deployed and has improved the company's 16K panorama image pipeline over several years, running on CPU and GPU compute.",
    "Helped build a custom orchestration system from scratch that scales automatically across CPU and GPU instances on multiple clouds and our in-house servers.",
    "Deployed and maintains the iOS and Android apps, including SDKs for both platforms.",
    "Helped with data collection, data preparation and in-house model training.",
  ],
} as const;

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
  "OpenCV",
  "CUDA",
  "Nginx",
  "Docker",
  "AWS",
  "GCP",
  "MongoDB",
  "SQL",
] as const;

export const capabilities = [
  {
    title: "Stack",
    summary: stack.join(", "),
    href: "",
  },
  {
    title: "Security research",
    summary: "2019–2021. Hack The Box Hall of Fame, and acknowledgements from NCIIPC and CERT-In.",
    href: "/security/",
  },
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
