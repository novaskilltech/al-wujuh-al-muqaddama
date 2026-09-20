import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, FileText, ArrowRight, ArrowLeft, Layers, ShieldCheck } from "lucide-react";
import { issues } from "../data/qiraat/issues/index.js";
import { chapters } from "../data/qiraat/chapters.js";
import { sources } from "../data/qiraat/sources.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const RisalaPage: React.FC = () => {
  const { dir } = useLanguage();
  const risalaSource = sources.find(s => s.id === "an-nahhas-risala");

  useEffect(() => {
    document.title = "الرسالة الغراء | الأوجه المقدمة";
  }, []);

  // Issues that have specific risalaPages documented
  const issuesWithPages = issues.filter(i => i.risalaPages && i.risalaPages.length > 0);
  const issuesFromRisala = issues.filter(i => i.sourceIds.includes("an-nahhas-risala"));

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Presentation Banner */}
      <div className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5 text-amber-800" />
          <span>المصدر النثري الأساسي</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
          الرسالة الغراء
        </h1>
        <h2 className="text-lg sm:text-xl font-bold text-amber-900 font-quran">
          في الأوجه المقدمة في الأداء عن العشرة القراء
        </h2>

        <p className="text-base text-stone-700 font-naskh leading-relaxed">
          {risalaSource?.descriptionAr || "المصدر النثري الأساسي المعتمد في بيان الأوجه المقدمة في الأداء وتحريراتها عند القراء العشرة للشيخ علي بن محمد توفيق النحاس رحمه الله."}
        </p>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
          <strong className="font-bold block text-amber-900">تنبيه علمي:</strong>
          <p className="leading-relaxed">
            هذا المشروع التعليمي مبني على الرسالة الغراء والقصيدة الحسناء للشيخ علي بن محمد توفيق النحاس رحمه الله. وقد تم تمييز المسائل بحسب درجة التوثيق. ولا تزال بعض المواضع قيد المقابلة على النسخة الأصلية، فلا تُعرض ضمن المحتوى التعليمي الموثق حتى يتم التحقق منها.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
            <span className="text-2xl font-bold text-stone-900 block">{issuesFromRisala.length}</span>
            <span className="text-xs text-stone-500">مسألة مستندة لمنهج الرسالة</span>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shadow-2xs">
            <span className="text-2xl font-bold text-emerald-900 block">المصدر الأساسي</span>
            <span className="text-xs text-emerald-900">المادة العلمية المستخلصة من الرسالة الغراء</span>
          </div>
        </div>
      </div>

      {/* Issues Catalog based on Risala */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="text-xl font-bold text-stone-900 font-quran">
            فهرس مسائل الرسالة الغراء ({issuesFromRisala.length})
          </h2>
          <span className="text-xs text-stone-500">
            وفق الأبواب والتحريرات الأصلية
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issuesFromRisala.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};
