import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, CheckCircle, RotateCw, ArrowLeft, ArrowRight, ShieldCheck, Check, HelpCircle, AlertCircle, RefreshCw } from "lucide-react";
import { getCertifiedStudyIssues } from "../data/qiraat/indexes.js";
import { chapters } from "../data/qiraat/chapters.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { useLanguage } from "../context/LanguageContext.js";

type CardStatus = "known" | "review" | "hard" | "unseen";

export const MemorizePage: React.FC = () => {
  const { dir } = useLanguage();
  const certifiedIssues = getCertifiedStudyIssues();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState<"all" | "hard" | "review">("all");

  // Local storage for progress
  const [progress, setProgress] = useState<Record<string, CardStatus>>(() => {
    try {
      const saved = localStorage.getItem("awjouh_memorize_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("awjouh_memorize_progress", JSON.stringify(progress));
  }, [progress]);

  // Filter issues based on review status
  const activeIssues = certifiedIssues.filter(issue => {
    const status = progress[issue.id] || "unseen";
    if (filterMode === "hard") return status === "hard";
    if (filterMode === "review") return status === "review";
    return true;
  });

  const currentIssue = activeIssues[currentIndex] || activeIssues[0];

  const handleSetStatus = (status: CardStatus) => {
    if (!currentIssue) return;
    setProgress(prev => ({ ...prev, [currentIssue.id]: status }));
    setIsFlipped(false);
    if (currentIndex < activeIssues.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("هل تريد تصفير تقدم الحفظ والبدء من جديد؟")) {
      setProgress({});
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  // Stats filtered strictly through current certified issues
  const knownCount = certifiedIssues.filter(i => progress[i.id] === "known").length;
  const reviewCount = certifiedIssues.filter(i => progress[i.id] === "review").length;
  const hardCount = certifiedIssues.filter(i => progress[i.id] === "hard").length;

  const currentReader = currentIssue?.readerId ? readers.find(r => r.id === currentIssue.readerId) : undefined;
  const currentNarrator = currentIssue?.narratorId ? narrators.find(n => n.id === currentIssue.narratorId) : undefined;
  const currentChapter = currentIssue ? chapters.find(c => c.id === currentIssue.chapterId) : undefined;

  const prefFace = currentIssue?.validFaces.find(f => f.id === currentIssue.preferredFaceId);
  const otherFaces = currentIssue?.validFaces.filter(f => f.id !== currentIssue.preferredFaceId) || [];

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-700" />
          <span>المسائل المعتمدة قطعيًا للحفظ ({certifiedIssues.length} مسألة)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          احفظ المقدَّم
        </h1>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          بطاقات استذكار ذكية لتثبيت الأوجه المقدمة في الأداء، مبنية حصرياً على النصوص الصريحة لفضيلة الشيخ علي النحاس من النسخة الموثقة.
        </p>
      </div>

      {/* Progress & Filters Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setFilterMode("all"); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${filterMode === "all" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"}`}
          >
            الكل ({certifiedIssues.length})
          </button>
          <button
            onClick={() => { setFilterMode("review"); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${filterMode === "review" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-900 border border-amber-200"}`}
          >
            أراجعها ({reviewCount})
          </button>
          <button
            onClick={() => { setFilterMode("hard"); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${filterMode === "hard" ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-900 border border-rose-200"}`}
          >
            صعبة ({hardCount})
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-stone-500 font-medium">
            تم إتقان: <strong className="text-emerald-700">{knownCount}</strong> من {certifiedIssues.length}
          </span>
          <button
            onClick={handleResetProgress}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg"
            title="إعادة تعيين التقدم"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Flashcard Component */}
      {currentIssue ? (
        <div className="space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[380px] sm:min-h-[420px] bg-gradient-to-b from-[#fdfcfb] to-[#faf8f5] rounded-3xl border-2 border-[#ebdcc8] shadow-md hover:shadow-xl transition-all p-6 sm:p-10 flex flex-col justify-between relative group select-none"
          >
            {/* Top Info */}
            <div className="flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-100/70 text-amber-900 font-bold rounded-lg">
                  بطاقة {currentIndex + 1} من {activeIssues.length}
                </span>
                {currentChapter && (
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-700 font-medium rounded-lg">
                    {currentChapter.titleAr}
                  </span>
                )}
              </div>
              <span className="text-amber-800 font-semibold flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                <span>{isFlipped ? "انقر لرؤية السؤال" : "انقر لرؤية الوجه المقدم"}</span>
              </span>
            </div>

            {/* Front Side: The Issue Question */}
            {!isFlipped ? (
              <div className="py-8 text-center space-y-5 my-auto">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-amber-800">
                    {currentNarrator?.nameAr || currentReader?.nameAr || "عموم القراء"}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-quran leading-snug">
                    {currentIssue.titleAr}
                  </h2>
                </div>

                {currentIssue.quranText && (
                  <div className="p-4 bg-white rounded-2xl border border-stone-200 inline-block max-w-xl mx-auto shadow-2xs">
                    <span className="font-quran text-2xl sm:text-3xl text-stone-900 leading-loose">
                      « {currentIssue.quranText} »
                    </span>
                  </div>
                )}

                <p className="text-sm text-stone-600 font-naskh max-w-md mx-auto">
                  ما هو الوجه المقدَّم في الأداء عند الشيخ علي بن محمد توفيق النحاس في هذه المسألة؟
                </p>
              </div>
            ) : (
              /* Back Side: The Preferred Face & other valid faces */
              <div className="py-6 space-y-6 my-auto">
                {/* Preferred Face Highlight */}
                <div className="p-6 rounded-2xl bg-amber-100/80 border-2 border-amber-300 text-center space-y-2 shadow-xs animate-in zoom-in-95 duration-200">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold shadow-2xs">
                    <Star className="w-4 h-4 fill-white text-white" />
                    <span>⭐ الوجه المقدَّم عند الشيخ النحاس</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-quran pt-1">
                    {prefFace?.labelAr}
                  </h3>
                  {prefFace?.notesAr && (
                    <p className="text-xs text-amber-800 font-medium">{prefFace.notesAr}</p>
                  )}
                </div>

                {/* Other Valid Faces */}
                {otherFaces.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                      الأوجه الصحيحة الأخرى في الرواية:
                    </span>
                    <div className="space-y-1.5">
                      {otherFaces.map(face => (
                        <div
                          key={face.id}
                          className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-xs"
                        >
                          <span className="font-semibold text-stone-800">{face.labelAr}</span>
                          <span className="text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                            صحيح لكنه غير مقدم هنا
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-stone-600 leading-relaxed text-center font-naskh">
                  {currentIssue.simpleExplanationAr}
                </p>
              </div>
            )}

            {/* Bottom Notice */}
            <div className="text-center text-[11px] text-stone-400">
              موثق من الأصل • نصّ صريح للمؤلف
            </div>
          </div>

          {/* Action Buttons: Known, Review, Hard */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleSetStatus("known")}
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>أعرفها (متقن)</span>
            </button>

            <button
              onClick={() => handleSetStatus("review")}
              className="py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              <span>أراجعها</span>
            </button>

            <button
              onClick={() => handleSetStatus("hard")}
              className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <AlertCircle className="w-4 h-4" />
              <span>صعبة</span>
            </button>
          </div>

          {/* Card Navigation */}
          <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(prev => (prev > 0 ? prev - 1 : activeIssues.length - 1));
              }}
              className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg hover:bg-stone-50"
            >
              البطاقة السابقة
            </button>
            <span className="font-mono">
              {currentIndex + 1} / {activeIssues.length}
            </span>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(prev => (prev < activeIssues.length - 1 ? prev + 1 : 0));
              }}
              className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg hover:bg-stone-50"
            >
              البطاقة التالية
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-stone-900">أحسنت! لا توجد بطاقات في هذا التصنيف</h3>
          <p className="text-xs text-stone-500">اختر "الكل" للمتابعة أو راجع قسم بطاقات أخرى.</p>
          <button
            onClick={() => setFilterMode("all")}
            className="px-5 py-2 bg-amber-700 text-white rounded-xl text-sm font-semibold"
          >
            عرض جميع البطاقات
          </button>
        </div>
      )}
    </div>
  );
};
