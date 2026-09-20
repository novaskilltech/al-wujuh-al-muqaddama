import { QiraatIssue } from "../types.js";

export const lamaatIssues: QiraatIssue[] = [
  {
    id: "laamaat-taghlidh-warsh",
    titleAr: "تغليظ اللام المفتوحة لورش",
    chapterId: "laamaat",
    readerId: "nafi",
    narratorId: "warsh",
    pathId: "al-azraq",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "base_rule",
    validFaces: [
      { id: "face-taghlidh", labelAr: "تغليظ اللام إذا كانت مفتوحة بعد (ص، ط، ظ) ساكنة أو مفتوحة", performanceType: "other" }
    ],
    preferredFaceId: "face-taghlidh",
    preferenceStatus: "single",
    simpleExplanationAr: "يغلظ ورش من طريق الأزرق كل لام مفتوحة سبقت بصاد أو طاء أو ظاء ساكنة أو مفتوحة كأصل من أصوله الثابتة.",
    detailedExplanationAr: "روى الأزرق عن ورش تغليظ اللام إذا كانت مفتوحة وسبقت بأحد الحروف الثلاثة (الصاد، الطاء، الظاء) سواء كانت تلك الحروف ساكنة نحو {أَظْلَمَ} و{مَطْلَعِ} أو مفتوحة نحو {صَلَاتُهُمْ} و{طَلَّقَهَا}. وإذا وقع بعدها ألف منقلبة عن ياء جرى فيها التغليظ والترقيق بحسب تحريرات الأوجه مع البدل وذوات الياء.",
    preferenceReasonAr: "تغليظ اللامات لورش من طريق الأزرق أصل مطرد في روايته في التيسير والشاطبية.",
    memoryRuleAr: "ورش يغلّظ اللام المفتوحة بعد الصاد والطاء والظاء الساكنة أو المفتوحة.",
    dependsOn: ["madd-badal-warsh"],
    forbiddenCombinations: ["combin-taqlil-with-tarqiq-when-incompatible"],
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
