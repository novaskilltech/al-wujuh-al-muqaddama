import { issues } from "./issues/index.js";
import { readers } from "./readers.js";
import { narrators } from "./narrators.js";
import { paths } from "./paths.js";
import { chapters } from "./chapters.js";
import { poemVerses } from "./poem-verses.js";
import { sources } from "./sources.js";
import {
  QiraatIssue,
  Reader,
  Narrator,
  Path,
  Chapter,
  PoemVerse,
  Source,
  PerformanceType,
  IssueScope,
  EvidenceLevel
} from "./types.js";

// ==========================================
// فهارس واستعلامات المسائل (Issues Queries)
// ==========================================

/**
 * استرجاع المسائل الخاصة بقارئ معين
 */
export function getIssuesByReader(readerId: string): QiraatIssue[] {
  return issues.filter(
    issue => issue.readerId === readerId ||
    (issue.narratorId && narrators.find(n => n.id === issue.narratorId)?.readerId === readerId)
  );
}

/**
 * استرجاع المسائل الخاصة براوٍ معين
 */
export function getIssuesByNarrator(narratorId: string): QiraatIssue[] {
  return issues.filter(issue => issue.narratorId === narratorId);
}

/**
 * استرجاع المسائل الخاصة بطريق معين (ṭarīq)
 */
export function getIssuesByPath(pathId: string): QiraatIssue[] {
  return issues.filter(issue => issue.pathId === pathId);
}

/**
 * استرجاع المسائل الخاصة بباب معين
 */
export function getIssuesByChapter(chapterId: string): QiraatIssue[] {
  return issues.filter(
    issue => issue.chapterId === chapterId || issue.chapterIds?.includes(chapterId)
  );
}

/**
 * استرجاع المسائل الخاصة بسورة معينة برقمها الكنسي (1-114)
 */
export function getIssuesBySurah(surahNumber: number): QiraatIssue[] {
  return issues.filter(
    issue => issue.surahNumber === surahNumber || issue.surahNumbers?.includes(surahNumber)
  );
}

/**
 * استرجاع المسائل المرتبطة ببيت شعري معين
 */
export function getIssuesByPoemVerse(verseId: string): QiraatIssue[] {
  return issues.filter(issue => issue.poemVerseIds?.includes(verseId));
}

/**
 * استرجاع المسائل حسب النطاق (قارئ، راوٍ، طريق، كلمة، آية، مجموعة)
 */
export function getIssuesByScope(scope: IssueScope): QiraatIssue[] {
  return issues.filter(issue => issue.scope === scope);
}

/**
 * استرجاع المسائل حسب درجة التوثيق والدليل العلمي
 */
export function getIssuesByEvidenceLevel(level: EvidenceLevel): QiraatIssue[] {
  return issues.filter(issue => issue.evidenceLevel === level);
}

/**
 * استرجاع كل المسائل التي فيها وجه مقدم معتمد
 */
export function getPreferredIssues(): QiraatIssue[] {
  return issues.filter(
    issue => issue.preferenceStatus === "preferred" && issue.preferredFaceId !== undefined
  );
}

/**
 * استرجاع المسائل الخلافية أو التي فيها تعدد أوجه
 */
export function getDisputedIssues(): QiraatIssue[] {
  return issues.filter(
    issue => issue.preferenceStatus === "disputed" || issue.preferenceStatus === "equal"
  );
}

/**
 * استرجاع المسائل التي تحتاج إلى مراجعة وتوثيق من الأصل
 */
export function getIssuesNeedingVerification(): QiraatIssue[] {
  return issues.filter(
    issue => issue.verificationStatus === "needs_primary_check" ||
             issue.preferenceStatus === "needs_primary_verification"
  );
}

/**
 * استرجاع المسائل حسب نوع الأداء الصوتي (إدغام، سكت، إمالة، صلة...)
 */
export function getIssuesByPerformanceType(type: PerformanceType): QiraatIssue[] {
  return issues.filter(issue =>
    issue.validFaces.some(face => face.performanceType === type)
  );
}

/**
 * استرجاع المسائل الآمنة للدراسة (يستثنى منها فقط ما يحتاج لمراجعة أصلية)
 */
export function getSafeStudyIssues(): QiraatIssue[] {
  return issues.filter(
    issue => issue.verificationStatus !== "needs_primary_check" &&
             issue.preferenceStatus !== "needs_primary_verification"
  );
}

/**
 * استرجاع المسائل المعتمدة قطعيًا للاختبارات وبطاقات الحفظ «المعتمدة»
 * شرط صارم: توثيق أولي أصلي + نص صريح للشيخ المؤلف
 */
export function getCertifiedStudyIssues(): QiraatIssue[] {
  return issues.filter(
    issue => issue.verificationStatus === "verified_primary" &&
             issue.evidenceLevel === "explicit_author_statement" &&
             issue.preferenceStatus !== "needs_primary_verification"
  );
}

/**
 * استرجاع مسألة محددة برمزها
 */
export function getIssueById(id: string): QiraatIssue | undefined {
  return issues.find(issue => issue.id === id);
}

// ==========================================
// فهارس واستعلامات الكيانات الأساسية
// ==========================================

export function getReaderById(id: string): Reader | undefined {
  return readers.find(r => r.id === id);
}

export function getNarratorById(id: string): Narrator | undefined {
  return narrators.find(n => n.id === id);
}

export function getNarratorsByReader(readerId: string): Narrator[] {
  return narrators.filter(n => n.readerId === readerId);
}

export function getPathById(id: string): Path | undefined {
  return paths.find(p => p.id === id);
}

export function getPathsByNarrator(narratorId: string): Path[] {
  return paths.filter(p => p.narratorId === narratorId);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find(c => c.id === id);
}

export function getPoemVerseById(id: string): PoemVerse | undefined {
  return poemVerses.find(p => p.id === id);
}

export function getSourceById(id: string): Source | undefined {
  return sources.find(s => s.id === id);
}
