import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface CountApiResponse {
  key?: string;
  value?: number;
}

const COUNTER_KEY = "al_wujuh_al_muqaddama_visits";
const BASE_URL = "https://countapi.mileshilliard.com/api/v1";

export const GlobalVisitCounter: React.FC = () => {
  const [visits, setVisits] = useState<number>(() => {
    const cached = localStorage.getItem("awjouh_visit_count");
    return cached ? parseInt(cached, 10) : 1;
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const hasCountedSession = sessionStorage.getItem("awjouh_session_counted");

    const fetchVisits = async () => {
      try {
        // Increment once per browser session; otherwise, just fetch current value
        const endpoint = hasCountedSession
          ? `${BASE_URL}/get/${COUNTER_KEY}`
          : `${BASE_URL}/hit/${COUNTER_KEY}`;

        const res = await fetch(endpoint, {
          signal: controller.signal,
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          const data: CountApiResponse = await res.json();
          if (data && typeof data.value === "number" && isMounted) {
            setVisits(data.value);
            localStorage.setItem("awjouh_visit_count", data.value.toString());
            sessionStorage.setItem("awjouh_session_counted", "1");
          }
        }
      } catch (err) {
        // Silent fallback: keep cached or default value
      } finally {
        clearTimeout(timeoutId);
        if (isMounted) setLoading(false);
      }
    };

    fetchVisits();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-300/80 text-stone-700 text-xs font-medium shadow-2xs">
      <div className="flex items-center gap-1.5 text-amber-800 font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Eye className="w-3.5 h-3.5 text-amber-700" />
        <span>إجمالي الزيارات:</span>
      </div>

      <span className="font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200">
        {visits.toLocaleString("ar-EG")}
      </span>
    </div>
  );
};
