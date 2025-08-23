import { Card } from "@/components/Card";
import Nav from "@/components/nav";

import {
  Server,
  Database,
  Apple,
  ArrowRightLeft,
  ShieldCheck,
  Sparkles,
  GitBranch,
  Share2,
  Star,
  MessageSquare,
} from "lucide-react";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Support Habee
            </h1>
            <p className="text-sm opacity-70">
              Keep Habee <strong>ad‑free</strong>,{" "}
              <strong>tracking‑free</strong>, and focused on your progress.
            </p>
          </header>

          {/* Why support */}
          <section className="mt-10">
            <Card>
              <h2 className="text-xl font-semibold">
                Why your support matters
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-balance">
                Habee is built and maintained by a solo developer. Community
                support helps cover the ongoing costs of running the app and
                funds thoughtful improvements — without selling your data or
                cluttering the experience with ads.
              </p>
            </Card>
          </section>

          {/* Where funds go */}
          <section className="mt-6">
            <Card accent>
              <h2 className="text-xl font-semibold">Where your support goes</h2>
              <ul className="mt-4 grid gap-3">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Hosting & infrastructure</p>
                    <p className="opacity-90">
                      App servers, APIs, uptime monitoring — keeping things fast
                      and reliable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Database & storage</p>
                    <p className="opacity-90">
                      Secure, scalable storage for your habits and progress.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Apple className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">App store accounts & tooling</p>
                    <p className="opacity-90">
                      Developer program fees, build pipelines, testing devices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Privacy & security</p>
                    <p className="opacity-90">
                      Best‑practice authentication, backups, and protection —
                      without trackers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Design & polish</p>
                    <p className="opacity-90">
                      Crafting a clean, accessible experience that feels great
                      to use.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </section>

          {/* What support unlocks */}
          <section className="mt-6">
            <Card>
              <h2 className="text-xl font-semibold">
                What your support helps build
              </h2>
              <ul className="mt-4 grid gap-3">
                <li className="flex items-start gap-3">
                  <GitBranch className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Steady feature delivery</p>
                    <p className="opacity-90">
                      Faster iterations on highly requested features, without
                      bloat.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Future ideas</p>
                    <p className="opacity-90">
                      Journalling, dark mode, non‑binary logging, and
                      privacy‑first insights about habit behaviour using AI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRightLeft
                    className="w-5 h-5 mt-1 shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium">Cross‑platform stability</p>
                    <p className="opacity-90">
                      Better build tooling, testing, and QA for smooth updates
                      on iOS and Android.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </section>

          {/* Alternative ways to support */}
          <section className="mt-6">
            <Card accent>
              <h2 className="text-xl font-semibold">Other ways to support</h2>
              <ul className="mt-4 grid gap-3">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Leave a review</p>
                    <p className="opacity-90">
                      Reviews help more people discover Habee.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 mt-1 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium">Share with a friend</p>
                    <p className="opacity-90">
                      If Habee helps you, pass it on.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare
                    className="w-5 h-5 mt-1 shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium">Send feedback</p>
                    <p className="opacity-90">
                      Email{" "}
                      <a
                        className="underline decoration-[var(--accent)] underline-offset-4"
                        href="mailto:habee.app@gmail.com"
                      >
                        habee.app@gmail.com
                      </a>{" "}
                      with ideas or bug reports.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </section>

          {/* CTA */}
          <section className="mt-10">
            <div className="flex justify-center">
              <a
                href="https://donate.stripe.com/cNi7sN97gcizangfr43cc00"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] text-black dark:text-[var(--background)] px-6 py-3 rounded-full font-semibold inline-block hover:opacity-90 transition"
              >
                Support via Stripe
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
