import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const cards = [
  { href: "/library", title: "Library", text: "Browse every prompt you have saved." },
  { href: "/collections", title: "Collections", text: "Group prompts by project or topic." },
  { href: "/library/new", title: "New prompt", text: "Capture a prompt in seconds." },
];

export default function HomePage() {
  return (
    <section>
      <p className="mb-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
        Placeholder
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Welcome to <span className="text-brand-600">{SITE_NAME}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{SITE_TAGLINE}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-card border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand-500"
          >
            <h2 className="font-bold">{c.title}</h2>
            <p className="mt-1 text-sm text-muted">{c.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
