import Nav from "@/components/nav";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Habee
          </h1>
          <p className="text-lg leading-relaxed text-balance">
            Habee was built to make habit tracking simple and distraction-free.
            The app focuses on a minimal interface that keeps your routines
            front and center without ads or analytics.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-balance">
            Our goal is to help you stay consistent over the long term. Habee
            lets you manage habits, schedule reminders, and control your data
            with features like account deletion and habit archiving.
          </p>
        </div>
      </main>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}

