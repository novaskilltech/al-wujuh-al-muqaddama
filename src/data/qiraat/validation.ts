import { readers } from "./readers.js";
import { narrators } from "./narrators.js";
import { paths } from "./paths.js";
import { chapters } from "./chapters.js";
import { issues } from "./issues/index.js";
import { sources } from "./sources.js";
import { poemVerses } from "./poem-verses.js";

export interface ValidationReport {
  readersCount: number;
  narratorsCount: number;
  pathsCount: number;
  chaptersCount: number;
  issuesCount: number;
  sourcesCount: number;
  poemVersesCount: number;
  primaryVerifiedCount: number;
  secondaryVerifiedCount: number;
  needsVerificationCount: number;
  explicitAuthorCount: number;
  derivedMethodCount: number;
  secondarySummaryCount: number;
  pendingEvidenceCount: number;
  errors: string[];
  warnings: string[];
}

export function validateQiraatData(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Sets for existence and uniqueness checks
  const allIds = new Set<string>();
  const readerIds = new Set(readers.map(r => r.id));
  const narratorIds = new Set(narrators.map(n => n.id));
  const pathIds = new Set(paths.map(p => p.id));
  const chapterIds = new Set(chapters.map(c => c.id));
  const sourceIds = new Set(sources.map(s => s.id));
  const poemVerseIds = new Set(poemVerses.map(p => p.id));

  // 1. Check uniqueness of reader IDs
  for (const reader of readers) {
    if (allIds.has(reader.id)) {
      errors.push(`Duplicate ID found in readers: "${reader.id}"`);
    }
    allIds.add(reader.id);
  }

  // 2. Check narrators and reader linkage
  for (const narrator of narrators) {
    if (allIds.has(narrator.id)) {
      errors.push(`Duplicate ID found in narrators: "${narrator.id}"`);
    }
    allIds.add(narrator.id);

    if (!narrator.readerId || !readerIds.has(narrator.readerId)) {
      errors.push(`Narrator "${narrator.id}" has invalid or missing readerId "${narrator.readerId}".`);
    }

    // Specific requirement: "al-duri" must not be ambiguous
    if (narrator.id === "al-duri") {
      errors.push(`Ambiguous narrator ID "al-duri". Must use "al-duri-abu-amr" or "al-duri-al-kisai".`);
    }

    // Specific requirement: "khalaf" must not be ambiguous
    if (narrator.id === "khalaf") {
      errors.push(`Ambiguous narrator ID "khalaf". Must use "khalaf-an-hamza" or "khalaf10".`);
    }
  }

  // 3. Check paths (ṭuruq) and narrator linkage
  for (const path of paths) {
    if (allIds.has(path.id)) {
      errors.push(`Duplicate ID found in paths: "${path.id}"`);
    }
    allIds.add(path.id);

    if (!path.narratorId || !narratorIds.has(path.narratorId)) {
      errors.push(`Path "${path.id}" references invalid or missing narratorId "${path.narratorId}".`);
    }

    if (!path.sourceIds || path.sourceIds.length === 0) {
      errors.push(`Path "${path.id}" must reference at least one source in sourceIds.`);
    } else {
      for (const srcId of path.sourceIds) {
        if (!sourceIds.has(srcId)) {
          errors.push(`Path "${path.id}" references non-existent sourceId "${srcId}".`);
        }
      }
    }
  }

  // 4. Check chapters
  for (const chapter of chapters) {
    if (allIds.has(chapter.id)) {
      errors.push(`Duplicate ID found in chapters: "${chapter.id}"`);
    }
    allIds.add(chapter.id);
  }

  // 5. Check sources
  for (const source of sources) {
    if (allIds.has(source.id)) {
      errors.push(`Duplicate ID found in sources: "${source.id}"`);
    }
    allIds.add(source.id);
  }

  // 6. Check poem verses
  for (const verse of poemVerses) {
    if (allIds.has(verse.id)) {
      errors.push(`Duplicate ID found in poemVerses: "${verse.id}"`);
    }
    allIds.add(verse.id);

    if (verse.chapterIds) {
      for (const chId of verse.chapterIds) {
        if (!chapterIds.has(chId)) {
          errors.push(`Poem verse "${verse.id}" references non-existent chapterId "${chId}".`);
        }
      }
    }
  }

  let primaryVerified = 0;
  let secondaryVerified = 0;
  let needsVerification = 0;

  let explicitAuthorCount = 0;
  let derivedMethodCount = 0;
  let secondarySummaryCount = 0;
  let pendingEvidenceCount = 0;

  // 7. Check issues
  for (const issue of issues) {
    if (allIds.has(issue.id)) {
      errors.push(`Duplicate ID found in issues: "${issue.id}"`);
    }
    allIds.add(issue.id);

    // Chapter check
    if (!chapterIds.has(issue.chapterId)) {
      errors.push(`Issue "${issue.id}" references non-existent chapterId "${issue.chapterId}".`);
    }

    // Reader check if provided
    if (issue.readerId && !readerIds.has(issue.readerId)) {
      errors.push(`Issue "${issue.id}" references non-existent readerId "${issue.readerId}".`);
    }

    // Narrator check if provided
    if (issue.narratorId) {
      if (!narratorIds.has(issue.narratorId)) {
        errors.push(`Issue "${issue.id}" references non-existent narratorId "${issue.narratorId}".`);
      } else if (issue.readerId) {
        const narrator = narrators.find(n => n.id === issue.narratorId);
        if (narrator && narrator.readerId !== issue.readerId) {
          errors.push(`Issue "${issue.id}" has narrator "${issue.narratorId}" whose readerId "${narrator.readerId}" does not match issue.readerId "${issue.readerId}".`);
        }
      }
    }

    // Path check and narrator compatibility
    if (issue.pathId) {
      if (!pathIds.has(issue.pathId)) {
        errors.push(`Issue "${issue.id}" references non-existent pathId "${issue.pathId}".`);
      } else {
        const path = paths.find(p => p.id === issue.pathId);
        if (path) {
          if (!issue.narratorId) {
            errors.push(`Issue "${issue.id}" specifies pathId "${issue.pathId}" but is missing narratorId (expected "${path.narratorId}").`);
          } else if (path.narratorId !== issue.narratorId) {
            errors.push(`Issue "${issue.id}" has pathId "${issue.pathId}" belonging to narrator "${path.narratorId}", but issue.narratorId is "${issue.narratorId}".`);
          }
        }
      }
    }

    // Scope check
    if (!issue.scope) {
      errors.push(`Issue "${issue.id}" must have a valid scope defined.`);
    } else {
      if (issue.scope === "path" && !issue.pathId) {
        errors.push(`Issue "${issue.id}" has scope "path" but is missing pathId.`);
      }
      if (issue.scope === "ayah" && issue.surahNumber === undefined) {
        errors.push(`Issue "${issue.id}" has scope "ayah" but is missing canonical surahNumber.`);
      }
      if (issue.chapterId === "farsh-al-huruf" && issue.surahNumber === undefined) {
        errors.push(`Issue "${issue.id}" belongs to farsh-al-huruf but is missing canonical surahNumber.`);
      }
    }

    // Evidence level check
    if (!issue.evidenceLevel) {
      errors.push(`Issue "${issue.id}" must have an evidenceLevel defined.`);
    } else {
      if (issue.evidenceLevel === "explicit_author_statement") explicitAuthorCount++;
      else if (issue.evidenceLevel === "derived_from_author_method") derivedMethodCount++;
      else if (issue.evidenceLevel === "secondary_summary") secondarySummaryCount++;
      else if (issue.evidenceLevel === "pending") pendingEvidenceCount++;

      if (issue.verificationStatus === "needs_primary_check" && issue.evidenceLevel !== "pending") {
        errors.push(`Issue "${issue.id}" is marked "needs_primary_check" but has evidenceLevel "${issue.evidenceLevel}" instead of "pending".`);
      }
    }

    // Check validFaces
    if (!issue.validFaces || issue.validFaces.length === 0) {
      errors.push(`Issue "${issue.id}" must have at least one valid face in validFaces.`);
    }

    const faceIds = new Set(issue.validFaces.map(f => f.id));

    // Check preferredFaceId inside validFaces
    if (issue.preferredFaceId && !faceIds.has(issue.preferredFaceId)) {
      errors.push(`Issue "${issue.id}" has preferredFaceId "${issue.preferredFaceId}" which is NOT in validFaces.`);
    }

    // Hardened check: preferredFaceId can only exist for "preferred", "disputed", or "single"
    if (issue.preferenceStatus === "equal" && issue.preferredFaceId) {
      errors.push(`Issue "${issue.id}" is marked "equal" but has a preferredFaceId "${issue.preferredFaceId}". Equal faces must not force a preferred face.`);
    }
    if (issue.preferenceStatus === "needs_primary_verification" && issue.preferredFaceId) {
      errors.push(`Issue "${issue.id}" is marked "needs_primary_verification" but has a preferredFaceId "${issue.preferredFaceId}".`);
    }

    // Canonical surahNumber check (never rely only on surahNameAr)
    if (issue.surahNameAr && issue.surahNumber === undefined) {
      errors.push(`Issue "${issue.id}" specifies surahNameAr without canonical surahNumber. surahNumber must be the canonical reference.`);
    }
    if (issue.surahNumber !== undefined) {
      if (issue.surahNumber < 1 || issue.surahNumber > 114) {
        errors.push(`Issue "${issue.id}" has invalid surahNumber ${issue.surahNumber}. Must be between 1 and 114.`);
      }
    }

    // Check poemVerseIds
    if (issue.poemVerseIds) {
      for (const pvId of issue.poemVerseIds) {
        if (!poemVerseIds.has(pvId)) {
          errors.push(`Issue "${issue.id}" references non-existent poemVerseId "${pvId}".`);
        }
      }
    }

    // Check sourceIds
    if (!issue.sourceIds || issue.sourceIds.length === 0) {
      errors.push(`Issue "${issue.id}" must reference at least one source in sourceIds.`);
    } else {
      for (const srcId of issue.sourceIds) {
        if (!sourceIds.has(srcId)) {
          errors.push(`Issue "${issue.id}" references non-existent sourceId "${srcId}".`);
        }
      }
    }

    // Tally verification status
    if (issue.verificationStatus === "verified_primary") {
      primaryVerified++;
    } else if (issue.verificationStatus === "verified_secondary") {
      secondaryVerified++;
    } else if (issue.verificationStatus === "needs_primary_check") {
      needsVerification++;
    }
  }

  return {
    readersCount: readers.length,
    narratorsCount: narrators.length,
    pathsCount: paths.length,
    chaptersCount: chapters.length,
    issuesCount: issues.length,
    sourcesCount: sources.length,
    poemVersesCount: poemVerses.length,
    primaryVerifiedCount: primaryVerified,
    secondaryVerifiedCount: secondaryVerified,
    needsVerificationCount: needsVerification,
    explicitAuthorCount,
    derivedMethodCount,
    secondarySummaryCount,
    pendingEvidenceCount,
    errors,
    warnings
  };
}

