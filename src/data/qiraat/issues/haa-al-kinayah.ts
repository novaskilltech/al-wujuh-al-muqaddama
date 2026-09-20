import { QiraatIssue } from "../types.js";

export const haaAlKinayahIssues: QiraatIssue[] = [
  {
    id: "haa-kinayah-hisham-six-words",
    titleAr: "هاء الكناية لهشام في الكلمات الست المخصوصة",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    surahNumbers: [3, 4, 24, 27],
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء", performanceType: "sukun" },
      { id: "face-qasr-sila", labelAr: "القصر أو الصلة بحسب الموضع والطريق", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في الكلمات الست المخصوصة الوجه المقدم عنه في الأداء هو إسكان الهاء.",
    detailedExplanationAr: "قاعدة هشام في هذه الكلمات الست المخصوصة هي إسكان هاء الكناية وهو الوجه المقدم عنه في طريق الحلواني المعتمد عند الشيخ النحاس، مع ثبوت الخلاف في بعضها بين القصر والصلة حسب الطرق والتحريرات.",
    preferenceReasonAr: "تقديم الإسكان لهشام مبني على الرواية المسندة من طريق الحلواني في التيسير والتجريد.",
    memoryRuleAr: "هشام يسكن هاء الكلمات الست تقديماً: يؤده، نؤته، نوله، نصله، فألقه، يتقه.",
    subRules: [
      {
        wordAr: "يُؤَدِّهِ إِلَيْكَ (آل عمران: 75)",
        validFaces: [
          { id: "sub-sukun-1", labelAr: "الإسكان", performanceType: "sukun" },
          { id: "sub-qasr-1", labelAr: "القصر (كسر الهاء بلا صلة)", performanceType: "short_vowel" },
          { id: "sub-sila-1", labelAr: "الصلة بياء لفظية", performanceType: "sila" }
        ],
        preferredFaceId: "sub-sukun-1",
        notesAr: "المقدم لهشام هو الإسكان (يُؤَدِّهْ إِلَيْكَ)."
      },
      {
        wordAr: "نُؤْتِهِ مِنْهَا (آل عمران: 145، والشورى: 20)",
        validFaces: [
          { id: "sub-sukun-2", labelAr: "الإسكان", performanceType: "sukun" },
          { id: "sub-qasr-2", labelAr: "القصر (كسر الهاء بلا صلة)", performanceType: "short_vowel" },
          { id: "sub-sila-2", labelAr: "الصلة بياء لفظية", performanceType: "sila" }
        ],
        preferredFaceId: "sub-sukun-2",
        notesAr: "المقدم لهشام في الموضعين هو الإسكان (نُؤْتِهْ مِنْهَا)."
      },
      {
        wordAr: "نُوَلِّهِ مَا تَوَلَّى (النساء: 115)",
        validFaces: [
          { id: "sub-sukun-3", labelAr: "الإسكان", performanceType: "sukun" },
          { id: "sub-qasr-3", labelAr: "القصر", performanceType: "short_vowel" },
          { id: "sub-sila-3", labelAr: "الصلة", performanceType: "sila" }
        ],
        preferredFaceId: "sub-sukun-3",
        notesAr: "المقدم لهشام هو الإسكان (نُوَلِّهْ)."
      },
      {
        wordAr: "وَنُصْلِهِ جَهَنَّمَ (النساء: 115)",
        validFaces: [
          { id: "sub-sukun-4", labelAr: "الإسكان", performanceType: "sukun" },
          { id: "sub-qasr-4", labelAr: "القصر", performanceType: "short_vowel" },
          { id: "sub-sila-4", labelAr: "الصلة", performanceType: "sila" }
        ],
        preferredFaceId: "sub-sukun-4",
        notesAr: "المقدم لهشام هو الإسكان (وَنُصْلِهْ)."
      },
      {
        wordAr: "فَأَلْقِهْ إِلَيْهِمْ (النمل: 28)",
        validFaces: [
          { id: "sub-sukun-5", labelAr: "الإسكان", performanceType: "sukun" },
          { id: "sub-qasr-5", labelAr: "القصر مع كسر الهاء", performanceType: "short_vowel" }
        ],
        preferredFaceId: "sub-sukun-5",
        notesAr: "المقدم لهشام هو الإسكان (فَأَلْقِهْ إِلَيْهِمْ)، وقرأ بالقصر بلا صلة."
      },
      {
        wordAr: "وَيَتَّقْهِ فَأُولَئِكَ (النور: 52)",
        validFaces: [
          { id: "sub-sukun-6", labelAr: "إسكان الهاء مع كسر القاف", performanceType: "sukun" },
          { id: "sub-qasr-6", labelAr: "قصر الهاء مع كسر القاف", performanceType: "short_vowel" }
        ],
        preferredFaceId: "sub-sukun-6",
        notesAr: "المقدم لهشام إسكان الهاء مع كسر القاف (وَيَتَّقِـهْ)."
      }
    ],
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    poemVerseIds: ["poem-005"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "haa-kinayah-yatehi-qalun",
    titleAr: "هاء الكناية لقالون في (يأته مؤمناً)",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "nafi",
    narratorId: "qalun",
    pathId: "abi-nashit-an-qalun",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 20,
    surahNameAr: "طه",
    ayahNumbers: [75],
    quranText: "وَمَن يَأْتِهِ مُؤْمِنًا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة بياء لفظية حركتين (يَأْتِيهِي)", performanceType: "sila" },
      { id: "face-qasr", labelAr: "القصر (عدم الصلة مع كسر الهاء)", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "قالون في (يأته مؤمناً) بطه له القصر والصلة، والمقدم عند الشيخ النحاس هو الصلة.",
    detailedExplanationAr: "الأصل في هاء الكناية إذا وقعت بين ساكن ومتحرك القصر، لكن قالون رُوي عنه في هذا الموضع وجهان: القصر والصلة. واختار الشيخ النحاس تبعاً للداني تقديم وجه الصلة في الأداء.",
    preferenceReasonAr: "تقديم الصلة لقالون هو اختيار أبي عمرو الداني في التيسير وجامع البيان.",
    disagreementAr: "نص الشيخ النحاس على أن بعض أئمة الإقراء يقدمون القصر لقالون، لكن المعتمد في هذا المشروع هو تقديم الصلة.",
    memoryRuleAr: "قالون في طه يقدّم الصلة في (يأته مؤمناً) على القصر.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "haa-kinayah-yatehi-hisham",
    titleAr: "هاء الكناية لهشام في (يأته مؤمناً)",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 20,
    surahNameAr: "طه",
    ayahNumbers: [75],
    quranText: "وَمَن يَأْتِهِ مُؤْمِنًا",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة بياء لفظية (يَأْتِيهِي)", performanceType: "sila" },
      { id: "face-sukun", labelAr: "إسكان الهاء (يَأْتِهْ)", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (يأته مؤمناً) بطه المقدم عنه الصلة، بخلاف الكلمات الست التي مقدمها الإسكان.",
    detailedExplanationAr: "روي عن هشام في هذا الموضع الصلة والإسكان، والمقدم عنه أداءً هو الصلة، وهي تخالف قاعدته في الكلمات الست المخصوصة حيث قدّم فيها الإسكان.",
    preferenceReasonAr: "تقديم الصلة لهشام في طه مأخوذ من طريق الحلواني المعتمد في التحريرات.",
    memoryRuleAr: "هشام في (يأته مؤمناً) يقدّم الصلة، بخلاف الكلمات الست فيقدّم الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "haa-kinayah-yardahu-hisham",
    titleAr: "هاء الكناية لهشام في (يرضه لكم)",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "ibn-amir",
    narratorId: "hisham",
    pathId: "hisham-al-hulwani",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [7],
    quranText: "وَإِن تَشْكُرُوا يَرْضَهُ لَكُمْ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sukun", labelAr: "إسكان الهاء (يَرْضَهْ لَكُمْ)", performanceType: "sukun" },
      { id: "face-qasr", labelAr: "القصر (ضم الهاء بلا صلة)", performanceType: "short_vowel" }
    ],
    preferredFaceId: "face-sukun",
    preferenceStatus: "preferred",
    simpleExplanationAr: "هشام في (يرضه لكم) بالزمر الوجه المقدم عنه هو إسكان الهاء.",
    detailedExplanationAr: "روي عن هشام في هذا الموضع الإسكان والقصر، والمقدم عنه في طريق الحلواني هو الإسكان.",
    preferenceReasonAr: "تقديم الإسكان لهشام في الزمر نص عليه الشيخ في الرسالة والمنظومة.",
    memoryRuleAr: "هشام يسكّن هاء (يرضه لكم) تقديماً على القصر.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "haa-kinayah-yardahu-al-duri-abu-amr",
    titleAr: "هاء الكناية للدوري عن أبي عمرو في (يرضه لكم)",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "abu-amr",
    narratorId: "al-duri-abu-amr",
    pathId: "al-duri-abu-amr-shatibiyyah",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 39,
    surahNameAr: "الزمر",
    ayahNumbers: [7],
    quranText: "وَإِن تَشْكُرُوا يَرْضَهُ لَكُمْ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة بواو لفظية (يَرْضَهُو لَكُمْ)", performanceType: "sila" },
      { id: "face-sukun", labelAr: "إسكان الهاء (يَرْضَهْ لَكُمْ)", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "الدوري عن أبي عمرو في (يرضه لكم) بالزمر الوجه المقدم عنه هو الصلة.",
    detailedExplanationAr: "روي عن الدوري الصلة والإسكان، والمقدم عنه في الأداء هو الصلة بواو لفظية حركتين.",
    preferenceReasonAr: "تقديم الصلة للدوري هو مذهب الداني في التيسير.",
    memoryRuleAr: "الدوري عن أبي عمرو يقدّم الصلة في (يرضه لكم) على الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "haa-kinayah-yatiqihi-ibn-jammaz",
    titleAr: "هاء الكناية لابن جماز في (ويتقه)",
    chapterId: "haa-al-kinayah",
    chapterIds: ["farsh-al-huruf"],
    readerId: "abu-jafar",
    narratorId: "ibn-jammaz",
    scope: "ayah",
    evidenceLevel: "explicit_author_statement",
    surahNumber: 24,
    surahNameAr: "النور",
    ayahNumbers: [52],
    quranText: "وَيَخْشَ اللَّهَ وَيَتَّقْهِ",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sila", labelAr: "الصلة (مع كسر القاف)", performanceType: "sila" },
      { id: "face-sukun", labelAr: "الإسكان", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sila",
    preferenceStatus: "preferred",
    simpleExplanationAr: "ابن جماز في (ويتقه) بسورة النور الوجه المقدم عنه هو الصلة.",
    detailedExplanationAr: "روي عن ابن جماز الصلة والإسكان مع كسر القاف، والمقدم عنه في الأداء هو الصلة.",
    preferenceReasonAr: "تقديم الصلة لابن جماز مبني على ما في تحبير التيسير والدرة المضية.",
    memoryRuleAr: "ابن جماز في (ويتقه) بالنور يقدّم الصلة على الإسكان.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
