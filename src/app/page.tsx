import Link from "next/link";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 flex flex-col items-center text-center px-6">
        <div className="max-w-3xl w-full">
          <h1 className="mt-12 text-4xl md:text-5xl font-extrabold">
            Build better habits.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-balance">
            Habee is a clean, distraction-free habit tracker designed to help
            you build daily routines that last. With a minimalist UI and zero
            ads, Habee helps you stay consistent over time — giving you a
            satisfying visual of your long-term progress.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/support"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-full font-semibold"
            >
              About
            </Link>
          </div>
        </div>
      </main>

      <section id="features" className="py-16 px-6 bg-[var(--accent)] mt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            Features
          </h2>
          <ul className="list-disc space-y-4 text-left text-lg leading-relaxed text-black">
            <li>
              Create, edit, and delete habits with daily or weekly schedules and
              day-of-week selection.
            </li>
            <li>
              Habit archiving/unarchiving and archived-habits management.
            </li>
            <li>
              Daily reminder plus custom per-habit reminders (up to 20).
            </li>
            <li>
              Support link, about section, logout, and account deletion.
            </li>
          </ul>
        </div>
      </section>

      <section id="donate" className="py-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Support Habee</h2>
          <p className="text-lg text-balance">
            Habee will always be <strong>ad-free</strong>,{" "}
            <strong>tracking-free</strong>, and{" "}
            <strong>focused on user wellbeing</strong>. It’s built and
            maintained by a solo developer. Your donation helps cover hosting,
            design, and future features like habit journaling and AI-powered
            insights — all without selling your data.
          </p>
          <div className="mt-8">
            <a
              href="https://donate.stripe.com/cNi7sN97gcizangfr43cc00"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
            >
              Support via Stripe
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}
