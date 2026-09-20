import React from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  BookOpen, 
  Scroll, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle,
  FileText,
  Star,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";

export const SheikhPage: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-800">ترجمة الشيخ علي النحاس رحمه الله</span>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#fbf8f2] via-white to-[#f5efe6] rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-xs space-y-6 text-center">
        <div className="w-24 h-24 rounded-full bg-amber-100/80 border-2 border-amber-300 flex items-center justify-center mx-auto text-amber-800 shadow-inner">
          <User className="w-12 h-12 text-amber-700" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-700" />
            <span>علاّمة القراءات ومحرر الأوجه في عصره</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-quran leading-tight">
            فضيلة الشيخ علي بن محمد توفيق النحاس
          </h1>
          <p className="text-amber-900/80 font-bold text-sm sm:text-base">
            رحمه الله رحمة واسعة وأسكنه فسيح جناته
          </p>
        </div>

        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-quran">
          أحد كبار أئمة الإقراء والتحرير في العصر الحديث، صاحب التحقيقات الفريدة والمنظومات الرائقة في ضبط روايات وأوجه القراء العشرة من طريقي الشاطبية والدرة وطريق طيبة النشر.
        </p>
      </div>

      {/* Main Sections */}
      <div className="space-y-8">
        {/* Section 1: Biography & Pedigree */}
        <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-extrabold text-stone-900 font-quran">
              المكانة العلمية والإسناد القرآني
            </h2>
          </div>

          <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 font-quran">
            <p>
              يُعدّ فضيلة الشيخ <strong>علي بن محمد توفيق النحاس</strong> من أبرز أعلام الإقراء الذين جمعوا بين الرواية والدراية، والتلقي المتقن والتحرير الفائق. عُرف بدقته المتناهية في تمييز الأوجه الجائزة من الممنوعة، وتحديد ما هو <strong>مقدّم في الأداء</strong> على وجه الخصوص عند تلاوة القرآن الكريم والجمع بالعشر.
            </p>
            <p>
              تلقى الشيخ القراءات العشر الصغرى والكبرى عن أكابر مشايخ الإقراء المسندين، واتصل سنده بأئمة هذا الفن كابن الجزري والشاطبي والداني إلى رسول الله ﷺ، فكان مرجعاً موثوقاً في معضلات التحرير ووجوه الخلاف بين الطرق.
            </p>
          </div>
        </section>

        {/* Section 2: Two Masterpieces */}
        <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-extrabold text-stone-900 font-quran">
              المؤلفان العظيمان المعتمدان في المشروع
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book 1: Risala */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/70 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
                  <FileText className="w-3.5 h-3.5 text-amber-700" />
                  <span>المصدر النثري المعتمد</span>
                </div>
                <h3 className="text-lg font-extrabold text-stone-900 font-quran">
                  الرسالة الغراء في الأوجه المقدمة في الأداء عن العشرة القراء
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-quran">
                  كتاب نثري بديع صنفه الشيخ لبيان الأوجه المقدمة باباً باباً، مبتدئاً بباب الاستعاذة والبسملة وميم الجمع وهام الكناية، وصولاً إلى مسائل الفرش وسور القرآن الكريم.
                </p>
              </div>

              <Link
                to="/risala"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 text-white font-bold text-xs hover:bg-amber-800 transition-colors"
              >
                <span>تصفح نصوص الرسالة الغراء</span>
                <ChevronRight className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            {/* Book 2: Qasida */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/70 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
                  <Scroll className="w-3.5 h-3.5 text-amber-700" />
                  <span>المنظومة اللامية البديعة</span>
                </div>
                <h3 className="text-lg font-extrabold text-stone-900 font-quran">
                  القصيدة الحسناء في الأوجه المقدمة في الأداء عن العشرة القراء
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-quran">
                  منظومة شعرية لامية متقنة (إجمالي عدد الأبيات قيد التحقيق عند مقابلة النسخة الأصلية)، نظم فيها الشيخ خلاصة ما حرره في الرسالة الغراء بأسلوب رائق وسهل الحفظ والتداول بين طلبة القراءات.
                </p>
              </div>

              <Link
                to="/qasida"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors"
              >
                <span>استعراض أبيات القصيدة الحسناء (قيد المقابلة)</span>
                <ChevronRight className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Scholarly Method & Tripartite Principle */}
        <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-xl font-extrabold text-stone-900 font-quran">
              المنهج العلمي وضابط التقديم في الأداء
            </h2>
          </div>

          <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 font-quran">
            <p>
              يقوم منهج الشيخ النحاس رحمه الله على مبدأ علمي أصيل اعتمدناه كقاعدة ناظمة لهذا المشروع الرقمي:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>1. صحيح (Valide)</span>
                </div>
                <p className="text-xs text-stone-600">
                  كل وجه ثبت وتواتر وصح سنده فهو قرآن يُقرأ به ولا يجوز تضعيفه أو تغليطه.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 space-y-1">
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-600 text-amber-600" />
                  <span>2. ⭐ المقدَّم (Préféré)</span>
                </div>
                <p className="text-xs text-stone-600">
                  الوجه الذي يُبدأ به في الجمع أو الإفراد عند الشيخ، لشهرته أو أصالته في الطريق.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 space-y-1">
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full border border-stone-400 flex items-center justify-center text-[10px] text-stone-600 font-bold">3</span>
                  <span>3. غير مقدم هنا</span>
                </div>
                <p className="text-xs text-stone-600">
                  وجه صحيح مقروء به، لكنه ليس هو المبتدأ به في رواية الشيخ وطريقه.
                </p>
              </div>
            </div>

            <p className="pt-2">
              كما التزم الشيخ بالأمانة العلمية التامة؛ فلم يرجح في المسائل التي تساوت فيها الأوجه مروية، وذكر خلاف الأئمة حيث وجد، وأحكم صلة الروايات بطرقها (كالشاطبية والدرة وطيبة النشر).
            </p>
          </div>
        </section>

        {/* Action Link to Verification */}
        <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-extrabold text-stone-900 font-quran text-base">
              تقرير التوثيق والتحقيق الميداني
            </h3>
            <p className="text-xs text-stone-600">
              اطّلع على تقرير مطابقة المسائل وقواعد البيانات مع نص الرسالة والقصيدة ونسب التوثيق.
            </p>
          </div>
          <Link
            to="/verification"
            className="px-5 py-2.5 rounded-xl bg-amber-800 text-white font-bold text-xs hover:bg-amber-900 transition-colors shrink-0"
          >
            صفحة التوثيق والمراجعة ←
          </Link>
        </div>
      </div>
    </div>
  );
};
