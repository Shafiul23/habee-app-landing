import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between py-4 px-8 bg-[var(--accent)]">
        <div className="text-2xl font-bold text-black">habee</div>
        <nav className="flex gap-6 text-sm font-medium text-black">
          <a href="#donate" className="hover:text-white">
            Support
          </a>
          <a href="/privacy" className="hover:text-white text-black">
            Privacy
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center text-center px-8">
        <h1 className="mt-12 text-4xl md:text-5xl font-extrabold">
          Habits with intention. Growth with guidance.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-balance">
          Habee is a clean, distraction-free habit tracker designed to help you
          build daily routines that last. With a minimalist UI and zero ads,
          Habee helps you stay consistent over time — giving you a satisfying
          visual of your long-term progress.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://your-stripe-checkout-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
          >
            Support
          </a>
          <a
            href="https://github.com/shafiul23/habee-app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-full font-semibold"
          >
            View GitHub
          </a>
        </div>
      </main>

      {/* Support section now appears first */}

      {/* Features section now comes after support */}
      <section id="features" className="py-16 px-8 bg-[var(--accent)] mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            What makes Habee different?
          </h2>
          <div className="grid gap-16 sm:grid-cols-3 text-left">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-black">
                ✅ Daily habit logging
              </h3>
              <p className="text-sm leading-relaxed text-black">
                Tick off your goals with ease in a clean, focused interface
                designed for speed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-black">
                📊 Visual streaks
              </h3>
              <p className="text-sm leading-relaxed text-black">
                See your progress day by day — with intuitive calendar color
                indicators.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-black">
                🔔 Smart reminders
              </h3>
              <p className="text-sm leading-relaxed text-black">
                Optional nudges that fit your schedule — no spam, just gentle
                motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="py-10 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Support Habee 🐝</h2>
        <p className="max-w-xl mx-auto text-lg text-balance">
          Habee will always be <strong>ad-free</strong>,{" "}
          <strong>tracking-free</strong>, and{" "}
          <strong>focused on user wellbeing</strong>. It’s built and maintained
          by a solo developer. Your donation helps cover hosting, design, and
          future features like habit journaling and AI-powered insights — all
          without selling your data.
        </p>
        <div className="mt-8">
          <a
            href="https://your-stripe-checkout-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
          >
            Support via Stripe
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}
