import { Card } from "@/components/Card";
import { FeatureRow } from "@/components/FeatureRow";
import Nav from "@/components/nav";
import {
  CalendarCheck,
  Hexagon,
  Bell,
  Archive,
  Edit,
  LayoutGrid,
  NotebookPen,
  Moon,
  Scaling,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          {/* Title */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              About Habee
            </h1>
            <div className="inline-flex items-center gap-2 mt-3">
              <span className="text-sm opacity-70">Habee (ha‑bee)</span>
            </div>
          </header>

          {/* Why I built it */}
          <section className="mt-12">
            <Card>
              <h2 className="text-xl font-semibold">Why I built it</h2>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                I used to track habits in a spreadsheet. It worked: ticking off
                days and seeing a <strong>colour‑coded month</strong> gave
                honest feedback. Wins were rewarding; misses told me to{" "}
                <strong>adjust goals to reality</strong> — 10k steps → 8k, or
                archiving “take supplements” after months of consistency.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                The downside? Spreadsheets are clunky on a phone — horizontal
                scrolling, fiddly cells, slow on the move. Most apps I tried
                were either
                <strong> paywalled</strong> for basic use or{" "}
                <strong>cluttered with ads</strong>. So I built Habee:{" "}
                <strong>clean, ad‑free, distraction‑free</strong>.
              </p>
            </Card>
          </section>

          {/* Brand & philosophy */}
          <section className="mt-10">
            <Card accent>
              <h2 className="text-xl font-semibold">What Habee stands for</h2>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                <strong>Habee</strong> blends <em>habit</em> + <em>bee</em>. The{" "}
                <strong>black &amp; yellow</strong> identity nods to focused,
                consistent work. You’ll notice <strong>hexagons</strong>{" "}
                throughout — a honeycomb motif: simple building blocks that
                compound into something strong.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                Not a bloated “productivity suite” — just a{" "}
                <strong>simple habit tracker</strong> that makes you{" "}
                <strong>feel good about progress</strong> with
                <strong> satisfying visuals</strong>.
              </p>
            </Card>
          </section>

          {/* How to use */}
          <section className="mt-10">
            <Card>
              <h2 className="text-xl font-semibold">
                How it’s meant to be used
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Keep it light and repeatable:
              </p>
              <ol className="list-decimal pl-6 mt-2 text-lg leading-relaxed space-y-2">
                <li>Open the app once a day.</li>
                <li>Tick off what you did (leave misses blank).</li>
                <li>Close the app — ~20 seconds total.</li>
              </ol>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                Habee handles the visuals for you — an automatic
                <strong> calendar view</strong> that reflects your month at a
                glance.
              </p>
            </Card>
          </section>

          {/* Current features */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">What’s in the app today</h2>
            <div className="mt-6 grid gap-4">
              <FeatureRow
                icon={<CalendarCheck className="w-5 h-5" aria-hidden />}
                title="Clean daily logging"
                desc="Fast, focused check‑ins with a minimal UI."
              />
              <FeatureRow
                icon={<Hexagon className="w-5 h-5" aria-hidden />}
                title="Weekly habits (by day)"
                desc="Schedule habits for specific weekdays. Unscheduled days don’t penalise your visuals; in the grid they appear grey (not red)."
              />
              <FeatureRow
                icon={<LayoutGrid className="w-5 h-5" aria-hidden />}
                title="Colour‑coded calendar"
                desc="See streaks and trends; tap a day for completions and details."
              />
              <FeatureRow
                icon={<Bell className="w-5 h-5" aria-hidden />}
                title="Smart reminders"
                desc="Set a daily reminder or per‑habit custom nudges — supportive, not spammy."
              />
              <FeatureRow
                icon={<Archive className="w-5 h-5" aria-hidden />}
                title="Archive & evolve"
                desc="Retire seasonal or ‘complete’ habits without losing past progress."
              />
              <FeatureRow
                icon={<Edit className="w-5 h-5" aria-hidden />}
                title="Edit or delete"
                desc="Fix names, fine‑tune scope, or remove a habit entirely."
              />
            </div>
          </section>

          {/* Roadmap */}
          <section className="mt-12">
            <Card>
              <h2 className="text-xl font-semibold">Where it’s going</h2>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                Incremental improvements guided by user feedback — without
                bloat. On the near‑term list:
              </p>
              <ul className="mt-4 list-disc pl-6 text-lg leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <Moon className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <span>
                    <strong>Dark mode</strong> — easier on the eyes, same clean
                    UI.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <NotebookPen className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <span>
                    <strong>Journalling</strong> — optional reflections
                    alongside your habits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Scaling className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <span>
                    <strong>Non‑binary logging</strong> — track ranges/values
                    (e.g., calories) and see weekly averages to support flexible
                    goals.
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-lg leading-relaxed">
                Have ideas? Email{" "}
                <a
                  className="underline decoration-[var(--accent)] underline-offset-4"
                  href="mailto:habee.app@gmail.com"
                >
                  habee.app@gmail.com
                </a>{" "}
                or leave a review on the App Store.
              </p>
            </Card>
          </section>

          {/* CTA */}
          <section className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/support"
                className="bg-[var(--accent)]  text-black px-6 py-3 rounded-full font-semibold text-center hover:opacity-90 transition"
              >
                How to support Habee
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}
