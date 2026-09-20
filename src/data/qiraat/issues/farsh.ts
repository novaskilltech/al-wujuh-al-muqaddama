import { QiraatIssue } from "../types.js";

export const farshIssues: QiraatIssue[] = [
  // --- سورة البقرة (2) ---
  {
    id: "farsh-baqarah-ibrahim-ibn-dhakwan",
    titleAr: "لفظ (إبراهيم) لابن ذكوان في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ya", labelAr: "قراءة إبراهيم بالياء (إبراهام/إبراهيم بحسب الباب)", performanceType: "other" }
    ],
    preferredFaceId: "face-ya",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في مواضع سورة البقرة يقرأ بالياء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-baqarah-arina-al-duri-abu-amr",
    titleAr: "لفظ (أرنا / أرني) للدوري عن أبي عمرو في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [128, 260],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ikhtilas", labelAr: "اختلاس كسرة الراء", performanceType: "short_vowel" },
      { id: "face-sukun", labelAr: "إسكان الراء", performanceType: "sukun" }
    ],
    preferredFaceId: "face-ikhtilas",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو في (أرنا / أرني) المقدم عنه هو الاختلاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-baqarah-la-a-natakum-al-bazzi",
    titleAr: "لفظ (لأعنتكم) للبزي في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-kathir",
    narratorId: "al-bazzi",
    pathId: "al-bazzi-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [220],
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
    id: "farsh-baqarah-yabsut-ibn-dhakwan",
    titleAr: "لفظ (ويبسط) لابن ذكوان في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [245],
    quranText: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-seen", labelAr: "قراءة الكلمة بالسين الخالصة (ويبسط)", performanceType: "other" }
    ],
    preferredFaceId: "face-seen",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (ويبسط) بالبقرة يقرأ بالسين الخالصة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-baqarah-yabsut-khallad",
    titleAr: "لفظ (ويبسط) لخلاد في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "hamza",
    narratorId: "khallad",
    pathId: "khallad-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [245],
    quranText: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sad", labelAr: "قراءة الكلمة بالصاد الخالصة (ويبصط)", performanceType: "other" }
    ],
    preferredFaceId: "face-sad",
    preferenceStatus: "single",
    simpleExplanationAr: "خلاد في (ويبسط) بالبقرة يقرأ بالصاد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-baqarah-ni-imma-qalun",
    titleAr: "لفظ (نعما) لقالون في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [271],
    quranText: "فَنِعِمَّا هِيَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان العين", performanceType: "sukun" },
      { id: "face-ikhtilas", labelAr: "اختلاس كسرة العين", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (نعما) بالبقرة المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-baqarah-ni-imma-abu-amr",
    titleAr: "لفظ (نعما) لأبي عمرو في البقرة",
    chapterId: "farsh-al-huruf",
    readerId: "abu-amr",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 2,
    surahNameAr: "البقرة",
    ayahNumbers: [271],
    quranText: "فَنِعِمَّا هِيَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان العين", performanceType: "sukun" },
      { id: "face-ikhtilas", labelAr: "اختلاس كسرة العين", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "أبو عمرو في (نعما) بالبقرة المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة آل عمران (3) ---
  {
    id: "farsh-ali-imran-yu-addih-hisham",
    titleAr: "لفظ (يؤده إليك) لهشام في آل عمران",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 3,
    surahNameAr: "آل عمران",
    ayahNumbers: [75],
    quranText: "يُؤَدِّهِ إِلَيْكَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (يؤده) بآل عمران الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-ali-imran-nu-tih-hisham",
    titleAr: "لفظ (نؤته منها) لهشام في آل عمران",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 3,
    surahNameAr: "آل عمران",
    ayahNumbers: [145],
    quranText: "نُّؤْتِهِ مِنْهَا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (نؤته) بآل عمران الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-ali-imran-imran-ibn-dhakwan",
    titleAr: "لفظ (عمران) لابن ذكوان في آل عمران",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 3,
    surahNameAr: "آل عمران",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fath", labelAr: "الفتح قولاً واحداً", performanceType: "fath" }
    ],
    preferredFaceId: "face-fath",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان يفتح ألف (عمران) قولاً واحداً ولا يميلها.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة النساء (4) ---
  {
    id: "farsh-nisa-nuwallihi-nuslihi-hisham",
    titleAr: "لفظا (نوله / نصله) لهشام في النساء",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 4,
    surahNameAr: "النساء",
    ayahNumbers: [115],
    quranText: "نُوَلِّهِ مَا تَوَلَّىٰ وَنُصْلِهِ جَهَنَّمَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء في الموضعين", performanceType: "sukun" },
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (نوله / نصله) بالنساء الوجه المقدم عنه هو إسكان الهاء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-nisa-yakun-ghaniyyan-ibn-jammaz",
    titleAr: "لفظ (إن يكن غنياً) لابن جماز في النساء",
    chapterId: "farsh-al-huruf",
    readerId: "abu-jafar",
    narratorId: "ibn-jammaz",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 4,
    surahNameAr: "النساء",
    ayahNumbers: [135],
    quranText: "إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًا",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-izhar", labelAr: "إظهار النون الساكنة عند الغين", performanceType: "izhar" }
    ],
    preferredFaceId: "face-izhar",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن جماز في (يكن غنياً) بالنساء مذهبه الإظهار.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الأنعام (6) ---
  {
    id: "farsh-anam-mahyaya-warsh",
    titleAr: "لفظ (محياي) لورش في الأنعام",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 6,
    surahNameAr: "الأنعام",
    ayahNumbers: [162],
    quranText: "وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الياء مع المد الطويل", performanceType: "sukun" },
      { id: "face-fath", labelAr: "فتح الياء", performanceType: "fath" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في (محياي) بالأنعام الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-anam-hayran-warsh",
    titleAr: "لفظ (حيران) لورش في الأنعام",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 6,
    surahNameAr: "الأنعام",
    ayahNumbers: [71],
    quranText: "كَالَّذِي اسْتَهْوَتْهُ الشَّيَاطِينُ فِي الْأَرْضِ حَيْرَانَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tafkhim", labelAr: "التفخيم", performanceType: "other" },
      { id: "face-tarqiq", labelAr: "الترقيق", performanceType: "other" }
    ],
    preferredFaceId: "face-tafkhim",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في (حيران) بالأنعام الوجه المقدم عنه هو التفخيم.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الأعراف (7) ---
  {
    id: "farsh-araf-bastatan-ibn-dhakwan",
    titleAr: "لفظ (بسطة) لابن ذكوان في الأعراف",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 7,
    surahNameAr: "الأعراف",
    ayahNumbers: [69],
    quranText: "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sad", labelAr: "قراءة الكلمة بالصاد (بصطة)", performanceType: "other" }
    ],
    preferredFaceId: "face-sad",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (بسطة) بالأعراف يقرأ بالصاد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-araf-bastatan-khallad",
    titleAr: "لفظ (بسطة) لخلاد في الأعراف",
    chapterId: "farsh-al-huruf",
    readerId: "hamza",
    narratorId: "khallad",
    pathId: "khallad-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 7,
    surahNameAr: "الأعراف",
    ayahNumbers: [69],
    quranText: "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sad", labelAr: "قراءة الكلمة بالصاد (بصطة)", performanceType: "other" }
    ],
    preferredFaceId: "face-sad",
    preferenceStatus: "single",
    simpleExplanationAr: "خلاد في (بسطة) بالأعراف يقرأ بالصاد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-araf-bastatan-hafs",
    titleAr: "لفظ (بسطة) لحفص في الأعراف",
    chapterId: "farsh-al-huruf",
    readerId: "asim",
    narratorId: "hafs",
    pathId: "hafs-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 7,
    surahNameAr: "الأعراف",
    ayahNumbers: [69],
    quranText: "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-seen", labelAr: "قراءة الكلمة بالسين الخالصة (بسطة)", performanceType: "other" }
    ],
    preferredFaceId: "face-seen",
    preferenceStatus: "single",
    simpleExplanationAr: "حفص في (بسطة) بالأعراف يقرأ بالسين قولاً واحداً من طريق الشاطبية.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-araf-yalhath-dhalika-qalun",
    titleAr: "لفظ (يلهث ذلك) لقالون في الأعراف",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 7,
    surahNameAr: "الأعراف",
    ayahNumbers: [176],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-izhar", labelAr: "الإظهار", performanceType: "izhar" },
      { id: "face-idgham", labelAr: "الإدغام", performanceType: "idgham" }
    ],
    preferredFaceId: "face-izhar",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (يلهث ذلك) بالأعراف الوجه المقدم عنه هو الإظهار.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة يوسف (12) ---
  {
    id: "farsh-yusuf-nabbi-na-ibn-wardan",
    titleAr: "لفظ (نبئنا) لابن وردان في يوسف",
    chapterId: "farsh-al-huruf",
    readerId: "abu-jafar",
    narratorId: "ibn-wardan",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [36],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ibdal", labelAr: "الإبدال", performanceType: "ibdal" },
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
    id: "farsh-yusuf-nabbi-na-ibn-jammaz",
    titleAr: "لفظ (نبئنا) لابن جماز في يوسف",
    chapterId: "farsh-al-huruf",
    readerId: "abu-jafar",
    narratorId: "ibn-jammaz",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [36],
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
    id: "farsh-yusuf-bushraya-abu-amr",
    titleAr: "لفظ (يا بشراي) لأبي عمرو في يوسف",
    chapterId: "farsh-al-huruf",
    readerId: "abu-amr",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [19],
    quranText: "قَالَ يَا بُشْرَايَ هَٰذَا غُلَامٌ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-fath", labelAr: "الفتح", performanceType: "fath" },
      { id: "face-taqlil", labelAr: "التقليل", performanceType: "taqlil" }
    ],
    preferredFaceId: "face-fath",
    preferenceStatus: "preferred",
    simpleExplanationAr: "أبو عمرو في (يا بشراي) بيوسف الوجه المقدم عنه هو الفتح.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-yusuf-ta-manna",
    titleAr: "لفظ (ما لك لا تأمنا) في يوسف",
    chapterId: "farsh-al-huruf",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 12,
    surahNameAr: "يوسف",
    ayahNumbers: [11],
    quranText: "مَا لَكَ لَا تَأْمَنَّا عَلَىٰ يُوسُفَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ishmam", labelAr: "الإشمام (ضم الشفتين مقارناً لسكون النون الأولى المدغمة)", performanceType: "ishmam" },
      { id: "face-ikhtilas", labelAr: "الاختلاس (روم حركة الضم مع الإظهار)", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-ishmam",
    preferenceStatus: "preferred",
    simpleExplanationAr: "في (لا تأمنا) بيوسف: الإشمام هو الوجه المقدم في الأداء عند الشيخ النحاس، مع صحة الاختلاس.",
    detailedExplanationAr: "تم تصحيح هذا القيد بحسب النص الأصلي المعتمد في الرسالة؛ حيث يقدم الشيخ النحاس الإشمام في الأداء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة إبراهيم (14) ---
  {
    id: "farsh-ibrahim-khabithatin-ijtuth-that-ibn-dhakwan",
    titleAr: "لفظ (خبيثة اجتثت) لابن ذكوان في إبراهيم",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 14,
    surahNameAr: "إبراهيم",
    ayahNumbers: [26],
    quranText: "كَشَجَرَةٍ خَبِيثَةٍ اجْتُثَّتْ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-kasr-tanwin", labelAr: "كسر التنوين وصلاً للتخلص من التقاء الساكنين", performanceType: "other" }
    ],
    preferredFaceId: "face-kasr-tanwin",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (خبيثة اجتثت) بإبراهيم يكسر التنوين وصلاً للتخلص من التقاء الساكنين كالجماعة بخلاف ضم التنوين لبعض القراء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الكهف (18) ---
  {
    id: "farsh-kahf-fala-tas-alni-ibn-dhakwan",
    titleAr: "لفظ (فلا تسألن) لابن ذكوان في الكهف",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 18,
    surahNameAr: "الكهف",
    ayahNumbers: [70],
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ithbat-ya", labelAr: "إثبات الياء وصلاً", performanceType: "ithbat" }
    ],
    preferredFaceId: "face-ithbat-ya",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (فلا تسألن) بالكهف مذهبه إثبات الياء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-kahf-imran-warsh",
    titleAr: "لفظ (إمراً) لورش في الكهف",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 18,
    surahNameAr: "الكهف",
    ayahNumbers: [71],
    quranText: "لَّقَدْ جِئْتَ شَيْئًا إِمْرًا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tafkhim", labelAr: "التفخيم", performanceType: "other" },
      { id: "face-tarqiq", labelAr: "الترقيق", performanceType: "other" }
    ],
    preferredFaceId: "face-tafkhim",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ورش في (إمراً) بالكهف الوجه المقدم عنه هو التفخيم.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة مريم (19) ---
  {
    id: "farsh-maryam-kaf-ha-ya-ayn-sad-qalun",
    titleAr: "فواتح (كهيعص) لقالون في مريم",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 19,
    surahNameAr: "مريم",
    ayahNumbers: [1],
    quranText: "كهيعص",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fath", labelAr: "الفتح في الهاء والياء", performanceType: "fath" }
    ],
    preferredFaceId: "face-fath",
    preferenceStatus: "single",
    simpleExplanationAr: "قالون في (كهيعص) بمريم يفتح الهاء والياء قولاً واحداً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-maryam-ayn-hamza-hafs",
    titleAr: "حرف العين في فواتح مريم والشورى لحمزة وحفص",
    chapterId: "farsh-al-huruf",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 19,
    surahNameAr: "مريم",
    ayahNumbers: [1],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" },
      { id: "face-ishba", labelAr: "الإشباع (6 حركات)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-tawassut",
    preferenceStatus: "preferred",
    simpleExplanationAr: "حمزة وحفص في عين (كهيعص / عسق) الوجه المقدم عنهما هو التوسط.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-maryam-ayn-abu-jafar-yaqub",
    titleAr: "حرف العين في مريم والشورى لأبي جعفر ويعقوب",
    chapterId: "farsh-al-huruf",
    scope: "word",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 19,
    surahNameAr: "مريم",
    ayahNumbers: [1],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-qasr", labelAr: "القصر (حركتان)", performanceType: "qasr" },
      { id: "face-tawassut", labelAr: "التوسط (4 حركات)", performanceType: "tawassut" }
    ],
    preferredFaceId: "face-qasr",
    preferenceStatus: "preferred",
    simpleExplanationAr: "أبو جعفر ويعقوب في عين (كهيعص / عسق) الوجه المقدم عنهما هو القصر.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة طه (20) ---
  {
    id: "farsh-taha-yatehi-muminan-qalun",
    titleAr: "لفظ (يأته مؤمناً) لقالون في طه",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 20,
    surahNameAr: "طه",
    ayahNumbers: [75],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" },
      { id: "face-qasr", labelAr: "القصر", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (يأته مؤمناً) بطه المقدم عنه عند الشيخ النحاس هو الصلة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-taha-yatehi-muminan-hisham",
    titleAr: "لفظ (يأته مؤمناً) لهشام في طه",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 20,
    surahNameAr: "طه",
    ayahNumbers: [75],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" },
      { id: "face-sukun", labelAr: "الإسكان", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (يأته مؤمناً) بطه المقدم عنه الصلة بحسب الطريق المحرر.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة النور (24) ---
  {
    id: "farsh-nur-yattaqihi-hisham",
    titleAr: "لفظ (ويتقه) لهشام في النور",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 24,
    surahNameAr: "النور",
    ayahNumbers: [52],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (ويتقه) بالنور الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-nur-yattaqihi-ibn-jammaz",
    titleAr: "لفظ (ويتقه) لابن جماز في النور",
    chapterId: "farsh-al-huruf",
    readerId: "abu-jafar",
    narratorId: "ibn-jammaz",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 24,
    surahNameAr: "النور",
    ayahNumbers: [52],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" },
      { id: "face-sukun", labelAr: "الإسكان", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ابن جماز في (ويتقه) بالنور الوجه المقدم عنه هو الصلة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة النمل (27) ---
  {
    id: "farsh-naml-fa-alqihi-hisham",
    titleAr: "لفظ (فألقه إليهم) لهشام في النمل",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 27,
    surahNameAr: "النمل",
    ayahNumbers: [28],
    quranText: "فَأَلْقِهْ إِلَيْهِمْ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-qasr", labelAr: "القصر (كسر بلا صلة)", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (فألقه) بالنمل الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-naml-fama-atani",
    titleAr: "لفظ (فما آتان) في النمل وقفاً",
    chapterId: "farsh-al-huruf",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 27,
    surahNameAr: "النمل",
    ayahNumbers: [36],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ithbat", labelAr: "إثبات الياء وقفاً", performanceType: "ithbat" },
      { id: "face-hadhf", labelAr: "حذف الياء وقفاً", performanceType: "hadhf" }
    ],
    preferredFaceId: "face-ithbat",
    preferenceStatus: "preferred",
    simpleExplanationAr: "في (فما آتان) بالنمل إثبات الياء وقفاً هو المقدم لمن ثبت عنه من القراء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-naml-la-qibala-lahum-ruways",
    titleAr: "لفظ (فلا قِبلَ لهم) لرويس في النمل",
    chapterId: "farsh-al-huruf",
    readerId: "yaqub",
    narratorId: "ruways",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 27,
    surahNameAr: "النمل",
    ayahNumbers: [37],
    quranText: "فَلَنَأْتِيَنَّهُم بِجُنُودٍ لَّا قِبَلَ لَهُم بِهَا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-idgham", labelAr: "إدغام اللام في اللام (لا قبلَّهم)", performanceType: "idgham" },
      { id: "face-izhar", labelAr: "الإظهار", performanceType: "izhar" }
    ],
    preferredFaceId: "face-idgham",
    preferenceStatus: "preferred",
    simpleExplanationAr: "رويس في (لا قبل لهم) بالنمل الوجه المقدم عنه هو الإدغام الكبير.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الروم (30) ---
  {
    id: "farsh-rum-tukhrajuna-ibn-dhakwan",
    titleAr: "لفظ (وكذلك تخرجون) لابن ذكوان في الروم",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 30,
    surahNameAr: "الروم",
    ayahNumbers: [19],
    quranText: "وَكَذَٰلِكَ تُخْرَجُونَ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fath-damm", labelAr: "فتح التاء وضم الراء (تَخْرُجُون)", performanceType: "other" }
    ],
    preferredFaceId: "face-fath-damm",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (تخرجون) بالروم يقرأ بفتح التاء وضم الراء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-rum-kisafan-hisham",
    titleAr: "لفظ (كسفاً) لهشام في الروم",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 30,
    surahNameAr: "الروم",
    ayahNumbers: [48],
    quranText: "وَيَجْعَلُهُ كِسَفًا",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-sukun-seen", labelAr: "إسكان السين (كِسْفاً)", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sukun-seen",
    preferenceStatus: "single",
    simpleExplanationAr: "هشام في (كسفاً) بالروم يقرأ بإسكان السين.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-rum-dafin-hafs",
    titleAr: "لفظ (ضعف / ضعفاً) لحفص في الروم",
    chapterId: "farsh-al-huruf",
    readerId: "asim",
    narratorId: "hafs",
    pathId: "hafs-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 30,
    surahNameAr: "الروم",
    ayahNumbers: [54],
    quranText: "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً ثُمَّ جَعَلَ مِن بَعْدِ قُوَّةٍ ضَعْفًا وَشَيْبَةً",
    ruleType: "equal_faces",
    validFaces: [
      { id: "face-fath-dad", labelAr: "فتح الضاد (ضَعْف)", performanceType: "fath" },
      { id: "face-damm-dad", labelAr: "ضم الضاد (ضُعْف)", performanceType: "other" }
    ],
    preferenceStatus: "equal",
    simpleExplanationAr: "حفص في (ضعف / ضعفاً) بالروم له الوجهان (فتح الضاد وضمها) على السواء دون ترجيح.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },

  // --- سورة يس (36) ---
  {
    id: "farsh-yasin-yakhissimuna-qalun",
    titleAr: "لفظ (يخصمون) لقالون في يس",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 36,
    surahNameAr: "يس",
    ayahNumbers: [49],
    quranText: "مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun-kha", labelAr: "إسكان الخاء مع تشديد الصاد", performanceType: "sukun" },
      { id: "face-ikhtilas-kha", labelAr: "اختلاس فتحة الخاء", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun-kha",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (يخصمون) بيس الوجه المقدم عنه هو الإسكان مع صحة الاختلاس.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الزمر (39) ---
  {
    id: "farsh-zumar-ya-hasrata-ibn-wardan",
    titleAr: "لفظ (يا حسرتا) لابن وردان في الزمر",
    chapterId: "farsh-al-huruf",
    readerId: "abu-jafar",
    narratorId: "ibn-wardan",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [56],
    quranText: "أَن تَقُولَ نَفْسٌ يَا حَسْرَتَا عَلَىٰ مَا فَرَّطتُ فِي جَنبِ اللَّهِ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-fath-ya", labelAr: "فتح الياء (يا حسرتيَ)", performanceType: "fath" }
    ],
    preferredFaceId: "face-fath-ya",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن وردان في (يا حسرتا) بالزمر يقرأ بفتح الياء.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-zumar-yardahu-lakum-hisham",
    titleAr: "لفظ (يرضه لكم) لهشام في الزمر",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [7],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-qasr", labelAr: "القصر", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (يرضه لكم) بالزمر الوجه المقدم عنه هو الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-zumar-yardahu-lakum-al-duri-abu-amr",
    titleAr: "لفظ (يرضه لكم) للدوري عن أبي عمرو في الزمر",
    chapterId: "farsh-al-huruf",
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [7],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة", performanceType: "sila" },
      { id: "face-sukun", labelAr: "الإسكان", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو في (يرضه لكم) بالزمر الوجه المقدم عنه هو الصلة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-zumar-fa-bashshir-ibad-al-susi",
    titleAr: "لفظ (فبشر عبادِ) للسوسي في الزمر",
    chapterId: "farsh-al-huruf",
    readerId: "abu-amr",
    narratorId: "al-susi",
    pathId: "al-susi-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [17],
    quranText: "فَبَشِّرْ عِبَادِ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ithbat-ya", labelAr: "إثبات الياء وصلاً", performanceType: "ithbat" },
      { id: "face-hadhf", labelAr: "الحذف وصلاً", performanceType: "hadhf" }
    ],
    preferredFaceId: "face-ithbat-ya",
    preferenceStatus: "preferred",
    simpleExplanationAr: "السوسي في (فبشر عباد) بالزمر يثبت الياء وصلاً وهو المقدم عنه.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الزخرف (43) ---
  {
    id: "farsh-zukhruf-lamma-mata-un-hisham",
    titleAr: "لفظ (لما متاع) لهشام في الزخرف",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 43,
    surahNameAr: "الزخرف",
    ayahNumbers: [35],
    quranText: "وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَاعُ الْحَيَاةِ الدُّنْيَا",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-takhfif", labelAr: "تخفيف الميم (لَمَا مَتَاعُ)", performanceType: "other" }
    ],
    preferredFaceId: "face-takhfif",
    preferenceStatus: "single",
    simpleExplanationAr: "هشام في (لما متاع) بالزخرف يقرأ بتخفيف الميم.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-zukhruf-a-ush-hidu-qalun",
    titleAr: "لفظ (أأشهدوا) لقالون في الزخرف",
    chapterId: "farsh-al-huruf",
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 43,
    surahNameAr: "الزخرف",
    ayahNumbers: [19],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-idkhal", labelAr: "التسهيل مع الإدخال", performanceType: "tashil" },
      { id: "face-bila-idkhal", labelAr: "التسهيل بلا إدخال", performanceType: "tashil" }
    ],
    preferredFaceId: "face-idkhal",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (أأشهدوا) بالزخرف المقدم عنه هو التسهيل مع الإدخال.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الأحقاف (46) ---
  {
    id: "farsh-ahqaf-li-tundhira-al-bazzi",
    titleAr: "لفظ (لتنذر الذين ظلموا) للبزي في الأحقاف",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-kathir",
    narratorId: "al-bazzi",
    pathId: "al-bazzi-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 46,
    surahNameAr: "الأحقاف",
    ayahNumbers: [12],
    quranText: "لِّتُنذِرَ الَّذِينَ ظَلَمُوا وَبُشْرَىٰ لِلْمُحْسِنِينَ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ta", labelAr: "قراءة الكلمة بتاء الخطاب (لِتُنذِرَ)", performanceType: "other" }
    ],
    preferredFaceId: "face-ta",
    preferenceStatus: "single",
    simpleExplanationAr: "البزي في (لتنذر الذين ظلموا) بالأحقاف يقرأ بتاء الخطاب.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة محمد (47) ---
  {
    id: "farsh-muhammad-asin-al-bazzi",
    titleAr: "لفظ (ماء غير آسن) للبزي في محمد",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-kathir",
    narratorId: "al-bazzi",
    pathId: "al-bazzi-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 47,
    surahNameAr: "محمد",
    ayahNumbers: [15],
    quranText: "فِيهَا أَنْهَارٌ مِّن مَّاءٍ غَيْرِ آسِنٍ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-madd", labelAr: "المد مع همزة بعدها ألف (آسِنٍ)", performanceType: "ishba" }
    ],
    preferredFaceId: "face-madd",
    preferenceStatus: "single",
    simpleExplanationAr: "البزي في (آسن) بسورة محمد يقرأ بالمد.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الرحمن (55) ---
  {
    id: "farsh-rahman-al-munshaat-shubah",
    titleAr: "لفظ (المنشآت) لشعبة في الرحمن",
    chapterId: "farsh-al-huruf",
    readerId: "asim",
    narratorId: "shubah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 55,
    surahNameAr: "الرحمن",
    ayahNumbers: [24],
    quranText: "وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-kasr-sheen", labelAr: "كسر الشين (الْمُنشِئَات)", performanceType: "other" }
    ],
    preferredFaceId: "face-kasr-sheen",
    preferenceStatus: "single",
    simpleExplanationAr: "شعبة في (المنشآت) بسورة الرحمن يقرأ بكسر الشين.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-rahman-yatmith-hunna",
    titleAr: "لفظ (لم يطمثهن) في الموضعين بالرحمن",
    chapterId: "farsh-al-huruf",
    scope: "group",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 55,
    surahNameAr: "الرحمن",
    ayahNumbers: [56, 74],
    quranText: "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-kasr-meem", labelAr: "كسر الميم في الموضعين معاً (لم يطْمِثْهُن)", performanceType: "other" },
      { id: "face-damm-meem", labelAr: "ضم الميم في الموضعين معاً (لم يطْمُثْهُن)", performanceType: "other" }
    ],
    preferenceStatus: "disputed",
    simpleExplanationAr: "حكم (يطمثهن) في موضعي الرحمن (56 و 74) مترابطان معاً في التحرير، ولا يجوز فصل التحرير بينهما.",
    detailedExplanationAr: "موضعا الرحمن (لم يطمثهن) يقرآن معاً إما بكسر الميم أو بضمها بحسب القارئ، والتحرير يمنع تركيب وجه في الأول يخالف الثاني لنفس القارئ.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 3,
    verificationStatus: "verified_primary"
  },

  // --- سورة الحشر (59) ---
  {
    id: "farsh-hashr-takuna-dawlatan-hisham",
    titleAr: "لفظ (كي لا يكون دولة) لهشام في الحشر",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 59,
    surahNameAr: "الحشر",
    ayahNumbers: [7],
    quranText: "كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-tanith-rafa", labelAr: "تأنيث الفعل ورفع دولة (تَكُونَ دُولَةٌ)", performanceType: "other" }
    ],
    preferredFaceId: "face-tanith-rafa",
    preferenceStatus: "single",
    simpleExplanationAr: "هشام في (تكون دولة) بالحشر يقرأ بتأنيث الفعل ورفع دولة.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الحاقة (69) ---
  {
    id: "farsh-haqqah-tu-minuna-tadhakkaruna-ibn-dhakwan",
    titleAr: "لفظا (تؤمنون / تذكرون) لابن ذكوان في الحاقة",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "ibn-dhakwan",
    pathId: "ibn-dhakwan-al-akhfash",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 69,
    surahNameAr: "الحاقة",
    ayahNumbers: [41, 42],
    quranText: "قَلِيلًا مَّا تُؤْمِنُونَ ... قَلِيلًا مَّا تَذَكَّرُونَ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-ta-khitab", labelAr: "قراءة الحرفين بتاء الخطاب", performanceType: "other" }
    ],
    preferredFaceId: "face-ta-khitab",
    preferenceStatus: "single",
    simpleExplanationAr: "ابن ذكوان في (تؤمنون / تذكرون) بالحاقة يقرأ بتاء الخطاب.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الجن (72) ---
  {
    id: "farsh-jinn-libadan-hisham",
    titleAr: "لفظ (يكونون عليه لبداً) لهشام في الجن",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 72,
    surahNameAr: "الجن",
    ayahNumbers: [19],
    quranText: "كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-damm-lam", labelAr: "ضم اللام (لُبَداً)", performanceType: "other" }
    ],
    preferredFaceId: "face-damm-lam",
    preferenceStatus: "single",
    simpleExplanationAr: "هشام في (لبداً) بسورة الجن يقرأ بضم اللام.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة الإنسان (76) ---
  {
    id: "farsh-insan-salasila-hafs",
    titleAr: "لفظ (سلاسلا) لحفص في الإنسان وقفاً",
    chapterId: "farsh-al-huruf",
    readerId: "asim",
    narratorId: "hafs",
    pathId: "hafs-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 76,
    surahNameAr: "الإنسان",
    ayahNumbers: [4],
    quranText: "إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَا وَأَغْلَالًا وَسَعِيرًا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-ithbat-alif", labelAr: "إثبات الألف وقفاً (سلاسلا)", performanceType: "ithbat" },
      { id: "face-hadhf-alif", labelAr: "حذف الألف مع إسكان اللام وقفاً (سلاسلْ)", performanceType: "hadhf" }
    ],
    preferredFaceId: "face-ithbat-alif",
    preferenceStatus: "preferred",
    simpleExplanationAr: "حفص في (سلاسلا) بالإنسان الوجه المقدم عنه في الوقف هو إثبات الألف.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 1,
    verificationStatus: "verified_primary"
  },
  {
    id: "farsh-insan-salasila-bazzi-ibn-dhakwan",
    titleAr: "لفظ (سلاسلا) للبزي وابن ذكوان في الإنسان وقفاً",
    chapterId: "farsh-al-huruf",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 76,
    surahNameAr: "الإنسان",
    ayahNumbers: [4],
    ruleType: "base_rule",
    validFaces: [
      { id: "face-hadhf-alif", labelAr: "حذف الألف وقفاً (سلاسلْ)", performanceType: "hadhf" }
    ],
    preferredFaceId: "face-hadhf-alif",
    preferenceStatus: "single",
    simpleExplanationAr: "البزي وابن ذكوان في (سلاسلا) بالإنسان مذهبهما في الوقف حذف الألف.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },

  // --- سورة العلق (96) ---
  {
    id: "farsh-alaq-ra-ahu-qunbul",
    titleAr: "لفظ (أن رآه استغنى) لقنبل في العلق",
    chapterId: "farsh-al-huruf",
    readerId: "ibn-kathir",
    narratorId: "qunbul",
    pathId: "qunbul-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 96,
    surahNameAr: "العلق",
    ayahNumbers: [7],
    quranText: "أَن رَّآهُ اسْتَغْنَىٰ",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-qasr", labelAr: "قصر الهمزة بلا ألف (رَأَهُ)", performanceType: "qasr" }
    ],
    preferredFaceId: "face-qasr",
    preferenceStatus: "single",
    simpleExplanationAr: "قنبل في (رآه) بالعلق يقرأ بالقصر وحذف الألف بعد الهمزة وصلاً ووقفاً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
