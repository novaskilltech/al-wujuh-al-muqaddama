import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, CheckCircle, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp, BookOpen, GitBranch, ArrowLeftRight, Ban } from "lucide-react";
import { QiraatIssue } from "../data/qiraat/types.js";
import { chapters } from "../data/qiraat/chapters.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { paths } from "../data/qiraat/paths.js";
import { sources } from "../data/qiraat/sources.js";
import { useSpecialistMode } from "../context/SpecialistModeContext.js";
import { useLanguage } from "../context/LanguageContext.js";

interface IssueCardProps {
  issue: QiraatIssue;
  showChapterLink?: boolean;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue, showChapterLink = true }) => {
  const { isSpecialist } = useSpecialistMode();
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const chapter = chapters.find(c => c.id === issue.chapterId);
  const reader = issue.readerId ? readers.find(r => r.id === issue.readerId) : undefined;
  const narrator = issue.narratorId ? narrators.find(n => n.id === issue.narratorId) : undefined;
  const path = issue.pathId ? paths.find(p => p.id === issue.pathId) : undefined;

  // Evidence badge config
  const evidenceBadge = {
    explicit_author_statement: {
      text: "نصّ عليه الشيخ",
      bg: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    derived_from_author_method: {
      text: "مستفاد من منهج الشيخ",
      bg: "bg-sky-50 text-sky-800 border-sky-200"
    },
    secondary_summary: {
      text: "منقول من مصدر ثانوي",
      bg: "bg-stone-100 text-stone-700 border-stone-200"
    },
    pending: {
      text: "قيد التحقيق",
      bg: "bg-amber-50 text-amber-800 border-amber-200"
    }
  }[issue.evidenceLevel];

  // Verification status config
  const verificationBadge = {
    verified_primary: {
      text: "موثق من الأصل",
      bg: "bg-emerald-100/60 text-emerald-900 border-emerald-300"
    },
    verified_secondary: {
      text: "موثق من مصدر ثانوي",
      bg: "bg-blue-100/60 text-blue-900 border-blue-300"
    },
    needs_primary_check: {
      text: "قيد المراجعة",
      bg: "bg-amber-100 text-amber-900 border-amber-300"
    }
  }[issue.verificationStatus];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-stone-100 bg-[#fdfcfb]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* Tags / Badges */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {showChapterLink && chapter && (
              <Link
                to={`/chapters/${chapter.id}`}
                className="px-2.5 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
              >
                {chapter.titleAr}
              </Link>
            )}

            {reader && (
              <Link
                to={`/readers/${reader.id}`}
                className="px-2.5 py-0.5 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-900 font-medium transition-colors"
              >
                {reader.nameAr}
              </Link>
            )}

            {narrator && (
              <Link
                to={`/readers/${narrator.readerId}/${narrator.id}`}
                className="px-2.5 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
              >
                {narrator.nameAr}
              </Link>
            )}

            {issue.surahNumber && (
              <Link
                to={`/surahs/${issue.surahNumber}`}
                className="px-2.5 py-0.5 rounded-md bg-amber-100/60 text-amber-900 font-semibold"
              >
                سورة {issue.surahNameAr || issue.surahNumber}
                {issue.ayahNumbers ? ` (${issue.ayahNumbers.join("، ")})` : ""}
              </Link>
            )}
          </div>

          {/* Scientific Badges */}
          <div className="flex items-center gap-1.5 text-xs">
            {evidenceBadge && (
              <span className={`px-2 py-0.5 rounded-full border text-[11px] font-medium ${evidenceBadge.bg}`}>
                {evidenceBadge.text}
              </span>
            )}
            {verificationBadge && (
              <span className={`px-2 py-0.5 rounded-full border text-[11px] font-medium flex items-center gap-1 ${verificationBadge.bg}`}>
                <ShieldCheck className="w-3 h-3" />
                {verificationBadge.text}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
          <Link to={`/issues/${issue.id}`} className="hover:text-amber-800 transition-colors">
            {issue.titleAr}
          </Link>
        </h3>

        {/* Quranic Text */}
        {issue.quranText && (
          <div className="mt-3 p-3 bg-[#faf7f2] rounded-xl border border-[#efe9de] text-center">
            <span className="font-quran text-lg sm:text-xl text-stone-900 leading-loose">
              « {issue.quranText} »
            </span>
          </div>
        )}
      </div>

      {/* Valid Faces Section */}
      <div className="p-4 sm:p-5 space-y-3 flex-1">
        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
          الأوجه الصحيحة في الأداء
        </div>

        <div className="space-y-2">
          {issue.validFaces.map(face => {
            const isPreferred = face.id === issue.preferredFaceId;
            const isEqual = issue.preferenceStatus === "equal";

            return (
              <div
                key={face.id}
                className={`p-3 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                  isPreferred
                    ? "bg-amber-50/70 border-amber-300 ring-1 ring-amber-300/60"
                    : "bg-white border-stone-200"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {isPreferred ? (
                    <div className="p-1 rounded-md bg-amber-200/80 text-amber-900 mt-0.5">
                      <Star className="w-4 h-4 fill-amber-600 text-amber-700" />
                    </div>
                  ) : (
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-700 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <span className={`text-sm sm:text-base font-semibold block ${isPreferred ? "text-amber-950 font-bold" : "text-stone-800"}`}>
                      {face.labelAr}
                    </span>
                    {face.notesAr && (
                      <span className="text-xs text-stone-500 block mt-0.5">{face.notesAr}</span>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="shrink-0 text-left">
                  {isPreferred ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-2xs">
                      ⭐ الوجه المقدَّم
                    </span>
                  ) : isEqual ? (
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-900 border border-emerald-300">
                      صحيح (وجهان معاً)
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                      صحيح لكنه غير مقدم هنا
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Explanation */}
        <p className="text-sm text-stone-700 mt-3 leading-relaxed">
          {issue.simpleExplanationAr}
        </p>

        {/* Disagreement note if present */}
        {issue.disagreementAr && (
          <div className="p-2.5 rounded-lg bg-orange-50/70 border border-orange-200 text-xs text-orange-900 mt-2">
            <span className="font-bold ml-1">تنبيه في الخلاف:</span>
            {issue.disagreementAr}
          </div>
        )}

        {/* Specialist Mode Details */}
        {(isSpecialist || isExpanded) && (
          <div className="mt-4 pt-4 border-t border-stone-200 space-y-3 text-xs text-stone-700 bg-[#faf8f5] -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-4 sm:p-5">
            <div className="flex items-center justify-between font-bold text-amber-900 border-b border-amber-200/60 pb-1.5">
              <span>تحريرات وضع المتخصص</span>
              {path && (
                <span className="text-stone-600 font-normal">
                  الطريق: <strong className="text-amber-900">{path.nameAr}</strong>
                </span>
              )}
            </div>

            {issue.detailedExplanationAr && (
              <div>
                <span className="font-semibold block text-stone-900">الشرح التفصيلي:</span>
                <p className="text-stone-600 mt-0.5 leading-relaxed">{issue.detailedExplanationAr}</p>
              </div>
            )}

            {issue.evidenceLevel === "derived_from_author_method" && (
              <div className="p-2.5 bg-sky-50 border border-sky-200 rounded-lg text-sky-950">
                <span className="font-bold block text-sky-900">مستفاد من منهج الشيخ:</span>
                <span className="text-stone-700">لم يرد في المصدر نص صريح بهذا اللفظ، وإنما استُفيد الاختيار من الطريق والمنهج الذي اعتمده المؤلف.</span>
              </div>
            )}

            {issue.preferenceReasonAr && (
              <div>
                <span className="font-semibold block text-stone-900">سبب التقديم:</span>
                <p className="text-stone-600 mt-0.5">{issue.preferenceReasonAr}</p>
              </div>
            )}

            {issue.forbiddenCombinations && issue.forbiddenCombinations.length > 0 && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">أوجه ممتنعة (تركيب ممنوع):</span>
                  <span className="text-rose-800">{issue.forbiddenCombinations.join("، ")}</span>
                </div>
              </div>
            )}

            {/* Sources & Risala Pages */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-stone-500">
              <span className="font-semibold text-stone-700">المصادر:</span>
              {issue.sourceIds.map(sId => {
                const src = sources.find(s => s.id === sId);
                return (
                  <span key={sId} className="px-2 py-0.5 bg-white border border-stone-200 rounded">
                    {src?.titleAr || sId}
                  </span>
                );
              })}
              {issue.sourceIds.includes("an-nahhas-risala") && (
                <span className="font-semibold text-amber-800">
                  المصدر: الرسالة الغراء
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer / Toggle details */}
      <div className="px-4 py-2 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <Link to={`/issues/${issue.id}`} className="hover:text-amber-800 font-medium flex items-center gap-1">
          <span>عرض صفحة المسألة المستقلة</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:text-stone-800 flex items-center gap-1 text-stone-600"
        >
          <span>{isExpanded ? "طي التحريرات" : "تفاصيل التحرير"}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
