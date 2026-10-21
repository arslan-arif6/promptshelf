import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-muted">That page does not exist.</p>
      <Link href="/" className="mt-6 inline-block font-semibold text-brand-600 hover:underline">
        Go home
      </Link>
    </section>
  );
}
