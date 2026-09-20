import { QiraatIssue } from "../types.js";

export const saktIssues: QiraatIssue[] = [
  {
    id: "sakt-khalaf-an-hamza",
    titleAr: "مراتب السكت لخلف عن حمزة",
    chapterId: "sakt",
    readerId: "hamza",
    narratorId: "khalaf-an-hamza",
    pathId: "khalaf-an-hamza-shatibiyyah",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sakt-al-wa-shay", labelAr: "السكت على (أل) التعريف وشيء فقط وترك الساكن المفصول", performanceType: "sakt" },
      { id: "face-sakt-am", labelAr: "السكت العام على المفصول أيضاً", performanceType: "sakt" },
      { id: "face-tark-sakt", labelAr: "ترك السكت مطلقاً", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sakt-al-wa-shay",
    preferenceStatus: "preferred",
    simpleExplanationAr: "المقدم لخلف عن حمزة هو السكت على (أل) وشيء، مع عدم السكت على الساكن المفصول.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "sakt-khallad",
    titleAr: "السكت لخلاد عن حمزة",
    chapterId: "sakt",
    readerId: "hamza",
    narratorId: "khallad",
    pathId: "khallad-shatibiyyah",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-tark-sakt", labelAr: "ترك السكت مطلقاً", performanceType: "sukun" },
      { id: "face-sakt-al-faqat", labelAr: "السكت على (أل) وشيء", performanceType: "sakt" }
    ],
    preferredFaceId: "face-tark-sakt",
    preferenceStatus: "preferred",
    simpleExplanationAr: "المقدم لخلاد عن حمزة هو ترك السكت.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  },
  {
    id: "sakt-idris-khalaf10",
    titleAr: "السكت لإدريس عن خلف العاشر",
    chapterId: "sakt",
    readerId: "khalaf10",
    narratorId: "idris",
    pathId: "idris-khalaf10-durrah",
    scope: "path",
    evidenceLevel: "explicit_author_statement",
    ruleType: "preferred_face",
    validFaces: [
      { id: "face-sakt-idris", labelAr: "السكت على الساكن غير المدي قبل الهمز", performanceType: "sakt" },
      { id: "face-tark-idris", labelAr: "ترك السكت", performanceType: "sukun" }
    ],
    preferredFaceId: "face-sakt-idris",
    preferenceStatus: "preferred",
    simpleExplanationAr: "إدريس عن خلف العاشر المقدم عنه من طريقه هو السكت على الساكن غير المدي قبل الهمز وصلاً.",
    sourceIds: ["an-nahhas-risala", "an-nahhas-qasida"],
    difficulty: 2,
    verificationStatus: "verified_primary"
  }
];
