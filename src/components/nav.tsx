import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-[var(--accent)] py-4 px-6">
      <div className="mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-black hover:text-white transition-colors"
        >
          habee
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-black">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/support" className="hover:text-white">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}

