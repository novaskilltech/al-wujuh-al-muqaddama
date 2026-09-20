import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, Star, Users, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";
import { getIssuesBySurah } from "../data/qiraat/indexes.js";
import { readers } from "../data/qiraat/readers.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const SurahDetailPage: React.FC = () => {
  const { surahNumber } = useParams<{ surahNumber: string }>();
  const { dir } = useLanguage();

  const num = Number(surahNumber);
  const surahIssues = !isNaN(num) ? getIssuesBySurah(num) : [];

  if (isNaN(num) || surahIssues.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-stone-800">السورة غير موجودة أو لا توجد لها مسائل مسجلة</h2>
        <Link to="/surahs" className="text-amber-800 underline text-sm mt-2 inline-block">
          العودة لفهرس السور
        </Link>
      </div>
    );
  }

  const surahName = surahIssues[0]?.surahNameAr || `سورة رقم ${num}`;

  // Synthesis calculations
  const totalIssues = surahIssues.length;
  const preferredCount = surahIssues.filter(i => i.preferenceStatus === "preferred" && i.preferredFaceId).length;
  const disputesCount = surahIssues.filter(i => i.preferenceStatus === "disputed" || i.preferenceStatus === "equal").length;

  // Distinct readers involved
  const distinctReaderIds = new Set(
    surahIssues.map(i => i.readerId).filter(Boolean) as string[]
  );
  const involvedReaders = readers.filter(r => distinctReaderIds.has(r.id));

  return (
    <div className="space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/surahs" className="hover:text-amber-800">السور</Link>
        <span>/</span>
        <span className="text-stone-800 font-semibold">سورة {surahName} ({num})</span>
      </div>

      {/* Surah Header Banner */}
      <div className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full font-mono">
              سورة رقم {num} في المصحف
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {totalIssues} مسألة محررة
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
            سورة {surahName}
          </h1>

          <p className="text-base text-stone-700 font-naskh">
            تحرير الأوجه المقدمة في الأداء والفرشيات الخاصة بسورة {surahName} عن القراء العشرة.
          </p>

          {/* Synthesis Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <span className="text-2xl font-bold text-stone-900 block">{totalIssues}</span>
              <span className="text-xs text-stone-500">مسائل السورة</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-2xs">
              <span className="text-2xl font-bold text-amber-900 block flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-amber-600 text-amber-700" />
                {preferredCount}
              </span>
              <span className="text-xs text-amber-900">أوجه مقدمة</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-200 text-center shadow-2xs">
              <span className="text-2xl font-bold text-orange-900 block">{disputesCount}</span>
              <span className="text-xs text-orange-900">أوجه خلاف وتساوٍ</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-center shadow-2xs">
              <span className="text-2xl font-bold text-stone-800 block">{involvedReaders.length}</span>
              <span className="text-xs text-stone-500">قراء معنيون</span>
            </div>
          </div>

          {/* Readers involved tags */}
          {involvedReaders.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs text-stone-600">
              <span className="font-semibold">القراء المعنيون بفرش السورة:</span>
              {involvedReaders.map(r => (
                <Link
                  key={r.id}
                  to={`/readers/${r.id}`}
                  className="px-2 py-0.5 rounded-md bg-white border border-stone-200 hover:border-amber-400 text-stone-800 transition-colors"
                >
                  {r.nameAr}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 font-quran border-b border-stone-200 pb-3">
          جميع مسائل سورة {surahName} ({surahIssues.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surahIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};
