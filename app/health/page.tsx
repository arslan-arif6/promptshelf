import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import PagePlaceholder from "@/components/PagePlaceholder";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = { title: "Health check" };

interface RepoInfo {
  full_name: string;
  stargazers_count: number;
  pushed_at: string;
}

type CheckResult =
  | { ok: true; repo: RepoInfo; ms: number }
  | { ok: false; message: string };

async function runCheck(): Promise<CheckResult> {
  const started = Date.now();
  try {
    const res = await fetch("https://api.github.com/repos/vercel/next.js", {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { ok: false, message: `External API answered with status ${res.status}.` };
    return { ok: true, repo: (await res.json()) as RepoInfo, ms: Date.now() - started };
  } catch {
    return { ok: false, message: "Could not reach the external API." };
  }
}

async function HealthReport() {
  // Opt in to request-time rendering: this report must be fresh on every visit.
  await connection();
  const result = await runCheck();
  const checkedAt = new Date().toISOString();

  return (
    <div className="rounded-card border border-line bg-surface p-5" data-testid="health-report">
      <p className={`font-bold ${result.ok ? "text-ok" : "text-danger"}`}>
        {result.ok ? "● All systems working" : "● Data fetch failed"}
      </p>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">App</dt>
          <dd className="font-medium">{SITE_NAME}</dd>
        </div>
        <div>
          <dt className="text-muted">Checked at (server time)</dt>
          <dd className="font-mono">{checkedAt}</dd>
        </div>
        {result.ok ? (
          <>
            <div>
              <dt className="text-muted">Fetched repository</dt>
              <dd className="font-medium">{result.repo.full_name}</dd>
            </div>
            <div>
              <dt className="text-muted">Stars</dt>
              <dd className="font-medium">{result.repo.stargazers_count.toLocaleString("en-US")}</dd>
            </div>
            <div>
              <dt className="text-muted">Last push</dt>
              <dd className="font-mono">{result.repo.pushed_at}</dd>
            </div>
            <div>
              <dt className="text-muted">Fetch time</dt>
              <dd className="font-medium">{result.ms} ms</dd>
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <dt className="text-muted">Reason</dt>
            <dd className="font-medium">{result.message}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}

export default function HealthPage() {
  return (
    <PagePlaceholder
      title="Health check"
      description="Live data fetched on the server for every visit, proving the deployment can reach the outside world."
    >
      <Suspense fallback={<p className="text-muted">Running checks…</p>}>
        <HealthReport />
      </Suspense>
    </PagePlaceholder>
  );
}
