import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Prompt details" };

async function PromptDetail({ params }: { params: PageProps<"/library/[id]">["params"] }) {
  const { id } = await params;
  return (
    <PagePlaceholder
      title={`Prompt #${id}`}
      description="The full prompt text, tags, notes and a copy button will appear here."
    >
      <Link href="/library" className="text-sm font-semibold text-brand-600 hover:underline">
        ← Back to library
      </Link>
    </PagePlaceholder>
  );
}

export default function PromptDetailPage(props: PageProps<"/library/[id]">) {
  return (
    <Suspense fallback={<p className="text-muted">Loading…</p>}>
      <PromptDetail params={props.params} />
    </Suspense>
  );
}
