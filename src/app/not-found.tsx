import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <VowenaSymbol className="w-12 h-12 text-border mb-8" />
      <p className="font-mono text-sm text-accent mb-2">404</p>
      <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
        Page not found
      </h1>
      <p className="text-sm text-muted mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center h-9 px-5 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center h-9 px-5 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors"
        >
          Read docs
        </Link>
      </div>
    </div>
  );
}
