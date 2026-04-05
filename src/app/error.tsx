"use client";

import { VowenaSymbol } from "@/components/vowena-logo";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <VowenaSymbol className="w-12 h-12 text-error/30 mb-6" />
      <p className="font-mono text-sm text-error mb-2">Error</p>
      <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
        Something went wrong
      </h1>
      <p className="text-secondary mb-8 max-w-sm">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