// CLI runner
export function runCLI(): boolean {
  console.log("==================================================");
  console.log("🚀 تشغيل اختبارات التحقق الصارمة (Hardened Validation)");
  console.log("==================================================\n");

  const report = validateQiraatData();

  console.log(`Readers:              ${report.readersCount}`);
  console.log(`Narrators:            ${report.narratorsCount}`);
  console.log(`Paths (Turuq):        ${report.pathsCount}`);
  console.log(`Chapters:             ${report.chaptersCount}`);
  console.log(`Sources:              ${report.sourcesCount}`);
  console.log(`Poem Verses:          ${report.poemVersesCount}`);
  console.log(`Issues (Modular):     ${report.issuesCount}`);
  console.log(`--------------------------------------------------`);
  console.log(`Primary verified:     ${report.primaryVerifiedCount}`);
  console.log(`Secondary verified:   ${report.secondaryVerifiedCount}`);
  console.log(`Needs verification:   ${report.needsVerificationCount}`);
  console.log(`--------------------------------------------------`);
  console.log(`Evidence: Explicit:   ${report.explicitAuthorCount}`);
  console.log(`Evidence: Derived:    ${report.derivedMethodCount}`);
  console.log(`Evidence: Secondary:  ${report.secondarySummaryCount}`);
  console.log(`Evidence: Pending:    ${report.pendingEvidenceCount}`);
  console.log(`==================================================`);

  if (report.warnings.length > 0) {
    console.warn("\n⚠️ Warnings:");
    report.warnings.forEach(w => console.warn(` - ${w}`));
  }

  if (report.errors.length > 0) {
    console.error("\n❌ Validation Failed with Errors:");
    report.errors.forEach(e => console.error(` - ${e}`));
    console.error(`\nTotal Errors: ${report.errors.length}`);
    return false;
  }

  console.log("\n✅ نجحت جميع اختبارات التحقق من صحة البيانات بنسبة 100% (0 خطأ)!");
  return true;
}

// Self-execute if run directly
runCLI();
