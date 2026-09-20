import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { ar: "الرئيسية", fr: "Accueil" },
  "nav.readers": { ar: "القراء", fr: "Lecteurs" },
  "nav.chapters": { ar: "الأبواب", fr: "Chapitres" },
  "nav.surahs": { ar: "السور", fr: "Sourates" },
  "nav.qasida": { ar: "القصيدة", fr: "La Qasida" },
  "nav.risala": { ar: "الرسالة", fr: "La Risala" },
  "nav.quiz": { ar: "اختبر نفسك", fr: "Quiz" },
  "nav.memorize": { ar: "احفظ", fr: "Mémoriser" },
  "nav.compare": { ar: "المقارنة", fr: "Comparateur" },
  "nav.disputes": { ar: "المختلف فيها", fr: "Divergences" },
  "nav.glossary": { ar: "المصطلحات", fr: "Glossaire" },
  "nav.verification": { ar: "قيد المراجعة", fr: "À vérifier" },
  "nav.sheikh": { ar: "عن الشيخ", fr: "À propos du Cheikh" },
  "nav.search": { ar: "البحث (Ctrl+K)", fr: "Recherche (Ctrl+K)" },

  // Modes
  "specialist.mode": { ar: "وضع المتخصص", fr: "Mode Spécialiste" },
  "specialist.hint": { ar: "عرض الطرق، أسباب الترجيح، والتحريرات الدقيقة", fr: "Afficher les turuq, justifications et tahrirât" },

  // Status badges
  "badge.preferred": { ar: "⭐ الوجه المقدَّم عند الشيخ النحاس", fr: "⭐ Face préférée (Cheikh An-Nahhas)" },
  "badge.valid_non_preferred": { ar: "صحيح لكنه غير مقدم هنا", fr: "Valide mais non prioritaire ici" },
  "badge.valid": { ar: "صحيح", fr: "Valide" },
  "badge.explicit": { ar: "نصّ عليه الشيخ", fr: "نصّ عليه الشيخ (Explicitement stipulé)" },
  "badge.derived": { ar: "مستفاد من منهج الشيخ", fr: "مستفاد من منهج الشيخ (Déduit de sa méthode)" },
  "badge.secondary": { ar: "منقول من مصدر ثانوي", fr: "Source secondaire" },
  "badge.pending": { ar: "قيد التحقيق", fr: "En cours d'examen" },
  "badge.verified_primary": { ar: "موثق من الأصل", fr: "Vérifié (source primaire)" },
  "badge.verified_secondary": { ar: "موثق من مصدر ثانوي", fr: "Vérifié (secondaire)" },
  "badge.needs_check": { ar: "يحتاج مراجعة الأصل", fr: "À vérifier sur l'original" },

  // Common UI
  "common.all": { ar: "الكل", fr: "Tout" },
  "common.usul": { ar: "الأصول", fr: "Usūl" },
  "common.farsh": { ar: "فرش الحروف", fr: "Farsch" },
  "common.details": { ar: "التفاصيل", fr: "Détails" },
  "common.start_learning": { ar: "ابدأ التعلّم", fr: "Commencer l'apprentissage" },
  "common.explore_readers": { ar: "استكشف القراء العشرة", fr: "Explorer les 10 lecteurs" },
  "common.explore_chapters": { ar: "الأصول والفرش", fr: "Usūl & Farsch" },
  "common.explore_surahs": { ar: "استكشف المسائل حسب سور القرآن", fr: "Explorer par sourate" },
  "common.search_placeholder": { ar: "ابحث عن قارئ، راوٍ، مسألة، أو كلمة قرآنية...", fr: "Rechercher un lecteur, rawi, mas'ala..." },
  "common.close": { ar: "إغلاق", fr: "Fermer" },
  "common.back": { ar: "رجوع", fr: "Retour" },
  "common.next": { ar: "التالي", fr: "Suivant" },
  "common.previous": { ar: "السابق", fr: "Précédent" },
  "common.filter": { ar: "تصفية", fr: "Filtrer" },
  "common.reset": { ar: "إعادة ضبط", fr: "Réinitialiser" },
  "common.not_applicable": { ar: "لا تنطبق عليه المسألة", fr: "Non applicable à ce transmetteur" },
  "common.translation_pending": { ar: "الترجمة الفرنسية قيد المراجعة", fr: "Traduction en cours de révision." },

  // Study & Quiz
  "quiz.title": { ar: "اختبار الأوجه المقدمة", fr: "Quiz des visages préférés" },
  "quiz.score": { ar: "النتيجة", fr: "Score" },
  "quiz.submit": { ar: "تأكيد الإجابة", fr: "Valider la réponse" },
  "quiz.next_question": { ar: "السؤال التالي", fr: "Question suivante" },
  "quiz.restart": { ar: "إعادة الاختبار", fr: "Recommencer le quiz" },
  "quiz.certified_mode": { ar: "الوضع المعتمد قطعيًا", fr: "Mode strictement certifié" },
  "quiz.safe_mode": { ar: "جميع المسائل المحققة", fr: "Toutes les questions vérifiées" },

  // Flashcards
  "memorize.title": { ar: "احفظ المقدَّم", fr: "Mémoriser l'ordre de priorité" },
  "memorize.flip": { ar: "انقر لقلب البطاقة", fr: "Cliquer pour retourner" },
  "memorize.known": { ar: "أتقنتها", fr: "Maîtrisé" },
  "memorize.review": { ar: "أراجعها", fr: "À revoir" },
  "memorize.hard": { ar: "صعبة", fr: "Difficile" }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  t: (key: string) => key,
  dir: "rtl"
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem("awjouh_lang") as Language) || "ar";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("awjouh_lang", newLang);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.ar || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
