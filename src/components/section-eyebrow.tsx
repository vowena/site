type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionEyebrow({
  children,
  align = "left",
  className = "",
}: Props) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="h-px w-6 bg-accent/40" />
      {children}
      <span className="h-px w-6 bg-accent/40" />
    </p>
  );
}
