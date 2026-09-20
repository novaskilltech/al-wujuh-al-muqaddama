import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { User, Users, Star, ArrowRight, ArrowLeft, Layers, BookOpen, AlertCircle } from "lucide-react";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { chapters } from "../data/qiraat/chapters.js";
import { getIssuesByReader } from "../data/qiraat/indexes.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const ReaderDetailPage: React.FC = () => {
  const { readerId } = useParams<{ readerId: string }>();
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "usul" | "farsh" | "preferred" | "disputed">("all");

  const reader = readers.find(r => r.id === readerId);
  const readerNarrators = narrators.filter(n => n.readerId === readerId);
  const allReaderIssues = readerId ? getIssuesByReader(readerId) : [];

  React.useEffect(() => {
    if (reader) {
      document.title = `قراءة الإمام ${reader.nameAr} | الأوجه المقدمة`;
    }
  }, [reader]);

  if (!reader) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-stone-800">القارئ غير موجود</h2>
        <Link to="/readers" className="text-amber-800 underline text-sm mt-2 inline-block">
          العودة لقائمة القراء
        </Link>
      </div>
    );
  }

  // Filter issues based on active tab
  const filteredIssues = allReaderIssues.filter(issue => {
    const ch = chapters.find(c => c.id === issue.chapterId);
    if (activeTab === "usul") return ch?.category === "usul";
    if (activeTab === "farsh") return ch?.category === "farsh";
    if (activeTab === "preferred") return issue.preferenceStatus === "preferred";
    if (activeTab === "disputed") return issue.preferenceStatus === "disputed" || issue.preferenceStatus === "equal";
    return true;
  });

  const preferredCount = allReaderIssues.filter(i => i.preferenceStatus === "preferred").length;
  const disputedCount = allReaderIssues.filter(i => i.preferenceStatus === "disputed" || i.preferenceStatus === "equal").length;

  return (
    <div className="space-y-8 py-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/readers" className="hover:text-amber-800">القراء</Link>
        <span>/</span>
        <span className="text-stone-800 font-semibold">{reader.nameAr}</span>
      </div>

      {/* Reader Profile Banner */}
      <div className="bg-gradient-to-br from-[#f8f2e7] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs">
        <div className="max-w-4xl space-y-4">
          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
            الإمام {reader.order} من العشرة
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
            الإمام {reader.nameAr}
          </h1>
          <p className="text-base sm:text-lg text-stone-700 font-naskh">
            {reader.fullNameAr}
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-stone-600 pt-1">
            <span className="px-3 py-1 bg-white border border-stone-200 rounded-lg">
              الوفاة: <strong>{reader.deathYearHijri} هـ</strong>
            </span>
            <span className="px-3 py-1 bg-white border border-stone-200 rounded-lg">
              البلد: <strong>{reader.cityAr}</strong>
            </span>
            <span className="px-3 py-1 bg-white border border-stone-200 rounded-lg">
              إجمالي المسائل: <strong>{allReaderIssues.length}</strong>
            </span>
          </div>
        </div>

        {/* Narrators Links */}
        <div className="mt-8 pt-6 border-t border-[#ebdcc8]/80">
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
            راويا الإمام {reader.nameAr} (انقر للاطلاع على فقه الراوي والتحريرات الخاصة به):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {readerNarrators.map(narrator => (
              <Link
                key={narrator.id}
                to={`/readers/${reader.id}/${narrator.id}`}
                className="p-4 rounded-2xl bg-white hover:bg-amber-50/80 border border-stone-200 hover:border-amber-300 transition-all flex items-center justify-between group shadow-2xs"
              >
                <div>
                  <span className="text-base font-bold text-stone-900 group-hover:text-amber-900 block">
                    {narrator.nameAr}
                  </span>
                  <span className="text-xs text-stone-500">
                    {narrator.fullNameAr} (ت {narrator.deathYearHijri} هـ)
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1">
                  <span>فقه الراوي</span>
                  {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
        {[
          { key: "all", label: `الكل (${allReaderIssues.length})` },
          { key: "usul", label: "الأصول" },
          { key: "farsh", label: "الفرش" },
          { key: "preferred", label: `المقدم (⭐ ${preferredCount})` },
          { key: "disputed", label: `الخلاف والأوجه (${disputedCount})` }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === tab.key
                ? "bg-amber-700 text-white shadow-xs"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        {filteredIssues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIssues.map(issue => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 text-stone-500">
            لا توجد مسائل مسجلة في هذا القسم حالياً.
          </div>
        )}
      </div>
    </div>
  );
};
