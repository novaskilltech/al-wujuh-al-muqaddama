import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  BookOpen, 
  RotateCw, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  ShieldAlert,
  Info
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";

interface TahriratScenario {
  id: string;
  readerNarrator: string;
  titleAr: string;
  contextAr: string;
  questionAr: string;
  options: {
    id: string;
    textAr: string;
    isAllowed: boolean;
    isPreferred?: boolean;
    statusLabel: "مقدم" | "جائز" | "ممتنع";
  }[];
  explanationAr: string;
  ruleReferenceAr: string;
}

const TAHRIRAT_SCENARIOS: TahriratScenario[] = [
  {
    id: "tahrir-warsh-badal-dhat-ya",
    readerNarrator: "ورش عن نافع (طريق الأزرق)",
    titleAr: "اجتماع مد البدل مع ذوات الياء",
    contextAr: "عند قراءة آية يجتمع فيها مد بدل مع كلمة من ذوات الياء (نحو: ﴿وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ﴾).",
    questionAr: "إذا قرأت لورش بقصر البدل (حركتان) في ﴿لِآدَمَ﴾، فما الوجه الجائز والممتنع في ﴿أَبَىٰ﴾؟",
    options: [
      {
        id: "opt-1",
        textAr: "الفتح فقط (ويمتنع التقليل)",
        isAllowed: true,
        isPreferred: true,
        statusLabel: "مقدم"
      },
      {
        id: "opt-2",
        textAr: "التقليل فقط (ويمتنع الفتح)",
        isAllowed: false,
        statusLabel: "ممتنع"
      },
      {
        id: "opt-3",
        textAr: "يجوز الوجهان: الفتح والتقليل تخييرًا",
        isAllowed: false,
        statusLabel: "ممتنع"
      }
    ],
    explanationAr: "القاعدة المحررة عند الأزرق عن ورش: قصر البدل يوجب الفتح في ذوات الياء، وتوسط البدل يوجب التقليل، وطول البدل يجوز معه الوجهان (الفتح والتقليل). فيمتنع التقليل مع قصر البدل باتفاق أهل التحرير.",
    ruleReferenceAr: "الرسالة الغراء، والشاطبية: وما بعد همز ثابت أو مغير... وقصر ووسط توسط فتى حمى."
  },
  {
    id: "tahrir-warsh-badal-tawasut",
    readerNarrator: "ورش عن نافع (طريق الأزرق)",
    titleAr: "توسط البدل مع ذوات الياء",
    contextAr: "في نحو قوله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ﴾ مع ﴿هُدًى﴾.",
    questionAr: "إذا توسطتَ في البدل (4 حركات) لورش، فما الحكم في ذوات الياء؟",
    options: [
      {
        id: "opt-1",
        textAr: "التقليل (التقليل وجه واحد مروي على التوسط)",
        isAllowed: true,
        isPreferred: true,
        statusLabel: "مقدم"
      },
      {
        id: "opt-2",
        textAr: "الفتح (ويمتنع التقليل)",
        isAllowed: false,
        statusLabel: "ممتنع"
      },
      {
        id: "opt-3",
        textAr: "الفتح والتقليل معاً",
        isAllowed: false,
        statusLabel: "ممتنع"
      }
    ],
    explanationAr: "توسط البدل عند الأزرق يلازمه التقليل وجهاً واحداً في ذوات الياء، ويمتنع الفتح معه قطعاً.",
    ruleReferenceAr: "تحريرات الشاطبية والقصيدة الحسناء لفضيلة الشيخ علي النحاس."
  },
  {
    id: "tahrir-warsh-lamaat-badal",
    readerNarrator: "ورش عن نافع (طريق الأزرق)",
    titleAr: "تغليظ اللامات واجتماعها مع البدل",
    contextAr: "في نحو قوله تعالى: ﴿وَإِذْ آتَيْنَا مُوسَى الْكِتَابَ﴾ أو ﴿فَصَلَّىٰ﴾ مع البدل في الآية.",
    questionAr: "إذا فُتحت ذوات الياء مع تغليظ اللام (نحو: ﴿فَصَلَّىٰ﴾)، فما الممتنع في البدل؟",
    options: [
      {
        id: "opt-1",
        textAr: "يمتنع توسط البدل، ويجوز القصر والطول (والتغليظ مع الفتح)",
        isAllowed: true,
        isPreferred: true,
        statusLabel: "مقدم"
      },
      {
        id: "opt-2",
        textAr: "يمتنع طول البدل",
        isAllowed: false,
        statusLabel: "ممتنع"
      },
      {
        id: "opt-3",
        textAr: "يمتنع قصر البدل ويجب التوسط فقط",
        isAllowed: false,
        statusLabel: "ممتنع"
      }
    ],
    explanationAr: "تغليظ اللام في ذوات الياء (كـ ﴿فَصَلَّىٰ﴾ و ﴿يَصْلَىٰ﴾) لا يكون إلا مع فتحها، ومع فتحها يجوز في البدل القصر والطول، ويمتنع التوسط لأن التوسط يوجب التقليل، والتقليل يمتنع معه تغليظ اللام.",
    ruleReferenceAr: "الرسالة الغراء — باب اللامات وباب البدل."
  },
  {
    id: "tahrir-qalun-silah-munfasil",
    readerNarrator: "قالون عن نافع",
    titleAr: "صلة ميم الجمع مع المد المنفصل",
    contextAr: "في قوله تعالى: ﴿وَمَا أُنزِلَ إِلَيْهِمْ مِنْ قَبْلِكَ﴾.",
    questionAr: "عند قراءة قالون بقصر المنفصل (حركتان)، ما الأوجه الجائزة في ميم الجمع وما هو المقدم؟",
    options: [
      {
        id: "opt-1",
        textAr: "يجوز الإسكان والصلة، والمقدم في الأداء هو الإسكان",
        isAllowed: true,
        isPreferred: true,
        statusLabel: "مقدم"
      },
      {
        id: "opt-2",
        textAr: "تتعين الصلة ويمتنع الإسكان",
        isAllowed: false,
        statusLabel: "ممتنع"
      },
      {
        id: "opt-3",
        textAr: "يتعين الإسكان وتمتنع الصلة",
        isAllowed: false,
        statusLabel: "ممتنع"
      }
    ],
    explanationAr: "على قصر المنفصل لقالون يجوز في ميم الجمع وجهان: الإسكان والصلة، والمقدم أداءً ورواية في كتاب الشيخ هو الإسكان أولاً ثم الصلة ثانياً، والأربعة أوجه كلها صحيحة مروية عنه.",
    ruleReferenceAr: "الرسالة الغراء — باب المد المنفصل وباب ميم الجمع."
  },
  {
    id: "tahrir-khalad-sakt",
    readerNarrator: "خلاد عن حمزة",
    titleAr: "السكت على المفصول لخلاد",
    contextAr: "في نحو قوله تعالى: ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ أو ﴿مَنْ آمَنَ﴾.",
    questionAr: "ما هو الوجه المقدم لخلاد عن حمزة في المفصول (من طريق الشاطبية)؟",
    options: [
      {
        id: "opt-1",
        textAr: "عدم السكت (التحقيق بدون سكت هو المقدم، ومعه وجه السكت)",
        isAllowed: true,
        isPreferred: true,
        statusLabel: "مقدم"
      },
      {
        id: "opt-2",
        textAr: "السكت وجهاً واحداً حتماً",
        isAllowed: false,
        statusLabel: "ممتنع"
      },
      {
        id: "opt-3",
        textAr: "النقل فقط كورش",
        isAllowed: false,
        statusLabel: "ممتنع"
      }
    ],
    explanationAr: "لخلاد في المفصول وجهان: ترك السكت (وهو المقدم) والسكت. بخلاف خلف عن حمزة فإن المقدم عنده هو السكت في المفصول والموصول.",
    ruleReferenceAr: "القصيدة الحسناء والرسالة الغراء — باب السكت على الساكن قبل الهمز."
  }
];

