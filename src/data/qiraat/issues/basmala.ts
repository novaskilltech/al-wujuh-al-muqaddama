import { QiraatIssue } from "../types.js";

export const basmalaIssues: QiraatIssue[] = [
  {
    id: "basmala-qalun",
    titleAr: "البسملة بين السورتين لقالون",
    chapterId: "basmala",
    readerId: "nafi",
    narratorId: "qalun",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-basmala", labelAr: "إثبات البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-basmala",
    preferenceStatus: "single",
    simpleExplanationAr: "مذهب قالون عن نافع الفصل بالبسملة قولاً واحداً بين كل سورتين (سوى ما بين الأنفال وبراءة).",
    detailedExplanationAr: "روى قالون عن نافع إثبات البسملة حتماً بين كل سورتين، وليس له سكت ولا وصل بلا بسملة في هذا الباب. أما الأوجه الجائزة له حال الإتيان بالبسملة بين السورتين فهي ثلاثة أوجه عقلية وأدائية: (1) قطع الجميع: الوقف على آخر السورة ثم الوقف على البسملة ثم الابتداء بأول السورة التالية. (2) وصل الجميع: وصل آخر السورة بالبسملة بأول السورة التالية في نَفَس واحد. (3) قطع الأول ووصل الثاني بالثالث: الوقف على آخر السورة ووصل البسملة بأول السورة التالية. ويمتنع وجه رابع إجماعاً وهو وصل آخر السورة بالبسملة والوقف عليها ثم الابتداء بالسورة لأن البسملة جُعلت لأوائل السور لا لأواخرها.",
    memoryRuleAr: "قالون يفصل بالبسملة حتماً بين السورتين كالكسائي وعاصم وابن كثير، وله مع البسملة ثلاثة أوجه جائزة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-003"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-warsh",
    titleAr: "البسملة بين السورتين لورش",
    chapterId: "basmala",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sakt", labelAr: "السكت بلا بسملة", performanceType: "sakt" },
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" },
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-sakt",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش له بين السورتين ثلاثة أوجه، والوجه المقدم في الأداء هو السكت.",
    detailedExplanationAr: "المقدم لورش من طريق الأزرق السكت بين السورتين بلا بسملة، ويليه الوصل ثم البسملة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-003"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-al-duri-abu-amr",
    titleAr: "البسملة بين السورتين للدوري عن أبي عمرو",
    chapterId: "basmala",
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" },
      { id: "face-sakt", labelAr: "السكت بلا بسملة", performanceType: "sakt" },
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-wasl",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو له الأوجه الثلاثة، والوجه المقدم في الأداء عنه هو الوصل.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-004"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-al-susi",
    titleAr: "البسملة بين السورتين للسوسي",
    chapterId: "basmala",
    readerId: "abu-amr",
    narratorId: "al-susi",
    pathId: "al-susi-shatibiyyah",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sakt", labelAr: "السكت بلا بسملة", performanceType: "sakt" },
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" },
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-sakt",
    preferenceStatus: "preferred",
    simpleExplanationAr: "السوسي عن أبي عمرو له الأوجه الثلاثة، والوجه المقدم في الأداء عنه هو السكت.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-004"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-ibn-amir",
    titleAr: "البسملة بين السورتين لابن عامر",
    chapterId: "basmala",
    readerId: "ibn-amir",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" },
      { id: "face-sakt", labelAr: "السكت بلا بسملة", performanceType: "sakt" },
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" }
    ],
    preferredFaceId: "face-basmala",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ابن عامر له البسملة والسكت والوصل، والمقدم عنه هو البسملة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-hamza",
    titleAr: "البسملة بين السورتين لحمزة",
    chapterId: "basmala",
    readerId: "hamza",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" }
    ],
    preferredFaceId: "face-wasl",
    preferenceStatus: "single",
    simpleExplanationAr: "حمزة ليس له بين السورتين إلا الوصل بلا بسملة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-al-kisai",
    titleAr: "البسملة بين السورتين للكسائي",
    chapterId: "basmala",
    readerId: "al-kisai",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-basmala",
    preferenceStatus: "single",
    simpleExplanationAr: "الكسائي مذهبه الفصل بالبسملة قولاً واحداً بين كل سورتين.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-abu-jafar",
    titleAr: "البسملة بين السورتين لأبي جعفر",
    chapterId: "basmala",
    readerId: "abu-jafar",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-basmala",
    preferenceStatus: "single",
    simpleExplanationAr: "أبو جعفر مذهبه الفصل بالبسملة بين السورتين.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-yaqub",
    titleAr: "البسملة بين السورتين ليعقوب",
    chapterId: "basmala",
    readerId: "yaqub",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sakt", labelAr: "السكت بلا بسملة", performanceType: "sakt" },
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" },
      { id: "face-basmala", labelAr: "البسملة بين السورتين", performanceType: "basmala" }
    ],
    preferredFaceId: "face-sakt",
    preferenceStatus: "preferred",
    simpleExplanationAr: "يعقوب له الأوجه الثلاثة، والمقدم في الأداء عنه هو السكت.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-khalaf10",
    titleAr: "البسملة بين السورتين لخلف العاشر",
    chapterId: "basmala",
    readerId: "khalaf10",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-wasl", labelAr: "الوصل بلا بسملة", performanceType: "wasl" }
    ],
    preferredFaceId: "face-wasl",
    preferenceStatus: "single",
    simpleExplanationAr: "خلف العاشر مذهبه الوصل بين السورتين بلا بسملة كأصله حمزة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "basmala-anfal-tawbah-exception",
    titleAr: "استثناء ما بين الأنفال وبراءة لجميع القراء",
    chapterId: "basmala",
    surahNumber: 9,
    surahNameAr: "التوبة",
    scope: "group",
    evidenceLevel: "explicit_author_statement",
    ruleType: "exception",
    validFaces: [
      { id: "face-waqf-anfal", labelAr: "القطع (الوقف على آخر الأنفال ثم الابتداء بأول براءة)", performanceType: "sakt" },
      { id: "face-sakt-anfal", labelAr: "السكت لطيفاً بلا تنفس بينهما", performanceType: "sakt" },
      { id: "face-wasl-anfal", labelAr: "الوصل مع مراعاة أحكام الإعراب والإقلاب", performanceType: "wasl" }
    ],
    preferenceStatus: "equal",
    simpleExplanationAr: "بين الأنفال وبراءة لا بسملة إجماعاً لجميع القراء، وتجري الأوجه الثلاثة (القطع والسكت والوصل) حسب أصل الباب.",
    detailedExplanationAr: "لا خلاف بين القراء في ترك البسملة بين الأنفال والتوبة، والوجوه الثلاثة الجائزة متساوية حسب التخيير والأداء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  }
];
