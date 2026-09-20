import React from "react";
import { useParams, Link } from "react-router-dom";
import { Star, CheckCircle, ShieldCheck, BookOpen, Layers, User, ArrowLeft, ArrowRight, Ban, GitBranch, AlertTriangle } from "lucide-react";
import { issues } from "../data/qiraat/issues/index.js";
import { chapters } from "../data/qiraat/chapters.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { paths } from "../data/qiraat/paths.js";
import { sources } from "../data/qiraat/sources.js";
import { poemVerses } from "../data/qiraat/poem-verses.js";
import { useLanguage } from "../context/LanguageContext.js";

export const IssueDetailPage: React.FC = () => {
  const { issueId } = useParams<{ issueId: string }>();
  const { dir } = useLanguage();

  const issue = issues.find(i => i.id === issueId);

  if (!issue) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-stone-800">المسألة غير موجودة</h2>
        <Link to="/chapters" className="text-amber-800 underline text-sm mt-2 inline-block">
          العودة لقائمة الأبواب
        </Link>
      </div>
    );
  }

  const chapter = chapters.find(c => c.id === issue.chapterId);
  const reader = issue.readerId ? readers.find(r => r.id === issue.readerId) : undefined;
  const narrator = issue.narratorId ? narrators.find(n => n.id === issue.narratorId) : undefined;
  const path = issue.pathId ? paths.find(p => p.id === issue.pathId) : undefined;

  // Evidence badge config
  const evidenceBadge = {
    explicit_author_statement: {
      text: "نصّ عليه الشيخ",
      desc: "منصوص عليه صراحة في الرسالة الغراء أو القصيدة الحسناء للشيخ علي النحاس",
      bg: "bg-emerald-50 text-emerald-800 border-emerald-300"
    },
    derived_from_author_method: {
      text: "مستفاد من منهج الشيخ",
      desc: "مستفاد ومحرر بناءً على القواعد الكلية ومنهج الشيخ المعتمد",
      bg: "bg-sky-50 text-sky-800 border-sky-300"
    },
    secondary_summary: {
      text: "منقول من مصدر ثانوي",
      desc: "معتمد من المصادر والشروح المعتمدة المقارنة",
      bg: "bg-stone-100 text-stone-700 border-stone-300"
    },
    pending: {
      text: "قيد التحقيق",
      desc: "معلق للتحقق المباشر من النسخة الأصلية للرسالة",
      bg: "bg-amber-50 text-amber-800 border-amber-300"
    }
  }[issue.evidenceLevel];

  // Verification status config
  const verificationBadge = {
    verified_primary: {
      text: "موثق من الأصل",
      bg: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    verified_secondary: {
      text: "موثق من مصدر ثانوي",
      bg: "bg-blue-100 text-blue-900 border-blue-300"
    },
    needs_primary_check: {
      text: "قيد المراجعة",
      bg: "bg-amber-100 text-amber-900 border-amber-300"
    }
  }[issue.verificationStatus];

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/chapters" className="hover:text-amber-800">الأبواب</Link>
        <span>/</span>
        {chapter && (
          <>
            <Link to={`/chapters/${chapter.id}`} className="hover:text-amber-800">{chapter.titleAr}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-stone-800 font-semibold truncate">{issue.titleAr}</span>
      </div>

      {/* Main Issue Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-stone-100 bg-[#fdfcfb]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {chapter && (
                <Link
                  to={`/chapters/${chapter.id}`}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-800 font-medium"
                >
                  {chapter.titleAr}
                </Link>
              )}
              {reader && (
                <Link
                  to={`/readers/${reader.id}`}
                  className="px-3 py-1 bg-amber-50 hover:bg-amber-100 rounded-lg text-amber-900 font-medium"
                >
                  {reader.nameAr}
                </Link>
              )}
              {narrator && (
                <Link
                  to={`/readers/${narrator.readerId}/${narrator.id}`}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-800 font-medium"
                >
                  {narrator.nameAr}
                </Link>
              )}
              {path && (
                <span className="px-3 py-1 bg-amber-50/60 rounded-lg text-amber-900 font-medium border border-amber-200/60">
                  طريق: {path.nameAr}
                </span>
              )}
              {issue.surahNumber && (
                <Link
                  to={`/surahs/${issue.surahNumber}`}
                  className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-emerald-900 font-semibold border border-emerald-200"
                >
                  سورة {issue.surahNameAr || issue.surahNumber}
                  {issue.ayahNumbers ? ` : آية ${issue.ayahNumbers.join("، ")}` : ""}
                </Link>
              )}
            </div>

            {/* Scientific Badges */}
            <div className="flex items-center gap-2 text-xs">
              {evidenceBadge && (
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${evidenceBadge.bg}`}>
                  {evidenceBadge.text}
                </span>
              )}
              {verificationBadge && (
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold flex items-center gap-1 ${verificationBadge.bg}`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {verificationBadge.text}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-quran leading-snug">
            {issue.titleAr}
          </h1>

          {/* Quranic Text */}
          {issue.quranText && (
            <div className="mt-5 p-5 bg-[#faf7f2] rounded-2xl border border-[#efe9de] text-center">
              <span className="font-quran text-2xl sm:text-3xl text-stone-900 leading-loose">
                « {issue.quranText} »
              </span>
            </div>
          )}
        </div>

        {/* Valid Faces Section */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-stone-900 mb-1 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-700 fill-amber-500" />
              <span>الأوجه الصحيحة في الأداء</span>
            </h2>
            <p className="text-xs text-stone-500">
              جميع الأوجه الواردة صحيحة وجائزة في الرواية، مع تمييز الوجه المقدم عند الشيخ النحاس:
            </p>
          </div>

          <div className="space-y-3">
            {issue.validFaces.map(face => {
              const isPreferred = face.id === issue.preferredFaceId;
              const isEqual = issue.preferenceStatus === "equal";

              return (
                <div
                  key={face.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isPreferred
                      ? "bg-amber-50/70 border-amber-300 ring-2 ring-amber-300/60 shadow-xs"
                      : "bg-white border-stone-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isPreferred ? (
                      <div className="p-1.5 rounded-lg bg-amber-200 text-amber-950 mt-0.5">
                        <Star className="w-5 h-5 fill-amber-600 text-amber-700" />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 mt-0.5">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <span className={`text-base sm:text-lg font-bold block ${isPreferred ? "text-amber-950" : "text-stone-800"}`}>
                        {face.labelAr}
                      </span>
                      {face.notesAr && (
                        <span className="text-xs text-stone-500 block mt-0.5">{face.notesAr}</span>
                      )}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="shrink-0">
                    {isPreferred ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-600 text-white shadow-2xs">
                        ⭐ الوجه المقدَّم عند الشيخ النحاس
                      </span>
                    ) : isEqual ? (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                        صحيح (الوجهان معاً بلا ترجيح)
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 border border-stone-200">
                        صحيح لكنه غير مقدم هنا
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          <div className="space-y-3 pt-4 border-t border-stone-100">
            <h3 className="font-bold text-stone-900 text-sm">البيان والتوجيه العلمي:</h3>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-naskh">
              {issue.simpleExplanationAr}
            </p>
            {issue.detailedExplanationAr && (
              <p className="text-sm text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                {issue.detailedExplanationAr}
              </p>
            )}
          </div>

          {/* Preference Reason & Disagreements */}
          {(issue.preferenceReasonAr || issue.disagreementAr || issue.memoryRuleAr || issue.evidenceLevel === "derived_from_author_method") && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {issue.evidenceLevel === "derived_from_author_method" && (
                <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-200 text-sky-950 space-y-1 sm:col-span-2">
                  <h3 className="font-bold text-sm text-sky-900">مستفاد من منهج الشيخ</h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-naskh">
                    لم يرد في المصدر نص صريح بهذا اللفظ، وإنما استُفيد الاختيار من الطريق والمنهج الذي اعتمده المؤلف.
                  </p>
                </div>
              )}
              {issue.preferenceReasonAr && (
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                  <span className="font-bold block">سبب الترجيح عند الشيخ:</span>
                  <p className="leading-relaxed">{issue.preferenceReasonAr}</p>
                </div>
              )}
              {issue.disagreementAr && (
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs text-orange-950 space-y-1">
                  <span className="font-bold block">الخلاف في التقديم بين أهل الأداء:</span>
                  <p className="leading-relaxed">{issue.disagreementAr}</p>
                </div>
              )}
              {issue.memoryRuleAr && (
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950 space-y-1 sm:col-span-2">
                  <span className="font-bold block">ضابط الحفظ والمذاكرة:</span>
                  <p className="leading-relaxed">{issue.memoryRuleAr}</p>
                </div>
              )}
            </div>
          )}

          {/* Tahrirat: dependsOn & forbiddenCombinations */}
          {(issue.dependsOn || issue.forbiddenCombinations) && (
            <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <span className="font-bold text-stone-900 block text-sm">ضوابط التحرير والتركيب:</span>
              {issue.dependsOn && (
                <div className="text-stone-700">
                  <strong>تعتمد هذه المسألة على:</strong> {issue.dependsOn.join("، ")}
                </div>
              )}
              {issue.forbiddenCombinations && issue.forbiddenCombinations.length > 0 && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-start gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">الأوجه الممتنعة (لا يجوز التركيب بينها):</span>
                    <span>{issue.forbiddenCombinations.join("، ")}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sources & Books */}
          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-stone-700">المصادر المعتمدة:</span>
              {issue.sourceIds.map(srcId => {
                const src = sources.find(s => s.id === srcId);
                return (
                  <span key={srcId} className="px-2.5 py-1 bg-stone-100 text-stone-800 rounded-md border border-stone-200">
                    {src?.titleAr || srcId}
                  </span>
                );
              })}
            </div>
            {issue.sourceIds.includes("an-nahhas-risala") && (
              <span className="font-semibold text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                المصدر: الرسالة الغراء
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
