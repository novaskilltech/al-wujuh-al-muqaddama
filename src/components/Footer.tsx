import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";
import { GlobalVisitCounter } from "./GlobalVisitCounter.js";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#f5efe6] border-t border-[#e6dcce] text-stone-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Presentation */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-800 flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-stone-900 font-quran">
                الأوجه المقدَّمة في الأداء
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              منصة علمية تهدف إلى تحرير وضبط الأوجه المقدمة في الأداء عن القراء العشرة من طريقي الشاطبية والدرة، وفق ما قرره وحرره فضيلة الشيخ علي بن محمد توفيق النحاس رحمه الله.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              المسارات والأبواب
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/readers" className="hover:text-amber-800 transition-colors">
                  القراء العشرة والرواة
                </Link>
              </li>
              <li>
                <Link to="/chapters" className="hover:text-amber-800 transition-colors">
                  أبواب الأصول والفرش (22 باباً)
                </Link>
              </li>
              <li>
                <Link to="/surahs" className="hover:text-amber-800 transition-colors">
                  فهرس السور القرآنية
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-amber-800 transition-colors">
                  المقارنة المباشرة بين الرواة
                </Link>
              </li>
              <li>
                <Link to="/disputes" className="hover:text-amber-800 transition-colors">
                  الأوجه المختلف فيها والمتساوية
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Books & Sources */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              المتون والمصادر
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-800 transition-colors font-semibold text-amber-900">
                  دليل المنصة والتعريف بالمشروع
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-amber-800 transition-colors">
                  معجم المصطلحات العلمية
                </Link>
              </li>
              <li>
                <Link to="/qasida" className="hover:text-amber-800 transition-colors">
                  القصيدة الحسناء في الأوجه المقدمة
                </Link>
              </li>
              <li>
                <Link to="/risala" className="hover:text-amber-800 transition-colors">
                  الرسالة الغراء في الأوجه المقدمة
                </Link>
              </li>
              <li>
                <Link to="/sheikh-an-nahhas" className="hover:text-amber-800 transition-colors">
                  ترجمة الشيخ علي النحاس رحمه الله
                </Link>
              </li>
              <li>
                <Link to="/verification" className="hover:text-amber-800 transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>المسائل قيد المراجعة والتحقيق</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Memorization & Tests */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              الحفظ والاختبار
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/memorize" className="hover:text-amber-800 transition-colors">
                  احفظ المقدم (بطاقات الاستذكار)
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-amber-800 transition-colors">
                  اختبارات القراء والأبواب
                </Link>
              </li>
              <li>
                <Link to="/quiz/tahrirat" className="hover:text-amber-800 transition-colors">
                  اختبار التحريرات المتقدمة
                </Link>
              </li>
            </ul>

            {/* Visit Counter */}
            <div className="mt-6 pt-4 border-t border-[#ebdcc8]">
              <GlobalVisitCounter />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#e6dcce] flex flex-col md:flex-row items-center justify-between text-xs text-stone-600 gap-4">
          <div className="space-y-1 text-center md:text-right">
            <p className="font-semibold text-stone-800">
              إعداد وتحقيق: <span className="text-amber-900 font-bold">صلاح الدين أحمد أبو سليمان</span> (Salah Eddine Ahmed Abousoulymane)
            </p>
            <p className="text-stone-500">
              جميع الحقوق العلمية والمنهجية محفوظة لورثة الشيخ علي بن محمد توفيق النحاس رحمه الله.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-stone-500 text-center">
            <span>© 2026 <strong>novaskilltech</strong>. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100/60 text-amber-900 font-medium">
              طبقة بيانات نقية موثقة علمياً
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
