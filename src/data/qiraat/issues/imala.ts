import { QiraatIssue } from "../types.js";

export const imalaIssues: QiraatIssue[] = [
  {
    id: "imala-al-tawrah-qalun",
    titleAr: "الفتح والإمالة في لفظ (التوراة) لقالون",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-fath", labelAr: "الفتح", performanceType: "fath" },
      { id: "face-taqlil", labelAr: "التقليل", performanceType: "taqlil" }
    ],
    preferredFaceId: "face-fath",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في لفظ (التوراة) حيث وقع له الفتح والتقليل، والوجه المقدم عنه هو الفتح.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-dhawat-al-ya-warsh",
    titleAr: "تقليل ذوات الياء لورش",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-taqlil", labelAr: "التقليل (بين اللفظين)", performanceType: "taqlil" },
      { id: "face-fath", labelAr: "الفتح", performanceType: "fath" }
    ],
    preferredFaceId: "face-taqlil",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش من طريق الأزرق في ذوات الياء غير رأس الآية له الفتح والتقليل، والمقدم في الأداء هو التقليل (مع توسط البدل).",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-al-jari-jabbarin-warsh",
    titleAr: "التقليل لورش في (الجار) و(جبارين)",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-taqlil", labelAr: "التقليل", performanceType: "taqlil" },
      { id: "face-fath", labelAr: "الفتح", performanceType: "fath" }
    ],
    preferredFaceId: "face-taqlil",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في (الجار) و(جبارين) الوجه المقدم عنه هو التقليل.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-al-nasi-al-duri-abu-amr",
    titleAr: "إمالة (الناس) للدوري عن أبي عمرو",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-imala", labelAr: "الإمالة الكبرى في المجرور (الناسِ)", performanceType: "imala" }
    ],
    preferredFaceId: "face-imala",
    preferenceStatus: "single",
    simpleExplanationAr: "الدوري عن أبي عمرو يميل ألف (الناس) إذا كانت مجرورة قولاً واحداً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-al-nasi-al-susi",
    titleAr: "فتح (الناس) للسوسي",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "abu-amr",
    narratorId: "al-susi",
    pathId: "al-susi-shatibiyyah",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fath", labelAr: "الفتح قولاً واحداً", performanceType: "fath" }
    ],
    preferredFaceId: "face-fath",
    preferenceStatus: "single",
    simpleExplanationAr: "السوسي عن أبي عمرو يقرأ (الناس) بالفتح قولاً واحداً دون إمالة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-ibn-dhakwan-words",
    titleAr: "الفتح والإمالة لابن ذكوان في الكلمات المخصوصة",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "group",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-imala-group", labelAr: "الإمالة في: زاد، حمارك، الحمار، المحراب", performanceType: "imala" },
      { id: "face-fath-group", labelAr: "الفتح في: عمران، الإكرام، هار", performanceType: "fath" }
    ],
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان يميل: (زاد، حمارك/الحمار، المحراب)، ويفتح: (عمران، الإكرام، هار).",
    detailedExplanationAr: "روي عن ابن ذكوان من طريق الأخفش إمالة ألفاظ مخصوصة: أمال (المحراب) حيث ورد إذا كان مجروراً، و(حمارك) و(الحمار)، و(زاد) في البقرة، وفتح ألفاظاً أخرى كـ (عمران) و(الإكرام) و(هار). واختيار الشيخ النحاس جارٍ على تحرير الأخفش عن ابن ذكوان في التيسير.",
    preferenceReasonAr: "مأخوذ من طريق الأخفش عن ابن ذكوان في التيسير والتحبير والشاطبية.",
    memoryRuleAr: "ابن ذكوان يميل: المحراب (المجرور)، وحمارك، والحمار، وزاد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "imala-raa-qabla-al-sakin-shubah",
    titleAr: "إمالة الراء فقط في (رأى) قبل الساكن لشعبة",
    chapterId: "fath-wa-imala-wa-taqlil",
    readerId: "asim",
    narratorId: "shubah",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      {
        id: "face-imala-ra-only",
        labelAr: "إمالة الراء فقط وفتح الهمزة وصلًا",
        performanceType: "imala",
        affectedLetters: ["ر"]
      }
    ],
    preferredFaceId: "face-imala-ra-only",
    preferenceStatus: "single",
    simpleExplanationAr: "شعبة يميل الراء فقط دون الهمزة في لفظ (رأى) إذا وقع بعدها ساكن نحو (رأى القمر).",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 3,
    verificationStatus: "verified_primary"
  }
];