export const TahriratQuizPage: React.FC = () => {
  const { dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentScenario = TAHRIRAT_SCENARIOS[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || !currentScenario) return;
    const selected = currentScenario.options.find(o => o.id === selectedOptionId);
    if (selected && selected.isAllowed && selected.isPreferred) {
      setScore(prev => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < TAHRIRAT_SCENARIOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
          <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/quiz" className="hover:text-amber-700">الاختبار العام</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-800">اختبار التحريرات والتركيبات</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold border border-indigo-300">
          <Zap className="w-3.5 h-3.5 text-indigo-700" />
          <span>علم التحريرات والتركيبات الممنوعة والجائزة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          اختبار التحريرات المتقدمة
        </h1>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          اختبر إتقانك لأوجه التركيب المعقدة (كاجتماع البدل مع ذوات الياء، والصلة مع المنفصل، واللامات مع البدل) لمعرفة ما يمتنع وما يجوز تحريرًا.
        </p>
      </div>

      {/* Rules Notice */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs space-y-1.5 text-amber-950">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <Info className="w-4 h-4 text-amber-700" />
          <span>ضابط التحرير عند القراء:</span>
        </div>
        <p className="leading-relaxed">
          التحرير هو تمييز الأوجه الجائزة من الممتنعة حتى لا يقع القارئ في «التلفيق الممنوع» بتركيب طريق على طريق غير مروي.
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500">
              <span>الحالة {currentIndex + 1} من {TAHRIRAT_SCENARIOS.length}</span>
              <span className="text-indigo-700">النتيجة: {score}</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / TAHRIRAT_SCENARIOS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Scenario Info */}
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold">
              {currentScenario.readerNarrator}
            </div>
            <h2 className="text-xl font-extrabold text-stone-900 font-quran">
              {currentScenario.titleAr}
            </h2>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 font-quran">
              {currentScenario.contextAr}
            </div>
          </div>

          {/* Question */}
          <div className="font-bold text-sm sm:text-base text-stone-900 font-quran pt-2 border-t border-stone-100">
            {currentScenario.questionAr}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentScenario.options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isAllowed && opt.isPreferred;

              let btnStyle = "border-stone-200 bg-white hover:border-stone-300 text-stone-800";
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400/50";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "border-rose-400 bg-rose-50 text-rose-950 font-medium";
                } else {
                  btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                }
              } else if (isSelected) {
                btnStyle = "border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/40 font-bold";
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-right p-4 rounded-2xl border transition-all text-sm flex items-center justify-between ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                      isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-stone-300"
                    }`}>
                      {isSelected ? "✓" : ""}
                    </div>
                    <span className="font-quran">{opt.textAr}</span>
                  </div>

                  {isAnswerSubmitted && (
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                      opt.statusLabel === "مقدم"
                        ? "bg-emerald-100 text-emerald-800"
                        : opt.statusLabel === "ممتنع"
                        ? "bg-rose-100 text-rose-800"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {opt.statusLabel === "ممتنع" ? "⚠️ ممتنع تحريرًا" : `⭐ ${opt.statusLabel}`}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswerSubmitted && (
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-3 text-xs sm:text-sm animate-fade-in">
              <div className="flex items-center gap-2 font-bold text-indigo-950">
                <BookOpen className="w-4 h-4 text-indigo-700" />
                <span>التحرير والتوثيق العلمي:</span>
              </div>
              <p className="text-indigo-950 font-quran leading-relaxed">
                {currentScenario.explanationAr}
              </p>
              <div className="text-xs text-indigo-800/80 border-t border-indigo-200/60 pt-2 font-medium">
                <strong>المصدر:</strong> {currentScenario.ruleReferenceAr}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <Link
              to="/quiz"
              className="text-xs text-stone-400 hover:text-stone-600 font-medium"
            >
              العودة للاختبار العام
            </Link>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOptionId}
                className="px-6 py-2.5 rounded-xl bg-indigo-700 text-white font-bold text-sm shadow-xs hover:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                تأكيد الإجابة
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-sm shadow-xs hover:bg-stone-800 transition-all flex items-center gap-2"
              >
                <span>{currentIndex < TAHRIRAT_SCENARIOS.length - 1 ? "الحالة التالية" : "عرض النتيجة"}</span>
                {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mx-auto border-2 border-indigo-300">
            <Zap className="w-10 h-10 text-indigo-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-quran">
            اكتمل اختبار التحريرات!
          </h2>
          <p className="text-stone-600 text-sm">
            أجبت بنجاح على <strong className="text-indigo-700 font-bold text-lg">{score}</strong> من أصل{" "}
            <strong className="text-stone-900 font-bold text-lg">{TAHRIRAT_SCENARIOS.length}</strong> حالات تركيبية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-stone-100">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 text-white font-bold text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
            <Link
              to="/quiz"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-sm hover:bg-indigo-100 transition-colors"
            >
              الذهاب للاختبار العام
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
