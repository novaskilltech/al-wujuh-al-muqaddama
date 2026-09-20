import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeftRight, 
  CheckCircle, 
  Star, 
  HelpCircle, 
  SlidersHorizontal, 
  ChevronRight,
  Sparkles,
  Users
} from "lucide-react";
import { narrators } from "../data/qiraat/narrators.js";
import { readers } from "../data/qiraat/readers.js";
import { chapters } from "../data/qiraat/chapters.js";
import { issues } from "../data/qiraat/issues/index.js";
import { getIssuesByNarrator } from "../data/qiraat/indexes.js";
import { useLanguage } from "../context/LanguageContext.js";
import { QiraatIssue } from "../data/qiraat/types.js";

const PRESET_COMPARISONS = [
  { id: "nafi-twins", label: "قالون vs ورش (راويا نافع)", n1: "qalun", n2: "warsh" },
  { id: "basri-twins", label: "الدوري vs السوسي (راويا أبي عمرو)", n1: "al-duri-abu-amr", n2: "al-susi" },
  { id: "asim-twins", label: "شعبة vs حفص (راويا عاصم)", n1: "shubah", n2: "hafs" },
  { id: "hamzah-twins", label: "خلف vs خلاد (راويا حمزة)", n1: "khalaf-an-hamza", n2: "khallad" },
  { id: "kisai-twins", label: "أبو الحارث vs الدوري (راويا الكسائي)", n1: "abu-al-harith", n2: "al-duri-al-kisai" }
];

