import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Scale, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  ShieldAlert, 
  FileSearch,
  Sparkles,
  Info,
  BookOpen
} from "lucide-react";
import { issues } from "../data/qiraat/issues/index.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

type DisputeTab = "all" | "equal" | "disputed" | "needs_check";

export const DisputesPage: React.FC = () => {
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<DisputeTab>("all");

  React.useEffect(() => {
    document.title = "الخلافات والمسائل الخاصة | الأوجه المقدمة";
  }, []);

  const equalIssues = useMemo(() => {
    return issues.filter(i => i.preferenceStatus === "equal");
  }, []);

  const disputedIssues = useMemo(() => {
    return issues.filter(i => i.preferenceStatus === "disputed");
  }, []);

  const needsCheckIssues = useMemo(() => {
    return issues.filter(
      i => i.verificationStatus === "needs_primary_check" || 
           i.preferenceStatus === "needs_primary_verification"
    );
  }, []);

  const displayedIssues = useMemo(() => {
    if (activeTab === "equal") return equalIssues;
    if (activeTab === "disputed") return disputedIssues;
    if (activeTab === "needs_check") return needsCheckIssues;
    return [...equalIssues, ...disputedIssues, ...needsCheckIssues];
  }, [activeTab, equalIssues, disputedIssues, needsCheckIssues]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-800">الخلافات ومسائل التحقيق والتحرير</span>
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <Scale className="w-3.5 h-3.5 text-amber-700" />
          <span>المسائل الاستثنائية والتحقيقات الدقيقة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          الخلافات والمسائل الخاصة
        </h1>
        <p className="text-stone-600 text-sm max-w-2xl mx-auto leading-relaxed">
          دليل المسائل التي لم يُقطع فيها بتقديم وجه واحد: إما لتساوي الوجهين أداءً عند الشيخ، أو لوقوع خلاف بين أئمة الفن، أو لتعليق المسألة للمراجعة مع النسخة الخطية الأصلية.
        </p>
      </div>

      {/* Scientific Methodology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Equal */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
            <span>وجهان بلا ترجيح (تخيير)</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            مسائل ورد فيها وجهان صحيحان متكافئان في الرواية والأداء، نصّ الشيخ على جوازهما معاً دون تقديم أحدهما على الآخر.
          </p>
          <div className="text-xs font-bold text-sky-800 pt-1">
            {equalIssues.length} مسائل مسجلة
          </div>
        </div>

        {/* Disputed */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>خلاف في التقديم</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            مسائل اختلف فيها أئمة الأداء في أي الوجهين هو المقدم، فذكر الشيخ الخلاف ونقله بأمانة علمية دون الجزم بترجيح قطعي.
          </p>
          <div className="text-xs font-bold text-amber-800 pt-1">
            {disputedIssues.length} مسائل مسجلة
          </div>
        </div>

        {/* Needs check */}
        <div className="bg-rose-50/60 rounded-2xl border border-rose-200 p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-rose-950">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>قيد مراجعة الأصل (معلّق)</span>
          </div>
          <p className="text-xs text-rose-900 leading-relaxed">
            مسائل معلقة حتى التحقق المباشر من النسخة الأصلية للرسالة (بارئكم، وفرق). مستثناة تماماً من مسارات الحفظ المعتمد.
          </p>
          <div className="text-xs font-bold text-rose-800 pt-1">
            {needsCheckIssues.length} مسألتان مستثناتان
          </div>
        </div>
      </div>

      {/* Tabs / Filter Navigation */}
      <div className="bg-white rounded-2xl border border-stone-200 p-2 shadow-xs flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === "all"
                ? "bg-stone-900 text-white shadow-xs"
                : "bg-stone-50 text-stone-700 hover:bg-stone-100"
            }`}
          >
            كل المسائل الخاصة ({equalIssues.length + disputedIssues.length + needsCheckIssues.length})
          </button>
          <button
            onClick={() => setActiveTab("equal")}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === "equal"
                ? "bg-sky-700 text-white shadow-xs"
                : "bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200"
            }`}
          >
            وجهان بلا ترجيح ({equalIssues.length})
          </button>
          <button
            onClick={() => setActiveTab("disputed")}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === "disputed"
                ? "bg-amber-700 text-white shadow-xs"
                : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200"
            }`}
          >
            خلاف في التقديم ({disputedIssues.length})
          </button>
          <button
            onClick={() => setActiveTab("needs_check")}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === "needs_check"
                ? "bg-rose-700 text-white shadow-xs"
                : "bg-rose-50 text-rose-900 hover:bg-rose-100 border border-rose-200"
            }`}
          >
            قيد مراجعة الأصل ({needsCheckIssues.length})
          </button>
        </div>

        <div className="text-stone-400 text-xs px-2">
          معروض: <strong className="text-stone-700 font-bold">{displayedIssues.length}</strong>
        </div>
      </div>

      {/* Special Banner if Needs Check is selected or displayed */}
      {(activeTab === "needs_check" || (activeTab === "all" && needsCheckIssues.length > 0)) && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold block">إشعار الأمانة العلمية:</strong>
            <p className="leading-relaxed text-stone-700">
              حرصاً على سلامة التلقي، تم عزل مسألتي <strong>«بارئكم»</strong> لأبي عمرو و<strong>«فِرْقٍ»</strong> لورش من طريق الأزرق عن وضع الحفظ المعتمد والاختبارات القطعية، لحين مقابلة النسخة الخطية والتأكد التام من عبارة الشيخ رحمه الله في الأصل المعتمد.
            </p>
          </div>
        </div>
      )}

      {/* Issues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {displayedIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
