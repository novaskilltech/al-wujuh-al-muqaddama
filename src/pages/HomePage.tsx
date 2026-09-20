import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Layers, BookOpen, CheckCircle, ArrowLeft, ArrowRight, ShieldCheck, Star, Brain, GitCompare, ShieldAlert } from "lucide-react";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { chapters } from "../data/qiraat/chapters.js";
import { issues } from "../data/qiraat/issues/index.js";
import { useLanguage } from "../context/LanguageContext.js";

export const HomePage: React.FC = () => {
  const { lang, t, dir } = useLanguage();

  useEffect(() => {
    document.title = "الأوجه المقدمة في الأداء عن القراء العشرة";
  }, []);

  // Dynamic statistics calculated directly from data layer - ZERO hardcoding
  const totalReaders = readers.length;
  const totalNarrators = narrators.length;
  const totalChapters = chapters.length;
  const totalIssues = issues.length;
  const explicitCount = issues.filter(i => i.evidenceLevel === "explicit_author_statement").length;
  const derivedCount = issues.filter(i => i.evidenceLevel === "derived_from_author_method").length;
  const pendingCount = issues.filter(i => i.verificationStatus === "needs_primary_check" || i.preferenceStatus === "needs_primary_verification").length;

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#f6ede0] via-[#fbf7f0] to-[#faf8f5] border border-[#ebdcc8] p-8 sm:p-14 text-center shadow-xs">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-700 text-amber-800" />
            <span>المنهج المحرر المعتمد في الأداء القرآني</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran tracking-tight leading-tight">
            الأوجه المقدَّمة
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-900/90 font-quran">
            في الأداء عن القراء العشرة
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-naskh max-w-2xl mx-auto">
            منصة علمية تعليمية لدراسة الأوجه الصحيحة ومعرفة الوجه المقدم في الأداء وفق منهج الشيخ علي بن محمد توفيق النحاس رحمه الله.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/about"
              className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>دليل المنصة والتعريف بها</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/chapters"
              className="px-6 py-3 rounded-xl bg-amber-100/90 hover:bg-amber-200/80 text-amber-950 border border-amber-300 font-bold text-sm sm:text-base shadow-xs transition-colors"
            >
              <span>{t("common.start_learning")}</span>
            </Link>
            <Link
              to="/readers"
              className="px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-sm sm:text-base shadow-xs transition-colors"
            >
              <span>{t("common.explore_readers")}</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Statistics Bar */}
        <div className="mt-12 pt-8 border-t border-[#ebdcc8]/80 max-w-5xl mx-auto space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ebdcc8]/60 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-900">{totalReaders}</span>
              <span className="text-xs text-stone-600 font-medium">القراء العشرة</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ebdcc8]/60 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-900">{totalNarrators}</span>
              <span className="text-xs text-stone-600 font-medium">الرواة العشرون</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ebdcc8]/60 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-900">{totalChapters}</span>
              <span className="text-xs text-stone-600 font-medium">الأبواب العلمية</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ebdcc8]/60 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-900">{totalIssues}</span>
              <span className="text-xs text-stone-600 font-medium">إجمالي المسائل</span>
            </div>
          </div>

          {/* Scientific Certification Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200 text-center">
              <strong className="block text-lg font-bold text-emerald-900">{explicitCount}</strong>
              <span className="text-emerald-800 font-medium">نصّ صريح في الرسالة</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200 text-center">
              <strong className="block text-lg font-bold text-amber-900">{derivedCount}</strong>
              <span className="text-amber-800 font-medium">مستفاد من منهج الشيخ</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50/90 border border-rose-200 text-center">
              <strong className="block text-lg font-bold text-rose-900">{pendingCount}</strong>
              <span className="text-rose-800 font-medium">معلق لمقابلة الأصل المعتمد</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Entry Paths */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-quran">
            ثلاثة مسارات رئيسية للاستكشاف
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            اختر الطريقة التي تفضلها للوصول إلى المسائل والتحريرات الدقيقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: By Reader */}
          <Link
            to="/readers"
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-quran">
                  حسب القارئ
                </h3>
                <p className="text-sm text-amber-900/80 font-medium mt-0.5">
                  اختر قارئًا أو راويًا
                </p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                استعرض الأئمة العشرة ورواة كل إمام (20 راوياً)، وتعرف على اختيارات كل راوٍ في الأصول والفرش والأوجه المقدمة له.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
              <span>استعراض القراء العشرة ({totalReaders})</span>
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: By Chapter */}
          <Link
            to="/chapters"
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-quran">
                  حسب الباب
                </h3>
                <p className="text-sm text-amber-900/80 font-medium mt-0.5">
                  الأصول والفرش
                </p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                تصفح المسائل حسب التبويب العلمي الدقيق (21 باباً للأصول من الاستعاذة إلى ياءات الزوائد، وباب فرش الحروف).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
              <span>استعراض الأبواب ({totalChapters})</span>
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: By Surah */}
          <Link
            to="/surahs"
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-quran">
                  حسب السورة
                </h3>
                <p className="text-sm text-emerald-900/80 font-medium mt-0.5">
                  استكشف المسائل حسب سور القرآن
                </p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                اعثر على الكلمات والفرشيات القرآنية مباشرة بحسب ترتيب سور المصحف الشريف، من الفاتحة والبقرة حتى سورة الناس.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
              <span>استعراض السور</span>
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Interactive Tools Section: Memorize, Quiz, Compare */}
      <section className="bg-[#f5efe6] rounded-3xl p-8 sm:p-10 border border-[#e6dcce]">
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-quran">
            أدوات التثبيت والاستذكار المتقدمة
          </h2>
          <p className="text-sm text-stone-600">
            تمارين وبطاقات استذكار مبنية حصرياً على البيانات القطعية الموثقة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/memorize"
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
              <Star className="w-6 h-6 fill-amber-600" />
            </div>
            <div className="space-y-1 text-right">
              <h3 className="font-bold text-stone-900 text-base">احفظ المقدم</h3>
              <p className="text-xs text-stone-600">
                بطاقات تفاعلية لحفظ الأوجه المقدمة المعتمدة مع إمكانية تصنيف الحفظ (أعرفها / أراجعها / صعبة).
              </p>
            </div>
          </Link>

          <Link
            to="/quiz"
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-sky-100 text-sky-800 rounded-xl shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-right">
              <h3 className="font-bold text-stone-900 text-base">اختبر نفسك</h3>
              <p className="text-xs text-stone-600">
                اختبارات تفاعلية حسب القارئ أو الباب أو السورة لاختيار الوجه المقدم بدقة.
              </p>
            </div>
          </Link>

          <Link
            to="/compare"
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
              <GitCompare className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-right">
              <h3 className="font-bold text-stone-900 text-base">المقارنة المباشرة</h3>
              <p className="text-xs text-stone-600">
                قارن فوراً بين راويين (مثل: قالون vs ورش، الدوري vs السوسي) في المسائل المشتركة.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
