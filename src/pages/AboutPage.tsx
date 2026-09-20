import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Users, 
  Compass, 
  CheckCircle2, 
  Scale, 
  Brain, 
  GitCompare, 
  FileText, 
  Award,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { chapters } from "../data/qiraat/chapters.js";
import { issues } from "../data/qiraat/issues/index.js";

export const AboutPage: React.FC = () => {
  const { dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.title = "دليل المنصة والتعريف بالمشروع | الأوجه المقدمة";
  }, []);

  const totalIssues = issues.length;
  const explicitCount = issues.filter(i => i.evidenceLevel === "explicit_author_statement").length;
  const derivedCount = issues.filter(i => i.evidenceLevel === "derived_from_author_method").length;
  const pendingCount = issues.filter(i => i.verificationStatus === "needs_primary_check" || i.preferenceStatus === "needs_primary_verification").length;

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6 sm:py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <span>/</span>
        <span className="text-stone-800">التعريف بالمنصة ودليل المشروع</span>
      </div>

      {/* Hero Presentation */}
      <section className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-8 sm:p-14 border border-[#ebdcc8] shadow-xs text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>المنصة العلمية التفاعلية الأولى في تحرير الأوجه القرآنية</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran leading-tight">
          دليل منصة « الأوجه المقدَّمة في الأداء »
        </h1>
        <h2 className="text-lg sm:text-2xl font-bold text-amber-900 font-quran">
          عن القراء العشرة من طريقي الشاطبية والدرة
        </h2>

        <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed font-naskh">
          مشروع علمي ورقمي رائد يهدف إلى تيسير دراسة علم القراءات وضبط أوجه الأداء المحررة، اعتماداً على ما قرره وحرره <strong>فضيلة الشيخ علي بن محمد توفيق النحاس رحمه الله</strong> في مؤلفيه: <em>«الرسالة الغراء»</em> و<em>«القصيدة الحسناء»</em>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/chapters"
            className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
          >
            <span>استكشف أبواب الأصول والفرش</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
          <Link
            to="/glossary"
            className="px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-sm shadow-xs transition-colors"
          >
            <span>معجم المصطلحات (22 مصطلحاً)</span>
          </Link>
        </div>
      </section>

      {/* 1. Project Genesis & Vision */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
            <Compass className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-quran">
              1. فكرة المشروع ورؤيته العلمية
            </h2>
            <p className="text-xs text-stone-500">لماذا هذا المشروع وما الذي يميّزه؟</p>
          </div>
        </div>

        <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 font-naskh">
          <p>
            تزخر كتب القراءات بوجوه الأداء الجائزة المقروء بها، ولكن كثيراً من طلبة العلم والقرّاء يواجهون صعوبة في معرفة <strong>«الوجه المقدَّم في الأداء»</strong> عند الجمع أو الإفراد، وما هو الوجه الذي اختاره المحققون اعتماداً على الرواية المسندة والطريق الصحيح لا مجرد الشهرة التعليمية الدارجة.
          </p>
          <p className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/70 text-amber-950 font-medium">
            <strong>ضابط الوجه المقدم في المنصة:</strong> هو الوجه الذي اختاره الشيخ علي النحاس اعتماداً على الطريق الذي قرأ به الإمام أبو عمرو الداني أو ابن الجزري على شيوخه في الرواية المسندة في المصدر المعتمد، مع التأكيد الصارم على أن الأوجه الأخرى صحيحة ثابتة متواترة لا يجوز تضعيفها ولا إنكارها.
          </p>
        </div>
      </section>

      {/* 2. Corpus Statistics & Methodology */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
            <Scale className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-quran">
              2. المنهجية العلمية وأرقام قاعدة البيانات
            </h2>
            <p className="text-xs text-stone-500">تدقيق إحصائي دقيق خالٍ من الحشو والافتراضات</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="block text-3xl font-extrabold text-amber-900 font-mono">{readers.length}</span>
            <span className="text-xs text-stone-600 font-semibold">أئمة القراء</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="block text-3xl font-extrabold text-amber-900 font-mono">{narrators.length}</span>
            <span className="text-xs text-stone-600 font-semibold">الرواة العشرون</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="block text-3xl font-extrabold text-amber-900 font-mono">{chapters.length}</span>
            <span className="text-xs text-stone-600 font-semibold">أبواب الأصول والفرش</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="block text-3xl font-extrabold text-amber-900 font-mono">{totalIssues}</span>
            <span className="text-xs text-stone-600 font-semibold">إجمالي المسائل الموثقة</span>
          </div>
        </div>

        {/* Scientific breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-950 font-bold">نص صريح في المصدر</strong>
              <span className="text-emerald-900 font-mono font-bold text-sm">{explicitCount}</span>
            </div>
            <p className="text-stone-600">
              مسائل نصّ عليها الشيخ علي النحاس صراحة في الرسالة الغراء أو القصيدة الحسناء.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-sky-950 font-bold">مستفاد من منهج الشيخ</strong>
              <span className="text-sky-900 font-mono font-bold text-sm">{derivedCount}</span>
            </div>
            <p className="text-stone-600">
              مسائل محررة مستفادة بناءً على القواعد الكلية والطرق المسندة المعتمدة لدى الشيخ.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-rose-950 font-bold">معلّق لمقابلة الأصل</strong>
              <span className="text-rose-900 font-mono font-bold text-sm">{pendingCount}</span>
            </div>
            <p className="text-stone-600">
              مسألتا «بارئكم» لأبي عمرو و«فِرْقٍ» لورش من طريق الأزرق، معزولتان حتى مراجعة النسخة الخطية الأصلية.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Platform Modules Guide */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
            <Layers className="w-6 h-6 text-sky-700" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-quran">
              3. خريطة أدوات المنصة واستخدامها
            </h2>
            <p className="text-xs text-stone-500">أقسام تفاعلية مصممة لكل مستويات المتعلمين والباحثين</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              <span>فهرس القراء والرواة</span>
            </h3>
            <p className="text-stone-600 leading-relaxed">
              استعراض شامل للأئمة العشرة ورواة كل قارئ، مع بيان الاختيارات الخاصة بكل راوٍ في أصوله وفرشه.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>أبواب الأصول وفهرس السور</span>
            </h3>
            <p className="text-stone-600 leading-relaxed">
              21 باباً للأصول من الاستعاذة والبسملة إلى ياءات الزوائد، إضافة إلى باب فرش الحروف مفهرساً بالسور والآيات.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 flex items-center gap-2">
              <Brain className="w-4 h-4 text-sky-700" />
              <span>أدوات الحفظ والاختبار (Flashcards & Quiz)</span>
            </h3>
            <p className="text-stone-600 leading-relaxed">
              نظام استذكار تفاعلي للأوجه المقدمة واختبارات قياس المعرفة مبنية حصرياً على المسائل الموثقة قطعيّاً.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 flex items-center gap-2">
              <GitCompare className="w-4 h-4 text-emerald-700" />
              <span>المقارنة ومعجم المصطلحات</span>
            </h3>
            <p className="text-stone-600 leading-relaxed">
              مقارنة فورية بين رواة القراء، ومعجم علمي يضم 22 مصطلحاً دقيقاً مع التمييز الفارق بين الاختلاس والروم والإشمام.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Authorship & Intellectual Property */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 sm:p-10 text-white shadow-md space-y-6">
        <div className="flex items-center gap-3 border-b border-stone-700 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-300">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-quran">
              4. الإعداد العلمي والملكية الفكرية
            </h2>
            <p className="text-xs text-stone-400">توثيق جهود البحث والتحقيق والتطوير</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="space-y-2 bg-stone-800/60 p-5 rounded-2xl border border-stone-700">
            <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
              الإعداد والتحقيق العلمي
            </span>
            <p className="text-base font-extrabold text-white">
              صلاح الدين أحمد أبو سليمان
            </p>
            <p className="text-stone-300 text-xs leading-relaxed font-mono">
              Salah Eddine Ahmed Abousoulymane
            </p>
            <p className="text-stone-400 text-xs pt-1 leading-relaxed">
              استخلاص المسائل، تحرير الروايات، تدقيق الطرق، وصياغة الشروح البيداغوجية وقواعد البيانات.
            </p>
          </div>

          <div className="space-y-2 bg-stone-800/60 p-5 rounded-2xl border border-stone-700">
            <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
              الهندسة البرمجية والنشر الرقمي
            </span>
            <p className="text-base font-extrabold text-white">
              novaskilltech © 2026
            </p>
            <p className="text-stone-300 text-xs leading-relaxed font-mono">
              novaskilltech 2026 • All Rights Reserved
            </p>
            <p className="text-stone-400 text-xs pt-1 leading-relaxed">
              تطوير البنية البرمجية التفاعلية، هندسة قواعد البيانات، وضمان أعلى معايير الجودة والأمان الرقمي.
            </p>
          </div>
        </div>

        <div className="p-4 bg-stone-800/90 rounded-2xl border border-stone-700 text-stone-300 text-xs leading-relaxed text-center">
          جميع الحقوق العلمية والمنهجية محفوظة لورثة الشيخ علي بن محمد توفيق النحاس رحمه الله ونفع بعلمه في العالمين.
        </div>
      </section>
    </div>
  );
};
