import { showProjectsInNav } from "../config";

export type NavItem = {
  href: string;
  label: string;
  keywords: string;
  /** Shown in the header. Other items stay in the footer and the command menu. */
  primary: boolean;
};

const items: NavItem[] = [
  { href: "/", label: "Home", keywords: "index start", primary: false },
  { href: "/work/", label: "Work", keywords: "experience domains pipelines infrastructure", primary: true },
  { href: "/projects/", label: "Projects", keywords: "personal work", primary: true },
  { href: "/security/", label: "Security", keywords: "research hack the box disclosure", primary: true },
  { href: "/writing/", label: "Writing", keywords: "blog posts rss essays", primary: true },
  { href: "/now/", label: "Now", keywords: "currently focus this month", primary: false },
  { href: "/uses/", label: "Uses", keywords: "setup mac cursor tools gear", primary: false },
  { href: "/about/", label: "About", keywords: "bio timeline resume education", primary: false },
  { href: "/contact/", label: "Contact", keywords: "email mail hello", primary: false },
];

export const nav: NavItem[] = items.filter((item) => showProjectsInNav || item.href !== "/projects/");

export function isCurrent(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}
