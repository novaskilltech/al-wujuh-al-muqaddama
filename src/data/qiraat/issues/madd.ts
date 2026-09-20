import { QiraatIssue } from "../types.js";

export const maddIssues: QiraatIssue[] = [
  {
    id: "madd-muttasil-warsh",
    titleAr: "مقدار المد المتصل لورش",
    chapterId: "madd-wa-qasr",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ishba-6", labelAr: "الإشباع (6 حركات)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-ishba-6",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد ورش المد المتصل 6 حركات قولاً واحداً.",
    detailedExplanationAr: "اعتمد الشيخ النحاس في مراتب المتصل: 6 حركات لورش وحمزة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-hamza",
    titleAr: "مقدار المد المتصل لحمزة",
    chapterId: "madd-wa-qasr",
    readerId: "hamza",
    scope: "reader",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ishba-6", labelAr: "الإشباع (6 حركات)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-ishba-6",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد حمزة المد المتصل 6 حركات قولاً واحداً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-asim",
    titleAr: "مقدار المد المتصل لعاصم",
    chapterId: "madd-wa-qasr",
    readerId: "asim",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-tawassut-5", labelAr: "فويق التوسط (5 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-fawq-tawassut-5",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد عاصم المتصل 5 حركات حسب المرتبة التي اعتمدها الشيخ النحاس.",
    detailedExplanationAr: "هذا اختيار الشيخ النحاس وطريقة المراتب التي اعتمدها في نظمه وررسالته، وليست إجماعاً عاماً عند جميع طرق القراءات.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-ibn-amir",
    titleAr: "مقدار المد المتصل لابن عامر",
    chapterId: "madd-wa-qasr",
    readerId: "ibn-amir",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tawassut-4", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-tawassut-4",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد ابن عامر المتصل 4 حركات عند الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-al-kisai",
    titleAr: "مقدار المد المتصل للكسائي",
    chapterId: "madd-wa-qasr",
    readerId: "al-kisai",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tawassut-4", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-tawassut-4",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد الكسائي المتصل 4 حركات عند الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-khalaf10",
    titleAr: "مقدار المد المتصل لخلف العاشر",
    chapterId: "madd-wa-qasr",
    readerId: "khalaf10",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tawassut-4", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-tawassut-4",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد خلف العاشر المتصل 4 حركات عند الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-qalun",
    titleAr: "مقدار المد المتصل لقالون",
    chapterId: "madd-wa-qasr",
    readerId: "nafi",
    narratorId: "qalun",
    scope: "narrator",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-qasr-3", labelAr: "فويق القصر (3 حركات)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-fawq-qasr-3",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد قالون المتصل 3 حركات في جدول المراتب الذي اعتمده الشيخ النحاس.",
    detailedExplanationAr: "سجل هذا بوضوح على أنه اختيار الشيخ وطريقة المراتب التي اعتمدها في الرسالة والقصيدة، وليس إجماعاً عاماً عند جميع طرق القراءات.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-ibn-kathir",
    titleAr: "مقدار المد المتصل لابن كثير",
    chapterId: "madd-wa-qasr",
    readerId: "ibn-kathir",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-qasr-3", labelAr: "فويق القصر (3 حركات)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-fawq-qasr-3",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد ابن كثير المتصل 3 حركات في جدول مراتب الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-abu-amr",
    titleAr: "مقدار المد المتصل لأبي عمرو",
    chapterId: "madd-wa-qasr",
    readerId: "abu-amr",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-qasr-3", labelAr: "فويق القصر (3 حركات)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-fawq-qasr-3",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد أبو عمرو المتصل 3 حركات في جدول مراتب الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-abu-jafar",
    titleAr: "مقدار المد المتصل لأبي جعفر",
    chapterId: "madd-wa-qasr",
    readerId: "abu-jafar",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-qasr-3", labelAr: "فويق القصر (3 حركات)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-fawq-qasr-3",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد أبو جعفر المتصل 3 حركات في جدول مراتب الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-muttasil-yaqub",
    titleAr: "مقدار المد المتصل ليعقوب",
    chapterId: "madd-wa-qasr",
    readerId: "yaqub",
    scope: "reader",
    evidenceLevel: "derived_from_author_method",
    derivationNoteAr: "استُفيد هذا الوجه من جدول مراتب المدود والطريق الذي اعتمده المؤلف في التيسير والتحبير ولم ينص عليه بلفظ صريح مستقل في هذا الموضع.",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fawq-qasr-3", labelAr: "فويق القصر (3 حركات)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-fawq-qasr-3",
    preferenceStatus: "single",
    simpleExplanationAr: "يمد يعقوب المتصل 3 حركات في جدول مراتب الشيخ النحاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-munfasil-qalun",
    titleAr: "المد المنفصل لقالون",
    chapterId: "madd-wa-qasr",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-qasr", labelAr: "القصر (حركتان)", performanceType: "qasr" },
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-qasr",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون له في المنفصل القصر والتوسط، والمقدم في الأداء عند الشيخ النحاس هو القصر.",
    detailedExplanationAr: "روي عن قالون في المد المنفصل وجهان صحيحان: القصر بمقدار حركتين والتوسط بمقدار أربع حركات، والمقدم عنه في الأداء عند الشيخ النحاس هو القصر، وهو مذهب الإمام أبي عمرو الداني في التيسير.",
    preferenceReasonAr: "تقديم القصر لقالون هو اختيار الداني في التيسير وجامع البيان والشاطبي في الحرز (فقصر وقد يروى لورش وعنهم وعن عاصم).",
    memoryRuleAr: "قالون يقدّم قصر المنفصل (حركتان) على التوسط.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-munfasil-al-duri-abu-amr",
    titleAr: "المد المنفصل للدوري عن أبي عمرو",
    chapterId: "madd-wa-qasr",
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "narrator",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" },
      { id: "face-qasr", labelAr: "القصر (حركتان)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-tawassut",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو له في المنفصل التوسط والقصر، والوجه المقدم عنه هو التوسط.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "madd-badal-warsh",
    titleAr: "مد البدل لورش",
    chapterId: "madd-wa-qasr",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" },
      { id: "face-qasr", labelAr: "القصر (حركتان)", performanceType: "qasr" },
      { id: "face-ishba", labelAr: "الإشباع (6 حركات)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-tawassut",
    preferenceStatus: "preferred",
    simpleExplanationAr: "لورش في مد البدل ثلاثة أوجه: القصر والتوسط والإشباع، والمقدم في الأداء عند الشيخ النحاس هو التوسط.",
    detailedExplanationAr: "انفرد الأزرق عن ورش بمد البدل (نحو: ءامنوا، أوتوا، إيماناً) بثلاثة أوجه جائزة: القصر حركتان، والتوسط أربع حركات، والإشباع ست حركات. والمقدم في الأداء عند الشيخ النحاس هو التوسط، وعليه العمل عند المحققين.",
    preferenceReasonAr: "تقديم التوسط لورش هو مذهب الإمام أبي عمرو الداني في التيسير وجامع البيان، وعليه مدار أكثر أهل الأداء المصريين والمغاربة.",
    memoryRuleAr: "ورش يقدّم توسط البدل (4 حركات) على القصر والإشباع.",
    linkedIssueIds: ["leen-mahmouz-warsh"],
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "leen-mahmouz-warsh",
    titleAr: "اللين المهموز لورش",
    chapterId: "madd-wa-qasr",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" },
      { id: "face-ishba", labelAr: "الإشباع (6 حركات)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-tawassut",
    preferenceStatus: "preferred",
    simpleExplanationAr: "لورش في اللين المهموز (نحو: شيء، سوءة) التوسط والإشباع، والمقدم في الأداء هو التوسط.",
    detailedExplanationAr: "روى الأزرق عن ورش في حرفي اللين (الواو والياء الساكنتين المفتوح ما قبلهما) إذا تلاهما همز في كلمة واحدة نحو {شَيْء} و{سَوْءَة} وجهين وصلاً ووقفاً: التوسط أربع حركات والإشباع ست حركات، والمقدم في الأداء هو التوسط.",
    preferenceReasonAr: "تقديم التوسط في اللين المهموز لورش هو نص الداني في التيسير، ويتناسب مع تقديم توسط البدل.",
    memoryRuleAr: "ورش يقدّم توسط اللين المهموز (4 حركات) على الإشباع.",
    linkedIssueIds: ["madd-badal-warsh"],
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
