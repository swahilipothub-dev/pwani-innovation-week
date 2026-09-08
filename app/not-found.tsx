import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <div className="eyebrow">404</div>
      <h1 className="h-display text-[56px] mt-5">Page not found.</h1>
      <Link href="/" className="btn-primary mt-8 py-4 px-7">Back home</Link>
    </section>
  );
}
