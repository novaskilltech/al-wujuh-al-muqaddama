import React from "react";
import { useParams, Link } from "react-router-dom";
import { User, Star, ArrowRight, ArrowLeft, Brain, CheckCircle, AlertTriangle, Layers, BookOpen } from "lucide-react";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { paths } from "../data/qiraat/paths.js";
import { getIssuesByNarrator, getSafeStudyIssues } from "../data/qiraat/indexes.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const NarratorDetailPage: React.FC = () => {
  const { readerId, narratorId } = useParams<{ readerId: string; narratorId: string }>();
  const { dir } = useLanguage();

  const reader = readers.find(r => r.id === readerId);
  const narrator = narrators.find(n => n.id === narratorId);
  const narratorPaths = paths.filter(p => p.narratorId === narratorId);
  const narratorIssues = narratorId ? getIssuesByNarrator(narratorId) : [];

  if (!narrator || !reader) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-stone-800">الراوي غير موجود</h2>
        <Link to="/readers" className="text-amber-800 underline text-sm mt-2 inline-block">
          العودة لقائمة القراء
        </Link>
      </div>
    );
  }

  // Automatic computation of stats
  const totalIssues = narratorIssues.length;
  const preferredCount = narratorIssues.filter(i => i.preferenceStatus === "preferred" && i.preferredFaceId).length;
  const equalCount = narratorIssues.filter(i => i.preferenceStatus === "equal").length;
  const disputedCount = narratorIssues.filter(i => i.preferenceStatus === "disputed").length;

  // Key preferred faces (safe items only)
  const safeIssues = getSafeStudyIssues();
  const keyPreferredIssues = narratorIssues.filter(
    i => i.preferenceStatus === "preferred" && safeIssues.some(s => s.id === i.id)
  );

  return (
    <div className="space-y-10 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/readers" className="hover:text-amber-800">القراء</Link>
        <span>/</span>
        <Link to={`/readers/${reader.id}`} className="hover:text-amber-800">{reader.nameAr}</Link>
        <span>/</span>
        <span className="text-stone-800 font-semibold">{narrator.nameAr}</span>
      </div>

      {/* Pedagogical Banner: "[Narrator] في دقيقة" */}
      <div className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
            <span>ملخص الراوي السريع</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
            {narrator.nameAr} في دقيقة
          </h1>

          <p className="text-base sm:text-lg text-stone-700 font-naskh">
            {narrator.fullNameAr} (توفي سنة {narrator.deathYearHijri} هـ)، الراوي {narrator.order === 1 ? "الأول" : "الثاني"} عن الإمام {reader.nameAr}.
          </p>

          {/* Paths (Turuq) */}
          {narratorPaths.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-stone-600">طرق الراوي المحررة:</span>
              {narratorPaths.map(path => (
                <span key={path.id} className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-amber-950 font-medium">
                  {path.nameAr}
                </span>
              ))}
            </div>
          )}

          {/* Automatic Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-stone-900 block">{totalIssues}</span>
              <span className="text-xs text-stone-500 font-medium">إجمالي المسائل</span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-amber-900 block flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-amber-600 text-amber-700" />
                {preferredCount}
              </span>
              <span className="text-xs text-amber-900 font-medium">أوجه مقدمة</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-900 block">{equalCount}</span>
              <span className="text-xs text-emerald-900 font-medium">وجهان بلا ترجيح</span>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-center shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-orange-900 block">{disputedCount}</span>
              <span className="text-xs text-orange-900 font-medium">مواضع خلاف</span>
            </div>
          </div>

          {/* Quiz Action CTA */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              to={`/quiz?narrator=${narrator.id}`}
              className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Brain className="w-4 h-4" />
              <span>اختبر نفسك في {narrator.nameAr}</span>
            </Link>
            <Link
              to={`/compare?rawi1=${narrator.id}`}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-sm transition-colors"
            >
              مقارنة {narrator.nameAr} مع راوٍ آخر
            </Link>
          </div>
        </div>
      </div>

      {/* Key Preferred Faces Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-quran">
              أهم الأوجه المقدمة عند {narrator.nameAr}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              مبنية حصرياً على الأوجه المحررة في الرسالة الغراء والقصيدة الحسناء
            </p>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full">
            {keyPreferredIssues.length} وجه مقدم
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPreferredIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>

      {/* All Issues for this Narrator */}
      <div className="space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-xl font-bold text-stone-900 font-quran">
          جميع مسائل {narrator.nameAr} ({narratorIssues.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {narratorIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};
