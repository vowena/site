/**
 * Decorative ornament that sits on top of a section's top hairline border,
 * bisecting it with a small accent diamond/dot. Use as the FIRST child of
 * a `<section className="border-t border-border ...">`.
 */
export function SectionOrnament() {
  return (
    <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <div className="flex items-center gap-1.5">
        <span className="block h-px w-3 bg-border" />
        <span className="block w-1.5 h-1.5 rotate-45 bg-background border border-accent/60" />
        <span className="block h-px w-3 bg-border" />
      </div>
    </div>
  );
}
