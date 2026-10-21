import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-page py-6 text-sm text-muted">
        <strong className="text-ink">{SITE_NAME}</strong> · {SITE_TAGLINE}
      </div>
    </footer>
  );
}
