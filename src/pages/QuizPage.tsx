import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Star, 
  RotateCw, 
  Award, 
  BookOpen, 
  Filter, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { getSafeStudyIssues, getCertifiedStudyIssues } from "../data/qiraat/indexes.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { chapters } from "../data/qiraat/chapters.js";
import { useLanguage } from "../context/LanguageContext.js";
import { QiraatIssue } from "../data/qiraat/types.js";

type QuizMode = "certified" | "all_safe";

export const QuizPage: React.FC = () => {
  const { dir } = useLanguage();

  // Settings / Setup state
  const [isStarted, setIsStarted] = useState(false);
  const [quizMode, setQuizMode] = useState<QuizMode>("certified");
  const [selectedReaderId, setSelectedReaderId] = useState<string>("all");
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active quiz state
  const [questions, setQuestions] = useState<QiraatIssue[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFaceId, setSelectedFaceId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<{
    issue: QiraatIssue;
    selectedFaceId: string;
    isCorrect: boolean;
  }[]>([]);

  // Filter pool of issues
  const availablePool = useMemo(() => {
    const base = quizMode === "certified" ? getCertifiedStudyIssues() : getSafeStudyIssues();
    // Exclude issues without a preferredFaceId (like equal or disputed)
    return base.filter(issue => issue.preferredFaceId && issue.validFaces.length > 1);
  }, [quizMode]);

  const filteredPool = useMemo(() => {
    return availablePool.filter(issue => {
      if (selectedReaderId !== "all") {
        const matchesReader = issue.readerId === selectedReaderId;
        const matchesNarrator = issue.narratorId && narrators.find(n => n.id === issue.narratorId)?.readerId === selectedReaderId;
        if (!matchesReader && !matchesNarrator) return false;
      }
      if (selectedChapterId !== "all" && issue.chapterId !== selectedChapterId) {
        return false;
      }
      return true;
    });
  }, [availablePool, selectedReaderId, selectedChapterId]);

  const handleStartQuiz = () => {
    // Shuffle and pick
    const shuffled = [...filteredPool].sort(() => 0.5 - Math.random());
    const count = Math.min(questionCount, shuffled.length);
    setQuestions(shuffled.slice(0, count));
    setCurrentIndex(0);
    setSelectedFaceId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setAnswersHistory([]);
    setIsStarted(true);
  };

  const currentQuestion = questions[currentIndex];

  const handleSelectFace = (faceId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedFaceId(faceId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedFaceId || !currentQuestion) return;
    const isCorrect = selectedFaceId === currentQuestion.preferredFaceId;
    if (isCorrect) setScore(prev => prev + 1);
    setIsAnswerSubmitted(true);
    setAnswersHistory(prev => [
      ...prev,
      { issue: currentQuestion, selectedFaceId, isCorrect }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedFaceId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setIsStarted(false);
    setIsFinished(false);
  };

  const reader = currentQuestion?.readerId ? readers.find(r => r.id === currentQuestion.readerId) : undefined;
  const narrator = currentQuestion?.narratorId ? narrators.find(n => n.id === currentQuestion.narratorId) : undefined;
  const chapter = currentQuestion ? chapters.find(c => c.id === currentQuestion.chapterId) : undefined;

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      {/* Top Banner / Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
          <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-800">اختبار الأوجه المقدمة</span>
        </div>
        <Link
          to="/quiz/tahrirat"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold hover:bg-indigo-100 transition-colors"
        >
          <Zap className="w-3.5 h-3.5 text-indigo-600" />
          <span>اختبار التحريرات والتركيبات</span>
        </Link>
      </div>

      {!isStarted ? (
        /* Configuration Screen */
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2 border border-amber-300">
              <HelpCircle className="w-8 h-8 text-amber-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
              اختبار الأوجه المقدَّمة في الأداء
            </h1>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              اختبر حفظك واستيعابك للأوجه المقدمة عند القراء العشرة ورواتهم وفق نصوص وضوابط فضيلة الشيخ علي النحاس.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
            {/* Mode selection */}
            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-stone-700 uppercase tracking-wider">
                مستوى التدقيق العلمي:
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setQuizMode("certified")}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    quizMode === "certified"
                      ? "border-amber-500 bg-amber-50/70 shadow-xs"
                      : "border-stone-200 hover:border-stone-300 bg-stone-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-stone-900">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>المسائل المعتمدة قطعيًا (موصى به)</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    يشمل فقط المسائل المنصوص عليها صراحة في الرسالة أو المنظومة وتوثيقها قطعي.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setQuizMode("all_safe")}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    quizMode === "all_safe"
                      ? "border-amber-500 bg-amber-50/70 shadow-xs"
                      : "border-stone-200 hover:border-stone-300 bg-stone-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-stone-900">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>جميع المسائل المحققة</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    يشمل كل المسائل المحققة (المصرح بها والمستفادة من منهجه)، مع استثناء المعلق للمراجعة.
                  </p>
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-stone-700 mb-1.5">
                  حسب القارئ:
                </label>
                <select
                  value={selectedReaderId}
                  onChange={e => setSelectedReaderId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                >
                  <option value="all">جميع القراء العشرة</option>
                  {readers.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.nameAr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-stone-700 mb-1.5">
                  حسب الباب القرآني:
                </label>
                <select
                  value={selectedChapterId}
                  onChange={e => setSelectedChapterId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                >
                  <option value="all">جميع الأبواب والفرش</option>
                  {chapters.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.titleAr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-stone-700 mb-1.5">
                  عدد الأسئلة:
                </label>
                <div className="flex items-center gap-2">
                  {[5, 10, 20, 50].map(count => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${
                        questionCount === count
                          ? "bg-amber-700 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Start CTA */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500 font-medium">
              الأسئلة المتوفرة وفق هذا التحديد:{" "}
              <strong className="text-stone-900 font-bold">{filteredPool.length} مسألة</strong>
            </div>

            <button
              onClick={handleStartQuiz}
              disabled={filteredPool.length === 0}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-700 text-white font-extrabold text-sm shadow-md hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>ابدأ الاختبار الآن</span>
            </button>
          </div>
        </div>
      ) : isFinished ? (
        /* Result Summary Screen */
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border-2 border-amber-300">
              <Award className="w-10 h-10 text-amber-700" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-quran">
              اكتمل الاختبار!
            </h2>
            <p className="text-stone-600 text-sm">
              حققت <strong className="text-amber-700 font-bold text-lg">{score}</strong> من أصل{" "}
              <strong className="text-stone-900 font-bold text-lg">{questions.length}</strong> (
              {Math.round((score / questions.length) * 100)}%)
            </p>
          </div>

          {/* Breakdown / Review */}
          <div className="space-y-4 pt-6 border-t border-stone-100">
            <h3 className="font-extrabold text-stone-900 text-sm">مراجعة الإجابات:</h3>
            <div className="space-y-3">
              {answersHistory.map(({ issue, selectedFaceId, isCorrect }, idx) => {
                const prefFace = issue.validFaces.find(f => f.id === issue.preferredFaceId);
                const userFace = issue.validFaces.find(f => f.id === selectedFaceId);
                return (
                  <div
                    key={issue.id}
                    className={`p-4 rounded-2xl border text-sm space-y-2 ${
                      isCorrect ? "bg-emerald-50/50 border-emerald-200" : "bg-rose-50/50 border-rose-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                        <span className="font-bold text-stone-900 font-quran">
                          {idx + 1}. {issue.titleAr}
                        </span>
                      </div>
                      <Link
                        to={`/issues/${issue.id}`}
                        className="text-xs text-stone-400 hover:text-amber-700 font-medium"
                      >
                        تفاصيل المسألة ←
                      </Link>
                    </div>

                    <div className="text-xs space-y-1 pr-7">
                      <div>
                        إجابتك:{" "}
                        <strong className={isCorrect ? "text-emerald-800" : "text-rose-800"}>
                          {userFace?.labelAr || "لم تحدد"}
                        </strong>
                      </div>
                      {!isCorrect && (
                        <div className="text-stone-700">
                          الوجه المقدم الصحيح:{" "}
                          <strong className="text-amber-800 font-bold">
                            ⭐ {prefFace?.labelAr}
                          </strong>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-stone-100">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 text-white font-bold text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
            <Link
              to="/memorize"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-100 text-amber-900 font-bold text-sm hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>متابعة الحفظ بالبطاقات</span>
            </Link>
          </div>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500">
              <span>السؤال {currentIndex + 1} من {questions.length}</span>
              <span className="text-amber-700">النقاط: {score}</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Context Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {reader && (
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-bold">
                {reader.nameAr}
              </span>
            )}
            {narrator && (
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-bold">
                {narrator.nameAr}
              </span>
            )}
            {chapter && (
              <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                {chapter.titleAr}
              </span>
            )}
          </div>

          {/* Question Text */}
          <div className="space-y-3 py-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-quran">
              ما الوجه المقدَّم في الأداء عند {narrator?.nameAr || reader?.nameAr || "القارئ"} في:
            </h2>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70 font-quran text-lg font-bold text-amber-950">
              « {currentQuestion.titleAr} »
            </div>
          </div>

          {/* Choices (Valid Faces) */}
          <div className="space-y-3">
            <span className="block text-xs font-extrabold text-stone-600 uppercase tracking-wider">
              اختر الوجه المقدم:
            </span>
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.validFaces.map(face => {
                const isSelected = selectedFaceId === face.id;
                const isPreferred = face.id === currentQuestion.preferredFaceId;

                let btnStyle = "border-stone-200 bg-white hover:border-stone-300 text-stone-800";
                if (isAnswerSubmitted) {
                  if (isPreferred) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400/50";
                  } else if (isSelected && !isPreferred) {
                    btnStyle = "border-rose-400 bg-rose-50 text-rose-950 line-through";
                  } else {
                    btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-70";
                  }
                } else if (isSelected) {
                  btnStyle = "border-amber-600 bg-amber-50/70 text-amber-950 ring-2 ring-amber-500/40 font-bold";
                }

                return (
                  <button
                    key={face.id}
                    type="button"
                    onClick={() => handleSelectFace(face.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-right p-4 rounded-2xl border transition-all text-sm sm:text-base flex items-center justify-between ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${
                        isSelected ? "border-amber-600 bg-amber-600 text-white" : "border-stone-300 text-stone-500"
                      }`}>
                        {isSelected ? "✓" : ""}
                      </div>
                      <span className="font-quran">{face.labelAr}</span>
                    </div>

                    {isAnswerSubmitted && isPreferred && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        المقدم في الأداء
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Panel (Revealed after submission) */}
          {isAnswerSubmitted && (
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 animate-fade-in text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>البيان العلمي والتوثيق من كلام الشيخ النحاس:</span>
              </div>
              <p className="text-stone-700 font-quran leading-relaxed">
                {currentQuestion.evidenceTextAr || "وجه صحيح مقدّم في الأداء عند الشيخ رحمه الله في كتبه ومنظوماته المعتمدة."}
              </p>
              {currentQuestion.notesAr && (
                <p className="text-stone-500 text-xs border-t border-stone-200/60 pt-2">
                  <strong>تنبيه:</strong> {currentQuestion.notesAr}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={handleRestart}
              className="text-xs text-stone-400 hover:text-stone-600 font-medium"
            >
              إنهاء والعودة للخيارات
            </button>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedFaceId}
                className="px-6 py-2.5 rounded-xl bg-amber-700 text-white font-bold text-sm shadow-xs hover:bg-amber-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                تأكيد الإجابة
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-sm shadow-xs hover:bg-stone-800 transition-all flex items-center gap-2"
              >
                <span>{currentIndex < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة"}</span>
                {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
