"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem } from "@/lib/site";

export default function NavMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href
        ? "bg-brand-50 text-brand-700"
        : "text-muted hover:bg-brand-50 hover:text-brand-700"
    }`;

  return (
    <>
      <button
        type="button"
        className="rounded-lg border border-line px-3 py-2 text-sm font-medium md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-surface p-3 shadow-sm md:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
