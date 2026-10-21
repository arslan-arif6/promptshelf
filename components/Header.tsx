import Link from "next/link";
import { Suspense } from "react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/site";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="relative border-b border-line bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-page py-3">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-ink">
          {SITE_NAME}
          <span className="text-brand-600">.</span>
        </Link>
        <Suspense fallback={<div className="h-9 w-16" aria-hidden />}>
          <NavMenu items={NAV_ITEMS} />
        </Suspense>
      </div>
    </header>
  );
}
