import Link from "next/link";
export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[var(--accent)] py-4 px-6">
        <div className="mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-white transition-colors"
          >
            habee
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-black">
            <Link href="/#donate" className="hover:text-white">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-6">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-balance">
                This habit-tracking app stores only the information needed to
                create an account, track habits, and send optional reminders.
                Passwords are hashed, authentication tokens live on your device,
                and your habit data is kept in a database to show progress. We
                do not sell personal data or use it for advertising or
                analytics.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account details</strong> – Email address and a hashed
                  password are stored for each account
                </li>
                <li>
                  <strong>Habits</strong> – Each habit entry saves its name,
                  start date, and the user who created it
                </li>
                <li>
                  <strong>Habit logs</strong> – Each completion is recorded with
                  the date and habit ID to mark progress
                </li>
                <li>
                  <strong>Password-reset tokens</strong> – A token and
                  expiration time are saved when you request a password reset
                </li>
                <li>
                  <strong>Local settings</strong> – Reminder preferences (time
                  and enabled/disabled) are stored on your device via
                  AsyncStorage
                </li>
                <li>
                  <strong>Authentication token</strong> – A JWT token is stored
                  in secure device storage to keep you signed in
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">
                How Your Data Is Used
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Registration and login</strong> – Email and password
                  are validated, stored, and used to issue a JWT access token
                  for authentication
                </li>
                <li>
                  <strong>Apple sign-in</strong> – If you choose Apple sign-in,
                  the app sends your Apple identity token to Apple’s servers for
                  verification and creates or reuses an account based on the
                  returned email
                </li>
                <li>
                  <strong>Habit tracking</strong> – Habit names and log dates
                  are used to display daily or monthly progress in the app
                </li>
                <li>
                  <strong>Password reset</strong> – A reset token is generated
                  and stored to let you change your password; the implementation
                  currently logs the reset link rather than emailing it
                </li>
                <li>
                  <strong>Reminders</strong> – Optional daily reminders are
                  scheduled using local notifications; the reminder time is
                  saved on your device
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">
                Third-Party Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Apple ID</strong> – Used for optional single-sign-on;
                  Apple receives the identity token supplied during login for
                  verification
                </li>
                <li>
                  <strong>Expo modules</strong> – The app uses Expo libraries
                  for secure storage and local notifications; these operate on
                  the device and do not transmit habit data externally
                </li>
                <li>
                  No payment processors, email delivery providers, analytics
                  SDKs, or advertising networks are integrated; a search for
                  common analytics or ad libraries returned no results
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may delete your account at any time, which removes your
                  user record and associated habits from the database
                </li>
                <li>
                  Reminders are optional; you can enable, disable, or reschedule
                  them in settings
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">
                Data Sharing and Retention
              </h2>
              <p>
                Data is stored in a database controlled by the app’s operators
                and is retained only as long as necessary for the services
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
            <section>
              <h2 className="text-xl font-semibold mb-2">
                No Advertising or Sale of Data
              </h2>
              <p>
                The codebase contains no advertising or analytics libraries, and
                we do not sell, rent, or share personal data with third parties
                for marketing purposes. Your information is used only to provide
                the habit-tracking features and optional reminders described
                above.
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
