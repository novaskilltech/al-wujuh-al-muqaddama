import { QiraatIssue } from "../types.js";

export const raatIssues: QiraatIssue[] = [
  {
    id: "raat-six-words-warsh",
    titleAr: "الراءات لورش في الكلمات الست (ذكراً، ستراً، إمراً، وزراً، حجراً، صهراً)",
    chapterId: "raat",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "group",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tafkhim", labelAr: "التفخيم", performanceType: "other", notesAr: "التفخيم هو الوجه المقدم" },
      { id: "face-tarqiq", labelAr: "الترقيق", performanceType: "other", notesAr: "الترقيق وجه صحيح جائز" }
    ],
    preferredFaceId: "face-tafkhim",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في الكلمات الست المنونة (ذكراً، ستراً، إمراً، وزراً، حجراً، صهراً) له التفخيم والترقيق، والمقدم عند الشيخ النحاس هو التفخيم.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "raat-bi-shararin",
    titleAr: "الراء في (بشرر كالقصر) لورش",
    chapterId: "raat",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 77,
    surahNameAr: "المرسلات",
    ayahNumbers: [32],
    quranText: "إِنَّهَا تَرْمِي بِشَرَرٍ كَالْقَصْرِ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tarqiq", labelAr: "الترقيق وصلاً للراءين", performanceType: "other" }
    ],
    preferredFaceId: "face-tarqiq",
    preferenceStatus: "single",
    simpleExplanationAr: "ورش في (بشرر) بالمرسلات يرقق الراء وصلاً قولاً واحداً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "raat-firq",
    titleAr: "الراء في (فكان كل فرق كالطود العظيم) لورش من طريق الأزرق",
    chapterId: "raat",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "pending",
    surahNumber: 26,
    surahNameAr: "الشعراء",
    ayahNumbers: [63],
    quranText: "فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ",
    ruleType: "advanced_tahrir",
    validFaces: [
      { id: "face-tarqiq", labelAr: "الترقيق", performanceType: "other" },
      { id: "face-tafkhim", labelAr: "التفخيم", performanceType: "other" }
    ],
    preferenceStatus: "needs_primary_verification",
    simpleExplanationAr: "حكم راء (فِرْقٍ) بالشعراء وصلاً لورش من طريق الأزرق فيه خلاف شهير بين الترقيق والتفخيم (لوقوع حرف الاستعلاء المكسور بعدها)، وتعيين ما إذا كان الشيخ يقدم وجهاً أو يجريهما على السواء موقوف على المقابلة المباشرة للأصل الخطي.",
    sourceIds: ["an-nahhas-risala"],
    difficulty: 3,
    verificationStatus: "needs_primary_check"
  }
];
