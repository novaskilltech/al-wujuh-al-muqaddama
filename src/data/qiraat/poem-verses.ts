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
    fullText: "البيت رقم 1 — النص قيد النسخ والمقابلة على الأصل المعتمد",
    firstHemistichAr: "البيت رقم 1 — قيد المقابلة",
    secondHemistichAr: "النص قيد النسخ والمقابلة",
    textStatus: "pending_transcription",
    chapterIds: ["istiadha"],
    issueIds: []
  },
  {
    id: "poem-002",
    order: 2,
    fullText: "البيت رقم 2 — النص قيد النسخ والمقابلة على الأصل المعتمد",
    firstHemistichAr: "البيت رقم 2 — قيد المقابلة",
    secondHemistichAr: "النص قيد النسخ والمقابلة",
    textStatus: "pending_transcription",
    chapterIds: ["istiadha"],
    issueIds: []
  },
  {
    id: "poem-003",
    order: 3,
    fullText: "البيت رقم 3 — النص قيد النسخ والمقابلة على الأصل المعتمد",
    firstHemistichAr: "البيت رقم 3 — قيد المقابلة",
    secondHemistichAr: "النص قيد النسخ والمقابلة",
    textStatus: "pending_transcription",
    chapterIds: ["basmala"],
    issueIds: ["basmala-qalun", "basmala-warsh"]
  },
  {
    id: "poem-004",
    order: 4,
    fullText: "البيت رقم 4 — النص قيد النسخ والمقابلة على الأصل المعتمد",
    firstHemistichAr: "البيت رقم 4 — قيد المقابلة",
    secondHemistichAr: "النص قيد النسخ والمقابلة",
    textStatus: "pending_transcription",
    chapterIds: ["basmala"],
    issueIds: ["basmala-al-duri-abu-amr", "basmala-al-susi"]
  },
  {
    id: "poem-005",
    order: 5,
    fullText: "البيت رقم 5 — النص قيد النسخ والمقابلة على الأصل المعتمد",
    firstHemistichAr: "البيت رقم 5 — قيد المقابلة",
    secondHemistichAr: "النص قيد النسخ والمقابلة",
    textStatus: "pending_transcription",
    chapterIds: ["meem-al-jam"],
    issueIds: ["meem-al-jam-qalun", "meem-al-jam-abu-jafar"]
  }
];
