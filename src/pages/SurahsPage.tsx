import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Star, ArrowLeft, ArrowRight, Search, Info, CheckCircle, HelpCircle } from "lucide-react";
import { issues } from "../data/qiraat/issues/index.js";
import { QURAN_SURAHS } from "../data/qiraat/surahs-list.js";
import { useLanguage } from "../context/LanguageContext.js";

export const SurahsPage: React.FC = () => {
  const { dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const [searchQuery, setSearchQuery] = useState("");

  // Map issues to surahNumber
  const issuesBySurah = useMemo(() => {
    const map = new Map<number, typeof issues>();
    issues.forEach(issue => {
      if (issue.surahNumber !== undefined) {
        const list = map.get(issue.surahNumber) || [];
        list.push(issue);
        map.set(issue.surahNumber, list);
      }
    });
    return map;
  }, []);

  // Filter surahs based on search query
  const filteredSurahs = useMemo(() => {
    return QURAN_SURAHS.filter(s => 
      s.nameAr.includes(searchQuery.trim()) || 
      s.nameFr.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      s.number.toString() === searchQuery.trim()
    );
  }, [searchQuery]);

  // Split into surahs with issues and surahs without registered issues
  const surahsWithIssues = useMemo(() => {
    return filteredSurahs.filter(s => (issuesBySurah.get(s.number)?.length || 0) > 0);
  }, [filteredSurahs, issuesBySurah]);

  const surahsWithoutIssues = useMemo(() => {
    return filteredSurahs.filter(s => (issuesBySurah.get(s.number)?.length || 0) === 0);
  }, [filteredSurahs, issuesBySurah]);

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
          <span>ترتيب المصحف الشريف (114 سورة)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-quran">
          فهرس السور القرآنية
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          تصفح مسائل فرش الحروف حسب ترتيب سور القرآن الكريم، مع التمييز الواضح بين السور التي حُررت فيها مسائل مستقلة في هذا المشروع، والسور التي لم تُفرد بمسألة خاصة هنا.
        </p>

        {/* Search Input */}
        <div className="pt-2 max-w-md">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم السورة أو رقمها (مثال: البقرة، 2)..."
              className="w-full bg-white border border-stone-200 rounded-xl py-2.5 px-4 pr-10 text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute top-3 right-3" />
          </div>
        </div>
      </div>

      {/* Section 1: Surahs With Registered Issues */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl font-bold text-stone-900 font-quran">
              سور فيها مسائل مسجلة ({surahsWithIssues.length})
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            تشتمل على مسائل فرشية محررة
          </span>
        </div>

        {surahsWithIssues.length === 0 ? (
          <div className="text-center py-8 text-stone-500 text-sm bg-white rounded-2xl border border-stone-200">
            لا توجد سور مطابقة للبحث تحتوي على مسائل.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surahsWithIssues.map(surah => {
              const surahIssues = issuesBySurah.get(surah.number) || [];
              const preferredCount = surahIssues.filter(i => i.preferenceStatus === "preferred" && i.preferredFaceId).length;

              return (
                <Link
                  key={surah.number}
                  to={`/surahs/${surah.number}`}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center font-bold text-amber-900 text-sm shrink-0 font-mono">
                      {surah.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors font-quran">
                        سورة {surah.nameAr}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-stone-500 mt-0.5">
                        <span className="font-semibold text-stone-700">{surahIssues.length} مسائل</span>
                        {preferredCount > 0 && (
                          <span className="text-amber-800 font-medium flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-amber-600 text-amber-600" />
                            {preferredCount} مقدم
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-stone-400 group-hover:text-amber-700 transition-colors">
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Section 2: Surahs Without Independent Registered Issues */}
      <div className="space-y-4 pt-4">
        <div className="space-y-2 border-b border-stone-200 pb-2">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-stone-400" />
            <h2 className="text-xl font-bold text-stone-700 font-quran">
              سور لا توجد فيها مسألة مستقلة في قاعدة المشروع ({surahsWithoutIssues.length})
            </h2>
          </div>
          {/* Important Scientific Disclaimer */}
          <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-600 flex items-start gap-2">
            <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p>
              <strong>تنبيه علمي:</strong> خلو السورة في هذه القائمة لا يعني عدم وجود خلاف قرائي فيها في كتب القراءات عموماً، وإنما يعني فقط: 
              <span className="font-bold text-stone-800 mr-1">
                «لا توجد فيها مسألة مستقلة مسجلة في هذا المشروع حاليًا».
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {surahsWithoutIssues.map(surah => (
            <div
              key={surah.number}
              className="p-3 bg-stone-50/70 rounded-xl border border-stone-200/60 flex items-center justify-between text-stone-600 text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-stone-400 text-[11px]">{surah.number}.</span>
                <span className="font-quran font-medium text-stone-700">سورة {surah.nameAr}</span>
              </div>
              <span className="text-[10px] text-stone-400">لا فَرش مسجل</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
