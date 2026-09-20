import React from "react";
import { Link } from "react-router-dom";
import { Layers, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { chapters } from "../data/qiraat/chapters.js";
import { getIssuesByChapter } from "../data/qiraat/indexes.js";
import { useLanguage } from "../context/LanguageContext.js";

export const ChaptersPage: React.FC = () => {
  const { dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const usulChapters = chapters.filter(c => c.category === "usul");
  const farshChapters = chapters.filter(c => c.category === "farsh");

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5 text-amber-700" />
          <span>أبواب القراءات الـ 22</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          أبواب الأصول والفرش
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl">
          فهرس شامل لأبواب الأصول الـ 21 وباب فرش الحروف، مرتبة ومنظمة لتسهيل دراسة القواعد الكلية والمسائل الجزئية.
        </p>
      </div>

      {/* Usul Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-quran">
              أبواب الأصول (21 باباً)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              القواعد الكلية المطردة التي تدور في جميع سور القرآن الكريم
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-stone-100 rounded-full text-stone-700">
            {usulChapters.length} باب
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usulChapters.map(chapter => {
            const count = getIssuesByChapter(chapter.id).length;
            return (
              <Link
                key={chapter.id}
                to={`/chapters/${chapter.id}`}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700">الباب {chapter.order}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                      {count} مسائل
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors font-quran">
                    {chapter.titleAr}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {chapter.descriptionAr}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-900">
                  <span>تصفح مسائل الباب</span>
                  <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Farsh Section */}
      <section className="space-y-6 pt-6 border-t border-stone-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-quran">
              فرش الحروف
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              الكلمات القرآنية الفرشية الخاصة بكل سورة من البقرة إلى الناس
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-stone-100 rounded-full text-stone-700">
            {farshChapters.length} باب
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farshChapters.map(chapter => {
            const count = getIssuesByChapter(chapter.id).length;
            return (
              <Link
                key={chapter.id}
                to={`/chapters/${chapter.id}`}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700">الباب {chapter.order}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
                      {count} مسألة فرشية
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors font-quran">
                    {chapter.titleAr}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {chapter.descriptionAr}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-900">
                  <span>تصفح فرش الحروف بالكامل</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
