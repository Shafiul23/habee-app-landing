import Nav from "@/components/nav";
import { BarChart, Bell, CalendarCheck, Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero — What is Habee? */}
      <main className="flex-1 flex flex-col items-center text-center px-6">
        <div className="max-w-3xl w-full">
          <h1 className="mt-12 text-4xl md:text-5xl font-extrabold">
            What is Habee?
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-balance">
            <strong>Habee</strong> (pronounced <em>ha‑bee</em>) is a clean,
            distraction‑free habit tracker. The black and yellow branding is
            inspired by the <strong>bee</strong>: focused, organised, and
            relentless at getting things done. You’ll see{" "}
            <strong>hexagons</strong> throughout the design — a nod to the
            honeycomb: simple building blocks that, over time, create something
            strong and beautiful. That’s the idea behind Habee — consistent,
            lightweight actions that compound into real progress.
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://donate.stripe.com/cNi7sN97gcizangfr43cc00"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
            >
              Support
            </a>
            <a
              href="/about"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
            >
              About
            </a>
          </div>
        </div>
      </main>

      {/* Section 2 — What it does / why it’s useful */}
      <section id="features" className="py-16 px-6 bg-[var(--accent)] mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            What does Habee do?
          </h2>

          <div className="grid gap-16 sm:grid-cols-3 text-left">
            <div className="space-y-4">
              <CalendarCheck className="w-6 h-6 text-black" aria-hidden />
              <h3 className="font-semibold text-lg text-black">
                Daily and weekly habit logging
              </h3>
              <p className="text-sm leading-relaxed text-black">
                Tick off your habits in seconds with a fast, focused interface —
                no clutter, no ads, no productivity paralysis.
              </p>
            </div>

            <div className="space-y-4">
              <BarChart className="w-6 h-6 text-black" />
              <h3 className="font-semibold text-lg text-black">
                Visual streaks
              </h3>
              <p className="text-sm leading-relaxed text-black">
                See your progress day by day — with intuitive calendar colour
                indicators, and deeper break downs on the Grid screen.
              </p>
            </div>

            <div className="space-y-4">
              <Bell className="w-6 h-6 text-black" aria-hidden />
              <h3 className="font-semibold text-lg text-black">
                Smart reminders
              </h3>
              <p className="text-sm leading-relaxed text-black">
                Optional nudges that fit your schedule — supportive, not spammy
                — to keep momentum without stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Support teaser */}
      <section id="donate" className="py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Support Habee</h2>
          <p className="text-lg text-balance">
            Habee is built and maintained by a solo developer and will stay
            <strong> ad‑free</strong> and <strong>tracking‑free</strong>. Your
            support helps cover hosting, design, and future features like habit
            journaling and AI-powered insights — all without selling your data.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/support"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
            >
              Learn more
            </a>
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
