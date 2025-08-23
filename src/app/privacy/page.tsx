import Nav from "@/components/nav";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            {/* Overview */}
            <section id="overview">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-balance">
                Habee stores only what’s needed to create an account, track
                habits, and send optional reminders. Passwords are hashed,
                authentication tokens are stored on your device, and habit data
                lives in our database to show your progress. We do not sell
                personal data or use it for advertising or analytics.
              </p>
            </section>

            {/* Data We Collect */}
            <section id="data-we-collect">
              <h2 className="text-xl font-semibold mb-2">Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account details</strong> – Email address and a hashed
                  password.
                </li>
                <li>
                  <strong>Habits</strong> – Name, start date, frequency
                  (daily/weekly), and the owner.
                </li>
                <li>
                  <strong>Habit logs</strong> – Each completion recorded with
                  date and habit ID.
                </li>
                <li>
                  <strong>Password-reset tokens</strong> – Token + expiry when
                  you request a reset.
                </li>
                <li>
                  <strong>Local settings</strong> – Reminder preferences stored
                  on your device (AsyncStorage/Secure Store).
                </li>
                <li>
                  <strong>Authentication token</strong> – A JWT stored securely
                  on your device to keep you signed in.
                </li>
              </ul>
            </section>

            {/* How Your Data Is Used */}
            <section id="how-we-use">
              <h2 className="text-xl font-semibold mb-2">
                How Your Data Is Used
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Registration and login</strong> – Email/password issue
                  a JWT for authentication.
                </li>
                <li>
                  <strong>Apple Sign-In</strong> – If used, Apple verifies your
                  identity token and we create/reuse your account.
                </li>
                <li>
                  <strong>Habit tracking</strong> – Habit names, schedules, and
                  logs drive daily/monthly progress views.
                </li>
                <li>
                  <strong>Password reset</strong> – A time-limited token enables
                  password changes.
                </li>
                <li>
                  <strong>Reminders</strong> – Optional local notifications
                  scheduled at times you set.
                </li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section id="third-parties">
              <h2 className="text-xl font-semibold mb-2">
                Third-Party Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Apple ID</strong> – Optional single sign-on; Apple
                  receives the identity token for verification.
                </li>
                <li>
                  <strong>Expo modules</strong> – Secure storage and local
                  notifications run on-device; we don’t send habit data to third
                  parties.
                </li>
                <li>
                  <strong>Stripe</strong> – If you choose to support Habee
                  through the
                  <em> Support </em> button, you will be redirected to Stripe
                  Checkout. Stripe collects payment details (such as card
                  number, billing address, and email) directly for processing
                  your donation. Habee does not store this information. See{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Stripe’s Privacy Policy
                  </a>{" "}
                  for more details.
                </li>
                <li>No analytics SDKs or ad networks are integrated.</li>
              </ul>
            </section>

            {/* Your Choices */}
            <section id="your-choices">
              <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Partial data deletion (in-app)</strong> – You can
                  delete individual habits at any time. When a habit is deleted,{" "}
                  <em>all associated logs</em> are permanently removed from our
                  systems.
                </li>
                <li>
                  <strong>Full account deletion (in-app)</strong> – You can
                  permanently delete your account and all associated data.
                </li>
                <li>
                  <strong>Reminders</strong> – Fully optional; enable, disable,
                  or reschedule them in Settings.
                </li>
              </ul>
            </section>

            {/* Data Deletion Details (Policy-focused) */}
            <section id="data-deletion">
              <h2 className="text-xl font-semibold mb-2">Deleting Your Data</h2>

              <h3 className="text-lg font-semibold mt-4">
                Delete specific data (habits & logs)
              </h3>
              <p className="mt-2">
                To remove a subset of your data without deleting your account,
                delete the habit(s) you no longer want. This action also deletes
                all completion logs tied to those habits.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Delete your account (all data)
              </h3>
              <ol className="mt-2 list-decimal pl-6 space-y-1">
                <li>Open the Habee app</li>
                <li>
                  Go to <strong>Settings → Delete Account</strong>
                </li>
                <li>Confirm deletion</li>
              </ol>
              <p className="mt-2">
                Account deletion removes your user record and all associated
                data (habits, logs, reminders) from our active systems.
              </p>
              <p className="mt-2">
                In-app deletion is immediate. For off-app requests, we aim to
                respond within <strong>72 hours</strong>.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Can’t access the app?
              </h3>
              <p className="mt-2">
                Email us at{" "}
                <a className="underline" href="mailto:habee.app@gmail.com">
                  habee.app@gmail.com
                </a>{" "}
                and we’ll assist with deleting your data. For your security, we
                may ask for verification to confirm ownership.
              </p>
            </section>

            {/* Data Sharing & Retention */}
            <section id="retention">
              <h2 className="text-xl font-semibold mb-2">
                Data Sharing and Retention
              </h2>
              <p>
                Data is stored in infrastructure controlled by Habee and
                retained only as long as necessary to provide the services
                described.
              </p>
              <p className="mt-4">
                Passwords are stored only as cryptographic hashes; reset tokens
                expire after one hour.
              </p>
              <p className="mt-4">
                Authentication tokens live solely on your device and are removed
                when you log out.
              </p>
            </section>

            {/* No Ads / Sales */}
            <section id="no-ads">
              <h2 className="text-xl font-semibold mb-2">
                No Advertising or Sale of Data
              </h2>
              <p>
                We do not sell, rent, or share personal data for marketing
                purposes and we do not include advertising or analytics SDKs.
                Your information is used only to provide habit tracking and
                optional reminders.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>
                For privacy questions or data requests, email{" "}
                <a className="underline" href="mailto:habee.app@gmail.com">
                  habee.app@gmail.com
                </a>
                .
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Last updated: 18 August 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm mt-auto">
        © {new Date().getFullYear()} Habee. Built by Mirza Digital Group.
      </footer>
    </div>
  );
}
