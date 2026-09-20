import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, ArrowLeft, ArrowRight, Layers, FileText, AlertCircle } from "lucide-react";
import { poemVerses } from "../data/qiraat/poem-verses.js";
import { chapters } from "../data/qiraat/chapters.js";
import { issues } from "../data/qiraat/issues/index.js";
import { useLanguage } from "../context/LanguageContext.js";

export const QasidaPage: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5 text-amber-800" />
          <span>المنظومة الشعرية المعتمدة</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
          القصيدة الحسناء — النص قيد المقابلة والتحقيق
        </h1>
        <h2 className="text-lg sm:text-xl font-bold text-amber-900 font-quran">
          في الأوجه المقدمة في الأداء عن العشرة القراء
        </h2>

        <p className="text-sm sm:text-base text-stone-700 font-naskh leading-relaxed">
          نظم رائق لفضيلة الشيخ العلامة علي بن محمد توفيق النحاس رحمه الله، جمع فيه ما يُقدَّم في الأداء عن القراء العشرة ورواتهم، ليكون عوناً لطالب العلم على استحضار الوجه المعتمد عند القراءة.
        </p>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
          <strong className="font-bold block text-amber-900">تنبيه علمي:</strong>
          <p className="leading-relaxed">
            هذا المشروع التعليمي مبني على الرسالة الغراء والقصيدة الحسناء للشيخ علي بن محمد توفيق النحاس رحمه الله. وقد تم تمييز المسائل بحسب درجة التوثيق. ولا تزال بعض المواضع قيد المقابلة على النسخة الأصلية، فلا تُعرض ضمن المحتوى التعليمي الموثق حتى يتم التحقق منها.
          </p>
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="text-xl font-bold text-stone-900 font-quran">
            أبيات المنظومة المسجلة ({poemVerses.length})
          </h2>
          <span className="text-xs text-stone-500">
            مرتبة ومربوطة بالمسائل والأبواب
          </span>
        </div>

        <div className="space-y-4">
          {poemVerses.map(verse => {
            const verseChapters = chapters.filter(c => verse.chapterIds?.includes(c.id));
            const verseIssues = issues.filter(i => verse.issueIds?.includes(i.id));

            return (
              <div
                key={verse.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:border-amber-300 transition-all space-y-4"
              >
                {/* Verse Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 font-mono">
                    البيت رقم {verse.order}
                  </span>

                  {verse.textStatus === "pending_transcription" ? (
                    <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                      النص قيد المقابلة على النسخة الأصلية
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      نص معتمد
                    </span>
                  )}
                </div>

                {/* Verse Poetry Display */}
                <div className="p-4 bg-[#faf7f2] rounded-2xl border border-[#efe9de] text-center space-y-2">
                  <p className="font-quran text-lg sm:text-2xl text-stone-900 leading-loose">
                    {verse.fullText}
                  </p>
                </div>

                {/* Associated Chapters & Issues */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  {/* Chapters */}
                  {verseChapters.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-stone-500 font-medium">الباب:</span>
                      {verseChapters.map(c => (
                        <Link
                          key={c.id}
                          to={`/chapters/${c.id}`}
                          className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 rounded text-stone-800 font-semibold"
                        >
                          {c.titleAr}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Issues Links */}
                  {verseIssues.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-stone-500 font-medium">المسائل المرتبطة:</span>
                      {verseIssues.map(i => (
                        <Link
                          key={i.id}
                          to={`/issues/${i.id}`}
                          className="px-2.5 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded font-medium transition-colors"
                        >
                          {i.titleAr}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
