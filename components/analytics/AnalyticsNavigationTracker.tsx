"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { pageview } from "@/lib/analytics";

function AnalyticsNavigationTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsNavigationTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsNavigationTrackerInner />
    </Suspense>
  );
}
