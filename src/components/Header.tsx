import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, BookOpen, GraduationCap, Sparkles, Languages, Menu, X, CheckSquare, Layers, HelpCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";
import { useSpecialistMode } from "../context/SpecialistModeContext.js";
import { SearchModal } from "./SearchModal.js";

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const { isSpecialist, toggleSpecialist } = useSpecialistMode();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/readers", label: t("nav.readers") },
    { path: "/chapters", label: t("nav.chapters") },
    { path: "/surahs", label: t("nav.surahs") },
    { path: "/qasida", label: t("nav.qasida") },
    { path: "/risala", label: t("nav.risala") },
    { path: "/glossary", label: t("nav.glossary") },
    { path: "/memorize", label: t("nav.memorize") },
    { path: "/quiz", label: t("nav.quiz") },
    { path: "/compare", label: t("nav.compare") },
    { path: "/disputes", label: t("nav.disputes") },
    { path: "/verification", label: t("nav.verification") }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#ece6dc] shadow-xs">
        {/* Top announcement / subheader */}
        <div className="bg-[#f5efe6] text-[#6b5c4c] text-xs py-1.5 px-4 border-b border-[#e9dfd1]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="truncate">
              شرح الرسالة الغراء والقصيدة الحسناء للشيخ علي بن محمد توفيق النحاس رحمه الله
            </span>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-amber-800 transition-colors font-medium">
                {t("nav.about")}
              </Link>
              <Link to="/glossary" className="hover:text-amber-800 transition-colors font-medium">
                {t("nav.glossary")}
              </Link>
              <Link to="/sheikh-an-nahhas" className="hover:text-amber-800 transition-colors font-medium">
                {t("nav.sheikh")}
              </Link>
              <Link to="/verification" className="hover:text-amber-800 transition-colors flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{t("nav.verification")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-amber-100 shadow-md group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight text-stone-900 font-quran group-hover:text-amber-800 transition-colors">
                    الأوجه المقدَّمة
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    عن القراء العشرة
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-stone-700">
              {navLinks.slice(0, 8).map(link => {
                const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-amber-100/70 text-amber-900 font-semibold"
                        : "hover:bg-stone-100 hover:text-stone-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-600 text-xs sm:text-sm border border-stone-200 transition-colors"
                title={t("nav.search")}
              >
                <Search className="w-4 h-4 text-stone-500" />
                <span className="hidden sm:inline">{t("nav.search")}...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-stone-300 text-stone-400">
                  Ctrl+K
                </kbd>
              </button>

              {/* Specialist Mode Switch */}
              <button
                type="button"
                onClick={toggleSpecialist}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  isSpecialist
                    ? "bg-amber-600 text-white border-amber-700 shadow-xs ring-2 ring-amber-400/30"
                    : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                }`}
                title={t("specialist.hint")}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isSpecialist ? "text-amber-200" : "text-amber-600"}`} />
                <span className="hidden lg:inline">{t("specialist.mode")}</span>
              </button>

              {/* Language Switch */}
              <button
                type="button"
                onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold border border-stone-200 transition-colors"
                title="Changer de langue / تغيير اللغة"
              >
                <Languages className="w-3.5 h-3.5 text-stone-500" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className="xl:hidden p-2 rounded-xl text-stone-600 hover:bg-stone-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-stone-200 bg-[#faf8f5] px-4 pt-3 pb-6 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-amber-600 text-white"
                        : "bg-white text-stone-800 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
