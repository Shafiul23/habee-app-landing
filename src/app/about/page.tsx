import Nav from "@/components/nav";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About Habee
          </h1>
          <p className="text-center text-sm opacity-70">
            Habee (ha‑bee) — habits with intention, visuals that keep you going.
          </p>

          {/* Why I built Habee */}
          <section className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold">Why I built it</h2>
            <p className="text-lg leading-relaxed text-balance">
              I used to track habits in a spreadsheet. It worked: I’d tick off
              my day, then get a little dopamine hit seeing a{" "}
              <strong>colour‑coded month</strong>. That view gave me honest
              feedback — what was working and what wasn’t — so I could{" "}
              <strong>adjust goals to reality</strong>. If 10k steps wasn’t
              happening for weeks, I’d shift to 8k. If “take supplements” was
              perfect for 3 months, I’d archive it and make room for a new
              habit.
            </p>
            <p className="text-lg leading-relaxed text-balance">
              The downside? Spreadsheets are clunky on a phone — horizontal
              scrolling, fiddly cells, slow on the move. The apps I tried were
              either <strong>paywalled</strong> for basic usage or{" "}
              <strong>cluttered with ads</strong>. So I built Habee with a
              simple philosophy:{" "}
              <strong>clean, ad‑free, distraction‑free</strong>.
            </p>
          </section>

          {/* Brand & philosophy */}
          <section className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">What Habee stands for</h2>
            <p className="text-lg leading-relaxed text-balance">
              <strong>Habee</strong> is <em>habit</em> + <em>bee</em>. The brand
              is <strong>black and yellow</strong> because we take our cue from
              the bee: consistent work, done over time, creating value and
              beauty. You’ll see <strong>hexagons</strong> in the design — a nod
              to the honeycomb. Simple building blocks that, when repeated,
              become something strong.
            </p>
            <p className="text-lg leading-relaxed text-balance">
              Habee isn’t trying to be an overwhelming productivity suite. It’s
              a <strong>simple habit tracker</strong> that makes you{" "}
              <strong>feel good about progress</strong> and gives you{" "}
              <strong>satisfying visuals</strong> to stay consistent.
            </p>
          </section>

          {/* How it works / Ideal workflow */}
          <section className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold">How it’s meant to be used</h2>
            <p className="text-lg leading-relaxed text-balance">
              The ideal workflow is deliberately short:
            </p>
            <ol className="list-decimal pl-6 text-lg leading-relaxed space-y-2">
              <li>Open the app once a day.</li>
              <li>Tick off what you did (leave missed items blank).</li>
              <li>Close the app — total time: ~20 seconds.</li>
            </ol>
            <p className="text-lg leading-relaxed text-balance">
              Habee handles the visuals — no formatting, no spreadsheet setup —
              just an automatically generated <strong>calendar view</strong>{" "}
              that reflects your month at a glance.
            </p>
          </section>

          {/* Current features */}
          <section className="mt-12 space-y-4">
            <h2 className="text-lg font-semibold mt-6">
              What’s in the app today
            </h2>
            <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
              <li>Clean daily logging with a focused UI.</li>
              <li>
                Option to also create weekly habits. Some tasks might not be
                daily - like journalling or cleaning your room, so the option to
                create habits that are only valid on the days of the week of
                your choosing. For example, a habit set only for Sunday will not
                show up on the other days of the week. On the calendar screen,
                it will not affect the visuals of days it is not registered for
                and on the grid screen will appear as grey instead of red (which
                usually indicates a missed habit)
              </li>
              <li>
                Colour‑coded calendar to see streaks and trends. Users can also
                press on the calendar cells to get more information about days
                of the week - like how many habits were completed for that
                specific day.
              </li>
              <li>
                Optional reminders that nudge, not nag. Users can set up a daily
                reminder in the notifications setting to remind them to log
                habits. Additionally, custom reminders can be set per habit
                using the edit habit menu on the home screen.{" "}
              </li>
              <li>
                Manage habits over time with archiving. Some habits might be
                seasonal or considered complete. If so, the continuing to track
                them may not be productive, but instead of continuing to tick
                them off over time or ignoring them to show up as red, users can
                archive the habits to retire anything they are done with without
                deleting all the visual progress it built up.
              </li>
              <li>
                Habit names can also be edited for any spelling mistakes or
                changes, as well as the option to fully delete the habit to
                remove it from all visual progress tracking.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">Future of Habee?</h2>
            <p className="text-lg leading-relaxed text-balance">
              The plan for Habee is to continously improve based on user
              feedback, and build something that truly reflects the desires of
              the community. Please leave feedback via the App Store or at
              habee.app@gmail.com Some of the current features in the pipeline
              include: dark mode, journalling and non-binary habit logging. With
              this, users will be able to track things like daily calories and
              have the app calculate weekly averages to make goals like being in
              a deficit easier (instead of daily calorie tracking where Weekends
              make it tough to maintain a daily deficit)
            </p>
          </section>

          {/* CTAs */}
          <section className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/support"
              className="border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-full font-semibold text-center"
            >
              How to support Habee
            </a>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}
