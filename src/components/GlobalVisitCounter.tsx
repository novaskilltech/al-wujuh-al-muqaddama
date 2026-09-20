import React, { useEffect, useState } from "react";
import { Activity, Eye } from "lucide-react";

interface CounterResponse {
  count?: number;
}

export const GlobalVisitCounter: React.FC = () => {
  const [visits, setVisits] = useState<number | null>(() => {
    const cached = localStorage.getItem("awjouh_visit_count");
    return cached ? parseInt(cached, 10) : null;
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const hasCountedSession = sessionStorage.getItem("awjouh_session_counted");

    const fetchVisits = async () => {
      try {
        // Increment once per browser session; otherwise, just read
        const endpoint = hasCountedSession
          ? "https://api.counterapi.dev/v1/al-wujuh-al-muqaddama/visits"
          : "https://api.counterapi.dev/v1/al-wujuh-al-muqaddama/visits/up";

        const res = await fetch(endpoint, {
          signal: controller.signal,
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          const data: CounterResponse = await res.json();
          if (data && typeof data.count === "number" && isMounted) {
            setVisits(data.count);
            localStorage.setItem("awjouh_visit_count", data.count.toString());
            sessionStorage.setItem("awjouh_session_counted", "1");
          }
        }
      } catch (err) {
        // Silently fallback to cached value
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchVisits();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/80 border border-stone-200 text-stone-600 text-xs font-medium shadow-2xs">
      <div className="flex items-center gap-1.5 text-amber-800 font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Eye className="w-3.5 h-3.5" />
        <span>إجمالي الزيارات:</span>
      </div>

      <span className="font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200/80">
        {visits !== null ? visits.toLocaleString("ar-EG") : loading ? "..." : "—"}
      </span>
    </div>
  );
};
