"use client";

import DisplayCards from "@/components/ui/display-cards";

export default function DisplayCardsDemo() {
  return (
    <section className="flex w-full min-h-screen items-center justify-center bg-background">
      <div className="max-w-6xl px-6">
        {/* Demo: stacked mode (title removed) */}
        <DisplayCards stacked={true} />
      </div>
    </section>
  );
}
