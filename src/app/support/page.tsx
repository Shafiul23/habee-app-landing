import Nav from "@/components/nav";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Support Habee
          </h1>
          <p className="text-lg leading-relaxed text-balance">
            Habee will always be ad-free, tracking-free, and focused on helping
            you build lasting routines. It&apos;s built and maintained by a solo
            developer who relies on community contributions to keep the project
            running.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-balance">
            Your support covers hosting costs, design work, and development of
            new features like habit journaling and smarter reminders — all while
            keeping your data private and never selling it to advertisers.
          </p>
          <div className="mt-8 text-center">
            <a
              href="https://donate.stripe.com/cNi7sN97gcizangfr43cc00"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-black px-6 py-3 rounded-full font-semibold inline-block"
            >
              Support via Stripe
            </a>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}

