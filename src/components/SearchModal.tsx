import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, BookOpen, User, Layers, FileText, ArrowRight } from "lucide-react";
import { issues } from "../data/qiraat/issues/index.js";
import { readers } from "../data/qiraat/readers.js";
import { narrators } from "../data/qiraat/narrators.js";
import { chapters } from "../data/qiraat/chapters.js";
import { useLanguage } from "../context/LanguageContext.js";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  // Search matches
  const matchedReaders = cleanQuery
    ? readers.filter(r => r.nameAr.includes(cleanQuery) || r.fullNameAr?.includes(cleanQuery) || r.nameFr?.toLowerCase().includes(cleanQuery))
    : [];

  const matchedNarrators = cleanQuery
    ? narrators.filter(n => n.nameAr.includes(cleanQuery) || n.fullNameAr?.includes(cleanQuery) || n.nameFr?.toLowerCase().includes(cleanQuery))
    : [];

  const matchedChapters = cleanQuery
    ? chapters.filter(c => c.titleAr.includes(cleanQuery) || c.descriptionAr?.includes(cleanQuery) || c.titleFr?.toLowerCase().includes(cleanQuery))
    : [];

  const matchedIssues = cleanQuery
    ? issues.filter(i =>
        i.titleAr.includes(cleanQuery) ||
        i.simpleExplanationAr.includes(cleanQuery) ||
        i.quranText?.includes(cleanQuery) ||
        i.surahNameAr?.includes(cleanQuery)
      ).slice(0, 15)
    : [];

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input */}
        <div className="p-4 border-b border-stone-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-700" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ابحث عن قارئ، راوٍ، باب، مسألة، أو كلمة قرآنية (مثل: ورش البدل، قالون ميم الجمع)..."
            className="w-full text-base bg-transparent outline-hidden text-stone-900 placeholder:text-stone-400"
          />
          {query && (
            <button onClick={() => setQuery("")} className="p-1 text-stone-400 hover:text-stone-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2 py-1 text-xs text-stone-500 bg-stone-100 hover:bg-stone-200 rounded-lg">
            إلغاء
          </button>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!cleanQuery && (
            <div className="text-center py-10 text-stone-400 text-sm">
              <p className="font-medium mb-1">جرّب البحث عن:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {["ورش البدل", "قالون ميم الجمع", "هشام يؤده", "ابن ذكوان إبراهيم", "سورة البقرة", "الإدغام الصغير", "الهمزتان"].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-stone-100 hover:bg-amber-50 hover:text-amber-800 rounded-lg text-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Readers */}
          {matchedReaders.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>القراء</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedReaders.map(reader => (
                  <button
                    key={reader.id}
                    onClick={() => handleSelect(`/readers/${reader.id}`)}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/50 text-right transition-all"
                  >
                    <span className="font-semibold text-stone-900 text-sm">{reader.nameAr}</span>
                    <span className="text-xs text-stone-400">{reader.cityAr}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Narrators */}
          {matchedNarrators.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>الرواة</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedNarrators.map(narrator => (
                  <button
                    key={narrator.id}
                    onClick={() => handleSelect(`/readers/${narrator.readerId}/${narrator.id}`)}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/50 text-right transition-all"
                  >
                    <span className="font-semibold text-stone-900 text-sm">{narrator.nameAr}</span>
                    <span className="text-xs text-stone-400">راوٍ</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chapters */}
          {matchedChapters.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>الأبواب</span>
              </h3>
              <div className="space-y-1.5">
                {matchedChapters.map(chapter => (
                  <button
                    key={chapter.id}
                    onClick={() => handleSelect(`/chapters/${chapter.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/50 text-right transition-all"
                  >
                    <div>
                      <span className="font-semibold text-stone-900 text-sm block">{chapter.titleAr}</span>
                      <span className="text-xs text-stone-500 line-clamp-1">{chapter.descriptionAr}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                      {chapter.category === "usul" ? "أصول" : "فرش"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Issues */}
          {matchedIssues.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>المسائل ({matchedIssues.length})</span>
              </h3>
              <div className="space-y-2">
                {matchedIssues.map(issue => (
                  <button
                    key={issue.id}
                    onClick={() => handleSelect(`/issues/${issue.id}`)}
                    className="w-full text-right p-3 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-stone-900">{issue.titleAr}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {issue.verificationStatus === "needs_primary_check" && (
                          <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                            قيد المراجعة
                          </span>
                        )}
                        {issue.surahNameAr && (
                          <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            سورة {issue.surahNameAr}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-2">{issue.simpleExplanationAr}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && matchedReaders.length === 0 && matchedNarrators.length === 0 && matchedChapters.length === 0 && matchedIssues.length === 0 && (
            <div className="text-center py-12 text-stone-400 text-sm">
              لا توجد نتائج مطابقة لـ "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
