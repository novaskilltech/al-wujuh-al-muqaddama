import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, AlertTriangle, ArrowRight, ArrowLeft, CheckCircle2, BookOpen } from "lucide-react";
import { getIssuesNeedingVerification } from "../data/qiraat/indexes.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const VerificationPage: React.FC = () => {
  const { dir } = useLanguage();
  const issuesNeedingCheck = getIssuesNeedingVerification();

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>الأمانة العلمية والتحقيق المصدري</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          المسائل قيد المراجعة والتحقيق
        </h1>

        <p className="text-base text-stone-700 leading-relaxed font-naskh">
          في إطار التحرير الدقيق لمنهج الشيخ علي بن محمد توفيق النحاس رحمه الله، تم تعليق المسائل التي وقع فيها تعارض في النقول أو في المصادر الثانوية، حتى تتم مراجعتها ومطابقتها حرفياً على النسخة الأصلية المعتمدة من «الرسالة الغراء» و«القصيدة الحسناء».
        </p>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
          <strong className="font-bold block text-amber-900">تنبيه علمي:</strong>
          <p className="leading-relaxed">
            هذا المشروع التعليمي مبني على الرسالة الغراء والقصيدة الحسناء للشيخ علي بن محمد توفيق النحاس رحمه الله. وقد تم تمييز المسائل بحسب درجة التوثيق. ولا تزال بعض المواضع قيد المقابلة على النسخة الأصلية، فلا تُعرض ضمن المحتوى التعليمي الموثق حتى يتم التحقق منها.
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-amber-200/80 text-xs text-stone-600 space-y-1.5">
          <strong className="text-amber-950 block text-sm">ضوابط التعامل مع هذه المسائل:</strong>
          <ul className="list-disc list-inside space-y-1 text-stone-700">
            <li>مستبعدة تماماً من بطاقات الحفظ «المعتمدة» (احفظ المقدم).</li>
            <li>لا ترد كإجابات قطعية في الاختبارات العامة حتى يُحسم نص المؤلف فيها.</li>
            <li>تعرض هنا بكامل أوجهها لبيان مواضع التحقيق العلمي بين أهل الأداء.</li>
          </ul>
        </div>
      </div>

      {/* Issues List (Retrieved dynamically via getIssuesNeedingVerification()) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="text-xl font-bold text-stone-900 font-quran">
            المسائل المعلقة حالياً ({issuesNeedingCheck.length})
          </h2>
          <span className="text-xs text-amber-800 bg-amber-100 px-3 py-1 rounded-full font-semibold">
            قيد التحقيق
          </span>
        </div>

        <div className="space-y-6">
          {issuesNeedingCheck.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};
