import React from "react";
import { Link } from "react-router-dom";
import { Users, Star, ArrowLeft, ArrowRight, UserCheck } from "lucide-react";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { getIssuesByReader } from "../data/qiraat/indexes.js";
import { useLanguage } from "../context/LanguageContext.js";

export const ReadersPage: React.FC = () => {
  const { dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
          <Users className="w-3.5 h-3.5 text-amber-700" />
          <span>الأئمة العشرة ورواتهم</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          القراء العشرة
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl">
          أئمة القراءات العشر المتواترة من طريقي الشاطبية والدرة، مع بيان راويي كل إمام والأوجه المقدمة في الأداء عنهم.
        </p>
      </div>

      {/* Grid of 10 Readers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {readers.map(reader => {
          const readerNarrators = narrators.filter(n => n.readerId === reader.id);
          const readerIssues = getIssuesByReader(reader.id);
          const preferredIssuesCount = readerIssues.filter(i => i.preferenceStatus === "preferred" && i.preferredFaceId).length;

          return (
            <div
              key={reader.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700 block">الإمام {reader.order}</span>
                    <h2 className="text-2xl font-bold text-stone-900 font-quran mt-0.5">
                      {reader.nameAr}
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">{reader.fullNameAr}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-700 text-xs rounded-lg font-medium">
                    ت {reader.deathYearHijri} هـ • {reader.cityAr}
                  </span>
                </div>

                {/* Rawis (Narrators) */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-stone-400 block uppercase">
                    راويا الإمام
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {readerNarrators.map(narrator => (
                      <Link
                        key={narrator.id}
                        to={`/readers/${reader.id}/${narrator.id}`}
                        className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50/70 border border-stone-100 hover:border-amber-300 transition-all text-right group"
                      >
                        <span className="text-sm font-bold text-stone-800 group-hover:text-amber-900 block">
                          {narrator.nameAr}
                        </span>
                        <span className="text-[11px] text-stone-400 block mt-0.5">
                          ت {narrator.deathYearHijri} هـ
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Automatic Computed Stats */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#faf8f5] border border-stone-100 text-center">
                    <span className="text-xl font-bold text-stone-800 block">
                      {readerIssues.length}
                    </span>
                    <span className="text-[11px] text-stone-500">إجمالي المسائل</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-center">
                    <span className="text-xl font-bold text-amber-900 block flex items-center justify-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-700" />
                      {preferredIssuesCount}
                    </span>
                    <span className="text-[11px] text-amber-900">أوجه مقدمة</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/readers/${reader.id}`}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>عرض جميع مسائل {reader.nameAr}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
