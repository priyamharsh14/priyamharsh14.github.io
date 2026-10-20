export type RepoInfo = {
  name: string;
  url: string;
  description: string | null;
  stars: number | null;
  language: string | null;
  archived: boolean;
};

export type RepoLoad = {
  repos: RepoInfo[];
  fromApi: boolean;
};

const FEATURED = ["SniffnDetect", "Prawler"] as const;

const HIDDEN = new Set(["priyamharsh14", "priyamharsh14.github.io"]);

/**
 * Used only when the GitHub API cannot be reached.
 * Descriptions are the public GitHub descriptions. Star counts are never stored here.
 */
const FALLBACK: RepoInfo[] = [
  {
    name: "SniffnDetect",
    url: "https://github.com/priyamharsh14/SniffnDetect",
    description: "Advanced DDOS attack detector tool written completely on Python3",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "Prawler",
    url: "https://github.com/priyamharsh14/Prawler",
    description: "Advance Proxy Scraper written in Python3",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "ZipCracker",
    url: "https://github.com/priyamharsh14/ZipCracker",
    description: "Simple Zip Password Cracker written in Python3",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "WiFiPassRecovery",
    url: "https://github.com/priyamharsh14/WiFiPassRecovery",
    description: "WiFi Password Recovery tool written in Python3 (for Windows System)",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "ProjectCodeBrawl",
    url: "https://github.com/priyamharsh14/ProjectCodeBrawl",
    description: "A simple quiz web app made in Django (Python3)",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "PwD-GeN",
    url: "https://github.com/priyamharsh14/PwD-GeN",
    description: "A custom password generator tool written in Python3",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "FindMyFace",
    url: "https://github.com/priyamharsh14/FindMyFace",
    description:
      "A face recognition tool written in Python3 implementing image processing & multi-threading",
    stars: null,
    language: null,
    archived: false,
  },
  {
    name: "ShipmentChain",
    url: "https://github.com/priyamharsh14/ShipmentChain",
    description: null,
    stars: null,
    language: null,
    archived: false,
  },
];

function featuredRank(name: string): number {
  const index = (FEATURED as readonly string[]).indexOf(name);
  return index === -1 ? FEATURED.length : index;
}

function sortRepos(repos: RepoInfo[]): RepoInfo[] {
  return [...repos].sort((a, b) => {
    const aOrder = featuredRank(a.name);
    const bOrder = featuredRank(b.name);
    if (aOrder !== bOrder) return aOrder - bOrder;
    const byStars = (b.stars ?? -1) - (a.stars ?? -1);
    if (byStars !== 0) return byStars;
    return a.name.localeCompare(b.name);
  });
}

function parseRepo(value: unknown): RepoInfo | null {
  if (!value || typeof value !== "object") return null;
  const repo = value as Record<string, unknown>;
  if (repo.fork === true) return null;
  if (typeof repo.name !== "string" || HIDDEN.has(repo.name)) return null;
  if (typeof repo.html_url !== "string") return null;
  return {
    name: repo.name,
    url: repo.html_url,
    description: typeof repo.description === "string" ? repo.description : null,
    stars: typeof repo.stargazers_count === "number" ? repo.stargazers_count : null,
    language: typeof repo.language === "string" ? repo.language : null,
    archived: repo.archived === true,
  };
}

let pending: Promise<RepoLoad> | null = null;

async function fetchRepos(): Promise<RepoLoad> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "priyamharsh14-github-io",
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(
      "https://api.github.com/users/priyamharsh14/repos?per_page=100&type=owner",
      { headers, signal: AbortSignal.timeout(8000) },
    );
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    const data: unknown = await response.json();
    if (!Array.isArray(data)) throw new Error("Unexpected GitHub response");
    const repos = sortRepos(data.map(parseRepo).filter((repo): repo is RepoInfo => repo !== null));
    if (repos.length === 0) throw new Error("GitHub API returned no repos");
    return { repos, fromApi: true };
  } catch (error) {
    console.warn(
      "GitHub API unavailable; rendering repositories without star counts.",
      error instanceof Error ? error.message : error,
    );
    return { repos: sortRepos(FALLBACK), fromApi: false };
  }
}

/** Star counts come from the GitHub API at build time. Failures omit the number. */
export function loadPublicRepos(): Promise<RepoLoad> {
  if (!pending) pending = fetchRepos();
  return pending;
}

export function findRepo(repos: RepoInfo[], name: string): RepoInfo | undefined {
  return repos.find((repo) => repo.name === name);
}

export function formatStars(stars: number | null): string {
  if (stars === null) return "Stars unavailable";
  return stars === 1 ? "1 star" : `${stars} stars`;
}

export function splitRepos(repos: RepoInfo[]): { featured: RepoInfo[]; rest: RepoInfo[] } {
  const featuredNames = new Set<string>(FEATURED);
  return {
    featured: repos.filter((repo) => featuredNames.has(repo.name)),
    rest: repos.filter((repo) => !featuredNames.has(repo.name)),
  };
}
