import { useEffect, useState } from "react";

const VISITOR_COUNT_KEY = "ev-awareness-visitor-count";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const storedValue = Number(localStorage.getItem(VISITOR_COUNT_KEY));
    const nextCount = Number.isFinite(storedValue) && storedValue > 0 ? storedValue + 1 : 1;
    localStorage.setItem(VISITOR_COUNT_KEY, String(nextCount));
    setCount(nextCount);
  }, []);

  return (
    <section className="bg-slate-50 py-8 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-950">
          <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Visitor Counter
          </p>
          <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            {count === null ? "Loading..." : count.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Number of visits recorded on this device.
          </p>
        </div>
      </div>
    </section>
  );
}
