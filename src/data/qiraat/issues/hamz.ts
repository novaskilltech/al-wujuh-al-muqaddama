import { QiraatIssue } from "../types.js";

export const hamzIssues: QiraatIssue[] = [
  // --- الهمزتان من كلمة ---
  {
    id: "hamzatani-kalimah-warsh-a-andhartahum",
    titleAr: "الهمزتان من كلمة لورش في المفتوحتين نحو (ءأنذرتهم)",
    chapterId: "hamzatani-min-kalimah",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal", labelAr: "إبدال الهمزة الثانية ألفاً مع المد المشبع", performanceType: "ibdal" },
      { id: "face-tashil", labelAr: "تسهيل الهمزة الثانية بين بين", performanceType: "tashil" }
    ],
    preferredFaceId: "face-ibdal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في الهمزتين المفتوحتين من كلمة له الإبدال والتسهيل، والمقدم في الأداء عنه هو الإبدال.",
    detailedExplanationAr: "روى الأزرق عن ورش في الهمزتين المفتوحتين من كلمة (ءأنذرتهم، ءأنتم) وجهين صحيحين: الإبدال ألفاً مع المد المشبع ست حركات للساكنين، وتسهيل الهمزة الثانية بين بين، واختار الشيخ النحاس تبعاً للداني والشاطبي تقديم الإبدال.",
    preferenceReasonAr: "تقديم الإبدال لورش هو اختيار أبي عمرو الداني في التيسير والشاطبي في اللامية (وقل ألفاً عن أهل مصر تبدلت).",
    memoryRuleAr: "ورش في المفتوحتين من كلمة يقدّم الإبدال المشبع على التسهيل.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamzatani-kalimah-hisham",
    titleAr: "الهمزتان من كلمة لهشام مع الإدخال",
    chapterId: "hamzatani-min-kalimah",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tashil-idkhal", labelAr: "التسهيل مع الإدخال في المواضع الثابتة", performanceType: "tashil" },
      { id: "face-tahqiq-idkhal", labelAr: "التحقيق مع الإدخال", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-tashil-idkhal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام يسهل الهمزة الثانية مع الإدخال في المواضع التي ثبت ذلك فيها عنه.",
    detailedExplanationAr: "روي عن هشام من طريق الحلواني التسهيل مع الإدخال والتحقيق مع الإدخال في المفتوحتين، والمقدم عنه في طريق التيسير والتحريرات هو التسهيل مع الإدخال.",
    preferenceReasonAr: "تقديم التسهيل مع الإدخال لهشام هو مذهب الإمام الداني في التيسير.",
    memoryRuleAr: "هشام يقدّم التسهيل مع الإدخال في الهمزتين من كلمة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamzatani-kalimah-aimmah-hisham",
    titleAr: "الهمزتان من كلمة لهشام في (أئمة)",
    chapterId: "hamzatani-min-kalimah",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tashil-bila-idkhal", labelAr: "التسهيل بلا إدخال", performanceType: "tashil" },
      { id: "face-tahqiq", labelAr: "التحقيق بلا إدخال", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-tashil-bila-idkhal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "في لفظ (أئمة) لهشام حكم خاص لا يعمم معه أصله في الإدخال، والمقدم عنه التسهيل بلا إدخال.",
    detailedExplanationAr: "خرج لفظ (أئمة) لهشام عن قاعدته العامة في الإدخال لكراهة توالي همزتين وألف في كلمة واحدة ثقيلة، فرُوي عنه التسهيل والتحقيق كلاهما بلا إدخال، والمقدم أداءً هو التسهيل.",
    preferenceReasonAr: "التسهيل بلا إدخال في (أئمة) هو الوجه المختار للداني والشاطبي لمن روى التسهيل لهشام.",
    memoryRuleAr: "هشام في (أئمة) يسهل بلا إدخال تقديماً على التحقيق.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamzatani-kalimah-a-ush-hidu-qalun",
    titleAr: "الهمزتان من كلمة لقالون في (أأشهدوا) بالزخرف",
    chapterId: "hamzatani-min-kalimah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 43,
    surahNameAr: "الزخرف",
    ayahNumbers: [19],
    quranText: "أَأُشْهِدُوا خَلْقَهُمْ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-idkhal", labelAr: "تسهيل الهمزة الثانية مع الإدخال (ألف بين الهمزتين)", performanceType: "tashil" },
      { id: "face-bila-idkhal", labelAr: "التسهيل بلا إدخال", performanceType: "tashil" }
    ],
    preferredFaceId: "face-idkhal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (أأشهدوا) بالزخرف الوجه المقدم عنه هو التسهيل مع الإدخال.",
    detailedExplanationAr: "روي عن قالون في (أأشهدوا) بالزخرف تسهيل الهمزة المضمومة مع إدخال ألف بينهما، والتسهيل بلا إدخال، والمقدم عند الشيخ النحاس هو التسهيل مع الإدخال جرياً على قاعدته.",
    preferenceReasonAr: "تقديم الإدخال لقالون هو الأصل المطرد في مذهبه في التيسير.",
    memoryRuleAr: "قالون يقدّم الإدخال مع التسهيل في (أأشهدوا) بالزخرف.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- الهمزتان من كلمتين ---
  {
    id: "hamzatani-kalimatayn-yashau-ila",
    titleAr: "الهمزتان من كلمتين المختلفتان في (يشاء إلى)",
    chapterId: "hamzatani-min-kalimatayn",
    scope: "group",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal-waw", labelAr: "إبدال الهمزة الثانية واواً مكسورة (المقدم لورش والبزي والدوري)", performanceType: "ibdal" },
      { id: "face-tashil-bayna", labelAr: "تسهيل الهمزة الثانية بين بين (المقدم لقالون وقنبل والسوسي)", performanceType: "tashil" }
    ],
    rawiPreferences: [
      { narratorId: "warsh", preferredFaceId: "face-ibdal-waw", notesAr: "المقدم لورش من طريق الأزرق هو الإبدال واواً." },
      { narratorId: "al-bazzi", preferredFaceId: "face-ibdal-waw", notesAr: "المقدم للبزي هو الإبدال واواً." },
      { narratorId: "al-duri-abu-amr", preferredFaceId: "face-ibdal-waw", notesAr: "المقدم للدوري عن أبي عمرو هو الإبدال واواً." },
      { narratorId: "qalun", preferredFaceId: "face-tashil-bayna", notesAr: "المقدم لقالون هو تسهيل الهمزة الثانية بين بين." },
      { narratorId: "qunbul", preferredFaceId: "face-tashil-bayna", notesAr: "المقدم لقنبل هو تسهيل الهمزة الثانية بين بين." },
      { narratorId: "al-susi", preferredFaceId: "face-tashil-bayna", notesAr: "المقدم للسوسي هو تسهيل الهمزة الثانية بين بين." }
    ],
    preferenceStatus: "disputed",
    simpleExplanationAr: "في الهمزتين المختلفتين المضمومة فالمكسورة نحو (يشاء إلى): المقدم بالإبدال واواً: ورش، البزي، الدوري عن أبي عمرو. والمقدم بالتسهيل: قالون، قنبل، السوسي.",
    detailedExplanationAr: "ينقسم القراء في تقديم الأداء في نحو (يشاء إلى): فالإبدال واواً مكسورة هو المقدم لورش والبزي والدوري عن أبي عمرو، بينما التسهيل بين بين هو المقدم لقالون وقنبل والسوسي.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 3,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamzatani-kalimatayn-bil-sooi-illa",
    titleAr: "الهمزتان من كلمتين في (بالسوء إلا) لقالون والبزي",
    chapterId: "hamzatani-min-kalimatayn",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [53],
    quranText: "إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ إِلَّا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal-idgham", labelAr: "الإبدال واواً ثم الإدغام (بالسّوِّ إِلَّا)", performanceType: "idgham" },
      { id: "face-tashil", labelAr: "تسهيل الهمزة الأولى مع المد والقصر", performanceType: "tashil" }
    ],
    preferredFaceId: "face-ibdal-idgham",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون والبزي في (بالسوء إلا) بيوسف الوجه المقدم عنهما هو إبدال الهمزة الأولى واواً وإدغام الواو في الواو.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- الهمز المفرد ---
  {
    id: "hamz-mufrad-nabbi-na-ibn-wardan",
    titleAr: "الهمز المفرد في (نبئنا بتأويله) لابن وردان",
    chapterId: "hamz-mufrad",
    chapterIds: ["farsh-al-huruf"],
    readerId: "abu-jafar",
    narratorId: "ibn-wardan",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [36],
    quranText: "نَبِّئْنَا بِتَأْوِيلِهِ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal", labelAr: "إبدال الهمزة ياء (نبينا)", performanceType: "ibdal" },
      { id: "face-tahqiq", labelAr: "التحقيق", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-ibdal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ابن وردان في (نبئنا) بيوسف الوجه المقدم عنه هو الإبدال.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-nabbi-na-ibn-jammaz",
    titleAr: "الهمز المفرد في (نبئنا بتأويله) لابن جماز",
    chapterId: "hamz-mufrad",
    chapterIds: ["farsh-al-huruf"],
    readerId: "abu-jafar",
    narratorId: "ibn-jammaz",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [36],
    quranText: "نَبِّئْنَا بِتَأْوِيلِهِ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tahqiq", labelAr: "التحقيق", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-tahqiq",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن جماز في (نبئنا) بيوسف مذهبه التحقيق.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-bari-ikum",
    titleAr: "الهمز المفرد في (بارئكم) لأبي عمرو",
    chapterId: "hamz-mufrad",
    readerId: "abu-amr",
    scope: "reader",
    evidenceLevel: "pending",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [54],
    quranText: "فَتُوبُوا إِلَىٰ بَارِئِكُمْ",
    ruleType: "advanced_tahrir",
    validFaces: [
      { id: "face-sukun", labelAr: "الإسكان", performanceType: "sukun" },
      { id: "face-ikhtilas", labelAr: "الاختلاس (الإتيان ببعض الحركة في الوصل مع تقليل زمنها)", performanceType: "short_vowel" },
      { id: "face-itmam", labelAr: "الإتمام", performanceType: "tahqiq" }
    ],
    preferenceStatus: "needs_primary_verification",
    simpleExplanationAr: "مسألة (بارئكم) لأبي عمرو بروايتيه ورد فيها الخلاف بين الإسكان والاختلاس، وتعيين ما إذا كان الشيخ يقدم وجهاً بعينه موقوف على التحقق من الأصل المعتمد لرسالة الشيخ النحاس.",
    detailedExplanationAr: "وقع خلاف في نسبة الوجه المقدم لأبي عمرو في بارئكم ويأمركم بين الإسكان والاختلاس، لذلك عُلقت في التحقق الأولي ولا تظهر في الاختبارات.",
    sourceIds: ["an-nahhas-risala"],
    difficulty: 3,
    verificationStatus: "needs_primary_check"
  },
  {
    id: "hamz-mufrad-al-munshioon-ibn-wardan",
    titleAr: "الهمز المفرد في (المنشئون) لابن وردان",
    chapterId: "hamz-mufrad",
    readerId: "abu-jafar",
    narratorId: "ibn-wardan",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 56,
    surahNameAr: "الواقعة",
    ayahNumbers: [72],
    quranText: "أَمْ نَحْنُ الْمُنشِئُونَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-hadhf", labelAr: "حذف الهمزة مع ضم الشين (المنشون)", performanceType: "hadhf" },
      { id: "face-tahqiq", labelAr: "التحقيق", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-hadhf",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ابن وردان في (المنشئون) بالواقعة الحذف مقدم عنه حسب التحقيق المعتمد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-mawti-an-abu-jafar",
    titleAr: "الهمز المفرد في (موطئاً) لأبي جعفر",
    chapterId: "hamz-mufrad",
    readerId: "abu-jafar",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 9,
    surahNameAr: "التوبة",
    ayahNumbers: [120],
    quranText: "وَلَا يَطَئُونَ مَوْطِئًا",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tahqiq", labelAr: "التحقيق", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-tahqiq",
    preferenceStatus: "single",
    simpleExplanationAr: "أبو جعفر في (موطئاً) بالتوبة مذهبه التحقيق استثناءً من أصله في إبدال الهمز المنون.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-a-ra-ayta-warsh",
    titleAr: "الهمز المفرد في (أرأيت) وبابه لورش",
    chapterId: "hamz-mufrad",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tashil", labelAr: "تسهيل الهمزة الثانية بين بين", performanceType: "tashil" },
      { id: "face-ibdal", labelAr: "إبدال الهمزة الثانية ألفاً مع المد", performanceType: "ibdal" }
    ],
    preferredFaceId: "face-tashil",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في (أرأيت) وبابه المقدم عنه أداءً هو التسهيل بين بين.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-la-a-natakum-al-bazzi",
    titleAr: "الهمز المفرد في (لأعنتكم) للبزي",
    chapterId: "hamz-mufrad",
    chapterIds: ["farsh-al-huruf"],
    readerId: "ibn-kathir",
    narratorId: "al-bazzi",
    pathId: "al-bazzi-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [220],
    quranText: "وَلَوْ شَاءَ اللَّهُ لَأَعْنَتَكُمْ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tashil", labelAr: "تسهيل الهمزة", performanceType: "tashil" },
      { id: "face-tahqiq", labelAr: "التحقيق", performanceType: "tahqiq" }
    ],
    preferredFaceId: "face-tashil",
    preferenceStatus: "preferred",
    simpleExplanationAr: "البزي في (لأعنتكم) بالبقرة الوجه المقدم عنه هو التسهيل.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-al-laai-al-susi",
    titleAr: "الهمز المفرد في (اللائي) للسوسي",
    chapterId: "hamz-mufrad",
    readerId: "abu-amr",
    narratorId: "al-susi",
    pathId: "al-susi-shatibiyyah",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tashil", labelAr: "تسهيل الهمزة مع الروم وصلاً", performanceType: "tashil" },
      { id: "face-ibdal", labelAr: "إبدال الهمزة ياء ساكنة", performanceType: "ibdal" }
    ],
    preferredFaceId: "face-tashil",
    preferenceStatus: "preferred",
    simpleExplanationAr: "السوسي في لفظ (اللائي) الوجه المقدم عنه هو التسهيل.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "hamz-mufrad-al-laai-duri-bazzi",
    titleAr: "الهمز المفرد في (اللائي) للدوري والبزي",
    chapterId: "hamz-mufrad",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal-ya", labelAr: "إبدال الهمزة ياء ساكنة مع المد المشبع", performanceType: "ibdal" },
      { id: "face-tashil", labelAr: "التسهيل", performanceType: "tashil" }
    ],
    preferredFaceId: "face-ibdal-ya",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو والبزي في (اللائي) الوجه المقدم عنهما هو الإبدال ياء ساكنة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