export const ComparePage: React.FC = () => {
  const { dir } = useLanguage();

  const [narrator1Id, setNarrator1Id] = useState<string>("qalun");
  const [narrator2Id, setNarrator2Id] = useState<string>("warsh");
  const [filterDifference, setFilterDifference] = useState<"all" | "different" | "same">("all");
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");

  const narrator1 = narrators.find(n => n.id === narrator1Id);
  const narrator2 = narrators.find(n => n.id === narrator2Id);
  const reader1 = narrator1 ? readers.find(r => r.id === narrator1.readerId) : undefined;
  const reader2 = narrator2 ? readers.find(r => r.id === narrator2.readerId) : undefined;

  // Fetch issues for both narrators
  // In our data, an issue can be tied to narratorId directly, or to readerId (which applies to both unless overridden)
  const n1Issues = useMemo(() => {
    return issues.filter(issue => {
      if (issue.narratorId === narrator1Id) return true;
      if (issue.readerId === narrator1?.readerId && !issue.narratorId) return true;
      return false;
    });
  }, [narrator1Id, narrator1]);

  const n2Issues = useMemo(() => {
    return issues.filter(issue => {
      if (issue.narratorId === narrator2Id) return true;
      if (issue.readerId === narrator2?.readerId && !issue.narratorId) return true;
      return false;
    });
  }, [narrator2Id, narrator2]);

  // Combine unique chapters represented
  const relevantChapterIds = useMemo(() => {
    const set = new Set<string>();
    n1Issues.forEach(i => set.add(i.chapterId));
    n2Issues.forEach(i => set.add(i.chapterId));
    return Array.from(set);
  }, [n1Issues, n2Issues]);

  // Comparison matrix
  // Group by topic/chapter and match issues
  const comparisonRows = useMemo(() => {
    const rows: {
      chapterId: string;
      title: string;
      issue1?: QiraatIssue;
      issue2?: QiraatIssue;
      isSamePreferred: boolean;
      status: "both" | "only_1" | "only_2";
    }[] = [];

    // Find overlapping or corresponding issues
    const allTitles = Array.from(new Set([...n1Issues.map(i => i.titleAr), ...n2Issues.map(i => i.titleAr)]));

    allTitles.forEach(title => {
      const issue1 = n1Issues.find(i => i.titleAr === title);
      const issue2 = n2Issues.find(i => i.titleAr === title);

      const chapterId = issue1?.chapterId || issue2?.chapterId || "";

      if (selectedChapterId !== "all" && chapterId !== selectedChapterId) {
        return;
      }

      let isSamePreferred = false;
      let status: "both" | "only_1" | "only_2" = "both";

      if (issue1 && issue2) {
        status = "both";
        const pref1 = issue1.validFaces.find(f => f.id === issue1.preferredFaceId)?.labelAr;
        const pref2 = issue2.validFaces.find(f => f.id === issue2.preferredFaceId)?.labelAr;
        isSamePreferred = !!pref1 && !!pref2 && pref1 === pref2;
      } else if (issue1) {
        status = "only_1";
      } else {
        status = "only_2";
      }

      if (filterDifference === "different" && (status !== "both" || isSamePreferred)) {
        return;
      }
      if (filterDifference === "same" && (status !== "both" || !isSamePreferred)) {
        return;
      }

      rows.push({
        chapterId,
        title,
        issue1,
        issue2,
        isSamePreferred,
        status
      });
    });

    return rows;
  }, [n1Issues, n2Issues, selectedChapterId, filterDifference]);

  const handleSwap = () => {
    setNarrator1Id(narrator2Id);
    setNarrator2Id(narrator1Id);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-6">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-800">مقارنة الرواة والأوجه المقدمة</span>
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <ArrowLeftRight className="w-3.5 h-3.5 text-amber-700" />
          <span>أداة المقارنة المنهجية</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          المقارنة بين الراويين
        </h1>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          قارن مباشرة بين راويين في الأوجه المقدمة والأوجه الجائزة، مع بيان مواضع الاتفاق والاختلاف في الأداء.
        </p>
      </div>

      {/* Quick Presets */}
      <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
        <span className="text-stone-400 font-medium ml-1">مقارنات شائعة:</span>
        {PRESET_COMPARISONS.map(preset => (
          <button
            key={preset.id}
            onClick={() => {
              setNarrator1Id(preset.n1);
              setNarrator2Id(preset.n2);
            }}
            className={`px-3 py-1.5 rounded-lg border font-bold transition-all ${
              narrator1Id === preset.n1 && narrator2Id === preset.n2
                ? "bg-amber-800 text-white border-amber-800 shadow-xs"
                : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
        {/* Narrator 1 */}
        <div className="md:col-span-5 bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
          <label className="block text-xs font-extrabold text-stone-500 uppercase tracking-wider">
            الراوي الأول:
          </label>
          <select
            value={narrator1Id}
            onChange={e => setNarrator1Id(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
          >
            {narrators.map(n => {
              const r = readers.find(rd => rd.id === n.readerId);
              return (
                <option key={n.id} value={n.id}>
                  {n.nameAr} ({r?.nameAr})
                </option>
              );
            })}
          </select>
          {narrator1 && (
            <div className="text-xs text-stone-500 flex items-center justify-between pt-1">
              <span>الإمام: <strong className="text-stone-800 font-bold">{reader1?.nameAr}</strong></span>
              <span className="text-amber-800 font-bold">{n1Issues.length} مسألة مسجلة</span>
            </div>
          )}
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex justify-center">
          <button
            onClick={handleSwap}
            title="تبديل الراويين"
            className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* Narrator 2 */}
        <div className="md:col-span-5 bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
          <label className="block text-xs font-extrabold text-stone-500 uppercase tracking-wider">
            الراوي الثاني:
          </label>
          <select
            value={narrator2Id}
            onChange={e => setNarrator2Id(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
          >
            {narrators.map(n => {
              const r = readers.find(rd => rd.id === n.readerId);
              return (
                <option key={n.id} value={n.id}>
                  {n.nameAr} ({r?.nameAr})
                </option>
              );
            })}
          </select>
          {narrator2 && (
            <div className="text-xs text-stone-500 flex items-center justify-between pt-1">
              <span>الإمام: <strong className="text-stone-800 font-bold">{reader2?.nameAr}</strong></span>
              <span className="text-amber-800 font-bold">{n2Issues.length} مسألة مسجلة</span>
            </div>
          )}
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-stone-400" />
          <span className="font-bold text-stone-700">تصفية النتائج:</span>
          <button
            onClick={() => setFilterDifference("all")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterDifference === "all" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
            }`}
          >
            الكل ({comparisonRows.length})
          </button>
          <button
            onClick={() => setFilterDifference("different")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterDifference === "different" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-900 border border-amber-200"
            }`}
          >
            المختلفان فقط
          </button>
          <button
            onClick={() => setFilterDifference("same")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterDifference === "same" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-900 border border-emerald-200"
            }`}
          >
            المتفقان في المقدم
          </button>
        </div>

        <div>
          <select
            value={selectedChapterId}
            onChange={e => setSelectedChapterId(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-stone-800"
          >
            <option value="all">جميع الأبواب</option>
            {relevantChapterIds.map(cid => {
              const c = chapters.find(ch => ch.id === cid);
              return (
                <option key={cid} value={cid}>
                  {c?.titleAr || cid}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Comparison Table / Cards */}
      <div className="space-y-4">
        {comparisonRows.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center text-stone-500 text-sm">
            لا توجد مسائل مطابقة لمعايير التصفية الحالية.
          </div>
        ) : (
          comparisonRows.map((row, idx) => {
            const ch = chapters.find(c => c.id === row.chapterId);
            const pref1 = row.issue1?.validFaces.find(f => f.id === row.issue1?.preferredFaceId);
            const pref2 = row.issue2?.validFaces.find(f => f.id === row.issue2?.preferredFaceId);

            return (
              <div
                key={`${row.title}-${idx}`}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4 hover:border-amber-300 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                      {ch?.titleAr || "عام"}
                    </span>
                    <h3 className="font-extrabold text-stone-900 text-base font-quran">
                      {row.title}
                    </h3>
                  </div>

                  <div>
                    {row.status === "both" ? (
                      row.isSamePreferred ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          متفقان في المقدم
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          مختلفان في المقدم
                        </span>
                      )
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
                        لا تنطبق عليه المسألة (خاص بـ {row.status === "only_1" ? narrator1?.nameAr : narrator2?.nameAr})
                      </span>
                    )}
                  </div>
                </div>

                {/* 2-Column Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Column 1 */}
                  <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-stone-700">{narrator1?.nameAr}</span>
                      {row.issue1 && (
                        <Link to={`/issues/${row.issue1.id}`} className="text-amber-700 hover:underline">
                          عرض المسألة ←
                        </Link>
                      )}
                    </div>
                    {row.issue1 ? (
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-amber-100/70 border border-amber-300/70 text-amber-950 font-quran">
                          <span className="font-bold">⭐ المقدم: </span>
                          <span>{pref1?.labelAr || "لم يرجح"}</span>
                        </div>
                        <div className="text-stone-600 font-quran space-y-1">
                          <div className="font-medium text-stone-500">الأوجه الجائزة:</div>
                          <ul className="list-disc list-inside space-y-0.5 pr-1">
                            {row.issue1.validFaces.map(f => (
                              <li key={f.id} className={f.id === row.issue1?.preferredFaceId ? "font-bold text-amber-900" : ""}>
                                {f.labelAr}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-stone-500 italic py-3 text-center bg-stone-100/60 rounded-lg">
                        لا تنطبق عليه المسألة
                      </div>
                    )}
                  </div>

                  {/* Column 2 */}
                  <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-stone-700">{narrator2?.nameAr}</span>
                      {row.issue2 && (
                        <Link to={`/issues/${row.issue2.id}`} className="text-amber-700 hover:underline">
                          عرض المسألة ←
                        </Link>
                      )}
                    </div>
                    {row.issue2 ? (
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-amber-100/70 border border-amber-300/70 text-amber-950 font-quran">
                          <span className="font-bold">⭐ المقدم: </span>
                          <span>{pref2?.labelAr || "لم يرجح"}</span>
                        </div>
                        <div className="text-stone-600 font-quran space-y-1">
                          <div className="font-medium text-stone-500">الأوجه الجائزة:</div>
                          <ul className="list-disc list-inside space-y-0.5 pr-1">
                            {row.issue2.validFaces.map(f => (
                              <li key={f.id} className={f.id === row.issue2?.preferredFaceId ? "font-bold text-amber-900" : ""}>
                                {f.labelAr}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-stone-500 italic py-3 text-center bg-stone-100/60 rounded-lg">
                        لا تنطبق عليه المسألة
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
