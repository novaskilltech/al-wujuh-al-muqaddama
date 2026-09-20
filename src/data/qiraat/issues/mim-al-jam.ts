import { QiraatIssue } from "../types.js";

export const mimAlJamIssues: QiraatIssue[] = [
  {
    id: "meem-al-jam-qalun",
    titleAr: "ميم الجمع لقالون",
    chapterId: "meem-al-jam",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "صلة ميم الجمع بواو لفظية بمقدار حركتين", performanceType: "sila" },
      { id: "face-sukun", labelAr: "إسكان ميم الجمع", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون له في ميم الجمع الواقعة قبل متحرك وجهان: الإسكان والصلة، والوجه المقدم عند الشيخ النحاس هو الصلة.",
    detailedExplanationAr: "نص الشيخ علي النحاس في الرسالة والقصيدة على تقديم الصلة لقالون في ميم الجمع إذا وقع بعدها متحرك، خلافاً لمن يقدم الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-005"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "meem-al-jam-ibn-kathir",
    titleAr: "ميم الجمع لابن كثير",
    chapterId: "meem-al-jam",
    readerId: "ibn-kathir",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sila", labelAr: "صلة ميم الجمع قبل المتحرك", performanceType: "sila" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن كثير يصل ميم الجمع بواو لفظية قولاً واحداً إذا وقع بعدها متحرك وصلاً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "meem-al-jam-abu-jafar",
    titleAr: "ميم الجمع لأبي جعفر",
    chapterId: "meem-al-jam",
    readerId: "abu-jafar",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sila", labelAr: "صلة ميم الجمع قبل المتحرك", performanceType: "sila" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "single",
    simpleExplanationAr: "أبو جعفر يصل ميم الجمع قبل المتحرك قولاً واحداً كابن كثير.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-005"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "meem-al-jam-warsh",
    titleAr: "ميم الجمع لورش",
    chapterId: "meem-al-jam",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sila-hamz", labelAr: "صلة ميم الجمع إذا وقع بعدها همزة قطع وصلاً بمقدار 6 حركات", performanceType: "sila" },
      { id: "face-sukun", labelAr: "إسكان ميم الجمع فيما عدا ذلك", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila-hamz",
    preferenceStatus: "single",
    simpleExplanationAr: "ورش يصل ميم الجمع إذا وقع بعدها همز قطع وصلاً ويمدها مداً مشبعاً (6 حركات)، ويسكنها فيما عدا ذلك.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  }
];
