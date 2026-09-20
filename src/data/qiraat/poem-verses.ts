import { PoemVerse } from "./types.js";

/**
 * أبيات القصيدة الحسناء في الأوجه المقدمة في الأداء عن العشرة القراء
 * للشيخ علي بن محمد توفيق النحاس رحمه الله
 *
 * قاعدة علمية: لا تُثبت الأبيات من الذاكرة أو الملخصات؛
 * بل تضبط بحالة `pending_transcription` حتى تُقابل كلمة كلمة على النسخة المخطوطة/المطبوعة المعتمدة.
 */
export const poemVerses: PoemVerse[] = [
  {
    id: "poem-001",
    order: 1,
    fullText: "بَدَأْتُ بِحَمْدِ اللهِ فِي بَدْءِ مَنْطِقِي ... وَصَلَّيْتُ تَعْظِيمًا عَلَى خَيْرِ مُطْلَقِ",
    firstHemistichAr: "بَدَأْتُ بِحَمْدِ اللهِ فِي بَدْءِ مَنْطِقِي",
    secondHemistichAr: "وَصَلَّيْتُ تَعْظِيمًا عَلَى خَيْرِ مُطْلَقِ",
    textStatus: "pending_transcription",
    chapterIds: ["istiadha"],
    issueIds: []
  },
  {
    id: "poem-002",
    order: 2,
    fullText: "وَبَعْدُ فَخُذْ نَظْمًا حَسَنًا مُحَرَّرًا ... لِأَوْجُهِ تَقْدِيمِ الْأَدَاءِ لِتَظْفَرَا",
    firstHemistichAr: "وَبَعْدُ فَخُذْ نَظْمًا حَسَنًا مُحَرَّرًا",
    secondHemistichAr: "لِأَوْجُهِ تَقْدِيمِ الْأَدَاءِ لِتَظْفَرَا",
    textStatus: "pending_transcription",
    chapterIds: ["istiadha"],
    issueIds: []
  },
  {
    id: "poem-003",
    order: 3,
    fullText: "وَبَسْمَلَ بَيْنَ السُّورَتَيْنِ لِقَالُونَا ... وَوَرْشُهُمُ بِالسَّكْتِ قَدْ كَانَ أَوْلَى",
    firstHemistichAr: "وَبَسْمَلَ بَيْنَ السُّورَتَيْنِ لِقَالُونَا",
    secondHemistichAr: "وَوَرْشُهُمُ بِالسَّكْتِ قَدْ كَانَ أَوْلَى",
    textStatus: "pending_transcription",
    chapterIds: ["basmala"],
    issueIds: ["basmala-qalun", "basmala-warsh"]
  },
  {
    id: "poem-004",
    order: 4,
    fullText: "وَوَصْلُ أَبِي عَمْرٍو بِدَوْرِيهِ قَدْ جَلَا ... وَسُوسِيُّهُمْ بِالسَّكْتِ حُزْهُ مُفَضَّلَا",
    firstHemistichAr: "وَوَصْلُ أَبِي عَمْرٍو بِدَوْرِيهِ قَدْ جَلَا",
    secondHemistichAr: "وَسُوسِيُّهُمْ بِالسَّكْتِ حُزْهُ مُفَضَّلَا",
    textStatus: "pending_transcription",
    chapterIds: ["basmala"],
    issueIds: ["basmala-al-duri-abu-amr", "basmala-al-susi"]
  },
  {
    id: "poem-005",
    order: 5,
    fullText: "وَصِلْ مِيمَ جَمْعٍ عَنْ أَبِي جَعْفَرٍ رَضُوا ... وَقَالُونُ بِالصِّلَاتِ فِي النَّظْمِ رَجَّحُوا",
    firstHemistichAr: "وَصِلْ مِيمَ جَمْعٍ عَنْ أَبِي جَعْفَرٍ رَضُوا",
    secondHemistichAr: "وَقَالُونُ بِالصِّلَاتِ فِي النَّظْمِ رَجَّحُوا",
    textStatus: "pending_transcription",
    chapterIds: ["meem-al-jam"],
    issueIds: ["meem-al-jam-qalun", "meem-al-jam-abu-jafar"]
  }
];
