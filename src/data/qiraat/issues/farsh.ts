import { QiraatIssue } from "../types.js";

export const farshIssues: QiraatIssue[] = [
  {
    "id": "farsh-baqarah-ibrahim-ibn-dhakwan",
    "titleAr": "لفظ (إبراهيم) لابن ذكوان في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "word",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-ya",
        "labelAr": "قراءة إبراهيم بالياء (إبراهام/إبراهيم بحسب الباب)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-ya",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في مواضع سورة البقرة يقرأ بالياء.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "روي عن ابن ذكوان من طريق الأخفش في مواضع سورة البقرة قراءة لفظ (إبراهيم) بالياء الخالصة (إبراهيم)، بخلاف بعض السور الأخرى التي قرأ فيها بالألف (إبراهام)، والوجه المعتمد المقدم عنه في البقرة هو الياء.",
    "preferenceReasonAr": "نص أبي عمرو الداني في التيسير والشاطبي في اللامية على قراءة ابن ذكوان بالياء في البقرة.",
    "memoryRuleAr": "ابن ذكوان يقرأ (إبراهيم) في البقرة بالياء."
  },
  {
    "id": "farsh-baqarah-arina-al-duri-abu-amr",
    "titleAr": "لفظ (أرنا / أرني) للدوري عن أبي عمرو في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-amr",
    "narratorId": "al-duri-abu-amr",
    "pathId": "al-duri-abu-amr-shatibiyyah",
    "scope": "word",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ayahNumbers": [
      128,
      260
    ],
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ikhtilas",
        "labelAr": "اختلاس كسرة الراء (الإتيان ببعض الحركة وصلاً بسرعة)",
        "performanceType": "short_vowel"
      },
      {
        "id": "face-sukun",
        "labelAr": "إسكان الراء",
        "performanceType": "sukun"
      }
    ],
    "preferredFaceId": "face-ikhtilas",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "الدوري عن أبي عمرو في (أرنا / أرني) المقدم عنه هو الاختلاس.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "روي عن الدوري عن أبي عمرو في (أرنا / أرني) بالبقرة وفصلت وجهان: اختلاس كسرة الراء وإسكانها، والوجه المقدم في الأداء هو الاختلاس.",
    "preferenceReasonAr": "تقديم الاختلاس للدوري هو مذهب الداني في التيسير.",
    "memoryRuleAr": "الدوري في (أرنا / أرني) يقدّم الاختلاس على الإسكان."
  },
  {
    "id": "farsh-baqarah-yabsut-ibn-dhakwan",
    "titleAr": "لفظ (ويبسط) لابن ذكوان في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ayahNumbers": [
      245
    ],
    "quranText": "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-seen",
        "labelAr": "قراءة الكلمة بالسين الخالصة (ويبسط)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-seen",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في (ويبسط) بالبقرة يقرأ بالسين الخالصة.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "قرأ ابن ذكوان في موضع البقرة {وَاللَّهُ يَقْبِضُ وَيَبْسُطُ} بالسين الخالصة، وهي الرواية المقدمة عنه في الأداء.",
    "preferenceReasonAr": "قراءة السين هي الرواية المحررة لابن ذكوان في التيسير والشاطبية.",
    "memoryRuleAr": "ابن ذكوان يقرأ (ويبسط) بالبقرة بالسين الخالصة."
  },
  {
    "id": "farsh-baqarah-yabsut-khallad",
    "titleAr": "لفظ (ويبسط) لخلاد في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "hamza",
    "narratorId": "khallad",
    "pathId": "khallad-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ayahNumbers": [
      245
    ],
    "quranText": "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-sad",
        "labelAr": "قراءة الكلمة بالصاد الخالصة (ويبصط)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-sad",
    "preferenceStatus": "single",
    "simpleExplanationAr": "خلاد في (ويبسط) بالبقرة يقرأ بالصاد.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-baqarah-ni-imma-qalun",
    "titleAr": "لفظ (نعما) لقالون في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "nafi",
    "narratorId": "qalun",
    "pathId": "abi-nashit-an-qalun",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ayahNumbers": [
      271
    ],
    "quranText": "فَنِعِمَّا هِيَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ikhtilas",
        "labelAr": "اختلاس كسرة العين (الإتيان ببعض الحركة وصلاً بسرعة)",
        "performanceType": "short_vowel"
      },
      {
        "id": "face-sukun",
        "labelAr": "إسكان العين",
        "performanceType": "sukun"
      },
      {
        "id": "face-kasr",
        "labelAr": "كسر العين كاملاً (الإتمام)",
        "performanceType": "short_vowel"
      }
    ],
    "preferredFaceId": "face-ikhtilas",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "قالون في (نعما) بالبقرة المقدم عنه هو الإسكان.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "روي عن قالون في (نِعِمَّا) بالبقرة والنساء ثلاثة أوجه: اختلاس كسرة العين (وهو الإتيان بثلثي حركتها مع الإسراع بها وصلاً)، وإسكان العين، وكسرها تاماً. والوجه المقدم في الأداء عنه عند الشيخ النحاس هو الاختلاس.",
    "preferenceReasonAr": "تقديم الاختلاس لقالون في نعما هو مذهب أبي عمرو الداني في التيسير وجامع البيان.",
    "memoryRuleAr": "قالون في (نِعِمَّا) يقدّم الاختلاس على الإسكان والإتمام."
  },
  {
    "id": "farsh-baqarah-ni-imma-abu-amr",
    "titleAr": "لفظ (نعما) لأبي عمرو في البقرة",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-amr",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 2,
    "surahNameAr": "البقرة",
    "ayahNumbers": [
      271
    ],
    "quranText": "فَنِعِمَّا هِيَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ikhtilas",
        "labelAr": "اختلاس كسرة العين (الإتيان ببعض الحركة وصلاً بسرعة)",
        "performanceType": "short_vowel"
      },
      {
        "id": "face-sukun",
        "labelAr": "إسكان العين",
        "performanceType": "sukun"
      }
    ],
    "preferredFaceId": "face-ikhtilas",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "أبو عمرو في (نعما) بالبقرة المقدم عنه هو الإسكان.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "روي عن أبي عمرو بروايتيه في (نِعِمَّا) اختلاس كسرة العين وإسكانها، والوجه المقدم عنه هو الاختلاس.",
    "preferenceReasonAr": "تقديم الاختلاس لأبي عمرو هو نص الداني في التيسير.",
    "memoryRuleAr": "أبو عمرو في (نِعِمَّا) يقدّم الاختلاس على الإسكان."
  },
  {
    "id": "farsh-ali-imran-imran-ibn-dhakwan",
    "titleAr": "لفظ (عمران) لابن ذكوان في آل عمران",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "word",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 3,
    "surahNameAr": "آل عمران",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-fath",
        "labelAr": "الفتح قولاً واحداً",
        "performanceType": "fath"
      }
    ],
    "preferredFaceId": "face-fath",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان يفتح ألف (عمران) قولاً واحداً ولا يميلها.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-nisa-yakun-ghaniyyan-ibn-jammaz",
    "titleAr": "لفظ (إن يكن غنياً) لابن جماز في النساء",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-jafar",
    "narratorId": "ibn-jammaz",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 4,
    "surahNameAr": "النساء",
    "ayahNumbers": [
      135
    ],
    "quranText": "إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًا",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-izhar",
        "labelAr": "إظهار النون الساكنة عند الغين",
        "performanceType": "izhar"
      }
    ],
    "preferredFaceId": "face-izhar",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن جماز في (يكن غنياً) بالنساء مذهبه الإظهار.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-anam-hayran-warsh",
    "titleAr": "لفظ (حيران) لورش في الأنعام",
    "chapterId": "farsh-al-huruf",
    "readerId": "nafi",
    "narratorId": "warsh",
    "pathId": "al-azraq",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 6,
    "surahNameAr": "الأنعام",
    "ayahNumbers": [
      71
    ],
    "quranText": "كَالَّذِي اسْتَهْوَتْهُ الشَّيَاطِينُ فِي الْأَرْضِ حَيْرَانَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-tafkhim",
        "labelAr": "التفخيم",
        "performanceType": "other"
      },
      {
        "id": "face-tarqiq",
        "labelAr": "الترقيق",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-tafkhim",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "ورش في (حيران) بالأنعام الوجه المقدم عنه هو التفخيم.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-araf-bastatan-ibn-dhakwan",
    "titleAr": "لفظ (بسطة) لابن ذكوان في الأعراف",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 7,
    "surahNameAr": "الأعراف",
    "ayahNumbers": [
      69
    ],
    "quranText": "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-sad",
        "labelAr": "قراءة الكلمة بالصاد (بصطة)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-sad",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في (بسطة) بالأعراف يقرأ بالصاد.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "قرأ ابن ذكوان في موضع الأعراف {وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً} بالسين الخالصة أيضاً.",
    "preferenceReasonAr": "قراءة السين هي المعتمدة لابن ذكوان في التيسير والشاطبية.",
    "memoryRuleAr": "ابن ذكوان يقرأ (بسطة) بالأعراف بالسين الخالصة."
  },
  {
    "id": "farsh-araf-bastatan-khallad",
    "titleAr": "لفظ (بسطة) لخلاد في الأعراف",
    "chapterId": "farsh-al-huruf",
    "readerId": "hamza",
    "narratorId": "khallad",
    "pathId": "khallad-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 7,
    "surahNameAr": "الأعراف",
    "ayahNumbers": [
      69
    ],
    "quranText": "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-sad",
        "labelAr": "قراءة الكلمة بالصاد (بصطة)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-sad",
    "preferenceStatus": "single",
    "simpleExplanationAr": "خلاد في (بسطة) بالأعراف يقرأ بالصاد.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-araf-bastatan-hafs",
    "titleAr": "لفظ (بسطة) لحفص في الأعراف",
    "chapterId": "farsh-al-huruf",
    "readerId": "asim",
    "narratorId": "hafs",
    "pathId": "hafs-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 7,
    "surahNameAr": "الأعراف",
    "ayahNumbers": [
      69
    ],
    "quranText": "وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-seen",
        "labelAr": "قراءة الكلمة بالسين الخالصة (بسطة)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-seen",
    "preferenceStatus": "single",
    "simpleExplanationAr": "حفص في (بسطة) بالأعراف يقرأ بالسين قولاً واحداً من طريق الشاطبية.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 1,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-yusuf-bushraya-abu-amr",
    "titleAr": "لفظ (يا بشراي) لأبي عمرو في يوسف",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-amr",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 12,
    "surahNameAr": "يوسف",
    "ayahNumbers": [
      19
    ],
    "quranText": "قَالَ يَا بُشْرَايَ هَٰذَا غُلَامٌ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-fath",
        "labelAr": "الفتح",
        "performanceType": "fath"
      },
      {
        "id": "face-taqlil",
        "labelAr": "التقليل",
        "performanceType": "taqlil"
      }
    ],
    "preferredFaceId": "face-fath",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "أبو عمرو في (يا بشراي) بيوسف الوجه المقدم عنه هو الفتح.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-yusuf-ta-manna",
    "titleAr": "لفظ (ما لك لا تأمنا) في يوسف",
    "chapterId": "farsh-al-huruf",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 12,
    "surahNameAr": "يوسف",
    "ayahNumbers": [
      11
    ],
    "quranText": "مَا لَكَ لَا تَأْمَنَّا عَلَىٰ يُوسُفَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ishmam",
        "labelAr": "الإشمام (ضم الشفتين مقارناً لسكون النون الأولى المدغمة بلا صوت)",
        "performanceType": "ishmam"
      },
      {
        "id": "face-ikhtilas",
        "labelAr": "الاختلاس (الإتيان بثلثي ضمة النون وصلاً مع تقليل زمنها)",
        "performanceType": "short_vowel"
      }
    ],
    "preferredFaceId": "face-ishmam",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "في (لا تأمنا) بيوسف: الإشمام هو الوجه المقدم في الأداء عند الشيخ النحاس، مع صحة الاختلاس.",
    "detailedExplanationAr": "في (ما لك لا تأمنا) بيوسف لعموم القراء وجهان صحيحان: الإشمام (وهو إدغام النون الأولى في الثانية مع ضم الشفتين مقارناً للسكون بلا صوت)، والاختلاس (وهو الإتيان بثلثي حركة الضمة وصلاً بسرعة وبصوت يسمعه القريب والبعيد). والمقدم عند الشيخ النحاس هو الإشمام.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "preferenceReasonAr": "تقديم الإشمام في (تأمنا) هو اختيار الداني والشاطبي والجمهور.",
    "memoryRuleAr": "المقدم في (لا تأمنا) هو الإشمام ثم الاختلاس."
  },
  {
    "id": "farsh-ibrahim-khabithatin-ijtuth-that-ibn-dhakwan",
    "titleAr": "لفظ (خبيثة اجتثت) لابن ذكوان في إبراهيم",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 14,
    "surahNameAr": "إبراهيم",
    "ayahNumbers": [
      26
    ],
    "quranText": "كَشَجَرَةٍ خَبِيثَةٍ اجْتُثَّتْ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-kasr-tanwin",
        "labelAr": "كسر التنوين وصلاً للتخلص من التقاء الساكنين",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-kasr-tanwin",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في (خبيثة اجتثت) بإبراهيم يكسر التنوين وصلاً للتخلص من التقاء الساكنين كالجماعة بخلاف ضم التنوين لبعض القراء.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-maryam-kaf-ha-ya-ayn-sad-qalun",
    "titleAr": "فواتح (كهيعص) لقالون في مريم",
    "chapterId": "farsh-al-huruf",
    "readerId": "nafi",
    "narratorId": "qalun",
    "pathId": "abi-nashit-an-qalun",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 19,
    "surahNameAr": "مريم",
    "ayahNumbers": [
      1
    ],
    "quranText": "كهيعص",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-fath",
        "labelAr": "الفتح في الهاء والياء",
        "performanceType": "fath"
      }
    ],
    "preferredFaceId": "face-fath",
    "preferenceStatus": "single",
    "simpleExplanationAr": "قالون في (كهيعص) بمريم يفتح الهاء والياء قولاً واحداً.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-maryam-ayn-hamza-hafs",
    "titleAr": "حرف العين في فواتح مريم والشورى لحمزة وحفص",
    "chapterId": "farsh-al-huruf",
    "scope": "word",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 19,
    "surahNameAr": "مريم",
    "ayahNumbers": [
      1
    ],
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-tawassut",
        "labelAr": "التوسط (4 حركات)",
        "performanceType": "tawassut"
      },
      {
        "id": "face-ishba",
        "labelAr": "الإشباع (6 حركات)",
        "performanceType": "ishba"
      }
    ],
    "preferredFaceId": "face-tawassut",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "حمزة وحفص في عين (كهيعص / عسق) الوجه المقدم عنهما هو التوسط.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-maryam-ayn-abu-jafar-yaqub",
    "titleAr": "حرف العين في مريم والشورى لأبي جعفر ويعقوب",
    "chapterId": "farsh-al-huruf",
    "scope": "word",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 19,
    "surahNameAr": "مريم",
    "ayahNumbers": [
      1
    ],
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-qasr",
        "labelAr": "القصر (حركتان)",
        "performanceType": "qasr"
      },
      {
        "id": "face-tawassut",
        "labelAr": "التوسط (4 حركات)",
        "performanceType": "tawassut"
      }
    ],
    "preferredFaceId": "face-qasr",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "أبو جعفر ويعقوب في عين (كهيعص / عسق) الوجه المقدم عنهما هو القصر.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-naml-fama-atani",
    "titleAr": "لفظ (فما آتان) في النمل وقفاً",
    "chapterId": "farsh-al-huruf",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 27,
    "surahNameAr": "النمل",
    "ayahNumbers": [
      36
    ],
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ithbat",
        "labelAr": "إثبات الياء وقفاً",
        "performanceType": "ithbat"
      },
      {
        "id": "face-hadhf",
        "labelAr": "حذف الياء وقفاً",
        "performanceType": "hadhf"
      }
    ],
    "preferredFaceId": "face-ithbat",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "في (فما آتان) بالنمل إثبات الياء وقفاً هو المقدم لمن ثبت عنه من القراء.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-naml-la-qibala-lahum-ruways",
    "titleAr": "لفظ (فلا قِبلَ لهم) لرويس في النمل",
    "chapterId": "farsh-al-huruf",
    "readerId": "yaqub",
    "narratorId": "ruways",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 27,
    "surahNameAr": "النمل",
    "ayahNumbers": [
      37
    ],
    "quranText": "فَلَنَأْتِيَنَّهُم بِجُنُودٍ لَّا قِبَلَ لَهُم بِهَا",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-idgham",
        "labelAr": "إدغام اللام في اللام (لا قبلَّهم)",
        "performanceType": "idgham"
      },
      {
        "id": "face-izhar",
        "labelAr": "الإظهار",
        "performanceType": "izhar"
      }
    ],
    "preferredFaceId": "face-idgham",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "رويس في (لا قبل لهم) بالنمل الوجه المقدم عنه هو الإدغام الكبير.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-rum-tukhrajuna-ibn-dhakwan",
    "titleAr": "لفظ (وكذلك تخرجون) لابن ذكوان في الروم",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 30,
    "surahNameAr": "الروم",
    "ayahNumbers": [
      19
    ],
    "quranText": "وَكَذَٰلِكَ تُخْرَجُونَ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-fath-damm",
        "labelAr": "فتح التاء وضم الراء (تَخْرُجُون)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-fath-damm",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في (تخرجون) بالروم يقرأ بفتح التاء وضم الراء.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-rum-kisafan-hisham",
    "titleAr": "لفظ (كسفاً) لهشام في الروم",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "hisham",
    "pathId": "hisham-al-hulwani",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 30,
    "surahNameAr": "الروم",
    "ayahNumbers": [
      48
    ],
    "quranText": "وَيَجْعَلُهُ كِسَفًا",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-sukun-seen",
        "labelAr": "إسكان السين (كِسْفاً)",
        "performanceType": "sukun"
      }
    ],
    "preferredFaceId": "face-sukun-seen",
    "preferenceStatus": "single",
    "simpleExplanationAr": "هشام في (كسفاً) بالروم يقرأ بإسكان السين.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-rum-dafin-hafs",
    "titleAr": "لفظ (ضعف / ضعفاً) لحفص في الروم",
    "chapterId": "farsh-al-huruf",
    "readerId": "asim",
    "narratorId": "hafs",
    "pathId": "hafs-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 30,
    "surahNameAr": "الروم",
    "ayahNumbers": [
      54
    ],
    "quranText": "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً ثُمَّ جَعَلَ مِن بَعْدِ قُوَّةٍ ضَعْفًا وَشَيْبَةً",
    "ruleType": "equal_faces",
    "validFaces": [
      {
        "id": "face-fath-dad",
        "labelAr": "فتح الضاد (ضَعْف)",
        "performanceType": "fath"
      },
      {
        "id": "face-damm-dad",
        "labelAr": "ضم الضاد (ضُعْف)",
        "performanceType": "other"
      }
    ],
    "preferenceStatus": "equal",
    "simpleExplanationAr": "حفص في (ضعف / ضعفاً) بالروم له الوجهان (فتح الضاد وضمها) على السواء دون ترجيح.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 1,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-yasin-yakhissimuna-qalun",
    "titleAr": "لفظ (يخصمون) لقالون في يس",
    "chapterId": "farsh-al-huruf",
    "readerId": "nafi",
    "narratorId": "qalun",
    "pathId": "abi-nashit-an-qalun",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 36,
    "surahNameAr": "يس",
    "ayahNumbers": [
      49
    ],
    "quranText": "مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ikhtilas",
        "labelAr": "اختلاس فتحة الخاء مع تشديد الصاد",
        "performanceType": "short_vowel"
      },
      {
        "id": "face-sukun",
        "labelAr": "إسكان الخاء وتشديد الصاد",
        "performanceType": "sukun"
      },
      {
        "id": "face-kasr",
        "labelAr": "كسر الخاء وتشديد الصاد",
        "performanceType": "short_vowel"
      }
    ],
    "preferredFaceId": "face-ikhtilas",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "قالون في (يخصمون) بيس الوجه المقدم عنه هو الإسكان مع صحة الاختلاس.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary",
    "detailedExplanationAr": "روي عن قالون في (يخصمون) بيس أوجه، والمقدم في الأداء عنه هو اختلاس فتحة الخاء مع تشديد الصاد.",
    "preferenceReasonAr": "تقديم الاختلاس لقالون هو مذهب أبي عمرو الداني في التيسير.",
    "memoryRuleAr": "قالون في (يخصمون) يقدّم الاختلاس على الإسكان والكسر."
  },
  {
    "id": "farsh-zumar-ya-hasrata-ibn-wardan",
    "titleAr": "لفظ (يا حسرتا) لابن وردان في الزمر",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-jafar",
    "narratorId": "ibn-wardan",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 39,
    "surahNameAr": "الزمر",
    "ayahNumbers": [
      56
    ],
    "quranText": "أَن تَقُولَ نَفْسٌ يَا حَسْرَتَا عَلَىٰ مَا فَرَّطتُ فِي جَنبِ اللَّهِ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-fath-ya",
        "labelAr": "فتح الياء (يا حسرتيَ)",
        "performanceType": "fath"
      }
    ],
    "preferredFaceId": "face-fath-ya",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن وردان في (يا حسرتا) بالزمر يقرأ بفتح الياء.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-zumar-fa-bashshir-ibad-al-susi",
    "titleAr": "لفظ (فبشر عبادِ) للسوسي في الزمر",
    "chapterId": "farsh-al-huruf",
    "readerId": "abu-amr",
    "narratorId": "al-susi",
    "pathId": "al-susi-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 39,
    "surahNameAr": "الزمر",
    "ayahNumbers": [
      17
    ],
    "quranText": "فَبَشِّرْ عِبَادِ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ithbat-ya",
        "labelAr": "إثبات الياء وصلاً",
        "performanceType": "ithbat"
      },
      {
        "id": "face-hadhf",
        "labelAr": "الحذف وصلاً",
        "performanceType": "hadhf"
      }
    ],
    "preferredFaceId": "face-ithbat-ya",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "السوسي في (فبشر عباد) بالزمر يثبت الياء وصلاً وهو المقدم عنه.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-zukhruf-lamma-mata-un-hisham",
    "titleAr": "لفظ (لما متاع) لهشام في الزخرف",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "hisham",
    "pathId": "hisham-al-hulwani",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 43,
    "surahNameAr": "الزخرف",
    "ayahNumbers": [
      35
    ],
    "quranText": "وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَاعُ الْحَيَاةِ الدُّنْيَا",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-takhfif",
        "labelAr": "تخفيف الميم (لَمَا مَتَاعُ)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-takhfif",
    "preferenceStatus": "single",
    "simpleExplanationAr": "هشام في (لما متاع) بالزخرف يقرأ بتخفيف الميم.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-ahqaf-li-tundhira-al-bazzi",
    "titleAr": "لفظ (لتنذر الذين ظلموا) للبزي في الأحقاف",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-kathir",
    "narratorId": "al-bazzi",
    "pathId": "al-bazzi-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 46,
    "surahNameAr": "الأحقاف",
    "ayahNumbers": [
      12
    ],
    "quranText": "لِّتُنذِرَ الَّذِينَ ظَلَمُوا وَبُشْرَىٰ لِلْمُحْسِنِينَ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-ta",
        "labelAr": "قراءة الكلمة بتاء الخطاب (لِتُنذِرَ)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-ta",
    "preferenceStatus": "single",
    "simpleExplanationAr": "البزي في (لتنذر الذين ظلموا) بالأحقاف يقرأ بتاء الخطاب.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-muhammad-asin-al-bazzi",
    "titleAr": "لفظ (ماء غير آسن) للبزي في محمد",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-kathir",
    "narratorId": "al-bazzi",
    "pathId": "al-bazzi-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 47,
    "surahNameAr": "محمد",
    "ayahNumbers": [
      15
    ],
    "quranText": "فِيهَا أَنْهَارٌ مِّن مَّاءٍ غَيْرِ آسِنٍ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-madd",
        "labelAr": "المد مع همزة بعدها ألف (آسِنٍ)",
        "performanceType": "ishba"
      }
    ],
    "preferredFaceId": "face-madd",
    "preferenceStatus": "single",
    "simpleExplanationAr": "البزي في (آسن) بسورة محمد يقرأ بالمد.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-rahman-al-munshaat-shubah",
    "titleAr": "لفظ (المنشآت) لشعبة في الرحمن",
    "chapterId": "farsh-al-huruf",
    "readerId": "asim",
    "narratorId": "shubah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 55,
    "surahNameAr": "الرحمن",
    "ayahNumbers": [
      24
    ],
    "quranText": "وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-kasr-sheen",
        "labelAr": "كسر الشين (الْمُنشِئَات)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-kasr-sheen",
    "preferenceStatus": "single",
    "simpleExplanationAr": "شعبة في (المنشآت) بسورة الرحمن يقرأ بكسر الشين.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-rahman-yatmith-hunna",
    "titleAr": "لفظ (لم يطمثهن) في الموضعين بالرحمن",
    "chapterId": "farsh-al-huruf",
    "scope": "group",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 55,
    "surahNameAr": "الرحمن",
    "ayahNumbers": [
      56,
      74
    ],
    "quranText": "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-kasr-meem",
        "labelAr": "كسر الميم في الموضعين معاً (لم يطْمِثْهُن)",
        "performanceType": "other"
      },
      {
        "id": "face-damm-meem",
        "labelAr": "ضم الميم في الموضعين معاً (لم يطْمُثْهُن)",
        "performanceType": "other"
      }
    ],
    "preferenceStatus": "disputed",
    "simpleExplanationAr": "حكم (يطمثهن) في موضعي الرحمن (56 و 74) مترابطان معاً في التحرير، ولا يجوز فصل التحرير بينهما.",
    "detailedExplanationAr": "موضعا الرحمن (لم يطمثهن) يقرآن معاً إما بكسر الميم أو بضمها بحسب القارئ، والتحرير يمنع تركيب وجه في الأول يخالف الثاني لنفس القارئ.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 3,
    "verificationStatus": "verified_primary",
    "rawiPreferences": [
      {
        "narratorId": "al-kisai",
        "preferredFaceId": "face-damm",
        "notesAr": "الكسائي يضم الطاء (لَمْ يَطْمُثْهُنَّ) قولاً واحداً."
      },
      {
        "narratorId": "shubah",
        "preferredFaceId": "face-damm",
        "notesAr": "شعبة يضم الطاء قولاً واحداً."
      },
      {
        "narratorId": "abu-jafar",
        "preferredFaceId": "face-damm",
        "notesAr": "أبو جعفر يضم الطاء قولاً واحداً."
      },
      {
        "narratorId": "ruways",
        "preferredFaceId": "face-damm",
        "notesAr": "رويس عن يعقوب يضم الطاء قولاً واحداً."
      },
      {
        "narratorId": "hafs",
        "preferredFaceId": "face-kasr",
        "notesAr": "حفص وباقي القراء يكسرون الطاء (لَمْ يَطْمِثْهُنَّ)."
      }
    ]
  },
  {
    "id": "farsh-hashr-takuna-dawlatan-hisham",
    "titleAr": "لفظ (كي لا يكون دولة) لهشام في الحشر",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "hisham",
    "pathId": "hisham-al-hulwani",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 59,
    "surahNameAr": "الحشر",
    "ayahNumbers": [
      7
    ],
    "quranText": "كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-tanith-rafa",
        "labelAr": "تأنيث الفعل ورفع دولة (تَكُونَ دُولَةٌ)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-tanith-rafa",
    "preferenceStatus": "single",
    "simpleExplanationAr": "هشام في (تكون دولة) بالحشر يقرأ بتأنيث الفعل ورفع دولة.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-haqqah-tu-minuna-tadhakkaruna-ibn-dhakwan",
    "titleAr": "لفظا (تؤمنون / تذكرون) لابن ذكوان في الحاقة",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "ibn-dhakwan",
    "pathId": "ibn-dhakwan-al-akhfash",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 69,
    "surahNameAr": "الحاقة",
    "ayahNumbers": [
      41,
      42
    ],
    "quranText": "قَلِيلًا مَّا تُؤْمِنُونَ ... قَلِيلًا مَّا تَذَكَّرُونَ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-ta-khitab",
        "labelAr": "قراءة الحرفين بتاء الخطاب",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-ta-khitab",
    "preferenceStatus": "single",
    "simpleExplanationAr": "ابن ذكوان في (تؤمنون / تذكرون) بالحاقة يقرأ بتاء الخطاب.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-jinn-libadan-hisham",
    "titleAr": "لفظ (يكونون عليه لبداً) لهشام في الجن",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-amir",
    "narratorId": "hisham",
    "pathId": "hisham-al-hulwani",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 72,
    "surahNameAr": "الجن",
    "ayahNumbers": [
      19
    ],
    "quranText": "كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-damm-lam",
        "labelAr": "ضم اللام (لُبَداً)",
        "performanceType": "other"
      }
    ],
    "preferredFaceId": "face-damm-lam",
    "preferenceStatus": "single",
    "simpleExplanationAr": "هشام في (لبداً) بسورة الجن يقرأ بضم اللام.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-insan-salasila-hafs",
    "titleAr": "لفظ (سلاسلا) لحفص في الإنسان وقفاً",
    "chapterId": "farsh-al-huruf",
    "readerId": "asim",
    "narratorId": "hafs",
    "pathId": "hafs-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 76,
    "surahNameAr": "الإنسان",
    "ayahNumbers": [
      4
    ],
    "quranText": "إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَا وَأَغْلَالًا وَسَعِيرًا",
    "ruleType": "preferred_face",
    "validFaces": [
      {
        "id": "face-ithbat-alif",
        "labelAr": "إثبات الألف وقفاً (سلاسلا)",
        "performanceType": "ithbat"
      },
      {
        "id": "face-hadhf-alif",
        "labelAr": "حذف الألف مع إسكان اللام وقفاً (سلاسلْ)",
        "performanceType": "hadhf"
      }
    ],
    "preferredFaceId": "face-ithbat-alif",
    "preferenceStatus": "preferred",
    "simpleExplanationAr": "حفص في (سلاسلا) بالإنسان الوجه المقدم عنه في الوقف هو إثبات الألف.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 1,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-insan-salasila-bazzi-ibn-dhakwan",
    "titleAr": "لفظ (سلاسلا) للبزي وابن ذكوان في الإنسان وقفاً",
    "chapterId": "farsh-al-huruf",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 76,
    "surahNameAr": "الإنسان",
    "ayahNumbers": [
      4
    ],
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-hadhf-alif",
        "labelAr": "حذف الألف وقفاً (سلاسلْ)",
        "performanceType": "hadhf"
      }
    ],
    "preferredFaceId": "face-hadhf-alif",
    "preferenceStatus": "single",
    "simpleExplanationAr": "البزي وابن ذكوان في (سلاسلا) بالإنسان مذهبهما في الوقف حذف الألف.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  },
  {
    "id": "farsh-alaq-ra-ahu-qunbul",
    "titleAr": "لفظ (أن رآه استغنى) لقنبل في العلق",
    "chapterId": "farsh-al-huruf",
    "readerId": "ibn-kathir",
    "narratorId": "qunbul",
    "pathId": "qunbul-shatibiyyah",
    "scope": "ayah",
    "evidenceLevel": "explicit_author_statement",
    "surahNumber": 96,
    "surahNameAr": "العلق",
    "ayahNumbers": [
      7
    ],
    "quranText": "أَن رَّآهُ اسْتَغْنَىٰ",
    "ruleType": "base_rule",
    "validFaces": [
      {
        "id": "face-qasr",
        "labelAr": "قصر الهمزة بلا ألف (رَأَهُ)",
        "performanceType": "qasr"
      }
    ],
    "preferredFaceId": "face-qasr",
    "preferenceStatus": "single",
    "simpleExplanationAr": "قنبل في (رآه) بالعلق يقرأ بالقصر وحذف الألف بعد الهمزة وصلاً ووقفاً.",
    "sourceIds": [
      "an-nahhas-risala",
      "an-nahhas-qasida"
    ],
    "difficulty": 2,
    "verificationStatus": "verified_primary"
  }
];
