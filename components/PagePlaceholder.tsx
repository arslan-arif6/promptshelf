import type { ReactNode } from "react";

interface PagePlaceholderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PagePlaceholder({ title, description, children }: PagePlaceholderProps) {
  return (
    <section>
      <p className="mb-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
        Placeholder
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{description}</p>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
