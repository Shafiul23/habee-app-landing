export function Card({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  const base = "rounded-2xl border shadow-sm p-6 backdrop-blur";
  const bg = accent
    ? "bg-[var(--foreground)]/[0.06] border-[var(--foreground)]/[0.12]"
    : "bg-[var(--foreground)]/[0.05] border-[var(--foreground)]/[0.10]";
  return <div className={`${base} ${bg}`}>{children}</div>;
}
