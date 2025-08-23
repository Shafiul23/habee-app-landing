export function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--foreground)]/[0.10] bg-[var(--foreground)]/[0.05] p-4 shadow-sm">
      <div className="mt-1 text-[var(--foreground)]">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-base leading-relaxed opacity-90">{desc}</p>
      </div>
    </div>
  );
}
