import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layers, Star, Filter, LayoutGrid, Table, ArrowLeft, ArrowRight, BookOpen, Compass } from "lucide-react";
import { chapters } from "../data/qiraat/chapters.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { getIssuesByChapter } from "../data/qiraat/indexes.js";
import { IssueCard } from "../components/IssueCard.js";
import { useLanguage } from "../context/LanguageContext.js";

export const ChapterDetailPage: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const { dir } = useLanguage();

  const chapter = chapters.find(c => c.id === chapterId);
  const allIssues = chapterId ? getIssuesByChapter(chapterId) : [];

  useEffect(() => {
    if (chapter) {
      document.title = `باب ${chapter.titleAr} | الأوجه المقدمة`;
    }
  }, [chapter]);

  const [selectedReader, setSelectedReader] = useState<string>("all");
  const [selectedNarrator, setSelectedNarrator] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  if (!chapter) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-stone-800">الباب غير موجود</h2>
        <Link to="/chapters" className="text-amber-800 underline text-sm mt-2 inline-block">
          العودة لقائمة الأبواب
        </Link>
      </div>
    );
  }

  // Filtered issues
  const filteredIssues = allIssues.filter(issue => {
    if (selectedReader !== "all" && issue.readerId !== selectedReader) return false;
    if (selectedNarrator !== "all" && issue.narratorId !== selectedNarrator) return false;
    if (selectedStatus === "preferred" && issue.preferenceStatus !== "preferred") return false;
    if (selectedStatus === "equal" && issue.preferenceStatus !== "equal") return false;
    if (selectedStatus === "disputed" && issue.preferenceStatus !== "disputed") return false;
    if (selectedDifficulty !== "all" && issue.difficulty !== Number(selectedDifficulty)) return false;
    return true;
  });

  return (
    <div className="space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/chapters" className="hover:text-amber-800">الأبواب</Link>
        <span>/</span>
        <span className="text-stone-800 font-semibold">{chapter.titleAr}</span>
      </div>

      {/* Chapter Banner */}
      <div className="bg-gradient-to-br from-[#f8f1e5] via-[#fdfcfb] to-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc8] shadow-xs space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
              الباب {chapter.order} • {chapter.category === "usul" ? "أصول" : "فرش"}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {allIssues.length > 0 ? `${allIssues.length} مسألة محررة` : "قيد الاستكمال"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-quran">
            {chapter.titleAr}
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-naskh">
            {chapter.descriptionAr}
          </p>
        </div>

        {/* ماذا ستتعلم في هذا الباب؟ */}
        {chapter.whatYouWillLearnAr && (
          <div className="bg-white/80 rounded-2xl p-5 border border-amber-200/60 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>ماذا ستتعلم في هذا الباب؟</span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed font-naskh">
              {chapter.whatYouWillLearnAr}
            </p>
          </div>
        )}
      </div>

      {allIssues.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
            هذا الباب قيد الاستكمال
          </span>
          <h3 className="text-lg font-bold text-stone-800">هذا الباب قيد الاستكمال والتحرير العلمي</h3>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            المسائل التابعة لهذا الباب قيد الاستخراج والتحرير والمقابلة على الأصول المعتمدة في هذا المشروع.
          </p>
        </div>
      ) : (
        <>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
            <Filter className="w-4 h-4 text-amber-700" />
            <span>تصفية مسائل الباب ({filteredIssues.length} من {allIssues.length})</span>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-colors ${
                viewMode === "cards" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>بطاقات</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-colors ${
                viewMode === "table" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>جدول</span>
            </button>
          </div>
        </div>

        {/* Filters Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          {/* Reader filter */}
          <div>
            <label className="block font-semibold text-stone-600 mb-1">القارئ:</label>
            <select
              value={selectedReader}
              onChange={e => {
                setSelectedReader(e.target.value);
                setSelectedNarrator("all");
              }}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-xl outline-hidden focus:border-amber-500"
            >
              <option value="all">جميع القراء</option>
              {readers.map(r => (
                <option key={r.id} value={r.id}>{r.nameAr}</option>
              ))}
            </select>
          </div>

          {/* Narrator filter */}
          <div>
            <label className="block font-semibold text-stone-600 mb-1">الراوي:</label>
            <select
              value={selectedNarrator}
              onChange={e => setSelectedNarrator(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-xl outline-hidden focus:border-amber-500"
            >
              <option value="all">جميع الرواة</option>
              {narrators
                .filter(n => selectedReader === "all" || n.readerId === selectedReader)
                .map(n => (
                  <option key={n.id} value={n.id}>{n.nameAr}</option>
                ))}
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="block font-semibold text-stone-600 mb-1">حالة الترجيح:</label>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-xl outline-hidden focus:border-amber-500"
            >
              <option value="all">جميع الحالات</option>
              <option value="preferred">⭐ الوجه المقدم فقط</option>
              <option value="equal">وجهان بلا ترجيح (تساوٍ)</option>
              <option value="disputed">مواضع خلاف في التقديم</option>
            </select>
          </div>

          {/* Difficulty filter */}
          <div>
            <label className="block font-semibold text-stone-600 mb-1">مستوى الصعوبة:</label>
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-xl outline-hidden focus:border-amber-500"
            >
              <option value="all">جميع المستويات</option>
              <option value="1">1 - مبتدئ / أصل كلي</option>
              <option value="2">2 - متوسط / فرع</option>
              <option value="3">3 - متقدم / تحرير دقيق</option>
            </select>
          </div>
        </div>
      </div>

      {/* Issues Display */}
      {filteredIssues.length > 0 ? (
        viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIssues.map(issue => (
              <IssueCard key={issue.id} issue={issue} showChapterLink={false} />
            ))}
          </div>
        ) : (
          /* Table View for Desktop / Academic review */
          <div className="bg-white rounded-2xl border border-stone-200 overflow-x-auto shadow-xs">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#f7f4ef] text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3.5">المسألة / الموضع</th>
                  <th className="p-3.5">القارئ / الراوي</th>
                  <th className="p-3.5">الأوجه الصحيحة</th>
                  <th className="p-3.5">الوجه المقدم</th>
                  <th className="p-3.5">التوثيق</th>
                  <th className="p-3.5 text-center">التفاصيل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredIssues.map(issue => {
                  const r = issue.readerId ? readers.find(x => x.id === issue.readerId) : undefined;
                  const n = issue.narratorId ? narrators.find(x => x.id === issue.narratorId) : undefined;
                  const prefFace = issue.validFaces.find(f => f.id === issue.preferredFaceId);

                  return (
                    <tr key={issue.id} className="hover:bg-amber-50/30 transition-colors">
                      <td className="p-3.5 font-semibold text-stone-900">
                        <div>{issue.titleAr}</div>
                        {issue.quranText && (
                          <div className="text-stone-500 font-quran text-sm mt-0.5">
                            « {issue.quranText} »
                          </div>
                        )}
                      </td>
                      <td className="p-3.5 text-stone-700">
                        {n?.nameAr || r?.nameAr || "عام / جماعة"}
                      </td>
                      <td className="p-3.5 text-stone-600">
                        {issue.validFaces.map(f => f.labelAr).join(" • ")}
                      </td>
                      <td className="p-3.5">
                        {prefFace ? (
                          <span className="font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                            ⭐ {prefFace.labelAr}
                          </span>
                        ) : issue.preferenceStatus === "equal" ? (
                          <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                            وجهان معاً
                          </span>
                        ) : (
                          <span className="text-stone-400">—</span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                          {issue.evidenceLevel === "explicit_author_statement" ? "نصّ صريح" : "مستفاد"}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <Link
                          to={`/issues/${issue.id}`}
                          className="px-2 py-1 bg-stone-100 hover:bg-amber-100 text-amber-900 rounded font-medium text-xs transition-colors"
                        >
                          عرض
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 text-stone-500">
          لا توجد مسائل مطابقة للفلاتر المحددة في هذا الباب.
        </div>
      )}
        </>
      )}
    </div>
  );
};
