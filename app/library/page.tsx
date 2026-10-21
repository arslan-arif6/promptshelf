import type { Metadata } from "next";
import Link from "next/link";
import PagePlaceholder from "@/components/PagePlaceholder";
import { SAMPLE_PROMPT_IDS } from "@/lib/site";

export const metadata: Metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <PagePlaceholder
      title="Library"
      description="All saved prompts will be listed here with search and tag filters."
    >
      <ul className="grid gap-3 sm:grid-cols-3">
        {SAMPLE_PROMPT_IDS.map((id) => (
          <li key={id}>
            <Link
              href={`/library/${id}`}
              className="block rounded-card border border-line bg-surface p-4 text-sm font-medium hover:border-brand-500"
            >
              Sample prompt #{id}
            </Link>
          </li>
        ))}
      </ul>
    </PagePlaceholder>
  );
}
