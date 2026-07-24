import Image from "next/image";
import Link from "next/link";
import { Headphones, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-white px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative w-full max-w-7xl overflow-hidden  px-8 py-14  sm:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-y-8 right-0 w-[58%] bg-[radial-gradient(circle_at_53%_35%,rgba(108,63,238,0.12),transparent_23%),radial-gradient(circle_at_80%_47%,rgba(108,63,238,0.1),transparent_15%),linear-gradient(135deg,transparent_42%,rgba(108,63,238,0.06)_42%,rgba(108,63,238,0.02)_78%,transparent_78%)]" />
        <div className="pointer-events-none absolute right-[15%] top-[16%] h-4 w-4 rounded-full bg-primary/25" />
        <div className="pointer-events-none absolute right-[9%] top-[12%] h-5 w-5 rounded-full bg-primary/20" />
        <div className="pointer-events-none absolute right-[18%] bottom-[22%] h-6 w-6 rounded-full bg-primary/20" />
        <div className="pointer-events-none absolute left-[48%] top-[31%] h-3 w-3 rounded-full bg-primary/18" />

        <div className="relative grid min-h-[430px] items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-sm text-center sm:text-left">
            <p className="text-7xl font-bold leading-none tracking-tight text-primary sm:text-8xl">404</p>
            <h1 className="mt-4 text-xl font-bold text-text-dark sm:text-2xl">Page not found</h1>
            <p className="mt-4 text-sm font-medium leading-6 text-text-light">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark">
                <Home size={16} />
                Go Home
              </Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-bold text-text-dark hover:border-primary/30 hover:bg-primary-lighter hover:text-primary">
                <Headphones size={16} />
                Contact Support
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[430px]">
            <div className="pointer-events-none absolute h-[88%] w-[86%] rounded-full bg-primary/10 blur-3xl" />
            <Image
              src="/illustrations/not-found/astronaut.png"
              alt="Astronaut floating near purple planets"
              width={640}
              height={500}
              priority
              className="relative z-10 h-auto w-full max-w-[560px] select-none object-contain mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_62%,rgba(0,0,0,0.92)_74%,transparent_100%)]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}