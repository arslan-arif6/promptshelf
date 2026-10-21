export const SITE_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "PromptShelf";
export const SITE_TAGLINE = "Save, organize and reuse your best AI prompts.";

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/library", label: "Library" },
  { href: "/collections", label: "Collections" },
  { href: "/library/new", label: "New prompt" },
  { href: "/about", label: "About" },
  { href: "/settings", label: "Settings" },
  { href: "/health", label: "Health" },
];

/** Sample ids used by the placeholder prompt-detail route. */
export const SAMPLE_PROMPT_IDS = ["1", "2", "3"];
