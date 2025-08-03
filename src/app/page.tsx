import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-2">
          <Image src="/bee.svg" alt="Habee logo" width={32} height={32} />
          <span className="text-2xl font-bold">habee</span>
        </div>
        <a
          className="text-sm font-medium hover:text-[var(--accent)]"
          href="https://github.com/habee-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>

      <main className="flex-1 flex flex-col items-center text-center px-8">
        <h1 className="mt-16 text-4xl md:text-5xl font-extrabold">
          Build habits that stick
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-balance">
          Habee helps you cultivate positive routines with friendly reminders,
          streak tracking, and a buzzing community of support.
        </p>
        <div className="mt-8">
          <Image src="/bee.svg" alt="Bee mascot" width={140} height={140} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#features"
            className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold"
          >
            Learn more
          </a>
          <a
            href="https://github.com/habee-app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-full font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <section
        id="features"
        className="bg-white/50 py-20 px-8 mt-16"
      >
        <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">📆</div>
            <h3 className="font-semibold text-xl">Daily reminders</h3>
            <p className="text-sm text-balance">
              Gentle nudges keep your new habits buzzing along.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">📈</div>
            <h3 className="font-semibold text-xl">Visual progress</h3>
            <p className="text-sm text-balance">
              Charts and streaks let you see your growth at a glance.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">🤝</div>
            <h3 className="font-semibold text-xl">Join the hive</h3>
            <p className="text-sm text-balance">
              Share wins with friends and motivate each other.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. All rights reserved.
      </footer>
    </div>
  );
}
